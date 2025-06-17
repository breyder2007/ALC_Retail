import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Car size={32} className="text-blue-400 mr-2" />
              <span className="text-2xl font-bold">ALC Retail</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Especialistas en vehículos de segunda mano, Km0 y seminuevos en la zona norte de Madrid, comprometidos con la calidad y servicio personalizado.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/conocenos" className="text-gray-400 hover:text-blue-400 transition-colors">Conócenos</Link>
              </li>
              <li>
                <Link to="/seminuevos" className="text-gray-400 hover:text-blue-400 transition-colors">Seminuevos</Link>
              </li>
              <li>
                <Link to="/ocasion" className="text-gray-400 hover:text-blue-400 transition-colors">Coches de ocasión</Link>
              </li>
              <li>
                <Link to="/km0" className="text-gray-400 hover:text-blue-400 transition-colors">Kilómetro 0</Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-blue-400 transition-colors">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">914 840 950</span>
              </li>
              <li className="flex items-start">
                <Mail size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">info@alcgestionretail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  Sede principal: Calle Principal 123, Madrid
                  <br />
                  Sucursal: Avenida Secundaria 456, Madrid
                </span>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal" className="text-gray-400 hover:text-blue-400 transition-colors">Aviso legal</Link>
              </li>
              <li>
                <Link to="/privacidad" className="text-gray-400 hover:text-blue-400 transition-colors">Política de privacidad</Link>
              </li>
              <li>
                <Link to="/privacidad#cookies" className="text-gray-400 hover:text-blue-400 transition-colors">Política de cookies</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Términos y condiciones</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ALC Retail. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;