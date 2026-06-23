import React, { useEffect, useRef } from 'react';

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-fade');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-tl from-indigo-100 via-purple-200 to-indigo-50 max-w-full min-h-screen mx-auto px-8 py-16">
      <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-12 tracking-wider drop-shadow-xl">
        About Us
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="scroll-fade p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Our Legacy</h2>
          <p className="text-indigo-800 leading-relaxed mb-4">
            Established in 2002, Vidyalankar School of Information Technology (VSIT) began with a modest intake 
            of 60 students for the B.Sc. IT program. Today, the college caters to over 3,200 students across 
            12 diverse programs, including undergraduate, postgraduate, and doctoral courses in Science, Commerce, 
            and Management.
          </p>
          <p className="text-indigo-800 leading-relaxed">
            Affiliated with the University of Mumbai and re-accredited with an 'A' grade by NAAC, VSIT is part 
            of the Vidyalankar Group, renowned for over six decades of excellence in education.
          </p>
        </div>

        {/* Right Section */}
        <div className="scroll-fade p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Vision & Mission</h2>
          <p className="text-indigo-800 leading-relaxed mb-4">
            Our vision is to be a globally recognized center for quality education, fostering innovation and 
            societal responsibility. We strive to nurture students' academic and ethical growth, ensuring they 
            are equipped to tackle real-world challenges with confidence.
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2 text-indigo-800">
            <li><strong>Integrity:</strong> Promoting trust and ethical behavior.</li>
            <li><strong>Excellence:</strong> Achieving high standards in all endeavors.</li>
            <li><strong>Responsibility:</strong> Instilling accountability and commitment.</li>
            <li><strong>Positivity:</strong> Encouraging well-being and collaboration.</li>
          </ul>
        </div>
      </div>

      {/* Additional Content */}
      <div className="scroll-fade p-8 mt-16 rounded-2xl bg-indigo-50 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold text-indigo-900 mb-6">Modern Facilities & Activities</h2>
        <p className="text-indigo-800 leading-relaxed mb-4">
          VSIT boasts a state-of-the-art infrastructure, including high-speed fiber-optic Wi-Fi, centralized 
          printing, and digital learning tools. Students actively participate in community outreach initiatives, 
          environmental drives, and cultural programs, fostering holistic development.
        </p>
        <p className="text-indigo-800 leading-relaxed">
          Our dedicated faculty ensures an engaging and innovative learning experience, combining theoretical 
          foundations with practical insights to prepare students for global opportunities.
        </p>
      </div>

      {/* Leadership Section */}
      <div className="scroll-fade p-8 mt-16 rounded-2xl bg-indigo-800 text-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
        <h2 className="text-3xl font-bold mb-6">Leadership</h2>
        <p className="leading-relaxed">
          Under the guidance of Dr. Rohini Kelkar, the principal of VSIT, the institution focuses on integrating 
          cutting-edge technology into education, fostering critical thinking, and preparing students for dynamic global challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
