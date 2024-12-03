import { create } from 'zustand';
import { User } from '@supabase/supabase-js';

interface AuthState {
  user: User | null;
  subscription: any | null;
  setUser: (user: User | null) => void;
  setSubscription: (subscription: any) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  subscription: null,
  setUser: (user) => set({ user }),
  setSubscription: (subscription) => set({ subscription }),
}));