// src/components/Hero.jsx
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';
import dayImage from '../assets/1.jpg';
import nightImage from '../assets/2.jpg';
import { Play } from 'lucide-react';

const words = ['Buy', 'Renovate', 'Manage'];

function AnimatedHeading() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-4xl sm:text-6xl md:text-7xl text-white font-bold mb-6 text-center flex flex-wrap justify-center items-center gap-4">
      {/* Static "We" - fade in once */}
      <motion.span
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        We
      </motion.span>

      {/* Looping animated words */}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }}
          className="ml-2"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        
      </motion.span>
    </div>
  );
}

export function Hero() {
  const { theme } = useTheme();
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${id}`);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        <motion.img
          src={dayImage}
          alt="Day"
          className="w-full h-full object-cover absolute inset-0"
          animate={{ opacity: theme === 'light' ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: theme === 'dark' ? 1 : 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={nightImage}
            alt="Night"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-purple-600/20" />
        </motion.div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Navigation */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-20 p-4 md:p-8"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex justify-between items-center flex-wrap">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-4 md:px-6 py-2 md:py-4 flex items-center space-x-4 md:space-x-8">
            <h1 className="text-white text-xl md:text-2xl font-bold">HouseHack</h1>
            <nav className="hidden md:flex items-center space-x-4 text-sm md:text-base">
              <button onClick={() => scrollToSection('properties')} className="text-white/90 hover:text-white">Buy / Rent</button>
              <button onClick={() => scrollToSection('faq')} className="text-white/90 hover:text-white">FAQ</button>
              <button onClick={() => scrollToSection('before-after')} className="text-white/90 hover:text-white">Invest</button>
              <button onClick={() => scrollToSection('about')} className="text-white/90 hover:text-white">About Kevin</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/90 hover:text-white">Contact</button>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl">
          <AnimatedHeading />

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Diversify to real estate. We'll handle the tenants and toilets.
          </motion.p>

          <motion.button
            className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-6 py-3 rounded-2xl flex items-center space-x-3 mx-auto hover:bg-white/20 transition"
            onClick={() =>
              window.open(
                'https://www.youtube.com/live/IHgoLmLB-p4?si=iXAADfrJCG1AHbHR',
                '_blank'
              )
            }
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="h-5 w-5" />
            <span>Watch our Q1 2025 Earnings Call</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
