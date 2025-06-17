import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useVehicles } from '../hooks/useVehicles';
import CardVehicle from '../components/ui/CardVehicle';
import SearchFilters from '../components/catalog/SearchFilters';
import { Car } from 'lucide-react';

const Catalog: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialFilters = {
    category: queryParams.get('categoria') || undefined,
    brand: queryParams.get('marca') || undefined,
    vehicleType: location.pathname.includes('/km0') ? 'km0' : 
                location.pathname.includes('/seminuevos') ? 'seminuevo' : 
                location.pathname.includes('/ocasion') ? 'ocasion' : undefined
  };

  const { vehicles, setFilters } = useVehicles(initialFilters);
  const [pageTitle, setPageTitle] = useState('Catálogo de vehículos');
  
  useEffect(() => {
    if (location.pathname.includes('/km0')) {
      setPageTitle('Vehículos Kilómetro 0');
    } else if (location.pathname.includes('/seminuevos')) {
      setPageTitle('Vehículos Seminuevos');
    } else if (location.pathname.includes('/ocasion')) {
      setPageTitle('Vehículos de Ocasión');
    } else {
      setPageTitle('Catálogo de vehículos');
    }
  }, [location.pathname]);
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Catálogo de vehículos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{pageTitle}</h1>
            <p className="text-xl text-blue-100 max-w-2xl">
              Encuentra tu próximo vehículo entre nuestra selección de coches de calidad
            </p>
          </div>
        </div>
      </div>

      {/* Catalog Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Search and Filters */}
        <SearchFilters onApplyFilters={setFilters} />
        
        {/* Results */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {vehicles.length} vehículos encontrados
            </h2>
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Ordenar por:</span>
              <select className="py-1 px-3 border border-gray-300 rounded-md">
                <option>Precio (menor a mayor)</option>
                <option>Precio (mayor a menor)</option>
                <option>Más recientes</option>
                <option>Año (nuevo a antiguo)</option>
                <option>Kilometraje (menor a mayor)</option>
              </select>
            </div>
          </div>
          
          {vehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vehicles.map(vehicle => (
                <CardVehicle key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Car size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No se encontraron vehículos</h3>
              <p className="text-gray-600">
                No hay vehículos que coincidan con los filtros seleccionados.
                <br />
                Intenta con otros criterios de búsqueda.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;