import React from 'react';

const Downloads = () => {
  return (
    <div className="bg-white-50 py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Downloads</h2>
        <ul className="space-y-4">
          <li>
            <a href="#" className="text-red-600 hover:text-red-700 flex items-center">
              <span className="mr-2">📄</span>
              Sample Paper Download
            </a>
          </li>
          <li>
            <a href="#" className="text-red-600 hover:text-red-700 flex items-center">
              <span className="mr-2">📄</span>
              V-CSIT Conference Proceedings 2021
            </a>
          </li>
          <li>
            <a href="#" className="text-red-600 hover:text-red-700 flex items-center">
              <span className="mr-2">📄</span>
              UGC Journal 2020
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Downloads;