
-- 1. Attach the existing trigger function to the profiles table
CREATE TRIGGER prevent_sensitive_profile_updates_trigger
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.prevent_sensitive_profile_updates();

-- 2. Also prevent points self-modification (update the function)
CREATE OR REPLACE FUNCTION public.prevent_sensitive_profile_updates()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY DEFINER
  SET search_path TO 'public'
AS $function$
BEGIN
  -- Prevent users from modifying role field
  IF NEW.role IS DISTINCT FROM OLD.role AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Cannot update role field. Use user_roles table for authorization.';
  END IF;
  
  -- Prevent users from modifying is_blocked status
  IF NEW.is_blocked IS DISTINCT FROM OLD.is_blocked AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Cannot update is_blocked field. Contact an administrator.';
  END IF;
  
  -- Prevent users from modifying points
  IF NEW.points IS DISTINCT FROM OLD.points AND NOT public.has_role(auth.uid(), 'admin'::app_role) THEN
    RAISE EXCEPTION 'Cannot update points field.';
  END IF;
  
  RETURN NEW;
END;
$function$;

-- 3. Fix group-images storage: drop permissive policies and add ownership-based ones
-- Drop existing overly permissive policies
DROP POLICY IF EXISTS "Allow authenticated users to upload group images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to update group images" ON storage.objects;
DROP POLICY IF EXISTS "Allow authenticated users to delete group images" ON storage.objects;
DROP POLICY IF EXISTS "Allow public to view group images" ON storage.objects;

-- Recreate SELECT policy (public read is fine for a public bucket)
CREATE POLICY "Anyone can view group images"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'group-images');

-- INSERT: only group owner or admin can upload (file named as group_id.jpg)
CREATE POLICY "Group owners can upload images"
  ON storage.objects FOR INSERT
  WITH CHECK (
    bucket_id = 'group-images'
    AND auth.uid() IS NOT NULL
    AND (
      EXISTS (
        SELECT 1 FROM public.groups
        WHERE groups.id::text = SPLIT_PART(storage.filename(name), '.', 1)
        AND groups.user_id = auth.uid()
      )
      OR public.has_role(auth.uid(), 'admin'::app_role)
      OR public.has_role(auth.uid(), 'moderator'::app_role)
    )
  );

-- UPDATE: only group owner or admin
CREATE POLICY "Group owners can update images"
  ON storage.objects FOR UPDATE
  USING (
    bucket_id = 'group-images'
    AND auth.uid() IS NOT NULL
    AND (
      EXISTS (
        SELECT 1 FROM public.groups
        WHERE groups.id::text = SPLIT_PART(storage.filename(name), '.', 1)
        AND groups.user_id = auth.uid()
      )
      OR public.has_role(auth.uid(), 'admin'::app_role)
      OR public.has_role(auth.uid(), 'moderator'::app_role)
    )
  );

-- DELETE: only group owner or admin
CREATE POLICY "Group owners can delete images"
  ON storage.objects FOR DELETE
  USING (
    bucket_id = 'group-images'
    AND auth.uid() IS NOT NULL
    AND (
      EXISTS (
        SELECT 1 FROM public.groups
        WHERE groups.id::text = SPLIT_PART(storage.filename(name), '.', 1)
        AND groups.user_id = auth.uid()
      )
      OR public.has_role(auth.uid(), 'admin'::app_role)
      OR public.has_role(auth.uid(), 'moderator'::app_role)
    )
  );
