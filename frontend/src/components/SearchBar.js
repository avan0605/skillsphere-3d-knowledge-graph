export default function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search skill..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
