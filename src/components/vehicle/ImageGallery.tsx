import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const fullscreenGalleryClass = isFullscreen 
    ? 'fixed inset-0 z-50 bg-black flex flex-col justify-center items-center p-6'
    : 'hidden';
  
  return (
    <div className="mb-8">
      {/* Main Image Container */}
      <div className="relative rounded-lg overflow-hidden mb-2 bg-gray-100">
        <img 
          src={images[currentIndex]} 
          alt={`${title} - Imagen ${currentIndex + 1}`}
          className="w-full object-cover h-96 md:h-[500px]"
        />
        
        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white hover:text-blue-600 transition-colors"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white hover:text-blue-600 transition-colors"
          aria-label="Imagen siguiente"
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Fullscreen Button */}
        <button 
          onClick={toggleFullscreen}
          className="absolute bottom-2 right-2 bg-white/80 rounded-full p-2 text-gray-800 hover:bg-white hover:text-blue-600 transition-colors"
          aria-label="Ver a pantalla completa"
        >
          <Maximize size={20} />
        </button>
        
        {/* Image Counter */}
        <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-opacity ${
              index === currentIndex ? 'ring-2 ring-blue-600' : 'opacity-70 hover:opacity-100'
            }`}
          >
            <img 
              src={image} 
              alt={`${title} - Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
      
      {/* Fullscreen Gallery */}
      <div className={fullscreenGalleryClass}>
        <div className="absolute top-4 right-4 z-10">
          <button 
            onClick={toggleFullscreen}
            className="bg-white/20 rounded-full p-2 text-white hover:bg-white/40 transition-colors"
            aria-label="Cerrar pantalla completa"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="relative w-full max-w-4xl h-auto">
          <img 
            src={images[currentIndex]} 
            alt={`${title} - Pantalla completa`}
            className="w-full h-full object-contain"
          />
          
          <button 
            onClick={handlePrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 rounded-full p-3 text-white hover:bg-black/60 transition-colors"
            aria-label="Imagen anterior"
          >
            <ChevronLeft size={30} />
          </button>
          <button 
            onClick={handleNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 rounded-full p-3 text-white hover:bg-black/60 transition-colors"
            aria-label="Imagen siguiente"
          >
            <ChevronRight size={30} />
          </button>
        </div>
        
        <div className="absolute bottom-6 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;