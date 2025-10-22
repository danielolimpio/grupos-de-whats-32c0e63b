-- Fix admin UPDATE policy for groups table
-- The current policy might not be working correctly

-- Drop the existing admin update policy
DROP POLICY IF EXISTS "Admins can update all groups" ON public.groups;

-- Create a comprehensive UPDATE policy for admins using user_roles
CREATE POLICY "Admins can update all groups with user_roles"
ON public.groups
FOR UPDATE
USING (
  EXISTS (
    SELECT 1
    FROM user_roles
    WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'moderator')
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM user_roles
    WHERE user_roles.user_id = auth.uid()
      AND user_roles.role IN ('admin', 'moderator')
  )
);