import React, { useState } from 'react';

const PDFViewer = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const pdfFiles = [
    { name: "February 2020", path: "src/pages/DOWNLOADS/February2020.pdf" },
    { name: "Non-UGC IJRMSS Volume 7 Issue 1 (II) January - March 2019", path: "src/pages/DOWNLOADS/Non-UGC IJRMSS Volume 7 Issue 1 (II) January - March 2019.pdf" },
    { name: "Pradnyaa 2021 First Issue", path: "src/pages/DOWNLOADS/pradnyaa2021-First issue.pdf" },
    { name: "UGC Journal 2019", path: "src/pages/DOWNLOADS/UGC_Journal_2019.pdf" },
    { name: "VCMT 2017-2018 Journal", path: "src/pages/DOWNLOADS/VCMT 2017-2018 Journal.pdf" },
    { name: "VCMT 2018", path: "src/pages/DOWNLOADS/VCMT- 2018.pdf" },
    { name: "VCMT Feb 2021", path: "src/pages/DOWNLOADS/VCMT Feb 2021.pdf" },
    { name: "VCMT ISBN Dec 2021 Final", path: "src/pages/DOWNLOADS/VCMT ISBN Dec 2021 Final.pdf" },
    { name: "VCMT Feb 2021 UGC Issue 1", path: "src/pages/DOWNLOADS/VCMT_Feb_2021_UGC_Issue1.pdf" },
    { name: "VCMT Feb 2021 UGC Issue 2", path: "src/pages/DOWNLOADS/VCMT_Feb_2021_UGC_Issue2.pdf" },
    { name: "VCMT Brochure 2024", path: "src/pages/DOWNLOADS/VCMT_2024_Brochure 4pgs.pdf" },
    { name: "VCMT Feb 2021 UGC Issue 3", path: "src/pages/DOWNLOADS/VCMT_Feb_2021_UGC_Issue3.pdf" }
  ];

  return (
    <div className="bg-gradient-to-tl from-indigo-100 via-white to-indigo-50 min-h-screen py-16 px-8">
      <h2 className="text-4xl font-bold text-indigo-800 mb-8 text-center">JOURNALS</h2>

      <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl mx-auto">
        {/* Left Section (PDF Viewer) */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          {selectedPdf ? (
            <iframe
              src={selectedPdf}
              width="100%"
              height="800px"  // Increased height for better visibility
              className="rounded-lg border-0"
              title="Selected PDF"
            ></iframe>
          ) : (
            <div className="text-indigo-800 font-semibold text-lg text-center">Select a document to view</div>
          )}
        </div>

        {/* Right Section (Buttons) */}
        <div className="lg:w-1/3 flex flex-col gap-4 ml-auto">
          {pdfFiles.map((file, index) => (
            <button
              key={index}
              onClick={() => setSelectedPdf(file.path)}
              className="text-white bg-indigo-600 hover:bg-indigo-700 p-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {file.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
