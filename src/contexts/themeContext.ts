import { createContext, ReactNode } from 'react'; // Import necessary dependencies
import { useLocalStorage } from '../hooks/useLocalStorage'; // Import custom hook for handling local storage

type ThemeContextData = {
  theme: string;
  themeToggle: () => void;
}

// Create a new context with the default value being an empty object
export const ThemeContext = createContext({} as ThemeContextData);

type ThemeContextProviderProps = {
  children: ReactNode;
}

// Create a new component to provide the theme context
export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  // Use the custom hook to get and set the theme in local storage
  const [theme, setTheme] = useLocalStorage('theme', 'dark-mode');

  // Create a function to toggle the theme
  function themeToggle() {
    if (theme === 'dark-mode') {
      setTheme('light-mode');
    } else {
      setTheme('dark-mode');
    }
  }

  // Render the context provider and pass in the current theme and the toggle function as context value
  return (
    <ThemeContext.Provider
      value={{ theme, themeToggle }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
