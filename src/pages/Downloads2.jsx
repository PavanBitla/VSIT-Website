import React, { useState, useEffect } from 'react';

const PDFViewer = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [iframeHeight, setIframeHeight] = useState('100%');

  const pdfFiles = [
    { name: "VCMT Brochure 2024", path: "src/pages/DOWNLOADS/VCMT_2024_Brochure 4pgs.pdf" },
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
    { name: "VCMT Feb 2021 UGC Issue 3", path: "src/pages/DOWNLOADS/VCMT_Feb_2021_UGC_Issue3.pdf" }
  ];

  useEffect(() => {
    const adjustIframeHeight = () => {
      const availableWidth = window.innerWidth * 0.65; // PDF viewer takes 65% of screen width
      const aspectRatio = 8.5 / 11; // Standard US Letter aspect ratio (width:height)
      setIframeHeight(`${availableWidth / aspectRatio}px`);
    };

    adjustIframeHeight();
    window.addEventListener('resize', adjustIframeHeight);

    return () => window.removeEventListener('resize', adjustIframeHeight);
  }, []);

  return (
    <div className="bg-gradient-to-tl from-indigo-100 via-white to-indigo-50 min-h-screen flex flex-col justify-center items-center py-8 px-4">
      <h2 className="text-4xl font-bold text-indigo-800 mb-8 text-center">JOURNALS</h2>

      <div className="flex flex-col lg:flex-row items-start gap-12 max-w-7xl w-full">
        {/* Left Section (PDF Viewer) */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
          {selectedPdf ? (
            <iframe
              src={selectedPdf}
              width="100%"
              height={iframeHeight}
              className="rounded-lg border-0"
              title="Selected PDF"
              style={{ objectFit: 'contain' }}
            ></iframe>
          ) : (
            <div className="text-indigo-800 font-semibold text-lg text-center h-full flex items-center justify-center">
              Select a document to view
            </div>
          )}
        </div>

        {/* Right Section (Buttons) */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {pdfFiles.map((file, index) => (
            <button
              key={index}
              onClick={() => setSelectedPdf(file.path)}
              className="text-white bg-indigo-600 hover:bg-indigo-700 py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 text-left"
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
