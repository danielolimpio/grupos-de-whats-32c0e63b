-- Remove the problematic public_profiles view that caused security warning
DROP VIEW IF EXISTS public.public_profiles;

-- Remove the previous overly permissive policy that was still causing issues
DROP POLICY IF EXISTS "Public can view limited profile info" ON public.profiles;

-- Keep only the secure policies:
-- 1. Users can view their own profile (already exists)
-- 2. Admins can view all profiles (already exists)

-- The remaining policies are:
-- - "Users can view own profile" - allows users to see their own data
-- - "Admins can view all profiles" - allows admins/moderators to see all profiles
-- - "Users can insert their own profile" - allows profile creation
-- - "Users can update their own profile" - allows profile updates

-- This ensures that:
-- 1. Regular users can only see their own profile data (including sensitive phone numbers)
-- 2. Admins/moderators can see all profiles for administrative purposes
-- 3. No public access to sensitive data like phone numbers
-- 4. Display names and avatars can still be accessed by admins when needed for public display