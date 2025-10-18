// Separate Supabase client exclusively for admin authentication
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';
import { adminStorage } from '@/lib/admin-storage';

const SUPABASE_URL = "https://fagbmezuyjmvuhzelomu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhZ2JtZXp1eWptdnVoemVsb211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgxMzM0NTQsImV4cCI6MjA3MzcwOTQ1NH0.FrEqG1pR4s4n7uUwk2deLIVzdIIJ0kOAuQf9QVQN-G4";

// Separate admin client instance
export const supabaseAdmin = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: adminStorage as any,
    persistSession: true,
    autoRefreshToken: true,
    storageKey: 'admin-auth-token', // Different storage key from regular users
  }
});
