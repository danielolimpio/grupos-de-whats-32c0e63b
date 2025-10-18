-- Transfer all groups from danielmoreiradmg10@gmail.com to glendhadamaris@gmail.com
-- danielmoreiradmg10@gmail.com user_id: f39788fe-e39c-4a2c-92c7-b0b1e11613ed
-- glendhadamaris@gmail.com user_id: 939319c0-1b7d-4db4-8cb4-a51921cc19d2

-- Update all groups ownership
UPDATE public.groups 
SET user_id = '939319c0-1b7d-4db4-8cb4-a51921cc19d2'
WHERE user_id = 'f39788fe-e39c-4a2c-92c7-b0b1e11613ed';

-- Update favorites
UPDATE public.favorites 
SET user_id = '939319c0-1b7d-4db4-8cb4-a51921cc19d2'
WHERE user_id = 'f39788fe-e39c-4a2c-92c7-b0b1e11613ed';

-- Update premium_payments
UPDATE public.premium_payments 
SET user_id = '939319c0-1b7d-4db4-8cb4-a51921cc19d2'
WHERE user_id = 'f39788fe-e39c-4a2c-92c7-b0b1e11613ed';

-- Clean up user_roles for danielmoreiradmg10@gmail.com (keep only admin role)
DELETE FROM public.user_roles 
WHERE user_id = 'f39788fe-e39c-4a2c-92c7-b0b1e11613ed' 
AND role != 'admin';

-- Ensure danielmoreiradmg10@gmail.com has admin role
INSERT INTO public.user_roles (user_id, role) 
VALUES ('f39788fe-e39c-4a2c-92c7-b0b1e11613ed', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;

-- Update profile role for danielmoreiradmg10@gmail.com to admin
UPDATE public.profiles 
SET role = 'admin'
WHERE user_id = 'f39788fe-e39c-4a2c-92c7-b0b1e11613ed';

-- Ensure glendhadamaris@gmail.com has user role
INSERT INTO public.user_roles (user_id, role) 
VALUES ('939319c0-1b7d-4db4-8cb4-a51921cc19d2', 'user')
ON CONFLICT (user_id, role) DO NOTHING;

-- Update profile role for glendhadamaris@gmail.com to user
UPDATE public.profiles 
SET role = 'user'
WHERE user_id = '939319c0-1b7d-4db4-8cb4-a51921cc19d2';