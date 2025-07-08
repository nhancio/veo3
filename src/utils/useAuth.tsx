import { useEffect, useState, useCallback, createContext, useContext } from 'react';
import React from 'react';
import supabase from './supabase';

export type Profile = {
  user_id: string;
  full_name: string | null;
  avatar_url: string | null;
  credit_balance: number;
};

interface AuthContextType {
  user: any;
  profile: Profile | null;
  loading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  // Login with Google
  const login = useCallback(async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  }, []);

  // Logout
  const logout = useCallback(async () => {
    await supabase.auth.signOut();
    setUser(null);
    setProfile(null);
  }, []);

  // Fetch or create profile
  const refreshProfile = useCallback(async () => {
    if (!user) return;
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', user.id)
      .single();
    if (error && error.code === 'PGRST116') {
      // No profile, create one
      const { data: newProfile } = await supabase
        .from('profiles')
        .insert({
          user_id: user.id,
          full_name: user.user_metadata?.full_name || user.email,
          avatar_url: user.user_metadata?.avatar_url || null,
          credit_balance: 50, // default credits
        })
        .select()
        .single();
      setProfile(newProfile);
    } else {
      setProfile(data);
    }
    setLoading(false);
  }, [user]);

  // Listen for auth changes
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user || null);
    });
    // Initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // Fetch profile when user changes
  useEffect(() => {
    if (user) {
      refreshProfile();
    } else {
      setProfile(null);
      setLoading(false);
    }
  }, [user, refreshProfile]);

  return (
    <AuthContext.Provider value={{ user, profile, loading, login, logout, refreshProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
} 