import { useState } from "react";
import Navbar from "./components/Navbar";
import PopularSearches from "./components/PopularSearches";
import LatestResearches from "./components/LatestResearches";
import SearchInput from "./components/SearchInput";
import Chatbot from "./components/Chatbot";
import ResearchDetail from "./components/ResearchDetail";
import StarsBackground from "./components/StarsBackground";
import ResearchCard from "./components/ResearchCard";
import About from "./components/About";
import { researchData } from "./data/researchData";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  const [searchQuery, setSearchQuery] = useState(""); // For filtering
  const [showChatbot, setShowChatbot] = useState(false); // Toggle chat

  const filteredLatest = researchData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularSearches = [
    "Microgravity",
    "Radiation",
    "Plant Biology",
    "Bone Density",
  ];

  return (
    <div className="bg-gray-100 min-h-screen bg-gradient-to-t from-[#3C2E84] to-black text-white font-display relative">
      <StarsBackground />
      <Navbar />

      {/* Chatbot Toggle Button - Rectangular and Connected */}
      <button
        onClick={() => setShowChatbot(!showChatbot)}
        className={`fixed z-40 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg transition-all duration-300 transform -translate-y-1/2 flex items-center space-x-3 ${
          showChatbot
            ? "right-96 w-12 h-24 rounded-l-xl justify-center top-1/2"
            : "right-0 w-12 h-24 rounded-l-xl justify-center top-1/2"
        }`}
        style={{ top: "calc(50% + 40px)" }} // Adjusted to account for navbar
        aria-label="Toggle chatbot"
      >
        {showChatbot ? (
          // Close icon - centered when open
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Chat icon with text - centered when closed
          <div className="flex flex-col items-center justify-center space-y-1">
            <span className="text-xs font-medium rotate-90 origin-center whitespace-nowrap mt-2">
              AI Assistant
            </span>
          </div>
        )}
      </button>

      <div
        className={`transition-all duration-300 ${
          showChatbot ? "mr-96" : "mr-0"
        }`}
      >
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex flex-col mt-8 items-center justify-center min-h-[calc(100vh-80px)]">
                <div className="container max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
                  {/* Centered Header */}
                  <div className="w-3xl">
                    <div className="text-center mb-12">
                      <h1 className="text-6xl font-bold text-white mb-4">
                        L.I.F.T
                      </h1>
                    </div>

                    <SearchInput
                      query={searchQuery}
                      onQueryChange={setSearchQuery}
                    />
                  </div>

                  {/* Main Content Area */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-10 shadow-2xl">
                    {searchQuery ? (
                      // Show ResearchCard when there's a search query
                      <section>
                        <h3 className="text-lg font-semibold mb-6 text-center">
                          Search Results for "{searchQuery}"
                        </h3>
                        <div className="space-y-4">
                          {filteredLatest.map((research) => (
                            <ResearchCard
                              key={research.id}
                              research={research}
                            />
                          ))}
                          {filteredLatest.length === 0 && (
                            <div className="text-center py-8">
                              <p className="text-gray-400 text-lg">
                                No research found matching "{searchQuery}"
                              </p>
                              <p className="text-gray-500 text-sm mt-2">
                                Try a different search term
                              </p>
                            </div>
                          )}
                        </div>
                      </section>
                    ) : (
                      // Show default content when no search
                      <>
                        {/* Quick Start Suggestions */}
                        <section className="mb-8">
                          <h3 className="text-lg font-semibold mb-4 text-center">
                            Try asking about:
                          </h3>
                          <PopularSearches
                            searches={popularSearches}
                            onSearch={setSearchQuery}
                          />
                        </section>

                        {/* Recent Activity */}
                        <section>
                          <h3 className="text-lg font-semibold mb-4 text-center">
                            Recent Publications
                          </h3>
                          <LatestResearches researches={filteredLatest} />
                        </section>
                      </>
                    )}
                  </div>
                </div>
              </main>
            }
          />
          <Route
            path="/research/:id"
            element={<ResearchDetail researches={filteredLatest} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* Chatbot Window - Full Right Side */}
      <Chatbot isOpen={showChatbot} onClose={() => setShowChatbot(false)} />
    </div>
  );
}

export default App;
