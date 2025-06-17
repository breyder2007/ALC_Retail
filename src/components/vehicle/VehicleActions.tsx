import React, { useState } from 'react';
import { Calendar, Phone, Calculator, Share2, Heart } from 'lucide-react';
import Button from '../ui/Button';

interface VehicleActionsProps {
  vehicleId: string;
  vehicleTitle: string;
  price: number;
}

const VehicleActions: React.FC<VehicleActionsProps> = ({ vehicleId, vehicleTitle, price }) => {
  const [isSaved, setIsSaved] = useState(false);
  const [isFinanceCalculatorOpen, setIsFinanceCalculatorOpen] = useState(false);
  const [financingData, setFinancingData] = useState({
    downPayment: Math.round(price * 0.2),
    term: 60,
    interestRate: 5.95
  });
  
  const toggleSaved = () => {
    setIsSaved(!isSaved);
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: vehicleTitle,
        url: window.location.href
      })
      .catch(error => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Enlace copiado al portapapeles'))
        .catch(error => console.log('Error copying to clipboard', error));
    }
  };
  
  const calculateMonthlyPayment = () => {
    const principal = price - financingData.downPayment;
    const monthlyRate = financingData.interestRate / 100 / 12;
    const termMonths = financingData.term;
    
    const monthlyPayment = principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths) / (Math.pow(1 + monthlyRate, termMonths) - 1);
    
    return Math.round(monthlyPayment);
  };
  
  const monthlyPayment = calculateMonthlyPayment();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
      {/* Primary Actions */}
      <div className="space-y-3 mb-6">
        <Button variant="primary" size="lg" fullWidth icon={<Calendar size={18} />}>
          Agendar prueba de conducción
        </Button>
        
        <a href="tel:914840950">
          <Button variant="outline" size="lg" fullWidth icon={<Phone size={18} />}>
            Llamar: 914 840 950
          </Button>
        </a>
      </div>
      
      {/* Finance Calculator Toggle */}
      <div className="mb-6">
        <button 
          className="flex items-center justify-between w-full text-left"
          onClick={() => setIsFinanceCalculatorOpen(!isFinanceCalculatorOpen)}
        >
          <div className="flex items-center">
            <Calculator size={18} className="text-blue-600 mr-2" />
            <span className="font-semibold">Calcular financiación</span>
          </div>
          <svg 
            className={`w-5 h-5 transition-transform ${isFinanceCalculatorOpen ? 'transform rotate-180' : ''}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        {isFinanceCalculatorOpen && (
          <div className="mt-4 p-4 bg-gray-50 rounded-md">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Entrada
              </label>
              <input
                type="number"
                value={financingData.downPayment}
                onChange={(e) => setFinancingData({...financingData, downPayment: Number(e.target.value)})}
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Plazo (meses)
              </label>
              <select
                value={financingData.term}
                onChange={(e) => setFinancingData({...financingData, term: Number(e.target.value)})}
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
              >
                <option value={36}>36 meses</option>
                <option value={48}>48 meses</option>
                <option value={60}>60 meses</option>
                <option value={72}>72 meses</option>
                <option value={84}>84 meses</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de interés (%)
              </label>
              <input
                type="number"
                step="0.01"
                value={financingData.interestRate}
                onChange={(e) => setFinancingData({...financingData, interestRate: Number(e.target.value)})}
                className="w-full py-2 px-3 border border-gray-300 rounded-md"
              />
            </div>
            
            <div className="bg-blue-50 p-4 rounded-md text-center">
              <p className="text-sm text-blue-800 mb-1">Cuota mensual estimada:</p>
              <p className="text-2xl font-bold text-blue-900">{monthlyPayment}€</p>
              <p className="text-xs text-blue-700 mt-1">*Cálculo orientativo</p>
            </div>
            
            <div className="mt-4">
              <Button variant="primary" fullWidth>
                Solicitar financiación
              </Button>
            </div>
          </div>
        )}
      </div>
      
      {/* Secondary Actions */}
      <div className="flex space-x-3">
        <Button 
          variant="ghost" 
          className="flex-1"
          onClick={toggleSaved}
        >
          <Heart size={18} className={`mr-2 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
          {isSaved ? 'Guardado' : 'Guardar'}
        </Button>
        
        <Button 
          variant="ghost" 
          className="flex-1"
          onClick={handleShare}
        >
          <Share2 size={18} className="mr-2" />
          Compartir
        </Button>
      </div>
    </div>
  );
};

export default VehicleActions;