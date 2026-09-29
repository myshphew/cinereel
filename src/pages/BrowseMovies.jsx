import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import DetailsModal from "../components/DetailsModal";

export default function BrowseMovies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);
  return (
    <div className="relative flex flex-col items-center gap-8 p-4 sm:p-12">
      {selectedMovie && (
        <DetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute inset-y-0 left-6 w-px bg-[#E0D9C7]" />
        <div className="absolute inset-y-0 right-6 w-px bg-[#E0D9C7]" />

        <div className="absolute inset-x-0 top-6 h-px bg-[#E0D9C7]" />
        <div className="absolute inset-x-0 bottom-6 h-px bg-[#E0D9C7]" />
      </div>

      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-[#AD2F18] font-display font-bold text-7xl">
          CINEREEL
        </h1>
        <p className="text-[#1F1D1E] font-body text-base">
          Search the world of movies and shows and find something to watch
        </p>
      </div>
      <SearchBar setResults={setMovies} />
      {movies.length > 0 && (
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-24 md:grid-cols-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              onClick={() => setSelectedMovie(movie)}
              className="cursor-pointer"
            >
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



