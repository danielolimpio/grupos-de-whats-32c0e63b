-- Remove profile for danielmoreiradmg10@gmail.com (keep only as admin in user_roles)
DELETE FROM public.profiles 
WHERE user_id = 'f39788fe-e39c-4a2c-92c7-b0b1e11613ed';

-- Add blocked column to profiles table for user management
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS is_blocked boolean DEFAULT false;

-- Add comment to explain the column
COMMENT ON COLUMN public.profiles.is_blocked IS 'Indicates if user is blocked from creating new groups';

-- Create index for better performance when filtering blocked users
CREATE INDEX IF NOT EXISTS idx_profiles_is_blocked ON public.profiles(is_blocked);

-- Update RLS policy to prevent blocked users from inserting groups
CREATE POLICY "Blocked users cannot insert groups"
ON public.groups
FOR INSERT
TO authenticated
WITH CHECK (
  NOT EXISTS (
    SELECT 1 FROM public.profiles 
    WHERE user_id = auth.uid() 
    AND is_blocked = true
  )
);