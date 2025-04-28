import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

import FleetSection from '../components/FleetSection';
import ValuesSection from '../components/ValuesSection';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FleetSection />
      <ValuesSection />
    </div>
  );
};

export default Home;