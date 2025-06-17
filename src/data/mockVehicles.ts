import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  // Seminuevos (vehículos premium de 1-2 años)
  {
    id: '1',
    title: 'BMW M340i xDrive Touring',
    brand: 'BMW',
    model: 'Serie 3 Touring',
    year: 2022,
    price: 59900,
    oldPrice: 65000,
    mileage: 12000,
    fuelType: 'Gasolina',
    transmission: 'Automático',
    color: 'Azul M Sport',
    vehicleType: 'seminuevo',
    category: 'familiar',
    featured: true,
    images: [
      'https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Espectacular BMW M340i xDrive Touring con paquete M Sport Pro. Motor de 374CV, sonido deportivo M Sport, interior en cuero Dakota.',
    features: ['Techo panorámico', 'Sonido Harman Kardon', 'Head-up display', 'Asientos M Sport', 'Llantas 19" M']
  },
  {
    id: '2',
    title: 'Audi RS e-tron GT',
    brand: 'Audi',
    model: 'RS e-tron GT',
    year: 2022,
    price: 129900,
    mileage: 8000,
    fuelType: 'Eléctrico',
    transmission: 'Automático',
    color: 'Gris Daytona',
    vehicleType: 'seminuevo',
    category: 'familiar',
    featured: true,
    images: [
      'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/248704/pexels-photo-248704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Impresionante Audi RS e-tron GT. 646CV de potencia, 0 a 100 km/h en 3.3 segundos. Máximas prestaciones con cero emisiones.',
    features: ['Faros Matrix LED', 'Techo carbono', 'Sonido Bang & Olufsen', 'Llantas 21"', 'Frenos carbono-cerámica']
  },

  // Ocasión (3-5 años, buen estado, precio accesible)
  {
    id: '3',
    title: 'Volkswagen Passat 2.0 TDI Elegance',
    brand: 'Volkswagen',
    model: 'Passat',
    year: 2019,
    price: 19900,
    mileage: 89000,
    fuelType: 'Diesel',
    transmission: 'Manual',
    color: 'Plata',
    vehicleType: 'ocasion',
    category: 'familiar',
    featured: true,
    images: [
      'https://images.pexels.com/photos/892522/pexels-photo-892522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1011793/pexels-photo-1011793.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Volkswagen Passat diésel en excelente estado. Perfecto para familia y viajes largos. Muy económico en consumo.',
    features: ['Navegador', 'Control de crucero', 'Sensores parking', 'Climatizador trizona', 'Apple CarPlay']
  },
  {
    id: '4',
    title: 'Toyota RAV4 2.5 Hybrid Advance',
    brand: 'Toyota',
    model: 'RAV4',
    year: 2018,
    price: 23500,
    mileage: 95000,
    fuelType: 'Híbrido',
    transmission: 'Automático',
    color: 'Blanco',
    vehicleType: 'ocasion',
    category: 'suv',
    featured: false,
    images: [
      'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Toyota RAV4 Hybrid con sistema de tracción integral. Fiabilidad Toyota con el ahorro del sistema híbrido.',
    features: ['Cámara trasera', 'Toyota Safety Sense', 'Llantas 18"', 'Climatizador bizona', 'Portón eléctrico']
  },

  // Kilómetro 0 (nuevos con descuento)
  {
    id: '5',
    title: 'Mercedes-AMG A35 4MATIC+',
    brand: 'Mercedes',
    model: 'Clase A AMG',
    year: 2023,
    price: 54900,
    oldPrice: 59900,
    mileage: 0,
    fuelType: 'Gasolina',
    transmission: 'Automático',
    color: 'Gris Montaña',
    vehicleType: 'km0',
    category: 'compacto',
    featured: true,
    images: [
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Nuevo Mercedes-AMG A35 4MATIC+. 306CV de pura deportividad con el sello AMG. Máximo equipamiento y prestaciones.',
    features: ['Paquete AMG Night', 'MBUX con realidad aumentada', 'Asientos AMG Performance', 'Sound System', 'Aerodinámica AMG']
  },
  {
    id: '6',
    title: 'Seat Ateca 2.0 TDI FR DSG 4Drive',
    brand: 'Seat',
    model: 'Ateca',
    year: 2023,
    price: 39900,
    oldPrice: 43500,
    mileage: 0,
    fuelType: 'Diesel',
    transmission: 'Automático DSG',
    color: 'Rojo Velvet',
    vehicleType: 'km0',
    category: 'suv',
    featured: true,
    images: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    description: 'Nuevo Seat Ateca FR con tracción integral 4Drive. Deportividad y versatilidad en formato SUV. Máximo equipamiento.',
    features: ['Cuadro digital', 'Navegador 9.2"', 'Techo panorámico', 'Asistente de conducción', 'Cámara 360°']
  }
];