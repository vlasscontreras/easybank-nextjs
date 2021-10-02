import { createContext, useContext, useEffect, useState } from 'react';

export const defaultTheme = 'light';

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
    setTheme(localStorage.getItem('theme') || defaultTheme);
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
