import { useState } from 'react';
import { Building2, Home, Ruler, Wrench, Palette, PaintBucket, Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const services = [
    {
      icon: Building2,
      title: 'Real Estate Development',
      description: 'We create exceptional residential and commercial properties that stand the test of time.',
      features: [
        'Luxury residential estates',
        'Commercial complexes',
        'Mixed-use developments',
        'Master-planned communities',
        'Sustainable urban development',
        'Project feasibility studies'
      ],
      image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Home,
      title: 'Property Sales & Leasing',
      description: 'Expert guidance in buying, selling, and leasing properties across prime locations.',
      features: [
        'Property acquisition services',
        'Sales and marketing',
        'Lease management',
        'Property valuation',
        'Market analysis and research',
        'Investment consultation'
      ],
      image: '99.jpeg'
    },
    {
      icon: Ruler,
      title: 'Architecture & Building Design',
      description: 'Innovative architectural solutions that blend aesthetics with functionality.',
      features: [
        'Concept design and planning',
        'Architectural drawings',
        '3D visualization and modeling',
        'Building permit processing',
        'Sustainable design solutions',
        'Renovation and remodeling'
      ],
      image: '29.jpeg'
    },
    {
      icon: Wrench,
      title: 'Civil & Structural Engineering',
      description: 'Comprehensive engineering services ensuring structural integrity and safety.',
      features: [
        'Structural design and analysis',
        'Foundation engineering',
        'Construction supervision',
        'Quality control and testing',
        'Infrastructure development',
        'Building code compliance'
      ],
      image: '31.jpeg'
    },
    {
      icon: Palette,
      title: 'Interior Design',
      description: 'Transform interior spaces into elegant, functional, and inspiring environments. In collaboration with Perla Lichi Design International, we are the exclusive West Africa Regional Consultant, delivering world-class interior solutions.',
      features: [
        'Space planning and layout',
        'Custom furniture design',
        'Color and material selection',
        'Lighting design',
        'Kitchen and bathroom design',
        'Smart home integration',
        'Partnership with Perla Lichi Design International',
        'International design standards'
      ],
      image: '25.jpeg'
    },
    {
      icon: PaintBucket,
      title: 'Exterior Design',
      description: 'Create stunning exterior aesthetics and landscaping that enhance property value.',
      features: [
        'Facade design and restoration',
        'Landscape architecture',
        'Outdoor living spaces',
        'Garden design and planning',
        'Exterior lighting design',
        'Sustainable landscaping'
      ],
      image: '23.jpeg'
    }
  ];

  return (
    <div>
      <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: 'url(/logo.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200">Comprehensive Real Estate Solutions</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide integrated real estate services that deliver exceptional results. Our multidisciplinary approach ensures seamless execution of every project.
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="bg-amber-100 p-4 rounded-lg mr-4">
                      <service.icon className="text-amber-600" size={40} />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-amber-600 mr-3 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-block bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-md font-semibold transition-colors"
                  >
                    Get Started
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="h-96 bg-cover bg-center rounded-lg shadow-xl" style={{ backgroundImage: `url(${service.image})` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Perla Lichi Design International Partnership</h2>
            <p className="text-xl text-gray-600">Exclusive Interior Design Collaboration</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">West Africa's Premier Interior Design Partner</h3>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Pervenu Homes & Properties Nigerian Limited is proud to partner with Perla Lichi Design International, bringing world-class interior design expertise to the West African market. This exclusive collaboration enables us to deliver internationally acclaimed interior solutions for our most discerning clients.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                As the authorized West Africa Regional Consultant of Perla Lichi Design International's interior design portfolio, we combine local market knowledge with global design trends. Our collaborative approach ensures that every interior space reflects both contemporary elegance and functional perfection.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From residential interiors to commercial spaces, our partnership delivers curated designs that elevate standards and create memorable environments. We work seamlessly with our clients to translate their vision into sophisticated, timeless spaces.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('/1.jpg')" }} />
              <div className="h-48 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('/2.jpg')" }} />
              <div className="h-48 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('/3.jpg')" }} />
              <div className="h-48 bg-cover bg-center rounded-lg shadow-lg" style={{ backgroundImage: "url('/4.jpg')" }} />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div
              className="h-[500px] bg-cover bg-center rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              style={{ backgroundImage: "url('/perlapaper.jpeg')" }}
              onClick={() => setSelectedImage('/perlapaper.jpeg')}
            />
            <div className="rounded-lg shadow-lg overflow-hidden h-[500px]">
              <iframe
                src="https://www.youtube.com/embed/DN_xZIQ8uGM?si=JG-WJHTjfZfo4Zby"
                title="Perla Lichi Design International"
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 bg-white text-gray-900 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          >
            <X size={20} />
          </button>
          <img
            src={selectedImage}
            alt="Full screen view"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional results</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Consultation</h3>
              <p className="text-gray-300">We listen to your needs and understand your vision</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Planning</h3>
              <p className="text-gray-300">Detailed planning and design aligned with your goals</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-gray-300">Professional implementation with quality assurance</p>
            </div>

            <div className="text-center">
              <div className="bg-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-bold mb-3">Delivery</h3>
              <p className="text-gray-300">On-time handover with ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Let's discuss how our services can bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white hover:bg-gray-100 text-amber-600 px-8 py-4 rounded-md font-semibold text-lg transition-all transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}