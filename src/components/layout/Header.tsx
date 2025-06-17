import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Users, MapPin, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300
    ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-blue-600 py-4'}
  `;

  const navLinkClasses = `
    flex items-center font-semibold py-2 px-4 rounded-md transition-colors duration-300
    ${isScrolled 
      ? 'text-gray-700 hover:bg-gray-100' 
      : 'text-white hover:bg-blue-700'
    }
  `;

  const mobileNavClasses = `
    fixed inset-0 flex flex-col bg-white z-50 pt-16 pb-6 px-4 transform transition-transform duration-300 ease-in-out
    ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
  `;

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://alcgestionretail.com/wp-content/uploads/2025/03/cropped-logos-sin-fondo_Mesa-de-trabajo-1-e1741168725576.png" 
                alt="ALC Retail Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/conocenos" 
              className={navLinkClasses}
            >
              <Users size={18} className="mr-2" />
              Conócenos
            </Link>
            
            <Link 
              to="/seminuevos" 
              className={navLinkClasses}
            >
              Seminuevos
            </Link>
            
            <Link 
              to="/ocasion" 
              className={navLinkClasses}
            >
              Ocasión
            </Link>
            
            <Link 
              to="/km0" 
              className={navLinkClasses}
            >
              Kilómetro 0
            </Link>
            
            <Link 
              to="/contacto" 
              className={navLinkClasses}
            >
              <MapPin size={18} className="mr-2" />
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={24} className={isScrolled ? 'text-blue-600' : 'text-white'} />
            ) : (
              <Menu size={24} className={isScrolled ? 'text-blue-600' : 'text-white'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={mobileNavClasses}>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/conocenos"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Users size={18} className="mr-2" />
            Conócenos
          </Link>
          
          <Link 
            to="/seminuevos"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Seminuevos
          </Link>
          
          <Link 
            to="/ocasion"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ocasión
          </Link>
          
          <Link 
            to="/km0"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kilómetro 0
          </Link>
          
          <Link 
            to="/contacto"
            className="flex items-center py-3 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <MapPin size={18} className="mr-2" />
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;