import { create } from 'zustand';

interface ThemeState {
  theme: string;
  toggleTheme: () => void;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: document.documentElement.getAttribute('data-theme') || 'valentine',
  toggleTheme: () => {
    set((state) => {
      const newTheme = state.theme === 'valentine' ? 'night' : 'valentine';
      document.documentElement.setAttribute('data-theme', newTheme);
      return { theme: newTheme };
    });
  },
  setTheme: (newTheme: string) => {
    document.documentElement.setAttribute('data-theme', newTheme);
    set({ theme: newTheme });
  },
}));
