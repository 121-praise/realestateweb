import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight, Home as HomeIcon, Building2, Ruler, Wrench, Palette, Star } from 'lucide-react';
import { supabase } from '../lib/supabase';

const heroSlides = [
  {
    image: 'logo.jpg',
    title: 'Building the Future of Smart Living',
    subtitle: 'Making your dream home a reality'
  },
  {
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Architectural Excellence Meets Innovation',
    subtitle: 'Award-winning designs that inspire and endure'
  },
  {
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Your Dream Property Awaits',
    subtitle: 'Discover premium real estate in prime locations'
  },
  {
    image: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1920',
    title: 'Transforming Visions Into Reality',
    subtitle: 'From concept to completion with unmatched expertise'
  }
];

interface Testimonial {
  id: string;
  client_name: string;
  client_role: string;
  testimonial: string;
  rating: number;
}

interface Property {
  id: string;
  name: string;
  location: string;
  price: number;
  property_type: string;
  bedrooms: number;
  bathrooms: number;
  image_url: string;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [featuredProperties, setFeaturedProperties] = useState<Property[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 9000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    fetchTestimonials();
    fetchFeaturedProperties();
  }, []);

  const fetchTestimonials = async () => {
    const { data } = await supabase
      .from('testimonials')
      .select('*')
      .eq('is_featured', true)
      .limit(3);
    if (data) setTestimonials(data);
  };

  const fetchFeaturedProperties = async () => {
    const { data } = await supabase
      .from('properties')
      .select('*')
      .eq('status', 'Available')
      .limit(3);
    if (data) setFeaturedProperties(data);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      <section className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-4xl">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/properties"
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105"
                  >
                    View Properties
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-md font-semibold transition-all transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-amber-600 w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Pervenu Homes & Properties Nigerian Limited</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diversified real estate company committed to excellence in development, architecture, engineering, and property services across Nigeria and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">20+</h3>
              <p className="text-gray-600">Completed Projects</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HomeIcon className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Properties Sold</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-amber-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive real estate solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: 'Real Estate Development', desc: 'Creating exceptional residential and commercial spaces' },
              { icon: HomeIcon, title: 'Property Sales & Leasing', desc: 'Expert guidance in buying, selling, and leasing properties' },
              { icon: Ruler, title: 'Architecture & Design', desc: 'Innovative architectural solutions and building design' },
              { icon: Wrench, title: 'Civil Engineering', desc: 'Structural engineering and construction management' },
              { icon: Palette, title: 'Interior Design', desc: 'Transform spaces with elegant interior solutions' },
              { icon: Palette, title: 'Exterior Design', desc: 'Stunning exterior aesthetics and landscaping' }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all group">
                <service.icon className="text-amber-600 mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <Link to="/services" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-2">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-xl text-gray-600">Discover our exclusive listings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${property.image_url})` }} />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
                  <p className="text-gray-600 mb-4">{property.location}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-amber-600">
                      ₦{(property.price / 1000000).toFixed(0)}M
                    </span>
                    <span className="text-sm text-gray-500">{property.property_type}</span>
                  </div>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4">
                    <span>{property.bedrooms} Beds</span>
                    <span>{property.bathrooms} Baths</span>
                  </div>
                  <Link
                    to="/properties"
                    className="block w-full text-center bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-semibold transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/properties"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-md font-semibold transition-colors"
            >
              View All Properties
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-300">Real experiences from satisfied clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-800 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-600 fill-amber-600" size={20} />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.client_name}</p>
                  <p className="text-sm text-gray-400">{testimonial.client_role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Let our expert team guide you through every step of your real estate journey
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-md font-semibold text-lg transition-all transform hover:scale-105"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
