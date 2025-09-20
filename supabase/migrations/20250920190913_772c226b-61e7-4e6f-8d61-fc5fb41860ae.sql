-- Create admin account with specific email
INSERT INTO auth.users (
  id,
  instance_id,
  email,
  encrypted_password,
  email_confirmed_at,
  created_at,
  updated_at,
  role,
  aud,
  confirmation_token,
  recovery_token,
  email_change_token_new,
  email_change
)
VALUES (
  gen_random_uuid(),
  '00000000-0000-0000-0000-000000000000',
  'danielmoreiradmg10@gmail.com',
  crypt('Vale30Night80*', gen_salt('bf')),
  now(),
  now(),
  now(),
  'authenticated',
  'authenticated',
  '',
  '',
  '',
  ''
);

-- Create admin profile
INSERT INTO public.profiles (user_id, display_name, role, created_at)
SELECT 
  u.id,
  'Admin Daniel',
  'admin',
  now()
FROM auth.users u 
WHERE u.email = 'danielmoreiradmg10@gmail.com';