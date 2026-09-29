import { useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

export default function SearchResult() {
  const [results, setResults] = useState([]);

  return (
    <div className="flex flex-col items-center gap-8 p-4 sm:p-12">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-[#AD2F18] font-display font-bold text-7xl">
          CINEREEL
        </h1>
        <p className="text-[#1F1D1E] font-body text-base">
          Search the world of movies and shows and find something to watch
        </p>
      </div>
      <SearchBar setResults={setResults} />
      {results.length > 0 && (
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 sm:gap-y-24 gap-x-4 sm:gap-x-8">
          {results.map((result) => (
            <MovieCard key={result.show.id} movie={result.show} />
          ))}
        </div>
      )}
    </div>
  );
}
