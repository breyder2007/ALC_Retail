import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/627678/pexels-photo-627678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Contacto ALC Retail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contacto</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Estamos aquí para resolver todas tus dudas
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Información de contacto</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                      <Phone className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Teléfono</h3>
                    <p className="text-gray-600">914 840 950</p>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                      <Mail className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@alcgestionretail.com</p>
                    <p className="text-gray-600">Respondemos en menos de 24 horas</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                      <MapPin className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Ubicaciones</h3>
                    <div className="mb-3">
                      <p className="font-medium text-gray-800">Sede Principal:</p>
                      <p className="text-gray-600">Calle Principal 123, Madrid</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">Sucursal:</p>
                      <p className="text-gray-600">Avenida Secundaria 456, Madrid</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                      <Clock className="text-blue-600" size={24} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Horario</h3>
                    <p className="text-gray-600">Lunes a Viernes: 9:00 - 20:00</p>
                    <p className="text-gray-600">Sábados: 10:00 - 14:00</p>
                    <p className="text-gray-600">Domingos: Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tu email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu teléfono"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecciona un asunto</option>
                    <option value="info">Información general</option>
                    <option value="test">Solicitar prueba de conducción</option>
                    <option value="financing">Financiación</option>
                    <option value="valuation">Valoración de mi vehículo</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-700">
                    He leído y acepto la <a href="/privacidad" className="text-blue-600 hover:underline">política de privacidad</a>
                  </label>
                </div>
                
                <div>
                  <Button variant="primary" size="lg" type="submit" fullWidth>
                    Enviar mensaje
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Encuéntranos</h2>
            <div className="bg-gray-200 rounded-lg overflow-hidden h-96">
              {/* Here would go the Google Maps iframe, using a placeholder for now */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <MapPin size={48} className="text-gray-600" />
                <span className="ml-2 text-lg text-gray-700">Mapa de Google se cargará aquí</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;