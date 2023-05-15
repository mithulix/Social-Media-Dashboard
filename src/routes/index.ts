import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

export function Router() {
  return (
    <BrowserRouter>
      {/* Declare all your routes inside a `Routes` component */}
      <Routes>
        {/* Each `Route` component defines a mapping between a URL and a component */}
        {/* Here, we are mapping the root URL to the `Dashboard` component */}
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
