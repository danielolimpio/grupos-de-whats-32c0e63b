-- Fix profiles table to prevent users from modifying security-sensitive fields
-- This prevents privilege escalation where users could unblock themselves or modify roles

CREATE OR REPLACE FUNCTION public.prevent_sensitive_profile_updates()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Prevent users from modifying role field (deprecated, should use user_roles)
  IF NEW.role IS DISTINCT FROM OLD.role AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Cannot update role field. Use user_roles table for authorization.';
  END IF;
  
  -- Prevent users from modifying is_blocked status
  IF NEW.is_blocked IS DISTINCT FROM OLD.is_blocked AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Cannot update is_blocked field. Contact an administrator.';
  END IF;
  
  RETURN NEW;
END;
$$;

-- Create trigger to enforce field restrictions
DROP TRIGGER IF EXISTS check_profile_sensitive_updates ON public.profiles;
CREATE TRIGGER check_profile_sensitive_updates
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_sensitive_profile_updates();

-- Add data retention function for contacts table to auto-delete old entries
CREATE OR REPLACE FUNCTION public.delete_old_contacts()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Delete contacts older than 90 days
  DELETE FROM public.contacts
  WHERE created_at < NOW() - INTERVAL '90 days';
END;
$$;