import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext'; // or your own logic
import dayImage from '../assets/1.jpg';
import nightImage from '../assets/2.jpg';

export function Hero () {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const phrases = ['We buy', 'We renovate', 'We manage'];

  // Animate heading
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Scroll to category (Buy/Rent)
  const scrollToCategory = (categoryId) => {
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
    // Optionally update context if using category state
  };

  const isDark = theme === 'dark';

  return (
    <section className={`w-full py-20 transition-all duration-500 ${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          
          {/* Text Section */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {phrases[index]}
            </h1>
            <p className="text-base sm:text-lg md:text-xl">
              Diversify to real estate. We'll handle the tenants and toilets.
            </p>

            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-4 flex-wrap pt-2">
              <button
                onClick={() => scrollToCategory('buy-sell')}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Buy
              </button>
              <button
                onClick={() => scrollToCategory('rent')}
                className="bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
              >
                Rent
              </button>
              <button
                onClick={() => navigate('/about-kevin')}
                className="bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                About Kevin
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-gray-100 dark:bg-gray-800 px-6 py-2 rounded-xl font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Image + Theme Toggle */}
          <div className="relative w-full max-w-sm mx-auto flex-1">
            <img
              src={isDark ? nightImage : dayImage}
              alt="Theme Background"
              className="rounded-2xl w-full h-auto shadow-xl transition-all duration-500"
            />
            <button
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full"
            >
              {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
