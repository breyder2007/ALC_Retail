import React, { useEffect } from 'react';
import { Users, Award, Shield, Star, Truck, HeartHandshake, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          if (entry.target.id === 'nuestros-pilares') {
            const progressBars = entry.target.querySelectorAll('.progress-bar-fill');
            progressBars.forEach(bar => {
              const progress = bar.getAttribute('data-progress');
              bar.style.width = `${progress}%`;
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.animate-section');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-80 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Concesionario ALC Retail"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Conócenos</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Especialistas en vehículos de segunda mano, Km0 y seminuevos en la zona norte de Madrid
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* About Section with Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-start">
          <div className="text-lg md:text-xl text-gray-700 leading-relaxed space-y-6">
            <p>
              En nuestro concesionario, nos especializamos en ofrecer una cuidada selección de <span className="font-semibold text-blue-600">vehículos de segunda mano, Km0 y seminuevos</span>, garantizando siempre la mejor relación entre calidad y precio. Nuestro compromiso es brindarte coches en <span className="font-semibold text-blue-600">excelente estado</span>, revisados por nuestro equipo de profesionales para asegurar su óptimo rendimiento y fiabilidad.
            </p>
            <p>
              Contamos con una <span className="font-semibold text-blue-600">amplia variedad de marcas y modelos</span> para adaptarnos a todas las necesidades y presupuestos. Además, te ofrecemos <span className="font-semibold text-blue-600">asesoramiento personalizado</span> para que encuentres la mejor opción según tus preferencias y estilo de vida.
            </p>
            <div className="mt-8">
              <p className="text-lg md:text-xl text-gray-700 font-semibold">
                Estamos ubicados en la zona norte de Madrid:
              </p>
              <div className="flex flex-col space-y-2 mt-2">
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-2" size={20} />
                  <span className="text-gray-700">Calle Metalurgia 1, Alcobendas</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-blue-500 mr-2" size={20} />
                  <span className="text-gray-700">Calle Manzanos 1, San Sebastián de los Reyes</span>
                </div>
              </div>
            </div>
            <p className="text-2xl font-bold text-blue-700 mt-8 text-center lg:text-left">
              ¡Te esperamos!
            </p>
          </div>
          <div className="aspect-video w-full max-w-2xl mx-auto lg:max-w-none rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2L-3AqugwSs"
              title="Video presentación ALC Retail"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 animate-section">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">ADAPTAMOS TU CUOTA DE FINANCIACIÓN</h3>
              <p className="text-gray-700">Diseñamos la cuota perfecta para ti. ¡Tú decides cómo pagar!</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">MEJORAMOS TU SEGURO</h3>
              <p className="text-gray-700">Te ayudamos a conseguir la mejor cobertura al menor costo.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">3 AÑOS DE GARANTÍA</h3>
              <p className="text-gray-700">Conduce con tranquilidad. Sujeto a financiación.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-xl font-bold text-blue-700 mb-2">CONTAMOS CON TALLER PROPIO</h3>
              <p className="text-gray-700">Mantenimiento y reparaciones, con servicio directo y de confianza.</p>
            </div>
          </div>

          <section id="nuestros-pilares" className="py-8 animate-section">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-8 text-center">Nuestros pilares</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Satisfacción del Cliente - 96%</h3>
                <p className="text-gray-700 mb-4">
                  Ofrecemos asesoramiento personalizado para que encuentres tu coche ideal.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-4 bg-gray-200 rounded-full flex-grow overflow-hidden">
                  <div className="progress-bar-fill h-full bg-blue-600 rounded-full transition-all duration-1000" data-progress="96" style={{ width: '0%' }}></div>
                </div>
                <span className="text-blue-700 font-bold text-xl w-12 text-right">96%</span>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Rapidez en la Entrega - 87%</h3>
                <p className="text-gray-700 mb-4">
                  Gestionamos cada compra de manera eficiente para que recibas tu vehículo en el menor tiempo posible.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-4 bg-gray-200 rounded-full flex-grow overflow-hidden">
                  <div className="progress-bar-fill h-full bg-blue-600 rounded-full transition-all duration-1000" data-progress="87" style={{ width: '0%' }}></div>
                </div>
                <span className="text-blue-700 font-bold text-xl w-12 text-right">87%</span>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Variedad de Marcas y Modelos - 74%</h3>
                <p className="text-gray-700 mb-4">
                  Disponemos de un amplio stock de coches multimarca.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-4 bg-gray-200 rounded-full flex-grow overflow-hidden">
                  <div className="progress-bar-fill h-full bg-blue-600 rounded-full transition-all duration-1000" data-progress="74" style={{ width: '0%' }}></div>
                </div>
                <span className="text-blue-700 font-bold text-xl w-12 text-right">74%</span>
              </div>

              <div className="text-left">
                <h3 className="text-xl font-semibold mb-2">Atención Postventa - 92%</h3>
                <p className="text-gray-700 mb-4">
                  Estamos a tu disposición después de la compra, asegurando tu satisfacción a largo plazo.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-4 bg-gray-200 rounded-full flex-grow overflow-hidden">
                  <div className="progress-bar-fill h-full bg-blue-600 rounded-full transition-all duration-1000" data-progress="92" style={{ width: '0%' }}></div>
                </div>
                <span className="text-blue-700 font-bold text-xl w-12 text-right">92%</span>
              </div>
            </div>
          </section>

          <div className="text-center mt-12">
            <Link 
              to="/catalogo"
              className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              VER MODELOS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;