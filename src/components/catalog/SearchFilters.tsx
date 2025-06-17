import React, { useState } from 'react';
import { Search, X, Filter, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';

interface SearchFiltersProps {
  onApplyFilters: (filters: any) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onApplyFilters }) => {
  const [isFilterExpanded, setIsFilterExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [yearRange, setYearRange] = useState({ min: '', max: '' });
  
  const handleApplyFilters = () => {
    const filters = {
      search: searchTerm,
      brand: selectedBrand || undefined,
      category: selectedCategory || undefined,
      vehicleType: selectedType || undefined,
      minPrice: priceRange.min ? parseInt(priceRange.min) : undefined,
      maxPrice: priceRange.max ? parseInt(priceRange.max) : undefined,
      minYear: yearRange.min ? parseInt(yearRange.min) : undefined,
      maxYear: yearRange.max ? parseInt(yearRange.max) : undefined
    };
    
    onApplyFilters(filters);
    if (window.innerWidth < 768) {
      setIsFilterExpanded(false);
    }
  };
  
  const handleReset = () => {
    setSearchTerm('');
    setSelectedBrand('');
    setSelectedCategory('');
    setSelectedType('');
    setPriceRange({ min: '', max: '' });
    setYearRange({ min: '', max: '' });
    
    onApplyFilters({});
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-4">
        <input
          type="text"
          placeholder="Buscar por marca, modelo..."
          className="flex-grow py-2 px-4 outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button 
          className="bg-blue-600 text-white p-2"
          onClick={handleApplyFilters}
        >
          <Search size={20} />
        </button>
      </div>
      
      {/* Mobile Toggle */}
      <div className="md:hidden mb-4">
        <button
          className="flex items-center justify-between w-full py-2 px-4 bg-gray-100 rounded-md"
          onClick={() => setIsFilterExpanded(!isFilterExpanded)}
        >
          <div className="flex items-center">
            <Filter size={18} className="mr-2" />
            <span>Filtros</span>
          </div>
          <ChevronDown size={18} className={`transition-transform ${isFilterExpanded ? 'transform rotate-180' : ''}`} />
        </button>
      </div>
      
      {/* Filters - Hidden on mobile unless expanded */}
      <div className={`md:block ${isFilterExpanded ? 'block' : 'hidden'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Brand Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Marca
            </label>
            <select
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">Todas las marcas</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Toyota">Toyota</option>
              <option value="Seat">Seat</option>
            </select>
          </div>
          
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoría
            </label>
            <select
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              <option value="compacto">Compacto</option>
              <option value="familiar">Familiar</option>
              <option value="suv">SUV</option>
            </select>
          </div>
          
          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de vehículo
            </label>
            <select
              className="w-full py-2 px-3 border border-gray-300 rounded-md"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              <option value="">Todos los tipos</option>
              <option value="km0">Kilómetro 0</option>
              <option value="seminuevo">Seminuevo</option>
              <option value="ocasion">Ocasión</option>
            </select>
          </div>
          
          {/* Price Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Precio
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
              />
            </div>
          </div>
          
          {/* Year Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Año
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="number"
                placeholder="Min"
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
                value={yearRange.min}
                onChange={(e) => setYearRange({ ...yearRange, min: e.target.value })}
              />
              <span>-</span>
              <input
                type="number"
                placeholder="Max"
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
                value={yearRange.max}
                onChange={(e) => setYearRange({ ...yearRange, max: e.target.value })}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-between mt-4">
          <Button
            variant="outline"
            onClick={handleReset}
            className="flex items-center"
          >
            <X size={18} className="mr-1" />
            Limpiar filtros
          </Button>
          
          <Button
            variant="primary"
            onClick={handleApplyFilters}
            className="flex items-center"
          >
            <Filter size={18} className="mr-1" />
            Aplicar filtros
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;