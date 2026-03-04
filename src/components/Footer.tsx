import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                      src="/logo.jpg"
                      alt="Pervenu Properties Logo"
                      className={`h-10 w-auto transition-opacity`}
      />
              <div>
                <span className="text-sm font-bold text-white">Pervenu Homes</span>
                <span className="text-xs font-light text-gray-400 block">& Properties Nigerian Limited</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              A diversified real estate company specializing in development, architecture, engineering, and property services. Building the future of smart living.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-600 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-amber-600 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-amber-600 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/properties" className="text-sm hover:text-amber-600 transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-amber-600 transition-colors">Projects</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-amber-600 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm">Real Estate Development</li>
              <li className="text-sm">Property Sales & Leasing</li>
              <li className="text-sm">Architecture & Design</li>
              <li className="text-sm">Civil Engineering</li>
              <li className="text-sm">Interior Design</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-amber-600 mt-1 flex-shrink-0" />
                <span className="text-sm">123 Victoria Island, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-600 flex-shrink-0" />
                <span className="text-sm">+234 (0) 800 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-600 flex-shrink-0" />
                <span className="text-sm">info@pervenuproperties.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Pervenu Homes & Properties Nigerian Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
