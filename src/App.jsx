import { Routes, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { PropertyListings } from './components/PropertyListings';
import { PropertyDetail } from './components/PropertyDetail';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { Footer } from './components/Footer';
import AboutKevin from './pages/AboutKevin';
import Contact from './pages/Contact';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { useTheme } from './context/ThemeContext';
import { Sun, Moon } from 'lucide-react';
import { useUser } from './context/UserContext';
import { useNavigate } from 'react-router-dom';

function App() {
  const { theme, setTheme } = useTheme();
  const { user } = useUser();
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      
      {/* Global Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50 flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-2 bg-white/20 dark:bg-black/30 backdrop-blur p-2 rounded-full"
        >
          {theme === 'light' ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-purple-400" />
          )}
          <span className="text-sm">{theme === 'light' ? 'Light' : 'Dark'}</span>
        </button>

        {user ? (
          <div className="text-white font-semibold">Hi, {user.name}</div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className="bg-white/20 dark:bg-black/30 px-4 py-2 rounded-xl text-sm"
          >
            Login / Signup
          </button>
        )}
      </div>

      {/* All Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <PropertyListings />
              <BeforeAfterSlider />
              <Footer />
              <PropertyDetail />
            </>
          }
        />
        <Route path="/about" element={<AboutKevin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </div>
  );
}

export default App;
