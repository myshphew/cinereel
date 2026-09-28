import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

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
      setResults(data);

      console.log(data);
    } catch (error) {
      console.error("Search failed:", error);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleSearchSubmit();
    }
  }

  console.log(results);

  return (
    <div className="ml-3 my-8 flex p-3 w-full max-w-lg text-[#1F1D1D] bg-[#EBD9CD] items-center gap-3">
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="What will you watch tonight?"
        className="flex-1 font-body text-base font-medium outline-none placeholder:text-[#1F1D1D50]"
      />
      <button onClick={handleSearchSubmit} type="button">
        <Search size={18} strokeWidth={1.5} />
      </button>
    </div>
  );
}
