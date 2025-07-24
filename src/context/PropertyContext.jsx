import { createContext, useContext, useState } from 'react';

const PropertyContext = createContext();

export const useProperty = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperty must be used within a PropertyProvider');
  }
  return context;
};

const propertyData = {
  'buy-sell': [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Modern Family Home',
      price: '$750,000',
      location: 'Beverly Hills, CA',
      area: '2,500 sq ft',
      description: 'Beautiful modern family home with 4 bedrooms, 3 bathrooms, and a spacious backyard. Recently renovated with high-end finishes throughout.'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Villa',
      price: '$1,200,000',
      location: 'Malibu, CA',
      area: '4,200 sq ft',
      description: 'Stunning luxury villa with ocean views, infinity pool, and premium amenities. Perfect for entertaining and relaxation.'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Contemporary Condo',
      price: '$450,000',
      location: 'Downtown LA, CA',
      area: '1,800 sq ft',
      description: 'Sleek contemporary condo in the heart of downtown with city views, modern appliances, and building amenities.'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Suburban Paradise',
      price: '$650,000',
      location: 'Pasadena, CA',
      area: '3,100 sq ft',
      description: 'Charming suburban home with large garden, garage, and family-friendly neighborhood amenities.'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Penthouse Suite',
      price: '$2,100,000',
      location: 'West Hollywood, CA',
      area: '3,800 sq ft',
      description: 'Exclusive penthouse with panoramic city views, private terrace, and luxury finishes throughout.'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cozy Cottage',
      price: '$380,000',
      location: 'Santa Monica, CA',
      area: '1,200 sq ft',
      description: 'Charming cottage near the beach with vintage character and modern updates.'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Executive Mansion',
      price: '$3,500,000',
      location: 'Bel Air, CA',
      area: '6,500 sq ft',
      description: 'Grand executive mansion with wine cellar, home theater, and resort-style backyard.'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Minimalist Loft',
      price: '$520,000',
      location: 'Arts District, LA',
      area: '1,600 sq ft',
      description: 'Industrial-chic loft with exposed brick, high ceilings, and modern amenities.'
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Garden Estate',
      price: '$1,800,000',
      location: 'Beverly Hills, CA',
      area: '5,200 sq ft',
      description: 'Magnificent estate with landscaped gardens, pool house, and guest quarters.'
    }
  ],
  rent: [
    {
      id: 10,
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Studio Apartment',
      price: '$2,200/month',
      location: 'Hollywood, CA',
      area: '650 sq ft',
      description: 'Modern studio apartment with city views and building amenities including gym and rooftop deck.'
    },
    {
      id: 11,
      image: 'https://images.pexels.com/photos/2079246/pexels-photo-2079246.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Two Bedroom Flat',
      price: '$3,800/month',
      location: 'Santa Monica, CA',
      area: '1,100 sq ft',
      description: 'Bright two-bedroom apartment near the beach with parking and in-unit laundry.'
    },
    {
      id: 12,
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Luxury Rental',
      price: '$6,500/month',
      location: 'Beverly Hills, CA',
      area: '2,400 sq ft',
      description: 'Fully furnished luxury rental with concierge service and premium amenities.'
    },
    {
      id: 13,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Family Rental',
      price: '$4,200/month',
      location: 'Culver City, CA',
      area: '1,800 sq ft',
      description: 'Spacious family home with yard, garage, and excellent school district.'
    },
    {
      id: 14,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Downtown Loft',
      price: '$3,200/month',
      location: 'Downtown LA, CA',
      area: '1,400 sq ft',
      description: 'Industrial loft with exposed brick, high ceilings, and city views.'
    },
    {
      id: 15,
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Penthouse Rental',
      price: '$8,900/month',
      location: 'West Hollywood, CA',
      area: '3,000 sq ft',
      description: 'Exclusive penthouse rental with panoramic views and luxury amenities.'
    },
    {
      id: 16,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Cozy Rental',
      price: '$2,800/month',
      location: 'Venice, CA',
      area: '900 sq ft',
      description: 'Charming rental near the beach with modern updates and pet-friendly policy.'
    },
    {
      id: 17,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Executive Rental',
      price: '$7,200/month',
      location: 'Malibu, CA',
      area: '2,800 sq ft',
      description: 'Executive rental with ocean views, private beach access, and luxury finishes.'
    },
    {
      id: 18,
      image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Suburban Rental',
      price: '$3,600/month',
      location: 'Pasadena, CA',
      area: '2,200 sq ft',
      description: 'Beautiful suburban rental with garden, garage, and family-friendly neighborhood.'
    }
  ],
  land: [
    {
      id: 19,
      image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Development Plot',
      price: '$850,000',
      location: 'Hollywood Hills, CA',
      area: '0.75 acres',
      description: 'Prime development land with city views and approved building permits for luxury home.'
    },
    {
      id: 20,
      image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Beachfront Lot',
      price: '$2,200,000',
      location: 'Malibu, CA',
      area: '1.2 acres',
      description: 'Rare beachfront lot with direct ocean access and potential for luxury development.'
    },
    {
      id: 21,
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Mountain View Land',
      price: '$450,000',
      location: 'Topanga, CA',
      area: '2.5 acres',
      description: 'Scenic mountain land with panoramic views and utilities available.'
    },
    {
      id: 22,
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Commercial Plot',
      price: '$1,500,000',
      location: 'Beverly Hills, CA',
      area: '0.5 acres',
      description: 'Prime commercial land in prestigious location with high foot traffic.'
    },
    {
      id: 23,
      image: 'https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Estate Grounds',
      price: '$3,200,000',
      location: 'Bel Air, CA',
      area: '3.8 acres',
      description: 'Exclusive estate grounds with mature landscaping and privacy.'
    },
    {
      id: 24,
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Investment Land',
      price: '$680,000',
      location: 'Valencia, CA',
      area: '1.8 acres',
      description: 'Strategic investment land in growing area with development potential.'
    },
    {
      id: 25,
      image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Hillside Lot',
      price: '$920,000',
      location: 'Hollywood Hills, CA',
      area: '1.1 acres',
      description: 'Premium hillside lot with city and ocean views, perfect for custom home.'
    },
    {
      id: 26,
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Coastal Land',
      price: '$1,800,000',
      location: 'Palos Verdes, CA',
      area: '2.2 acres',
      description: 'Stunning coastal land with unobstructed ocean views and privacy.'
    },
    {
      id: 27,
      image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
      title: 'Valley Plot',
      price: '$380,000',
      location: 'San Fernando Valley, CA',
      area: '1.5 acres',
      description: 'Affordable valley land with mountain views and development potential.'
    }
  ]
};

const beforeAfterData = [
  {
    id: 1,
    title: 'Acquisition 1: Single Family',
    beforeImage: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    purchasePrice: '$507,000',
    renovation: '$81,413',
    marketValue: '$760,000',
    wedge: '$171,587'
  },
  {
    id: 2,
    title: 'Acquisition 2: Luxury Condo',
    beforeImage: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    purchasePrice: '$320,000',
    renovation: '$45,000',
    marketValue: '$485,000',
    wedge: '$120,000'
  },
  {
    id: 3,
    title: 'Acquisition 3: Investment Property',
    beforeImage: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=800',
    afterImage: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
    purchasePrice: '$425,000',
    renovation: '$62,000',
    marketValue: '$620,000',
    wedge: '$133,000'
  }
];

export const PropertyProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('buy-sell');
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const itemsPerPage = 9;
  const currentProperties = propertyData[selectedCategory] || [];
  const totalPages = Math.ceil(currentProperties.length / itemsPerPage);
  const paginatedProperties = currentProperties.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const value = {
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    selectedProperty,
    setSelectedProperty,
    currentProperties,
    paginatedProperties,
    totalPages,
    beforeAfterData,
    itemsPerPage
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
};