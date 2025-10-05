import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo text.png";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="sticky top-0 z-50">
      {/* Glossy Glass Effect Navbar */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 shadow-2xl shadow-blue-500/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                src={logo}
                alt="L.I.F.T Logo"
                className="w-25 object-contain transition-all duration-300 group-hover:brightness-110 group-hover:scale-105"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              <Link
                to="/"
                className={`px-6 py-3 rounded-xl border transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center space-x-2 ${
                  isActive("/")
                    ? "bg-white/20 border-white/30 text-white shadow-lg shadow-blue-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/20 hover:border-white/30 text-white hover:shadow-blue-500/20"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span className="font-medium">Home</span>
              </Link>

              <Link
                to="/about"
                className={`px-6 py-3 rounded-xl border transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center space-x-2 ${
                  isActive("/about")
                    ? "bg-white/20 border-white/30 text-white shadow-lg shadow-purple-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/20 hover:border-white/30 text-white hover:shadow-purple-500/20"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">About</span>
              </Link>

              <Link
                to="/research"
                className={`px-6 py-3 rounded-xl border transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center space-x-2 ${
                  isActive("/research")
                    ? "bg-white/20 border-white/30 text-white shadow-lg shadow-green-500/20"
                    : "bg-white/5 border-white/10 hover:bg-white/20 hover:border-white/30 text-white hover:shadow-green-500/20"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span className="font-medium">All Research</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 text-white transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu (Hidden by default) */}
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4 hidden">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                  isActive("/")
                    ? "bg-white/20 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                <span>Home</span>
              </Link>

              <Link
                to="/about"
                className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                  isActive("/about")
                    ? "bg-white/20 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>About</span>
              </Link>

              <Link
                to="/research"
                className={`px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                  isActive("/research")
                    ? "bg-white/20 text-white"
                    : "bg-white/5 hover:bg-white/10 text-white"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
                <span>All Research</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
