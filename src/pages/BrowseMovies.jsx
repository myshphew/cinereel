import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import DetailsModal from "../components/DetailsModal";
import Navbar from "../components/NavBar";

export default function BrowseMovies() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch("https://api.tvmaze.com/shows");
      const data = await response.json();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  return (
    <div className="relative flex flex-col items-center gap-4 sm:gap-8 sm:px-6">
      <Navbar />

      {selectedMovie && (
        <DetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <div className="mt-16 flex h-fit w-full flex-col sm:mt-18">
        <div className="mt-4 flex w-full flex-col px-4 sm:items-center sm:justify-center">
          <h1 className="font-display text-6xl font-bold uppercase text-[#EBD9CD] sm:text-6xl lg:text-7xl">
            {isSearching ? "Search results" : "Discover what's next"}
          </h1>
          <p className="mt-1 font-body text-base text-[#EBD9CD]">
            {isSearching
              ? "Here’s what we found for you."
              : "Explore movies and shows worth watching."}
          </p>
        </div>

        <div className="mt-4 flex w-full px-4 sm:justify-center">
          <SearchBar
            setResults={setMovies}
            onSearch={() => setIsSearching(true)}
          />
        </div>
      </div>

      {movies.length > 0 && (
        <div className="relative grid w-full grid-cols-2 gap-x-4 gap-y-10 bg-[#F1E9D6] p-10 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-28 lg:p-16">
          <div className="pointer-events-none absolute inset-0 z-20">
            <div className="absolute inset-y-0 left-6 w-px bg-[#E0D9C7]" />
            <div className="absolute inset-y-0 right-6 w-px bg-[#E0D9C7]" />
            <div className="absolute inset-x-0 top-6 h-px bg-[#E0D9C7]" />
            <div className="absolute inset-x-0 bottom-6 h-px bg-[#E0D9C7]" />
          </div>

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
