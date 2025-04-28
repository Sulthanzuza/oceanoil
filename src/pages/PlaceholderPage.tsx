import React from 'react';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="min-h-screen pt-20 px-4 flex items-center justify-center">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">{title}</h1>
        <p className="text-gray-600 mb-8">
          This page is under construction. Please check back soon for updates.
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default PlaceholderPage;