
-- ============================================================
-- Fix: groups_insert_bypass
-- Force safe defaults on non-admin INSERTs into groups.
-- ============================================================
CREATE OR REPLACE FUNCTION public.enforce_group_insert_defaults()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  IF public.has_role(auth.uid(), 'admin'::app_role)
     OR public.has_role(auth.uid(), 'moderator'::app_role) THEN
    RETURN NEW;
  END IF;

  NEW.status                := 'pending';
  NEW.is_premium            := false;
  NEW.is_premium_active     := false;
  NEW.approved_by           := NULL;
  NEW.approved_at           := NULL;
  NEW.rejection_reason      := NULL;
  NEW.premium_expires_at    := NULL;
  NEW.premium_activated_at  := NULL;
  NEW.premium_activated_by  := NULL;
  NEW.premium_payment_id    := NULL;
  NEW.access_count          := 0;
  NEW.member_count          := 0;
  RETURN NEW;
END;
$$;

REVOKE ALL ON FUNCTION public.enforce_group_insert_defaults() FROM PUBLIC, anon, authenticated;

DROP TRIGGER IF EXISTS enforce_group_insert_defaults_trigger ON public.groups;
CREATE TRIGGER enforce_group_insert_defaults_trigger
BEFORE INSERT ON public.groups
FOR EACH ROW
EXECUTE FUNCTION public.enforce_group_insert_defaults();

-- ============================================================
-- Fix: SUPA_anon / SUPA_authenticated_security_definer_function_executable
-- Reduce the surface of SECURITY DEFINER functions callable via the API.
-- ============================================================

-- 1. has_role: switch to SECURITY INVOKER. user_roles already lets
--    authenticated users read their own rows, which is all this needs.
ALTER FUNCTION public.has_role(uuid, app_role) SECURITY INVOKER;

-- 2. get_public_profile: unused by the app — drop it.
DROP FUNCTION IF EXISTS public.get_public_profile(uuid);

-- 3. increment_group_access: move out of the exposed public API into a
--    private schema so it is no longer callable via PostgREST rpc.
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;

DROP FUNCTION IF EXISTS public.increment_group_access(uuid, text, text);

CREATE OR REPLACE FUNCTION private.increment_group_access(
  group_id uuid,
  user_ip  text DEFAULT NULL,
  user_agent text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.group_accesses (group_id, user_ip, user_agent)
  VALUES (group_id, NULL, left(coalesce(user_agent, ''), 500));

  UPDATE public.groups
  SET access_count = access_count + 1
  WHERE id = group_id;
END;
$$;

REVOKE ALL ON FUNCTION private.increment_group_access(uuid, text, text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION private.increment_group_access(uuid, text, text) TO service_role;

-- Public wrapper table policy: allow anonymous/authenticated to insert
-- access rows under strict constraints so the frontend can track directly
-- without a SECURITY DEFINER shim.
DROP POLICY IF EXISTS "Deny direct inserts on group_accesses" ON public.group_accesses;
CREATE POLICY "Anyone can log a group access"
ON public.group_accesses
FOR INSERT
TO anon, authenticated
WITH CHECK (
  user_ip IS NULL
  AND (user_agent IS NULL OR length(user_agent) <= 500)
  AND EXISTS (
    SELECT 1 FROM public.groups g
    WHERE g.id = group_accesses.group_id
      AND g.status = 'approved'
  )
);

GRANT INSERT (group_id, user_agent) ON public.group_accesses TO anon, authenticated;
