import React from 'react';
import { Link } from 'react-router-dom';

interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
  link: string;
}

const categories: Category[] = [
  {
    id: 'compacto',
    name: 'Compactos',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Perfectos para la ciudad, económicos y fáciles de aparcar.',
    link: '/catalogo?categoria=compacto'
  },
  {
    id: 'familiar',
    name: 'Familiares',
    image: 'https://images.pexels.com/photos/112452/pexels-photo-112452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Espacio y confort para toda la familia.',
    link: '/catalogo?categoria=familiar'
  },
  {
    id: 'suv',
    name: 'SUV',
    image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Versatilidad y seguridad para cualquier terreno.',
    link: '/catalogo?categoria=suv'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Explora por categoría</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.link}
              className="group"
            >
              <div className="relative rounded-lg overflow-hidden shadow-md h-64 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-1">{category.name}</h3>
                  <p className="text-gray-200 mb-3">{category.description}</p>
                  <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                    Ver vehículos
                    <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;