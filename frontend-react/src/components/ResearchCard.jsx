import { Link } from "react-router-dom";

export default function ResearchCard({ research }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Content Section */}
        <div className="flex-1">
          <div className="flex items-start mb-2">
            <h3 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors">
              {research.title}
            </h3>
            <span className="bg-blue-600/20 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/30 ml-4">
              {research.year}
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">
            {research.summary}
          </p>
          <span className="inline-block bg-gray-700/30 text-gray-400 text-xs px-3 py-1 rounded border border-gray-600/30">
            {research.theme}
          </span>
        </div>

        {/* Button Section */}
        <div className="md:flex-shrink-0">
          <Link
            to={`/research/${research.id}`}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 transform group-hover:scale-105 shadow-lg hover:shadow-blue-500/25 font-medium text-sm"
          >
            Show Details
            <svg
              className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
