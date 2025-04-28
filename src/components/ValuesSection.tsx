import React from 'react';
import { Shield, Award, Heart, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import safety from '../assets/safety.jpeg'
import oper from '../assets/ope.jpeg'
import env from '../assets/env.jpeg'
import relai from '../assets/relai.jpeg'

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
  isLeft: boolean; // To alternate left/right position
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, imageUrl, isLeft }) => (
  <motion.div
  className={`flex items-center justify-between space-x-8 mb-16 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <div className="flex-1">
    <img
      src={imageUrl}
      alt={title}
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
  </div>

  <div className="flex-1">
    <div className="text-blue-500 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-blue-900">{title}</h3>
    <p className="text-gray-600 text-justify px-4">{description}</p> {/* Added px-4 for padding */}
  </div>
</motion.div>

);

const ValuesSection: React.FC = () => {
  const values = [
    {
      icon: <Shield size={32} />,
      title: "Safety First",
      description: "We uphold an uncompromising commitment to safety, ensuring the well-being of our people, the protection of our assets, and the preservation of the environment. Every operation is executed with rigorous safety protocols, proactive risk management, and a strong safety culture ingrained at every level of our organization.Through continuous training, advanced safety technologies, and strict compliance with international standards, we deliver operational excellence without compromising on health, safety, and environmental (HSE) responsibilities.",
      image:safety
    },
    {
      icon: <Award size={32} />,
      title: "Operational Excellence",
      description: "We are committed to delivering operational excellence by maintaining the highest standards of quality, efficiency, and performance across all our services. Through continuous improvement, innovation, and strict adherence to best practices, we ensure that every project is executed with precision, reliability, and exceptional results.Our focus on efficiency and quality not only enhances productivity but also reinforces our reputation as a trusted leader in offshore drilling and support services.",
      image:oper
    },
    {
      icon: <Heart size={32} />,
      title: "Environmental Stewardship",
      description: "We are committed to responsible environmental practices and sustainable operations in sensitive marine ecosystems. Our approach ensures minimal environmental impact by prioritizing eco-friendly technologies, waste management, and adherence to regulatory standards. By integrating sustainability into every aspect of our operations, we aim to protect the environment for future generations while meeting the needs of our industry.",
      image:env
    },
    {
      icon: <Clock size={32} />,
      title: "Reliability",
      description: "Our clients can count on us to deliver consistent, dependable service with minimal downtime. With our robust processes, skilled teams, and cutting-edge technology, we ensure seamless operations that meet and exceed expectations. We take pride in our ability to maintain reliability across all aspects of our services, from drilling to project management.",
      image:relai
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            The principles that guide our operations and define our company culture.
          </p>
        </div>

        {/* Values with alternating images and content */}
        {values.map((value, index) => (
          <ValueCard
            key={index}
           
            title={value.title}
            description={value.description}
            imageUrl={value.image}
            isLeft={index % 2 === 0} // Alternate left/right position
          />
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
