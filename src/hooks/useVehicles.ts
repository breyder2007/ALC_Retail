import { useState, useMemo } from 'react';
import { Vehicle, VehicleCategory, VehicleType } from '../types';
import { vehicles } from '../data/mockVehicles';

interface FilterOptions {
  search?: string;
  brand?: string;
  category?: VehicleCategory;
  vehicleType?: VehicleType;
  minPrice?: number;
  maxPrice?: number;
  minYear?: number;
  maxYear?: number;
}

export function useVehicles(initialFilters: FilterOptions = {}) {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);
  
  const filteredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => {
      // Search filter
      if (filters.search && !vehicle.title.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      
      // Brand filter
      if (filters.brand && vehicle.brand !== filters.brand) {
        return false;
      }
      
      // Category filter
      if (filters.category && vehicle.category !== filters.category) {
        return false;
      }
      
      // Vehicle type filter
      if (filters.vehicleType && vehicle.vehicleType !== filters.vehicleType) {
        return false;
      }
      
      // Price range filter
      if (filters.minPrice && vehicle.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice && vehicle.price > filters.maxPrice) {
        return false;
      }
      
      // Year range filter
      if (filters.minYear && vehicle.year < filters.minYear) {
        return false;
      }
      if (filters.maxYear && vehicle.year > filters.maxYear) {
        return false;
      }
      
      return true;
    });
  }, [filters, vehicles]);
  
  const featuredVehicles = useMemo(() => {
    return vehicles.filter(vehicle => vehicle.featured);
  }, []);
  
  const getVehiclesByCategory = (category: VehicleCategory) => {
    return vehicles.filter(vehicle => vehicle.category === category);
  };
  
  const getVehiclesByType = (type: VehicleType) => {
    return vehicles.filter(vehicle => vehicle.vehicleType === type);
  };
  
  const getVehicleById = (id: string) => {
    return vehicles.find(vehicle => vehicle.id === id);
  };
  
  return {
    vehicles: filteredVehicles,
    featuredVehicles,
    getVehiclesByCategory,
    getVehiclesByType,
    getVehicleById,
    filters,
    setFilters,
  };
}