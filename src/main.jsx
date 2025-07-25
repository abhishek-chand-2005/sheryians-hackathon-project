import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ThemeProvider } from './context/ThemeContext';
import { PropertyProvider } from './context/PropertyContext';
import { UserProvider } from './context/UserContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <PropertyProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </PropertyProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
