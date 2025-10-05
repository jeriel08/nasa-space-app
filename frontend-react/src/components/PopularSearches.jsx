export default function PopularSearches({ searches, onSearch }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {searches.map((search) => (
        <button
          key={search}
          onClick={() => onSearch(search)}
          className="group relative bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/25"
        >
          {/* Gradient border effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10" />

          {/* Text with glow effect */}
          <span className="text-white font-medium text-sm tracking-wide group-hover:text-blue-100 transition-colors duration-300 relative z-10">
            {search}
          </span>

          {/* Subtle background pattern */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      ))}
    </div>
  );
}
