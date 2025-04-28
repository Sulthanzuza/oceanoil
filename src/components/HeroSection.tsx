import React, { useEffect, useState } from 'react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/699315878?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute top-0 left-0 w-full h-full scale-150 "
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 "></div>
      </div>

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-xl text-white">
        <h1
  className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} mix-blend-difference`}
  style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}
>
  OceanOil Field Drilling
</h1>

          <p
            className={`text-lg md:text-xl mb-8 transition-opacity duration-1000 ease-in-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.5)' }}
          >
            Leading provider of offshore drilling services with a commitment to safety, 
            efficiency, and environmental responsibility.
          </p>
          <div
            className={`flex flex-wrap gap-4 transition-opacity duration-1000 ease-in-out delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white border border-transparent px-6 py-3 rounded-md transition duration-300"
              style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.3)' }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scrollDown"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
