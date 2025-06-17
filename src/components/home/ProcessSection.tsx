import React, { useEffect } from 'react';

const ProcessSection: React.FC = () => {
  useEffect(() => {
    const processSteps = document.querySelectorAll('.process-step');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          entry.target.style.animationDelay = `${index * 0.2}s`;
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    processSteps.forEach(step => {
      observer.observe(step);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white rounded-xl shadow-lg mx-auto max-w-7xl my-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-12">
        ¿Cuál es el proceso para comprar un coche?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="process-step bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center opacity-0">
          <div className="text-5xl font-extrabold text-blue-600 mb-4">1</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Investiga las diferentes opciones</h3>
          <p className="text-gray-600">
            Explora modelos, características y precios para encontrar el coche ideal que se ajuste a tus necesidades y presupuesto.
          </p>
        </div>
        
        <div className="process-step bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center opacity-0">
          <div className="text-5xl font-extrabold text-blue-600 mb-4">2</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Solicita información</h3>
          <p className="text-gray-600">
            Contacta con nuestros asesores para obtener detalles específicos, cotizaciones y resolver todas tus dudas.
          </p>
        </div>
        
        <div className="process-step bg-gray-50 p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center opacity-0">
          <div className="text-5xl font-extrabold text-blue-600 mb-4">3</div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">Prueba para estar seguro</h3>
          <p className="text-gray-600">
            Agenda una prueba de manejo para experimentar el coche en persona y asegurarte de que es la elección correcta.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;