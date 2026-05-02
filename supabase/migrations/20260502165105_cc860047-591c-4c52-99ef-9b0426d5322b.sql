
-- 1. Fix permissive contact form policy (remove WITH CHECK true)
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contacts;
CREATE POLICY "Anyone can submit contact form"
ON public.contacts FOR INSERT TO public
WITH CHECK (
  length(name) BETWEEN 1 AND 200
  AND length(subject) BETWEEN 1 AND 200
  AND length(message) BETWEEN 1 AND 5000
  AND length(coalesce(email,'')) <= 320
  AND length(coalesce(whatsapp,'')) <= 50
);

-- 2. Stop public bucket listing: drop broad SELECT policies on storage.objects.
-- Files remain reachable via their public URLs because the buckets are marked public.
DROP POLICY IF EXISTS "Avatar images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Group images are publicly accessible" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view group images" ON storage.objects;

-- 3. Revoke EXECUTE from anon/authenticated on internal SECURITY DEFINER functions.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_expired_premium_groups() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.prevent_sensitive_profile_updates() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.delete_old_contacts() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.activate_group_premium(uuid, text) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.contains_prohibited_content(text) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM anon, public;
REVOKE EXECUTE ON FUNCTION public.auto_generate_slug() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.generate_slug(text) FROM anon, authenticated, public;

-- Keep callable from the website (anon + authenticated):
GRANT EXECUTE ON FUNCTION public.increment_group_access(uuid, text, text) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION public.get_public_profile(uuid) TO anon, authenticated;
-- has_role still needs to be callable inside RLS policies as the role of the calling user; allow authenticated.
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated;
