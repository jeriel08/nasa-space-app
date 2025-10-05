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
} from "recharts"; // Chart imports
import SearchInput from "./SearchInput";
import LatestResearches from "./LatestResearches"; // Reuse for sidebar

export default function ResearchDetail({ researches }) {
  const { id } = useParams(); // Get ID from URL
  const research = researches.find((r) => r.id === parseInt(id)); // Find matching data

  const [sidebarSearch, setSidebarSearch] = useState(""); // Sidebar filter
  const filteredRecents = researches
    .filter((item) =>
      item.title.toLowerCase().includes(sidebarSearch.toLowerCase())
    )
    .slice(0, 5); // Limit to 5 for sidebar

  if (!research) {
    return (
      <div className="text-center p-8">
        Research not found.{" "}
        <Link to="/" className="text-nasa-accent">
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar (20-30% width) */}
      <aside className="w-80 bg-nasa-card p-4 overflow-auto border-r border-gray-700">
        <SearchInput
          query={sidebarSearch}
          onQueryChange={setSidebarSearch}
          className="mb-4" // Compact
        />
        <h3 className="text-lg font-semibold mb-4">Recent Researches</h3>
        <LatestResearches researches={filteredRecents} />{" "}
        {/* Reused, but sidebar-sized */}
      </aside>

      {/* Main Content (70-80%) */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Summary Hero */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{research.title}</h1>
          <p className="text-gray-300 mb-4">{research.summary}</p>
          <div className="flex gap-4 text-sm text-gray-500">
            <span>{research.year}</span>
            <span>{research.theme}</span>
          </div>
        </div>

        {/* Graph */}
        <div className="bg-nasa-card rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Key Results</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={research.data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />{" "}
              {/* Adjust dataKey based on your data */}
              <YAxis />
              <Tooltip />
              <Bar dataKey="density" fill="#1e40af" />{" "}
              {/* Or 'growth', 'viability' */}
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Authors & Link */}
        <div className="bg-nasa-card rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Authors</h2>
          <ul className="list-disc pl-5 mb-4">
            {research.authors.map((author, i) => (
              <li key={i}>{author}</li>
            ))}
          </ul>
          <a
            href={`https://doi.org/${research.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-nasa-accent px-4 py-2 rounded inline-block hover:bg-blue-700"
          >
            View Full Publication (DOI)
          </a>
        </div>

        {/* Back Link */}
        <Link to="/" className="block mt-8 text-nasa-accent underline">
          ← Back to Home
        </Link>
      </main>
    </div>
  );
}
