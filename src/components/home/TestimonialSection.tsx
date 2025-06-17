import React, { useState } from 'react';

interface Testimonial {
  id: string;
  name: string;
  photo: string;
  text: string;
  rating: number;
  purchasedCar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Martínez',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'Excelente experiencia comprando mi BMW X3. El asesoramiento fue profesional y me ofrecieron diferentes opciones de financiación. Muy contento con mi compra.',
    rating: 5,
    purchasedCar: 'BMW X3 xDrive 20d'
  },
  {
    id: '2',
    name: 'Laura Sánchez',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'Me decidí por un Audi A3 seminuevo y no podría estar más satisfecha. El coche estaba impecable y la atención recibida fue de primera. Repetiré sin duda.',
    rating: 5,
    purchasedCar: 'Audi A3 Sportback 2.0 TDI'
  },
  {
    id: '3',
    name: 'Miguel Fernández',
    photo: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=120',
    text: 'Buscaba un coche familiar y me recomendaron el Mercedes Clase C Estate. Proceso de compra rápido y sin complicaciones. Muy recomendable.',
    rating: 4,
    purchasedCar: 'Mercedes Clase C 220d Estate'
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };
  
  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Lo que dicen nuestros clientes</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
                      <div className="flex flex-col md:flex-row items-center mb-6">
                        <img 
                          src={testimonial.photo} 
                          alt={testimonial.name} 
                          className="w-20 h-20 rounded-full object-cover border-4 border-blue-100"
                        />
                        <div className="md:ml-4 text-center md:text-left mt-4 md:mt-0">
                          <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                          <p className="text-gray-600">Compró: {testimonial.purchasedCar}</p>
                          <div className="flex items-center justify-center md:justify-start mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg 
                                key={i}
                                className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                      <blockquote className="text-gray-700 text-lg italic text-center">
                        "{testimonial.text}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={handlePrev}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-5 bg-white rounded-full shadow-md p-2 text-blue-600 hover:text-blue-800 focus:outline-none transition-colors"
              aria-label="Anterior testimonio"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={handleNext}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-5 bg-white rounded-full shadow-md p-2 text-blue-600 hover:text-blue-800 focus:outline-none transition-colors"
              aria-label="Siguiente testimonio"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'} transition-colors`}
                  aria-label={`Ir al testimonio ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;