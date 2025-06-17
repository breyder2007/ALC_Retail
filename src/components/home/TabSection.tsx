import React, { useState } from 'react';
import { Briefcase, CheckSquare, RotateCcw, Star, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

interface TabContentProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const TabSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('nuestra-empresa');

  const tabContents: Record<string, TabContentProps> = {
    'nuestra-empresa': {
      title: 'Ofrecemos coches de:',
      description: 'Brindar vehículos Km0, seminuevos y de ocasión con la mejor calidad-precio, asegurando confianza, transparencia y una compra segura y sencilla para nuestros clientes.',
      imageSrc: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'Personas estrechando manos'
    },
    'seminuevos': {
      title: 'Diferencia de seminuevo y ocasión:',
      description: 'Un vehículo seminuevo tiene una edad máxima de 24 meses y pocos kilómetros. Mientras que un coche de ocasión ha recorrido más kilómetros, más tiempo y dispone de precios más asequibles.',
      imageSrc: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'Manos con llaves de coche'
    },
    'ocasion': {
      title: 'Gran variedad de modelos',
      description: 'Queremos brindar a nuestros clientes una amplia variedad de marcas y modelos asegurando calidad, confianza y una compra segura.',
      imageSrc: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'Interior concesionario coches'
    },
    'km0': {
      title: '¿Qué es un Kilómetro 0?',
      description: 'Un Km0 es un coche matriculado por el concesionario, con muy pocos kilómetros (menos de 1.000 km) y sin uso real. Se vende como nuevo, pero más barato, con garantía oficial y entrega inmediata.',
      imageSrc: 'https://images.pexels.com/photos/248687/pexels-photo-248687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      imageAlt: 'Volante de coche'
    }
  };

  const tabs = [
    { id: 'nuestra-empresa', label: 'Nuestra empresa', icon: <Briefcase size={18} /> },
    { id: 'seminuevos', label: 'Seminuevos', icon: <CheckSquare size={18} /> },
    { id: 'ocasion', label: 'Ocasión', icon: <RotateCcw size={18} /> },
    { id: 'km0', label: 'Kilómetro 0', icon: <Star size={18} /> },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg w-full max-w-6xl overflow-hidden animate-fadeIn">
      <div className="bg-blue-600 text-white flex flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center py-4 px-2 text-sm md:text-base font-semibold transition duration-300 ${
              activeTab === tab.id
                ? 'bg-white text-blue-600'
                : 'hover:bg-blue-700'
            }`}
          >
            {tab.icon}
            <span className="ml-2">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <img
              src={tabContents[activeTab].imageSrc}
              alt={tabContents[activeTab].imageAlt}
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>

          <div className="md:w-1/2 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {tabContents[activeTab].title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {tabContents[activeTab].description}
              </p>
            </div>
          </div>

          <div className="md:w-1/4 flex flex-col gap-6 p-4 bg-gray-50 rounded-lg shadow-inner">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Puedes llamarnos a:</h3>
              <p className="text-blue-600 text-2xl font-semibold mb-2">914 840 950</p>
              <p className="text-blue-600 text-xl font-semibold">+34 123 45 67 89</p>
            </div>
            <Link to="/catalogo">
              <Button variant="primary" fullWidth size="lg">
                ENCUENTRA TU COCHE IDEAL
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabSection;