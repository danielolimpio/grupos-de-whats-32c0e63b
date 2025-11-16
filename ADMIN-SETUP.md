# Admin Setup Guide

## Creating the First Admin User

For security reasons, admin users cannot be created through the application interface. Admin privileges must be assigned manually through the Supabase dashboard.

### Steps to Create an Admin:

1. **Create a regular user account** through the normal signup process at `/auth`

2. **Get the user's UUID** from Supabase:
   - Go to [Supabase Authentication](https://supabase.com/dashboard/project/fagbmezuyjmvuhzelomu/auth/users)
   - Find the user in the users list
   - Copy their UUID

3. **Assign admin role** via SQL Editor:
   - Go to [Supabase SQL Editor](https://supabase.com/dashboard/project/fagbmezuyjmvuhzelomu/sql/new)
   - Run the following SQL command:
   ```sql
   INSERT INTO public.user_roles (user_id, role)
   VALUES ('USER-UUID-HERE', 'admin');
   ```
   - Replace `USER-UUID-HERE` with the actual user UUID

4. **Verify admin access**:
   - The user can now log in and access `/admin`
   - They will have full administrative privileges

## Creating Additional Admins

Once you have at least one admin user, they can manage other user roles through the admin dashboard at `/admin/users`.

## Available Roles

- **admin**: Full administrative access
- **moderator**: Limited administrative access (can approve/reject groups, manage contacts)
- **user**: Regular user access (default)

## Security Notes

⚠️ **Important**: Never create admin users through client-side code or public endpoints. This would allow privilege escalation attacks.

✅ **Best Practice**: Always assign admin roles manually through:
- Supabase SQL Editor (recommended for first admin)
- Admin dashboard (for subsequent admins)
- Secure backend processes with proper authentication

## Troubleshooting

If a user cannot access the admin panel:
1. Verify their role in the `user_roles` table
2. Check that RLS policies are enabled
3. Ensure the `has_role()` function exists and is working
4. Clear browser cache and try again
