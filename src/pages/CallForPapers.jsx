import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const TrackSection = ({ title, topics }) => {
  return (
    <div
      className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
      data-aos="fade-up" // Add AOS animation
      data-aos-duration="1000"
    >
      <h3 className="text-3xl font-semibold text-blue-900 mb-6">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="flex items-start space-x-3 p-4 rounded-lg bg-blue-50 hover:bg-blue-200 transition-colors duration-300"
            data-aos="fade-up" // Add AOS animation for each topic item
            data-aos-duration="1200"
            data-aos-delay={index * 100} // Add delay for staggered animation
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
      "Global Collaboration for Sustainable Commerce and Management",
    ],
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
      "Collaborative Innovation for IT Sustainability",
    ],
  },
];

const CallForPapers = () => {
  useEffect(() => {
    // Initialize AOS animation
    AOS.init({
      duration: 1200, // Default duration for animations
      once: true, // Ensure animations happen only once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-tl from-indigo-100 via-purple-300 to-indigo-50 py-16 px-8">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white py-36 rounded-lg"
        style={{ backgroundImage: 'url(https://www.example.com/hero-bg.jpg)' }}
        data-aos="fade-in" // Hero section animation
        data-aos-duration="1500"
      >
        <div className="absolute inset-0 bg-gradient-to-tl from-indigo-800 via-purple-700 to-indigo-600 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-wide drop-shadow-lg">
            Call for Papers: Sustainability in the Digital Era
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-200 font-light">
            Join us to explore groundbreaking ideas and collaborative opportunities.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Welcome Section */}
        <div
          className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12"
          data-aos="fade-up" // Animation for welcome section
          data-aos-duration="1000"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Welcome to the *Sustainable Commerce Conference*—a gathering of thought leaders, innovators, and change-makers. Our conference focuses on fostering solutions that bridge sustainability with technology, commerce, and society.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This event will explore diverse topics within the fields of sustainability, green IT, and digital transformation.
            </p>
          </div>
        </div>

        {/* Conference Tracks */}
        <div id="conference-tracks" className="space-y-12">
          <h2
            className="text-4xl font-semibold text-center text-blue-900 mb-12"
            data-aos="fade-in" // Animation for title
            data-aos-duration="1000"
          >
            Conference Tracks
          </h2>
          {trackData.map((track, index) => (
            <TrackSection key={index} title={track.title} topics={track.topics} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white py-6">
        <div className="text-center">
          <p>&copy; 2024 Sustainable Commerce Conference. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default CallForPapers;
