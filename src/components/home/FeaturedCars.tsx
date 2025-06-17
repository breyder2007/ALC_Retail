import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import CardVehicle from '../ui/CardVehicle';
import Button from '../ui/Button';
import { useVehicles } from '../../hooks/useVehicles';

const FeaturedCars: React.FC = () => {
  const { featuredVehicles } = useVehicles();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Vehículos destacados</h2>
          <Link to="/catalogo" className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            <span className="mr-1">Ver todos</span>
            <ArrowRight size={18} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredVehicles.map(vehicle => (
            <CardVehicle key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-700 max-w-2xl mx-auto">
            Descubre nuestra amplia selección de vehículos. Todos nuestros coches pasan por exhaustivos controles de calidad y cuentan con garantía.
          </p>
          <Link to="/catalogo">
            <Button variant="primary" size="lg">
              Explorar catálogo completo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCars;