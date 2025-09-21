import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';
import { supabase } from '@/integrations/supabase/client';

interface UserRole {
  role: 'admin' | 'moderator' | 'user';
}

export function useAdminAuth() {
  const { user, loading } = useAuth();
  const [userRole, setUserRole] = useState<UserRole | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      checkUserRole();
    } else {
      setUserRole(null);
      setIsLoading(false);
    }
  }, [user]);

  const checkUserRole = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('role')
        .eq('user_id', user.id)
        .single();

      if (error) {
        // User doesn't have a role, default to regular user
        setUserRole({ role: 'user' });
      } else {
        setUserRole(data);
      }
    } catch (error) {
      console.error('Error checking user role:', error);
      setUserRole({ role: 'user' });
    } finally {
      setIsLoading(false);
    }
  };

  const isAdmin = userRole?.role === 'admin';
  const isModerator = userRole?.role === 'moderator';
  const hasAdminAccess = isAdmin || isModerator;

  return {
    user,
    userRole,
    isAdmin,
    isModerator,
    hasAdminAccess,
    isLoading: loading || isLoading
  };
}