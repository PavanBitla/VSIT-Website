import React from "react";
import { FaRegFileAlt, FaMapMarkerAlt, FaUserEdit } from "react-icons/fa"; // Icons
import "../styles/components/hero.css";

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url('/src/components/file.jpeg')`,
      }}
    >
      <div className="hero-grid animate-fade-in">
        <div className="hero-content">
          <h1 className="text-3xl font-extrabold mb-6 text-gray-800 text-center">
            Vidyalankar - Commerce Management Technology
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center">
            Multi-Disciplinary International Conference
          </p>
          <div className="border-t border-gray-200 pt-6 w-full">
            <h2 className="text-xl font-semibold mb-3 text-gray-800 text-center">
              Conference Theme
            </h2>
            <div className="theme-text border-l-4 border-blue-500">
              Welcome to a transformative journey as we delve into the heart of
              sustainable living. Our conference theme,{" "}
              <strong className="text-blue-600">
                "Embracing Sustainability for a Better Tomorrow,"
              </strong>{" "}
              invites you to explore innovative ideas, share experiences, and
              foster collaborations that will shape a more sustainable future.
            </div>
            <div className="theme-text mt-4 border-l-4 border-green-500">
              Our event will delve into the critical role of sustainable
              development in shaping a greener tomorrow. With a focus on{" "}
              <strong className="text-green-600">
                Decent Work and Economic Growth
              </strong>{" "}
              and
              <strong className="text-green-600">
                {" "}
                Industry, Innovation, and Infrastructure
              </strong>
              , we will examine how these pillars can be integrated to create a
              more equitable and environmentally responsible world.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="info-card">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h3>
            <ul className="quick-links-list space-y-2 text-sm text-gray-700">
              <li>
                <a
                  href="https://forms.gle/b6ym5Krfs5kDH2sp7"
                  className="quick-link flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaUserEdit className="quick-link-icon" />
                  <span>Register Now</span>
                </a>
              </li>
              <li>
                <a
                  href="https://shorturl.at/dM3W9"
                  className="quick-link flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRegFileAlt className="quick-link-icon" />
                  <span>Submission Guidelines</span>
                </a>
              </li>
              <li>
                <a
                  href="https://vsit.edu.in"
                  className="quick-link flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMapMarkerAlt className="quick-link-icon" />
                  <span>Visit Us</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="info-card cash-prize-card">
            <h3 className="text-lg font-bold text-white mb-4 text-center">
              🎉 Exciting Cash Prizes 🏆
            </h3>
            <p className="text-base text-white mb-4 text-center">
              Win amazing rewards for your exceptional research!
            </p>
            <div className="cash-prizes-details bg-white p-4 rounded-lg shadow-md">
              <p className="text-2xl font-extrabold text-green-600 text-center">
                💸 ₹ 5000 💸
              </p>
              <p className="text-sm text-gray-700 mt-2 text-center">
                Trackwise Best Research Paper (per paper)
              </p>
              <p className="text-sm text-center mt-4 font-semibold text-gray-800">
                <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full">
                  Note:
                </span>{" "}
                Best paper award is only applicable to physical presenters.
              </p>
            </div>
          </div>

          <div className="info-card">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Important Dates
            </h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <strong>Last Day of Registration:</strong> 15th Dec 2024
              </li>
              <li>
                <strong>Paper Submission Deadline:</strong> 15th Dec 2024
              </li>
              <li>
                <strong>Workshop:</strong> 17th Jan 2025
              </li>
              <li>
                <strong>Conference:</strong> 18th Jan 2025
              </li>
            </ul>
          </div>

          <div className="info-card">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Submission Instructions
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
              <li>Paper should be submitted through the website.</li>
              <li>Each paper must include an abstract, keywords, and references.</li>
              <li>Submit all papers in Word format.</li>
              <li>Include author details: name, email, and phone number.</li>
              <li>Number pages at the bottom right corner.</li>
              <li>
                Use Times New Roman, font size 12, and justify text in a single
                column.
              </li>
              <li>Abstracts: max 250 words; full paper: max 6 pages.</li>
              <li>Follow APA referencing style.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 info-card text-center">
        <h3 className="text-xl font-bold text-gray-800">
          Join Us in Shaping the Future!
        </h3>
        <p className="text-gray-600 mt-2">
          Be a part of this exciting journey and contribute to sustainable
          development.
        </p>
      </div>
    </div>
  );
};

export default Hero;
