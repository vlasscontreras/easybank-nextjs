import { createContext, useContext, useEffect, useState } from 'react';

export const defaultTheme: string = 'light';

interface Props {
  children: React.ReactNode;
}

interface ContextType {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Custom hook to interact with the theme.
 */
export const useTheme = () => useContext(ThemeContext);

/**
 * The theme context.
 */
export const ThemeContext = createContext<ContextType>({
  theme: defaultTheme,
  setTheme: () => {},
});

/**
 * The theme context provider.
 */
export const ThemeProvider = ({ children }: Props) => {
	const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    let theme = defaultTheme;

    // Get the stored theme.
    if (localStorage.getItem('theme')) {
      theme = localStorage.getItem('theme') as string;
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) { // Use prefers-color-scheme: dark if available.
      theme = 'dark';
    }

    setTheme(theme);

    // Detect schema changes.
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      setTheme(e.matches ? 'dark' : 'light');
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
}
