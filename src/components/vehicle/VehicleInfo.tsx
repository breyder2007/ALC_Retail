import React from 'react';
import { Vehicle } from '../../types';
import { Fuel, Calendar, GitBranch, PaintBucket, BarChart3, CarFront } from 'lucide-react';

interface VehicleInfoProps {
  vehicle: Vehicle;
}

const VehicleInfo: React.FC<VehicleInfoProps> = ({ vehicle }) => {
  return (
    <div className="mb-8">
      {/* Vehicle Title & Price */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{vehicle.title}</h1>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-blue-600">{vehicle.price.toLocaleString()}€</span>
          {vehicle.oldPrice && (
            <span className="ml-2 text-lg text-gray-500 line-through">{vehicle.oldPrice.toLocaleString()}€</span>
          )}
        </div>
      </div>
      
      {/* Vehicle Type Badge */}
      <div className="mb-6">
        <span className="inline-block bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded-md uppercase text-sm">
          {vehicle.vehicleType === 'km0' ? 'Kilómetro 0' : 
           vehicle.vehicleType === 'seminuevo' ? 'Seminuevo' : 'Ocasión'}
        </span>
      </div>
      
      {/* Main Specs */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center">
          <Calendar className="w-6 h-6 text-blue-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Año</p>
            <p className="font-semibold">{vehicle.year}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <BarChart3 className="w-6 h-6 text-blue-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Kilometraje</p>
            <p className="font-semibold">{vehicle.mileage.toLocaleString()} km</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <Fuel className="w-6 h-6 text-blue-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Combustible</p>
            <p className="font-semibold">{vehicle.fuelType}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <GitBranch className="w-6 h-6 text-blue-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Cambio</p>
            <p className="font-semibold">{vehicle.transmission}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <PaintBucket className="w-6 h-6 text-blue-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Color</p>
            <p className="font-semibold">{vehicle.color}</p>
          </div>
        </div>
        
        <div className="flex items-center">
          <CarFront className="w-6 h-6 text-blue-600 mr-2" />
          <div>
            <p className="text-sm text-gray-500">Categoría</p>
            <p className="font-semibold capitalize">{vehicle.category}</p>
          </div>
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Descripción</h2>
        <p className="text-gray-700 leading-relaxed">{vehicle.description}</p>
      </div>
      
      {/* Features */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">Equipamiento</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {vehicle.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-700">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VehicleInfo;