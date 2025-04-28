import React, { useState, useEffect } from 'react';
import fleet1 from '../assets/fleet1.jpg';
import fleet2 from '../assets/fleet2.jpg';
import fleet3 from '../assets/fleet3.jpg';

const FleetSection: React.FC = () => {
  const fleetImages = [fleet1, fleet2, fleet3];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [fade, setFade] = useState(false);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % fleetImages.length);
        setNextImageIndex((prev) => (prev + 1) % fleetImages.length);
        setFade(false); // End fade
      }, 1000); // Match transition duration
    }, 5000);
    
    return () => clearInterval(interval);
  }, [fleetImages.length]);
  
  return (
    <section className="relative py-32 h-[600px] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        {/* Next image (always visible) */}
        <img
          src={fleetImages[nextImageIndex]}
          alt="Next fleet background"
          className="w-full h-full object-cover absolute inset-0"
        />
        
        {/* Current image (fading out) */}
        <img
          src={fleetImages[currentImageIndex]}
          alt="Current fleet background"
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* Black overlay with 10% opacity */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Fleet</h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg mb-10 text-white drop-shadow-[0_0_2px_white]">
            We own, operate and manage Offshore Jack Up Rigs, AHWU and a wide range of offshore support vessels 
            in the region with expansion plans in place to increase our offshore drilling fleet during 2021.
          </p>
          <button className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-md hover:bg-blue-100 transition duration-300 transform hover:-translate-y-1">
            Read More
          </button>
        </div>
      </div>
      
      {/* Image Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-20">
        <div className="flex space-x-2">
          {fleetImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white w-4' : 'bg-white/50'
              }`}
              onClick={() => {
                setFade(true);
                setTimeout(() => {
                  setCurrentImageIndex(index);
                  setNextImageIndex((index + 1) % fleetImages.length);
                  setFade(false);
                }, 1000);
              }}
              aria-label={`View fleet image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;