export default function SearchInput({ query, onQueryChange }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search experiments (e.g., microgravity effects)"
        className="w-full rounded-lg border-gray-300 shadow-sm sm:text-sm p-4 text-black bg-white"
      />
    </div>
  );
}
