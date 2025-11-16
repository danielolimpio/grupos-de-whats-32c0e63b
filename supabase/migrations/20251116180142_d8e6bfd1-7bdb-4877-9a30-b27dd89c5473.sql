-- Add RLS policies to allow admins to delete groups and related data

-- Allow admins to delete any group
CREATE POLICY "Admins can delete any group"
ON public.groups
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role IN ('admin', 'moderator')
  )
);

-- Allow admins to delete any group_accesses
CREATE POLICY "Admins can delete group accesses"
ON public.group_accesses
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role IN ('admin', 'moderator')
  )
);

-- Allow admins to delete admin_actions
CREATE POLICY "Admins can delete admin actions"
ON public.admin_actions
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role IN ('admin', 'moderator')
  )
);

-- Allow admins to delete premium_payments
CREATE POLICY "Admins can delete premium payments"
ON public.premium_payments
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role IN ('admin', 'moderator')
  )
);

-- Allow admins to delete any favorites
CREATE POLICY "Admins can delete any favorites"
ON public.favorites
FOR DELETE
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_roles.user_id = auth.uid()
    AND user_roles.role IN ('admin', 'moderator')
  )
);