import React, { useState, useEffect, useRef } from 'react';
import { Drill, Anchor, Wrench, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import project from '../assets/pr.jpeg';
import offshore from '../assets/offshore.jpeg';
import well from '../assets/Well Intervention (2).png';

const services = [
  {
    title: "Drilling and well Intervention",
    icon: <Drill size={32} />,
    description: "Our offshore Jack-up Rigs provide high-efficiency drilling and well intervention services. With state-of-the-art equipment and highly skilled crews, we ensure safety, reliability, and quality in all operations. We specialize in both production and exploration drilling, offering a wide range of well intervention services.",
    features: [
      "Production and Exploration Drilling",
      "MODU Rental",
      "Hydraulic Workover Services",
      "Snubbing Operations",
      "Plug & Abandonment"
    ],
    image: well
  },
  {
    title: "Offshore Support",
    icon: <Anchor size={32} />,
    description: "Our offshore support services ensure smooth project execution, providing essential logistics, vessel operations, and crew management. Tailored to meet the demanding needs of offshore projects, we specialize in managing offshore assets to support drilling, production, and maintenance activities.",
    features: [
      "PSV (Platform Supply Vessels)",
      "AHTS (Anchor Handling Tug Supply)",
      "Crew Boat Operations",
      "Support Barges",
      "Accommodation Vessels"
    ],
    image: offshore
  },
  {
    title: "Project Management",
    icon: <Wrench size={32} />,
    description: "Our project management services oversee all aspects of offshore drilling and well intervention operations. With extensive experience in managing complex projects, we ensure safe and efficient execution, providing comprehensive planning, risk management, and oversight throughout the entire project lifecycle.",
    features: [
      "Project Planning & Execution",
      "Risk Management",
      "Manning & Manpower Management",
      "Rig Management",
      "Engineering & Consulting"
    ],
    image: project
  }
];

const ServicesSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setCurrent((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1)),
      5000
    );

    return () => resetTimeout();
  }, [current]);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleNext = () => {
    setCurrent((prevIndex) => (prevIndex === services.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrent((prevIndex) => (prevIndex === 0 ? services.length - 1 : prevIndex - 1));
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 md:mb-4 drop-shadow-md">
            Specialized Services
          </h2>
          <div className="w-20 md:w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg bg-white flex flex-col md:flex-row h-auto md:h-[500px] lg:h-[550px]">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute z-10 top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-500/30 text-white p-2 md:p-3 rounded-full hover:bg-gray-600 transition"
            aria-label="Previous service"
          >
            <ChevronLeft size={24} className="md:w-7 md:h-7" />
          </button>

          <button
            onClick={handleNext}
            className="absolute z-10 top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-gray-500/30 text-white p-2 md:p-3 rounded-full hover:bg-gray-600 transition"
            aria-label="Next service"
          >
            <ChevronRight size={24} className="md:w-7 md:h-7" />
          </button>

          {/* Image Section */}
          <div className="w-full md:w-1/2 h-64 sm:h-80 md:h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={services[current].image}
                alt={services[current].title}
                className="object-cover w-full h-full"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full"
              >
                <div className="flex items-start mb-3 md:mb-4">
                  <h2 
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold ml-3 text-blue-700 border-b-2 md:border-b-4 border-blue-900 pb-1 uppercase line-clamp-2"
                    style={{ 
                      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.25)',
                      wordBreak: 'break-word'
                    }}
                  >
                    {services[current].title}
                  </h2>
                </div>
                
                <div className="flex-grow overflow-y-auto">
                  <p className="text-gray-600 text-sm sm:text-base md:text-[15px] lg:text-base text-justify mb-3 md:mb-4 leading-snug md:leading-normal">
                    {services[current].description}
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm sm:text-base md:text-[15px] lg:text-base">
                    {services[current].features?.map((feature, index) => (
                      <li key={index} className="leading-snug">{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 md:mt-6">
                  <button
                    className="w-full sm:w-auto relative inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 overflow-hidden font-semibold text-blue-700 border-2 border-blue-700 rounded-lg group hover:bg-blue-700 transition-colors duration-300"
                  >
                    <span className="relative z-10 group-hover:text-white text-sm sm:text-base">
                      Read More
                    </span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;