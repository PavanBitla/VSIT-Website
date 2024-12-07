import React from 'react';

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="w-12 h-12 bg-red-100 rounded-full mb-4"></div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      title: "Feature One",
      description: "Experience the power of our first amazing feature."
    },
    {
      title: "Feature Two",
      description: "Discover what makes our second feature special."
    },
    {
      title: "Feature Three",
      description: "Learn about our third groundbreaking feature."
    }
  ];

  return (
    <div className="py-16 px-8 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our amazing features that set us apart from the competition
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default Features;