import { X, MapPin, Square, Phone } from 'lucide-react';
import { useProperty } from '../context/PropertyContext';
import { PropertyCard } from './PropertyCard';

export function PropertyDetail() {
  const { selectedProperty, setSelectedProperty, currentProperties } = useProperty();

  if (!selectedProperty) return null;

  const relatedProperties = currentProperties
    .filter(p => p.id !== selectedProperty.id)
    .slice(0, 2);

  const handleClose = () => {
    setSelectedProperty(null);
  };

  const handleContact = () => {
    window.open(`tel:+1234567890`, '_self');
  };

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-white/10 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl transition-all">
        
        {/* Header Image + Close */}
        <div className="relative">
          <img 
            src={selectedProperty.image} 
            alt={selectedProperty.title}
            className="w-full h-80 object-cover rounded-t-3xl"
          />
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 bg-white dark:bg-zinc-800 text-gray-600 dark:text-gray-200 backdrop-blur-sm p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="absolute bottom-6 left-6 bg-white dark:bg-zinc-800/80 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-2xl font-bold text-gray-800 dark:text-white">
              {selectedProperty.price}
            </span>
          </div>
        </div>

        {/* Property Content */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-4">{selectedProperty.title}</h1>

          <div className="flex flex-wrap items-center gap-4 mb-6 text-gray-600 dark:text-gray-300">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{selectedProperty.location}</span>
            </div>
            <div className="flex items-center">
              <Square className="h-5 w-5 mr-2" />
              <span>{selectedProperty.area}</span>
            </div>
          </div>

          <p className="text-gray-700 dark:text-gray-200 text-lg leading-relaxed mb-8">
            {selectedProperty.description}
          </p>

          <button 
            onClick={handleContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors flex items-center space-x-2 mb-12"
          >
            <Phone className="h-5 w-5" />
            <span>Contact Agent</span>
          </button>

          {/* Related Properties */}
          {relatedProperties.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
                Related Properties
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
