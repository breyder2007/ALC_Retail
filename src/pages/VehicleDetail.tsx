import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useVehicles } from '../hooks/useVehicles';
import ImageGallery from '../components/vehicle/ImageGallery';
import VehicleInfo from '../components/vehicle/VehicleInfo';
import VehicleActions from '../components/vehicle/VehicleActions';
import CardVehicle from '../components/ui/CardVehicle';
import { ChevronLeft } from 'lucide-react';

const VehicleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getVehicleById, getVehiclesByCategory, vehicles } = useVehicles();
  
  const vehicle = getVehicleById(id || '');
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);
  
  if (!vehicle) {
    return (
      <div className="pt-20 container mx-auto px-4 py-16">
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Vehículo no encontrado</h2>
          <p className="text-gray-600 mb-6">El vehículo que estás buscando no existe o ha sido eliminado.</p>
          <Link to="/catalogo" className="text-blue-600 hover:underline flex items-center justify-center">
            <ChevronLeft size={16} className="mr-1" />
            Volver al catálogo
          </Link>
        </div>
      </div>
    );
  }
  
  // Get similar vehicles (same category)
  const similarVehicles = getVehiclesByCategory(vehicle.category)
    .filter(v => v.id !== vehicle.id)
    .slice(0, 3);
  
  return (
    <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-gray-700 hover:text-blue-600">
                  Inicio
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <Link to="/catalogo" className="text-gray-700 hover:text-blue-600 ml-1 md:ml-2">
                    Catálogo
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-500 ml-1 md:ml-2 truncate">{vehicle.title}</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        {/* Vehicle Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <ImageGallery images={vehicle.images} title={vehicle.title} />
            
            {/* Vehicle Information */}
            <VehicleInfo vehicle={vehicle} />
          </div>
          
          {/* Sidebar */}
          <div>
            <VehicleActions 
              vehicleId={vehicle.id} 
              vehicleTitle={vehicle.title} 
              price={vehicle.price} 
            />
          </div>
        </div>
        
        {/* Similar Vehicles */}
        {similarVehicles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Vehículos similares</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarVehicles.map(vehicle => (
                <CardVehicle key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleDetail;