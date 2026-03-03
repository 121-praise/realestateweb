import { useState, useEffect } from 'react';
import { Bed, Bath, Maximize, MapPin, Filter } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Property {
  id: string;
  name: string;
  description: string;
  property_type: string;
  listing_type: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  square_feet: number;
  image_url: string;
  status: string;
}

export default function Properties() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedListing, setSelectedListing] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    fetchProperties();
  }, []);

  useEffect(() => {
    filterProperties();
  }, [properties, selectedType, selectedLocation, selectedListing]);

  const fetchProperties = async () => {
    const { data } = await supabase
      .from('properties')
      .select('*')
      .eq('status', 'Available')
      .order('created_at', { ascending: false });

    if (data) {
      setProperties(data);
    }
  };

  const filterProperties = () => {
    let filtered = properties;

    if (selectedType !== 'All') {
      filtered = filtered.filter(p => p.property_type === selectedType);
    }

    if (selectedLocation !== 'All') {
      filtered = filtered.filter(p => p.location === selectedLocation);
    }

    if (selectedListing !== 'All') {
      filtered = filtered.filter(p => p.listing_type === selectedListing);
    }

    setFilteredProperties(filtered);
  };

  const locations = ['All', ...Array.from(new Set(properties.map(p => p.location)))];
  const types = ['All', 'Residential', 'Commercial'];
  const listings = ['All', 'Sale', 'Lease'];

  return (
    <div>
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Properties</h1>
            <p className="text-xl md:text-2xl text-gray-200">Discover Your Dream Property</p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex items-center justify-between mb-4 md:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <Filter size={24} className="text-amber-600" />
                Filter Properties
              </h2>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden bg-amber-600 text-white px-4 py-2 rounded-md"
              >
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
            </div>

            <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Type
                  </label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    {types.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Listing Type
                  </label>
                  <select
                    value={selectedListing}
                    onChange={(e) => setSelectedListing(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                  >
                    {listings.map((listing) => (
                      <option key={listing} value={listing}>
                        {listing}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold text-gray-900">{filteredProperties.length}</span> properties
            </p>
          </div>

          {filteredProperties.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No properties found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundImage: `url(${property.image_url})` }}
                    />
                    <div className="absolute top-4 right-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      For {property.listing_type}
                    </div>
                    <div className="absolute top-4 left-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {property.property_type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>

                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin size={16} className="mr-1" />
                      <span className="text-sm">{property.location}</span>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {property.description}
                    </p>

                    <div className="flex gap-4 text-sm text-gray-600 mb-4 pb-4 border-b">
                      {property.bedrooms > 0 && (
                        <div className="flex items-center gap-1">
                          <Bed size={16} />
                          <span>{property.bedrooms} Beds</span>
                        </div>
                      )}
                      {property.bathrooms > 0 && (
                        <div className="flex items-center gap-1">
                          <Bath size={16} />
                          <span>{property.bathrooms} Baths</span>
                        </div>
                      )}
                      {property.square_feet && (
                        <div className="flex items-center gap-1">
                          <Maximize size={16} />
                          <span>{property.square_feet.toLocaleString()} sqft</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Price</p>
                        <p className="text-2xl font-bold text-amber-600">
                          ₦{(property.price / 1000000).toFixed(1)}M
                        </p>
                      </div>
                      <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md font-semibold transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Looking for Something Specific?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team can help you find the perfect property that meets all your requirements
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors"
          >
            Contact Our Team
          </a>
        </div>
      </section>
    </div>
  );
}
