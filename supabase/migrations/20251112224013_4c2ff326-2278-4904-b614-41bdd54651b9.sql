-- Fix inconsistent authorization model by updating all RLS policies to use has_role() function
-- This prevents privilege escalation attacks where users could modify their profile role

-- Drop existing policies that check profiles.role directly
DROP POLICY IF EXISTS "Admins can update all premium payments" ON public.premium_payments;
DROP POLICY IF EXISTS "Admins can view all premium payments" ON public.premium_payments;
DROP POLICY IF EXISTS "Admins can insert admin actions" ON public.admin_actions;
DROP POLICY IF EXISTS "Admins can view admin actions" ON public.admin_actions;
DROP POLICY IF EXISTS "Admins can view all contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admins can view all accesses" ON public.group_accesses;

-- Recreate policies using the secure has_role() function
CREATE POLICY "Admins can update all premium payments"
ON public.premium_payments
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can view all premium payments"
ON public.premium_payments
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.has_role(auth.uid(), 'moderator'::app_role));

CREATE POLICY "Admins can insert admin actions"
ON public.admin_actions
FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'::app_role) OR public.has_role(auth.uid(), 'moderator'::app_role));

CREATE POLICY "Admins can view admin actions"
ON public.admin_actions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.has_role(auth.uid(), 'moderator'::app_role));

CREATE POLICY "Admins can view all contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.has_role(auth.uid(), 'moderator'::app_role));

CREATE POLICY "Admins can view all accesses"
ON public.group_accesses
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'::app_role) OR public.has_role(auth.uid(), 'moderator'::app_role));

-- Update the profiles table policy to prevent users from updating their role field
-- Drop the old policy
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;

-- Recreate with explicit column restrictions to exclude role updates
-- Since we can't restrict specific columns in RLS, we'll need to handle this at the application level
-- For now, create a policy that allows updates but document that role should not be updatable
CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Add a comment to remind that role field should not be updated by users
COMMENT ON COLUMN public.profiles.role IS 'DEPRECATED: Do not use this field for authorization. Use user_roles table instead. This field should not be updated by users.';