
-- ============================================================
-- Fix: groups_public_internal_fields
-- Hide internal/admin columns from anonymous visitors by using
-- column-level SELECT grants. Authenticated users keep full SELECT
-- so owners and admins still work through existing policies.
-- ============================================================
REVOKE SELECT ON public.groups FROM anon;
GRANT SELECT (
  id, name, slug, category, description, whatsapp_link, image_url,
  access_count, member_count, is_premium, is_premium_active,
  created_at, updated_at, status, user_id
) ON public.groups TO anon;

-- ============================================================
-- Fix: groups_update_user_owns_status
-- Prevent group owners from self-approving or granting premium.
-- Trigger blocks non-admins from changing sensitive columns.
-- ============================================================
CREATE OR REPLACE FUNCTION public.prevent_sensitive_group_updates()
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

  IF NEW.status              IS DISTINCT FROM OLD.status
  OR NEW.approved_by         IS DISTINCT FROM OLD.approved_by
  OR NEW.approved_at         IS DISTINCT FROM OLD.approved_at
  OR NEW.rejection_reason    IS DISTINCT FROM OLD.rejection_reason
  OR NEW.is_premium          IS DISTINCT FROM OLD.is_premium
  OR NEW.is_premium_active   IS DISTINCT FROM OLD.is_premium_active
  OR NEW.premium_expires_at  IS DISTINCT FROM OLD.premium_expires_at
  OR NEW.premium_activated_at IS DISTINCT FROM OLD.premium_activated_at
  OR NEW.premium_activated_by IS DISTINCT FROM OLD.premium_activated_by
  OR NEW.premium_payment_id  IS DISTINCT FROM OLD.premium_payment_id
  OR NEW.expires_at          IS DISTINCT FROM OLD.expires_at
  OR NEW.access_count        IS DISTINCT FROM OLD.access_count
  THEN
    RAISE EXCEPTION 'Cannot modify moderation, premium or metric fields. Contact an administrator.';
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS prevent_sensitive_group_updates_trigger ON public.groups;
CREATE TRIGGER prevent_sensitive_group_updates_trigger
BEFORE UPDATE ON public.groups
FOR EACH ROW
EXECUTE FUNCTION public.prevent_sensitive_group_updates();

-- ============================================================
-- Fix: group_accesses_missing_insert_policy
-- Block direct client INSERTs. The SECURITY DEFINER function
-- increment_group_access remains the only allowed write path.
-- ============================================================
DROP POLICY IF EXISTS "Deny direct inserts on group_accesses" ON public.group_accesses;
CREATE POLICY "Deny direct inserts on group_accesses"
ON public.group_accesses
FOR INSERT
TO anon, authenticated
WITH CHECK (false);

-- ============================================================
-- Fix: premium_payments_insert_no_status_check
-- Force user-initiated inserts to start as pending, unconfirmed,
-- and with the fixed price. Admins/service_role are unaffected.
-- ============================================================
DROP POLICY IF EXISTS "Users can insert their own premium payments" ON public.premium_payments;
CREATE POLICY "Users can insert their own premium payments"
ON public.premium_payments
FOR INSERT
TO authenticated
WITH CHECK (
  auth.uid() = user_id
  AND payment_status = 'pending'
  AND payment_confirmed_at IS NULL
  AND amount = 9.90
);

-- ============================================================
-- Fix: SUPA_anon / SUPA_authenticated_security_definer_function_executable
-- Revoke default PUBLIC EXECUTE on SECURITY DEFINER functions and
-- grant back only to the roles that must call them.
-- ============================================================

-- Internal (triggers, cron, admin-only): no client execution
REVOKE ALL ON FUNCTION public.delete_old_contacts()                       FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.handle_new_user()                           FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.prevent_sensitive_profile_updates()         FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.prevent_sensitive_group_updates()           FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.update_expired_premium_groups()             FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.contains_prohibited_content(text)           FROM PUBLIC, anon, authenticated;
REVOKE ALL ON FUNCTION public.activate_group_premium(uuid, text)          FROM PUBLIC, anon, authenticated;
GRANT  EXECUTE ON FUNCTION public.activate_group_premium(uuid, text)      TO service_role;

-- Client-callable (kept intentionally public — required for the app):
REVOKE ALL ON FUNCTION public.has_role(uuid, app_role)                    FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.has_role(uuid, app_role)                TO authenticated, service_role;

REVOKE ALL ON FUNCTION public.get_public_profile(uuid)                    FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.get_public_profile(uuid)                TO anon, authenticated, service_role;

REVOKE ALL ON FUNCTION public.increment_group_access(uuid, text, text)    FROM PUBLIC;
GRANT  EXECUTE ON FUNCTION public.increment_group_access(uuid, text, text) TO anon, authenticated, service_role;
