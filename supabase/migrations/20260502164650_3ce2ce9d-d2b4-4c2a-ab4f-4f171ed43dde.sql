
-- Fix mutable search_path on functions
ALTER FUNCTION public.generate_slug(text) SET search_path = public;
ALTER FUNCTION public.auto_generate_slug() SET search_path = public;

-- Tighten user_roles: explicit policies preventing non-admin writes
DROP POLICY IF EXISTS "Admins can manage roles" ON public.user_roles;

CREATE POLICY "Admins can insert roles"
ON public.user_roles FOR INSERT TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update roles"
ON public.user_roles FOR UPDATE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can delete roles"
ON public.user_roles FOR DELETE TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role));

-- Restrictive policy: only admins can write to user_roles, ever
CREATE POLICY "Only admins can write user_roles"
ON public.user_roles AS RESTRICTIVE
FOR ALL TO public
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

-- Harden increment_group_access: ignore client-supplied IP, only use UA hash optionally
CREATE OR REPLACE FUNCTION public.increment_group_access(group_id uuid, user_ip text DEFAULT NULL, user_agent text DEFAULT NULL)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Do NOT trust client-supplied IP. Always store NULL for user_ip to prevent data poisoning.
  INSERT INTO public.group_accesses (group_id, user_ip, user_agent)
  VALUES (group_id, NULL, left(coalesce(user_agent, ''), 500));

  UPDATE public.groups
  SET access_count = access_count + 1
  WHERE id = group_id;
END;
$$;

-- Block direct client INSERTs into group_accesses (force use of SECURITY DEFINER function)
DROP POLICY IF EXISTS "Anyone can insert group accesses" ON public.group_accesses;
