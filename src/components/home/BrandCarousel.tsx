import React from 'react';

// Define the array of brand objects
const brands = [
  { name: 'VOLKSWAGEN', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHc09dCaSjCu0x098DETJcO4_NhEcUSeVbXQ&s' },
  { name: 'HYUNDAI', image: 'https://static.vecteezy.com/system/resources/previews/020/500/661/large_2x/hyundai-logo-brand-symbol-with-name-black-design-south-korean-car-automobile-illustration-free-vector.jpg' },
  { name: 'MG', image: 'https://cdn.worldvectorlogo.com/logos/mg.svg' },
  { name: 'PEUGEOT', image: 'https://static.vecteezy.com/system/resources/previews/020/500/602/non_2x/peugeot-brand-logo-symbol-with-name-black-design-french-car-automobile-illustration-free-vector.jpg' },
  { name: 'CITROEN', image: 'https://static.vecteezy.com/system/resources/previews/020/499/856/non_2x/citroen-brand-new-logo-car-symbol-with-name-black-design-french-automobile-illustration-free-vector.jpg' },
  { name: 'SUZUKI', image: 'https://images.seeklogo.com/logo-png/19/1/suzuki-logo-png_seeklogo-194731.png' },
  { name: 'KGM', image: 'https://i.pinimg.com/736x/8e/8f/25/8e8f257f48bfcc054029aa877fc6d318.jpg' },
  { name: 'OPEL', image: 'https://i.pinimg.com/736x/1b/cf/c6/1bcfc6f4715c58c0d3ac7d5fb53b7435.jpg' },
  { name: 'JEEP', image: 'https://brandlogos.net/wp-content/uploads/2022/08/jeep-logo_brandlogos.net_9pgy3-512x512.png' },
];

const BrandCarousel: React.FC = () => {
  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">Nuestras Marcas</h2>
        <div className="relative overflow-hidden">
          <style>
            {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-180px * ${brands.length}));
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
              display: inline-flex;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
            `}
          </style>
          <div className="flex whitespace-nowrap animate-scroll">
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div key={`brand-1-${index}`} className="inline-flex flex-shrink-0 w-[180px] h-[80px] mx-2 items-center justify-center">
                <img
                  src={brand.image}
                  alt={`Logo ${brand.name}`}
                  className="w-full h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/180x100/CCCCCC/333333?text=${brand.name}`; }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div key={`brand-2-${index}`} className="inline-flex flex-shrink-0 w-[180px] h-[80px] mx-2 items-center justify-center">
                <img
                  src={brand.image}
                  alt={`Logo ${brand.name}`}
                  className="w-full h-full object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  onError={(e) => { e.currentTarget.src = `https://placehold.co/180x100/CCCCCC/333333?text=${brand.name}`; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;