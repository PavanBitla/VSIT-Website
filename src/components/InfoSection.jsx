import React from 'react';

const InfoCard = ({ title, children }) => {
  return (
    <div className="gradient-card p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
};

const InfoSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8 py-16">
    
    </div>
  );
};

export default InfoSection;
