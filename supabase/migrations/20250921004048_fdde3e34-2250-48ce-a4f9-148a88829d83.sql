-- Insert admin role for the email danielmoreiradmg10@gmail.com
-- First get the user ID
DO $$
DECLARE
    admin_user_id UUID;
BEGIN
    -- Get user ID from auth.users
    SELECT id INTO admin_user_id 
    FROM auth.users 
    WHERE email = 'danielmoreiradmg10@gmail.com';
    
    -- Insert admin role if user exists
    IF admin_user_id IS NOT NULL THEN
        INSERT INTO public.user_roles (user_id, role)
        VALUES (admin_user_id, 'admin')
        ON CONFLICT (user_id, role) DO NOTHING;
    END IF;
END $$;