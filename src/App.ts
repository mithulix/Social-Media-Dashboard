// Import the useTheme hook from the hooks folder
import useTheme from './hooks/useTheme';
// Import the Router component from the routes folder
import { Router } from './routes';

// Import the SCSS stylesheets for the app
import './styles/app.scss';
import './styles/global.scss';

// Define the App component
function App() {
  // Call the useTheme hook to retrieve the current theme
  const { theme } = useTheme();

  // Return the app's JSX
  return (
    <div id="container-primary" className={theme}>
      <div id="header-top" />
      <Router />
    </div>
  );
}

// Export the App component as the default export of this module
export default App;
