import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Phone,
  Instagram,
  Youtube,
  Heart,
  ArrowUp,
} from 'lucide-react';

export function Footer() {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleLike = () => {
    setLiked(!liked);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:grid md:grid-cols-3 gap-y-12 gap-x-12 items-start">
          {/* Left - Contact */}
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <a
              href="mailto:info@househack.com"
              className="flex items-center justify-center md:justify-start space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors group"
            >
              <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>info@househack.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center justify-center md:justify-start space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors group"
            >
              <Phone className="h-5 w-5 group-hover:scale-110 transition-transform" />
              <span>+1 (234) 567-8900</span>
            </a>
          </div>

          {/* Center - Navigation */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <button
                onClick={scrollToTop}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => navigate('/about')}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToTop()} // Assuming Properties are on home page
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Properties
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => navigate('/faq')}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors"
              >
                FAQ
              </button>
            </nav>
          </div>

          {/* Right - Social */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors group"
              >
                <Instagram className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors group"
              >
                <Youtube className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-all duration-300 ${
                liked
                  ? 'text-red-500 scale-110'
                  : 'text-gray-500 dark:text-gray-300 hover:text-red-400'
              }`}
            >
              <Heart
                className={`h-5 w-5 transition-all duration-300 ${
                  liked ? 'fill-current animate-pulse' : ''
                }`}
              />
              <span className="text-sm">
                {liked ? 'Thanks!' : 'Like our work?'}
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-1">HouseHack</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2025 HouseHack. All rights reserved. | Diversify to real estate.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors group"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform text-white" />
          </button>
        </div>
      </div>
    </footer>
  );
}
