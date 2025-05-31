import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface ThemeState {
  theme: string;
  toggleTheme: () => void;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      // Inicialmente, podría no necesitar leer localStorage aquí, porque `persist` se encarga
      theme:
        document.documentElement.getAttribute('data-theme') ||
        'dracula',

      toggleTheme: () => {
        const current = get().theme;
        const newTheme = current === 'valentine' ? 'dracula' : 'valentine';
        document.documentElement.setAttribute('data-theme', newTheme);
        set({ theme: newTheme });
      },
      setTheme: (newTheme: string) => {
        document.documentElement.setAttribute('data-theme', newTheme);
        set({ theme: newTheme });
      },
    }),
    {
      name: 'theme-storage', // clave en localStorage
      storage: createJSONStorage(() => localStorage), // usa el helper para persistencia JSON
      // opcional: si quisieras usar sessionStorage en vez de localStorage:
      // storage: createJSONStorage(() => sessionStorage),
    }
  )
);
