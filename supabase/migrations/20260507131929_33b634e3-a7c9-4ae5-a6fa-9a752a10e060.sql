
-- 1) Defense-in-depth: restrict updates to sensitive profile columns at column level
REVOKE UPDATE (role, is_blocked, points) ON public.profiles FROM authenticated, anon;

-- 2) Storage: add SELECT policies so listing/enumeration is restricted to owners/admins.
-- Public URL downloads still work because public buckets bypass RLS for object access via public URL.
CREATE POLICY "Avatars: owners and admins can list"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'avatars'
  AND (
    (auth.uid())::text = (storage.foldername(name))[1]
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.has_role(auth.uid(), 'moderator'::app_role)
  )
);

CREATE POLICY "Group images: owners and admins can list"
ON storage.objects FOR SELECT
TO authenticated
USING (
  bucket_id = 'group-images'
  AND (
    EXISTS (
      SELECT 1 FROM public.groups
      WHERE (groups.id)::text = split_part(storage.filename(objects.name), '.', 1)
        AND groups.user_id = auth.uid()
    )
    OR public.has_role(auth.uid(), 'admin'::app_role)
    OR public.has_role(auth.uid(), 'moderator'::app_role)
  )
);

-- 3) Revoke EXECUTE on SECURITY DEFINER functions that should not be callable by clients.
REVOKE EXECUTE ON FUNCTION public.activate_group_premium(uuid, text) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.contains_prohibited_content(text) FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.delete_old_contacts() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.prevent_sensitive_profile_updates() FROM anon, authenticated, public;
REVOKE EXECUTE ON FUNCTION public.update_expired_premium_groups() FROM anon, authenticated, public;
