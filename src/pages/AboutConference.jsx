import React, { useEffect } from 'react';

const AboutConference = () => {
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
    <div className="bg-gradient-to-tl from-indigo-100 via-white to-indigo-50 max-w-full min-h-screen mx-auto px-8 py-16">
      <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-12 tracking-wider drop-shadow-xl">
        About the Conference
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Section 1 */}
        <div className="scroll-fade p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <p className="text-indigo-800 leading-relaxed mb-4">
            Vidyalankar School of Information Technology (VSIT), Mumbai, which has been at the forefront 
            of research since 2014, is organizing its 11th conference this academic year, 2024-25. The 
            two-day Multidisciplinary International Conference, themed "EMBRACING SUSTAINABILITY FOR A 
            BETTER TOMORROW: UNVEILING A GREENER FUTURE", aims to bring together academicians, researchers, 
            and experts from across the globe to exchange insights and ideas.
          </p>
          <p className="text-indigo-800 leading-relaxed">
            This conference is an important opportunity to highlight key innovations in sustainability. Experts 
            from around the world will discuss strategies to reduce environmental impact and accelerate the global 
            shift toward eco-friendly practices.
          </p>
        </div>

        {/* Section 2 */}
        <div className="scroll-fade p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <p className="text-indigo-800 leading-relaxed mb-4">
            The primary objective of the conference is to foster conversations on innovative, eco-friendly 
            solutions that address environmental challenges and promote sustainable development. It will 
            engage participants in dialogue to encourage partnerships and collaborative efforts that 
            contribute to achieving global sustainability goals.
          </p>
          <p className="text-indigo-800 leading-relaxed">
            This year's conference will introduce new formats, including panel discussions and expert workshops 
            aimed at equipping participants with the necessary tools and knowledge to contribute meaningfully 
            to sustainable development goals.
          </p>
        </div>

        {/* Pre-conference Workshop */}
        <div className="scroll-fade p-8 rounded-2xl bg-indigo-50 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Pre-conference Workshop</h2>
          <p className="text-indigo-800 leading-relaxed mb-4">
            The conference will feature a pre-conference workshop on Basic Econometrics and Its Application 
            Using R Studio, designed to provide participants with valuable tools to analyze and model data 
            related to sustainability initiatives. The workshop will delve into real-world applications that 
            participants can use to make data-driven decisions in sustainability projects.
          </p>
          <p className="text-indigo-800 leading-relaxed">
            Participants will be guided through data analysis techniques, providing a foundation for their 
            future work in sustainability. Hands-on experience with R Studio will enhance their ability to 
            understand and tackle environmental challenges using data.
          </p>
        </div>

        {/* Panel Discussion Themes */}
        <div className="scroll-fade p-8 rounded-2xl bg-indigo-50 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Panel Discussion Themes</h2>
          <ul className="space-y-6 text-indigo-800">
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-indigo-600">1.</span>
              <span><strong>Role of Technology in Driving Sustainable Innovation:</strong> Exploring how 
              technology can foster innovative solutions for sustainability.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-indigo-600">2.</span>
              <span><strong>The Role of Community Engagement in Achieving Sustainability Goals:</strong> Understanding 
              how local communities can drive sustainability through active participation.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold mr-2 text-indigo-600">3.</span>
              <span><strong>Financing Sustainable Projects in Underserved Communities:</strong> Discussing 
              the financial mechanisms and strategies needed to fund sustainable projects in areas with 
              limited resources.</span>
            </li>
          </ul>
        </div>

        {/* Sustainability and Innovation in the Future */}
        <div className="scroll-fade p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
          <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Sustainability and Innovation in the Future</h2>
          <p className="text-indigo-800 leading-relaxed mb-4">
            The conference will also explore how sustainability intersects with technological innovation. 
            Special sessions will be dedicated to discussing how AI, IoT, and other technologies can be used 
            to create sustainable solutions for industries and governments. These insights are crucial for 
            developing a greener and more sustainable future.
          </p>
          <p className="text-indigo-800 leading-relaxed">
            As we progress into a new era of technological advancements, sustainability will become an integral 
            part of the future. This conference will highlight these exciting possibilities and help participants 
            realize their role in shaping this future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutConference;
 