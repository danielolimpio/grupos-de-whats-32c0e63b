-- 1. Fix: Blocked users bypass - convert to RESTRICTIVE policy
DROP POLICY IF EXISTS "Blocked users cannot insert groups" ON public.groups;

CREATE POLICY "Blocked users cannot insert groups" ON public.groups
  AS RESTRICTIVE
  FOR INSERT TO authenticated
  WITH CHECK (
    NOT EXISTS (
      SELECT 1 FROM public.profiles
      WHERE profiles.user_id = auth.uid()
        AND profiles.is_blocked = true
    )
  );

-- 2. Fix: Remove old unrestricted storage policies that bypass ownership checks
DROP POLICY IF EXISTS "Users can upload group images" ON storage.objects;
DROP POLICY IF EXISTS "Users can update group images" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete group images" ON storage.objects;

-- 3. Fix: Group owners should not see visitor IP/user_agent
DROP POLICY IF EXISTS "Users can view accesses for their groups" ON public.group_accesses;

-- 4. Fix: Validate group_accesses inserts reference real approved groups
DROP POLICY IF EXISTS "Anyone can insert group accesses" ON public.group_accesses;

CREATE POLICY "Anyone can insert group accesses" ON public.group_accesses
  FOR INSERT TO public
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.groups
      WHERE groups.id = group_accesses.group_id
        AND groups.status = 'approved'
    )
  );