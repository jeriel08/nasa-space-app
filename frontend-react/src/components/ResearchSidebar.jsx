import { Link } from "react-router-dom";

export default function ResearchSidebar({ researches, collapsed = false }) {
  if (collapsed) {
    // Compact view for collapsed state
    return (
      <div className="space-y-4">
        {researches.map((research) => (
          <Link
            key={research.id}
            to={`/research/${research.id}`}
            className="block group"
            title={research.title}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-center">
              <div className="w-6 h-6 mx-auto mb-1 bg-blue-500/20 rounded-full flex items-center justify-center">
                <span className="text-blue-300 text-xs font-bold">
                  {research.title
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <span className="bg-blue-600/20 text-blue-300 text-xs px-1 py-0.5 rounded border border-blue-500/30">
                {research.year}
              </span>
            </div>
          </Link>
        ))}

        {researches.length === 0 && (
          <div className="text-center">
            <div className="w-6 h-6 mx-auto mb-1 bg-gray-500/20 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-xs">∅</span>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Expanded view (original functionality)
  return (
    <div className="space-y-4">
      {researches.map((research) => (
        <Link
          key={research.id}
          to={`/research/${research.id}`}
          className="block group"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/20 hover:border-white/40 transition-all duration-300 h-full">
            <h4 className="text-sm font-semibold mb-2 text-white group-hover:text-blue-100 transition-colors duration-300 line-clamp-2">
              {research.title}
            </h4>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400">{research.theme}</span>
              <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30">
                {research.year}
              </span>
            </div>
          </div>
        </Link>
      ))}

      {researches.length === 0 && (
        <p className="text-center text-gray-500 py-4 text-sm">
          No matching researches
        </p>
      )}
    </div>
  );
}
