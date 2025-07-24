import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useProperty } from '../context/PropertyContext';
import { PropertyCard } from './PropertyCard';

export function PropertyListings() {
  const {
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    paginatedProperties,
    totalPages
  } = useProperty();

  const categories = [
    { id: 'buy-sell', label: 'Buy / Sell', icon: '🏠' },
    { id: 'rent', label: 'Rent', icon: '🔑' },
    { id: 'land', label: 'Land', icon: '🌍' }
  ];

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(0, currentPage - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(Math.min(totalPages - 1, currentPage + 1));
  };

  return (
    <section id="properties" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover your perfect property from our curated selection of premium real estate
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-x-auto no-scrollbar transition-colors duration-500">
            <div className="flex whitespace-nowrap space-x-2 p-2 min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 sm:px-6 sm:py-3 rounded-xl font-semibold flex-shrink-0 transition-all duration-300 flex items-center space-x-2 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-lg transform scale-100'
                      : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800'
                  }`}
                >
                  <span className="text-lg sm:text-xl">{category.icon}</span>
                  <span className="text-sm sm:text-base">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {paginatedProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end items-center space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors" />
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === i
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300 group-hover:text-blue-600 transition-colors" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
