import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import { Car } from 'lucide-react';

const slides = [
  {
    id: 'suv',
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'SUV',
    subtitle: 'Espacio, confort y rendimiento para todas tus aventuras.',
    description: 'Grandes, con excelente tracción y perfectos para la familia y escapadas.',
    link: '/catalogo?categoria=suv'
  },
  {
    id: 'familiar',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Familiar',
    subtitle: 'Más espacio, más momentos juntos.',
    description: 'Ideales para el día a día y viajes largos. Amplios y confortables.',
    link: '/catalogo?categoria=familiar'
  },
  {
    id: 'compacto',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Compacto',
    subtitle: 'Ágil, eficiente y perfecto para la ciudad.',
    description: 'Perfectos para la ciudad, fáciles de aparcar y con bajo consumo.',
    link: '/catalogo?categoria=compacto'
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/50 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 opacity-0 transform translate-y-4 animate-[fadeInUp_0.8s_0.5s_forwards]">
                  {slide.title}
                  <br />
                  {slide.subtitle}
                </h1>
                <p className="text-xl text-gray-200 mb-8 opacity-0 transform translate-y-4 animate-[fadeInUp_0.8s_0.7s_forwards]">
                  {slide.description}
                </p>
                <Link 
                  to={slide.link}
                  className="opacity-0 transform translate-y-4 animate-[fadeInUp_0.8s_0.9s_forwards] inline-block"
                >
                  <Button variant="primary" size="lg">
                    <Car className="mr-2" size={20} />
                    Ver Modelos {slide.title}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-100' : 'bg-white/50 scale-75 hover:scale-90'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;