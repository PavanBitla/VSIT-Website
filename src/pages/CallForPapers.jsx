import React from 'react';
import { Leaf, CheckCircle } from 'lucide-react';

const TrackSection = ({ title, topics }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <h3 className="text-2xl font-bold text-blue-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div 
            key={index}
            className="flex items-start space-x-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors duration-200"
          >
            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <span className="text-gray-800">{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const trackData = [
  {
    title: "Track 1: Sustainable Commerce",
    topics: [
      "Eco-Innovation in Commerce and Management",
      "Responsible Leadership: Shaping Sustainable Futures",
      "Smart Cities, Sustainable Commerce: A Vision for Tomorrow",
      "Green Finance",
      "Sustainability Metrics for Commerce and Management",
      "Digital Transformation for Sustainable Commerce",
      "Supply Chain Resilience in Sustainable Commerce",
      "Global Collaboration for Sustainable Commerce and Management"
    ]
  },
  {
    title: "Track 2: Green IT and Digital Sustainability",
    topics: [
      "Green IT: Nurturing Sustainable Digital Ecosystems",
      "Digital Sustainability: Balancing Innovation and Environmental Responsibility",
      "E-waste Management and IT Sustainability",
      "Cyber Ecology",
      "Renewable Energy Integration in IT",
      "Smart Cities, Smart IT: Sustainable Urban Technology Solutions",
      "Blockchain for Sustainable Development in IT",
      "Data Ethics and Sustainability in the Digital Era",
      "Sustainable IT Governance and Compliance",
      "Collaborative Innovation for IT Sustainability"
    ]
  }
];

const CallForPapers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tl from-indigo-100 via-white to-indigo-50 py-16 px-8">
      {/* Hero Section */}
      <div className="relative bg-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-6">
              Call for Papers
            </h1>
            <p className="text-xl text-indigo-100">
              Embracing Sustainability for a Better Tomorrow
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to a transformative journey as we delve into the heart of sustainable living. Our conference theme invites you to explore innovative ideas, share experiences, and foster collaborations that will shape a more sustainable future.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Join us in this collective endeavor to create a lasting impact and leave an indelible mark on the path to a better and more environmentally conscious world.
            </p>
          </div>
        </div>

        {/* Conference Tracks */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center mb-12">Conference Tracks</h2>
          {trackData.map((track, index) => (
            <TrackSection 
              key={index}
              title={track.title}
              topics={track.topics}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
