import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ThemeContextProvider } from './contexts/themeContext';

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
