import React from 'react';

import { motion } from 'framer-motion';
import safety from '../assets/safety.jpeg';
import oper from '../assets/ope.jpeg';
import env from '../assets/env.jpeg';
import relai from '../assets/relai.jpeg';

interface ValueCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isLeft: boolean;
}

const ValueCard: React.FC<ValueCardProps> = ({  title, description, imageUrl, isLeft }) => (
  <motion.div
    className={`flex flex-col lg:flex-row items-center justify-between gap-8 mb-16 lg:mb-24 ${
      isLeft ? 'lg:flex-row-reverse' : 'lg:flex-row'
    }`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
  >
    {/* Image Section */}
    <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden rounded-xl shadow-lg">
      <motion.img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      />
    </div>

    {/* Content Section */}
    <div className="w-full lg:w-1/2">
      <div className="flex flex-col items-start">
        <div className="flex items-center mb-4">
          <div className="text-blue-600 p-3 bg-blue-50 rounded-full">
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold ml-4 text-blue-900">{title}</h3>
        </div>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  </motion.div>
);

const ValuesSection: React.FC = () => {
  const values = [
    {
     
      title: "Safety First",
      description: "We uphold an uncompromising commitment to safety, ensuring the well-being of our people, the protection of our assets, and the preservation of the environment. Every operation is executed with rigorous safety protocols, proactive risk management, and a strong safety culture ingrained at every level of our organization. Through continuous training, advanced safety technologies, and strict compliance with international standards, we deliver operational excellence without compromising on health, safety, and environmental (HSE) responsibilities.",
      image: safety
    },
    {
     
      title: "Operational Excellence",
      description: "We are committed to delivering operational excellence by maintaining the highest standards of quality, efficiency, and performance across all our services. Through continuous improvement, innovation, and strict adherence to best practices, we ensure that every project is executed with precision, reliability, and exceptional results. Our focus on efficiency and quality not only enhances productivity but also reinforces our reputation as a trusted leader in offshore drilling and support services.",
      image: oper
    },
    {
      
      title: "Environmental Stewardship",
      description: "We are committed to responsible environmental practices and sustainable operations in sensitive marine ecosystems. Our approach ensures minimal environmental impact by prioritizing eco-friendly technologies, waste management, and adherence to regulatory standards. By integrating sustainability into every aspect of our operations, we aim to protect the environment for future generations while meeting the needs of our industry.",
      image: env
    },
    {
    
      title: "Reliability",
      description: "Our clients can count on us to deliver consistent, dependable service with minimal downtime. With our robust processes, skilled teams, and cutting-edge technology, we ensure seamless operations that meet and exceed expectations. We take pride in our ability to maintain reliability across all aspects of our services, from drilling to project management.",
      image: relai
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            Our Core Values
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600 text-base sm:text-lg">
            The principles that guide our operations and define our company culture.
          </p>
        </motion.div>

        {/* Values Cards */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {values.map((value, index) => (
            <ValueCard
              key={index}
             
              title={value.title}
              description={value.description}
              imageUrl={value.image}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;