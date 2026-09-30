import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ setResults, onSearch }) {
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  async function handleSearchSubmit() {
    if (!search.trim()) return;

    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(search)}`,
      );

      const data = await response.json();

      setResults(data.map((result) => result.show));
      onSearch?.();
    } catch (error) {
      console.error("Search failed:", error);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  }

  return (
    <div className="flex w-full max-w-lg items-center gap-3 bg-[#EBD9CD] p-3 text-[#1F1D1E]">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="What will you watch tonight?"
        className="flex-1 font-body text-base font-medium outline-none placeholder:text-[#1F1D1E50]"
      />
      <button onClick={handleSearchSubmit} type="button">
        <Search size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
}
