import { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

// This custom hook provides access to the theme and themeToggle function
const useTheme = () => {
  // Use the useContext hook to get the current ThemeContext
  const context = useContext(ThemeContext);

  // If the context is undefined (i.e. it hasn't been provided by a parent component),
  // throw an error
  if (!context) {
    throw new Error('Nenhum contexto encontrado');
  }

  // Otherwise, return the context object (which includes the theme and themeToggle function)
  return context;
}

// Export the custom hook as the default export of this module
export default useTheme;
