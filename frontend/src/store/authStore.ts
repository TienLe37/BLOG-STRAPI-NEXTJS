// stores/authStore.ts
import { create } from 'zustand';

type User = {
  id: number;
  username: string;
  email: string;
  phone?: string;
  address?: string;
  avatar?: any;
};

type AuthState = {
  user: User | null;
  token: string | null;
  setAuth: (user: User, token: string) => void;
  updateUser: (user: Partial<User>) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: null,

  setAuth: (user, token) => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    set({ user, token });
  },

  updateUser: (updatedFields) =>
  set((state): Partial<AuthState> => {
    if (!state.user) return state;
    const updatedUser = { ...state.user, ...updatedFields };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    return { user: updatedUser };
  }),

  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    set({ user: null, token: null });
  },
}));
