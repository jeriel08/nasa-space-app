import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function LatestResearches({ researches }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Calculate total pages
  const totalPages = Math.ceil(researches.length / itemsPerPage);

  // Get current researches for this page
  const currentResearches = researches.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Reset to page 1 when researches change (e.g., after search)
  useEffect(() => {
    setCurrentPage(1);
  }, [researches]);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentResearches.map((research) => (
          <Link
            key={research.id}
            to={`/research/${research.id}`}
            className="block group"
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col">
              {/* Content area that grows */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-100 transition-colors duration-300 line-clamp-2">
                  {research.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
                  {research.summary}
                </p>
              </div>

              {/* Date section - always at the bottom */}
              <div className="pt-4 border-t border-white/10 mt-auto">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400 font-medium">
                    {research.theme}
                  </span>
                  <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                    {research.year}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}

        {researches.length === 0 && (
          <p className="col-span-full text-center text-gray-500 py-8">
            No results—try a different search!
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {researches.length > itemsPerPage && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border border-white/20 transition-all duration-200 ${
              currentPage === 1
                ? "bg-white/5 text-gray-400 cursor-not-allowed"
                : "bg-white/10 text-white hover:bg-white/20 hover:border-white/40"
            }`}
          >
            Previous
          </button>

          <span className="text-white text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border border-white/20 transition-all duration-200 ${
              currentPage === totalPages
                ? "bg-white/5 text-gray-400 cursor-not-allowed"
                : "bg-white/10 text-white hover:bg-white/20 hover:border-white/40"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
