import { useState } from 'react';
import { MapPin, Square, ArrowRight } from 'lucide-react';
import { useProperty } from '../context/PropertyContext';

export function PropertyCard({ property }) {
  const [isHovered, setIsHovered] = useState(false);
  const { setSelectedProperty } = useProperty();

  const handleMoreClick = () => {
    setSelectedProperty(property);
  };

  return (
    <div 
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={property.image} 
          alt={property.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-lg font-bold text-gray-800 dark:text-white">{property.price}</span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{property.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
          <Square className="h-4 w-4 mr-2" />
          <span className="text-sm">{property.area}</span>
        </div>

        {/* Expanded Content on Hover */}
        <div className={`transition-all duration-300 overflow-hidden ${
          isHovered ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {property.description}
          </p>
          
          <button 
            onClick={handleMoreClick}
            className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors group/btn"
          >
            <span>More Details</span>
            <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
