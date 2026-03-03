import { useState, useEffect } from 'react';
import { MapPin, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';

interface LocationData {
  name: string;
  count: number;
  image: string;
  description: string;
}

export default function Locations() {
  const [locationStats, setLocationStats] = useState<LocationData[]>([]);

  useEffect(() => {
    fetchLocationStats();
  }, []);

  const fetchLocationStats = async () => {
    const { data } = await supabase
      .from('properties')
      .select('location')
      .eq('status', 'Available');

    if (data) {
      const locationCounts: { [key: string]: number } = {};
      data.forEach((property) => {
        locationCounts[property.location] = (locationCounts[property.location] || 0) + 1;
      });

      const locations: LocationData[] = [
        {
          name: 'Lekki Phase 1',
          count: locationCounts['Lekki Phase 1'] || 0,
          image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Premium waterfront properties and luxury estates in one of Lagos\' most sought-after areas.'
        },
        {
          name: 'Victoria Island',
          count: locationCounts['Victoria Island'] || 0,
          image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Commercial and residential properties in the heart of Lagos business district.'
        },
        {
          name: 'Ikoyi',
          count: locationCounts['Ikoyi'] || 0,
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Exclusive residential estates and luxury homes in Lagos\' most prestigious neighborhood.'
        },
        {
          name: 'Banana Island',
          count: locationCounts['Banana Island'] || 0,
          image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Ultra-luxury properties on Nigeria\'s most exclusive man-made island.'
        },
        {
          name: 'Abuja Central',
          count: locationCounts['Abuja Central'] || 0,
          image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Prime commercial and government district properties in the nation\'s capital.'
        },
        {
          name: 'Lekki',
          count: locationCounts['Lekki'] || 0,
          image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
          description: 'Rapidly developing area with diverse property options and excellent investment potential.'
        }
      ];

      setLocationStats(locations);
    }
  };

  const internationalLocations = [
    {
      name: 'London, UK',
      image: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury properties in prime London locations for international investors.'
    },
    {
      name: 'Dubai, UAE',
      image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-end commercial and residential developments in the heart of Dubai.'
    },
    {
      name: 'New York, USA',
      image: 'https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium Manhattan properties and investment opportunities.'
    },
    {
      name: 'Ghana',
      image: 'https://images.pexels.com/photos/2507010/pexels-photo-2507010.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Expanding portfolio in Accra and other major Ghanaian cities.'
    }
  ];

  return (
    <div>
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Locations</h1>
            <p className="text-xl md:text-2xl text-gray-200">Properties Across Prime Destinations</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nigeria Locations</h2>
            <p className="text-xl text-gray-600">
              We operate in the most prestigious and strategic locations across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locationStats.map((location, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <div className="h-80 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${location.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <MapPin className="text-amber-600 mr-2" size={24} />
                      <h3 className="text-2xl font-bold">{location.name}</h3>
                    </div>
                    <p className="text-gray-200 text-sm mb-4">{location.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Building className="text-amber-600 mr-2" size={20} />
                        <span className="font-semibold">{location.count} Properties Available</span>
                      </div>
                      <Link
                        to="/properties"
                        className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md text-sm font-semibold transition-colors"
                      >
                        View All
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">International Presence</h2>
            <p className="text-xl text-gray-600">
              Expanding our portfolio to serve clients globally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {internationalLocations.map((location, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <div className="h-96 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundImage: `url(${location.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <MapPin className="text-amber-600 mr-2" size={20} />
                      <h3 className="text-xl font-bold">{location.name}</h3>
                    </div>
                    <p className="text-gray-200 text-sm">{location.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Why Location Matters</h2>
              <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                At Pervenu Properties, we understand that location is one of the most critical factors in real estate investment. That's why we carefully select and develop properties in areas that offer:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Strategic accessibility and infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>High appreciation potential</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Premium amenities and lifestyle options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Security and peaceful environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-600 mr-2">✓</span>
                  <span>Proximity to business and social hubs</span>
                </li>
              </ul>
            </div>
            <div className="h-96 bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: 'url(https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=800)' }} />
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Looking for Property in a Specific Location?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Our team has in-depth knowledge of all our locations and can help you find the perfect property
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-md font-semibold text-lg transition-all transform hover:scale-105"
          >
            Speak with an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
