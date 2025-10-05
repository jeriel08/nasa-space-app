import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SearchInput from "./SearchInput";
import ResearchSidebar from "./ResearchSidebar";

export default function ResearchDetail({ researches }) {
  const { id } = useParams();
  const research = researches.find((r) => r.id === parseInt(id));
  const [sidebarSearch, setSidebarSearch] = useState("");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const filteredRecents = researches
    .filter((item) =>
      item.title.toLowerCase().includes(sidebarSearch.toLowerCase())
    )
    .slice(0, 5);

  if (!research) {
    return (
      <div className="text-center p-8">
        Research not found.{" "}
        <Link to="/" className="text-blue-400 hover:text-blue-300">
          Go Home
        </Link>
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={`bg-white/10 backdrop-blur-sm border-r border-white/20 p-6 overflow-auto transition-all duration-300 ${
          isSidebarCollapsed ? "w-20" : "w-80"
        }`}
      >
        {/* Sidebar Header with Toggle Button */}
        <div
          className={`flex items-center ${
            isSidebarCollapsed ? "justify-center" : "justify-between"
          } mb-6`}
        >
          {!isSidebarCollapsed && (
            <h3 className="text-lg font-semibold text-white">
              Recent Researches
            </h3>
          )}
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 group"
            aria-label={
              isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
            }
          >
            <svg
              className={`w-5 h-5 text-white transition-transform duration-300 ${
                isSidebarCollapsed ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isSidebarCollapsed ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
              />
            </svg>
          </button>
        </div>

        {/* Search Input - Hidden when collapsed */}
        {!isSidebarCollapsed && (
          <div className="mb-6">
            <SearchInput
              query={sidebarSearch}
              onQueryChange={setSidebarSearch}
              placeholder="Search recent researches..."
            />
          </div>
        )}

        {/* Sidebar Content - Now handled by ResearchSidebar component */}
        <ResearchSidebar
          researches={filteredRecents}
          collapsed={isSidebarCollapsed}
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Mobile Toggle Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-200 backdrop-blur-sm"
          aria-label={
            isSidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"
          }
        >
          <svg
            className="w-5 h-5 text-white"
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

        {/* Rest of your main content remains the same */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-3xl font-bold text-white flex-1 mr-4">
              {research.title}
            </h1>
            <div className="flex gap-2">
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30 text-sm">
                {research.year}
              </span>
              <span className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 text-sm">
                {research.theme}
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            {research.summary}
          </p>

          {research.tags && (
            <div className="flex flex-wrap gap-2">
              {research.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Graph Section */}
        {research.data && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/20">
            <h2 className="text-2xl font-semibold mb-6 text-white">
              Research Findings
            </h2>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={research.data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                  <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
                  <YAxis stroke="#9CA3AF" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(30, 41, 59, 0.8)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "8px",
                      color: "white",
                    }}
                  />
                  <Bar dataKey="density" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Authors & Publication */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Research Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {research.authors.map((author, i) => (
              <div
                key={i}
                className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <span className="text-blue-300 font-semibold">
                      {author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <span className="text-white">{author}</span>
                </div>
              </div>
            ))}
          </div>

          {research.doi && (
            <div className="pt-6 border-t border-white/10">
              <a
                href={`https://doi.org/${research.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 transform hover:-translate-y-0.5"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                <span>View Full Publication</span>
              </a>
            </div>
          )}
        </div>

        {/* Back Link */}
        {/* <Link 
          to="/" 
          className="inline-flex items-center space-x-2 mt-8 text-blue-400 hover:text-blue-300 transition-colors group"
        >
          <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link> */}
      </main>
    </div>
  );
}
