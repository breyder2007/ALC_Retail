import React from 'react';
import { Link } from 'react-router-dom';
import { Vehicle } from '../../types';
import Button from './Button';

interface CardVehicleProps {
  vehicle: Vehicle;
}

const CardVehicle: React.FC<CardVehicleProps> = ({ vehicle }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={vehicle.images[0]}
          alt={vehicle.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {vehicle.oldPrice && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-md text-sm font-semibold">
            Oferta
          </div>
        )}
        <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-semibold uppercase">
          {vehicle.vehicleType}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-800 line-clamp-1">{vehicle.title}</h3>
        
        <div className="flex justify-between items-center mb-3">
          <div>
            <span className="text-xl font-bold text-blue-600">{vehicle.price.toLocaleString()}€</span>
            {vehicle.oldPrice && (
              <span className="ml-2 text-sm text-gray-500 line-through">{vehicle.oldPrice.toLocaleString()}€</span>
            )}
          </div>
          <div className="text-sm text-gray-600">
            {vehicle.year} · {vehicle.mileage.toLocaleString()} km
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            {vehicle.fuelType}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            {vehicle.transmission}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
            {vehicle.color}
          </div>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            {vehicle.category}
          </div>
        </div>
        
        <div className="flex justify-between gap-2">
          <Button variant="outline" fullWidth>
            Más info
          </Button>
          <Link to={`/vehiculo/${vehicle.id}`} className="w-full">
            <Button variant="primary" fullWidth>
              Ver detalles
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardVehicle;