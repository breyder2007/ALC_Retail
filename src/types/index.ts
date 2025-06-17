export interface Vehicle {
  id: string;
  title: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  oldPrice?: number;
  mileage: number;
  fuelType: string;
  transmission: string;
  color: string;
  vehicleType: 'km0' | 'seminuevo' | 'ocasion';
  category: 'compacto' | 'familiar' | 'suv';
  featured?: boolean;
  images: string[];
  description: string;
  features: string[];
}

export type VehicleCategory = 'compacto' | 'familiar' | 'suv';
export type VehicleType = 'km0' | 'seminuevo' | 'ocasion';