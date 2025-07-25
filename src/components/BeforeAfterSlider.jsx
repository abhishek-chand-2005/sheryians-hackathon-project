// src/components/BeforeAfterSlider.jsx
import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const beforeAfterData = [
  {
    id: 1,
    title: "Acquisition 1: Single Family Home",
    afterImage: "https://framerusercontent.com/images/fG8N9bKFJJniPY5LgVUPVQaDI6I.png?scale-down-to=1024",
    beforeImage: "https://framerusercontent.com/images/2c2YSTgZHquoTuejVrk9BDgC1w.jpg?scale-down-to=1024",
    purchasePrice: "$150,000",
    renovation: "$45,000",
    marketValue: "$260,000",
    wedge: "$65,000"
  },
  {
    id: 2,
    title: "Acquisition 2: Duplex Upgrade",
    afterImage: "https://framerusercontent.com/images/zE1xUnezoBdywMS6lBajr6EbPN8.png?scale-down-to=2048",
    beforeImage: "https://framerusercontent.com/images/g33vnDHmYUCXEU29Q9yiXhzSBQ.jpg?scale-down-to=2048",
    purchasePrice: "$475,000",
    renovation: "$66,709",
    marketValue: "$625,000",
    wedge: "$83,291"
  },
  {
    id: 3,
    title: "Acquisition 3: Townhouse Flip",
    afterImage: "https://framerusercontent.com/images/Vs9qkdK1udDMQhIAi0fKmgUP0.png?scale-down-to=2048",
    beforeImage: "https://framerusercontent.com/images/ROE9YfR5OaUs8VxXvT8k8p5MIaU.jpg?scale-down-to=2048",
    purchasePrice: "$515,000",
    renovation: "$80,309",
    marketValue: "$686,000",
    wedge: "$90,691"
  }
];

function ComparisonSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleTouchStart = () => setIsDragging(true);
  const handleTouchMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-80 overflow-hidden rounded-2xl cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <img
        src={beforeImage}
        alt="Before renovation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={afterImage}
          alt="After renovation"
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white dark:bg-purple-400 shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white dark:bg-purple-200 rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-600 dark:bg-purple-600 rounded-full"></div>
        </div>
      </div>

      <div className="absolute top-4 left-4 bg-black/70 dark:bg-white/30 text-white dark:text-white px-3 py-1 rounded-full text-sm font-semibold">
        Before
      </div>
      <div className="absolute top-4 right-4 bg-black/70 dark:bg-white/30 text-white dark:text-white px-3 py-1 rounded-full text-sm font-semibold">
        After
      </div>
    </div>
  );
}

export function BeforeAfterSlider() {
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % beforeAfterData.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
  };

  const currentData = beforeAfterData[currentSlide];

  return (
    <section id="before-after" className="py-20 bg-white dark:bg-[#0f0f1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Our Transformations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how we turn distressed properties into profitable investments
          </p>
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {beforeAfterData.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <ComparisonSlider
                      beforeImage={item.beforeImage}
                      afterImage={item.afterImage}
                    />

                    <div className="space-y-6">
                      <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                        {item.title}
                      </h3>

                      <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 space-y-4 shadow-inner">
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600 dark:text-gray-300">Purchase Price:</span>
                          <span className="text-xl font-bold text-gray-800 dark:text-white">{item.purchasePrice}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600 dark:text-gray-300">Renovation:</span>
                          <span className="text-xl font-bold text-gray-800 dark:text-white">{item.renovation}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-600 dark:text-gray-300">Estimated Market Value:</span>
                          <span className="text-xl font-bold text-gray-800 dark:text-white">{item.marketValue}</span>
                        </div>
                        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                          <div className="flex justify-between">
                            <span className="font-bold text-lg text-gray-800 dark:text-white">Wedge:</span>
                            <span className="text-2xl font-bold text-green-600">{item.wedge}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700/80 backdrop-blur-md p-3 rounded-full shadow-lg group"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-white group-hover:text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700/80 backdrop-blur-md p-3 rounded-full shadow-lg group"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-white group-hover:text-blue-600" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 dark:bg-gray-500 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
