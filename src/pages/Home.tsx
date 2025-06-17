import React from 'react';
import Hero from '../components/home/Hero';
import TabSection from '../components/home/TabSection';
import FeaturedCars from '../components/home/FeaturedCars';
import CategorySection from '../components/home/CategorySection';
import TestimonialSection from '../components/home/TestimonialSection';
import ProcessSection from '../components/home/ProcessSection';
import BrandCarousel from '../components/home/BrandCarousel';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <TabSection />
      </div>
      <BrandCarousel />
      <FeaturedCars />
      <CategorySection />
      <ProcessSection />
      <TestimonialSection />
    </>
  );
};

export default Home;