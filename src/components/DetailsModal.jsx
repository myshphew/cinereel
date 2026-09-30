import { useEffect } from "react";
import { X } from "lucide-react";

export default function DetailsModal({ movie, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!movie) return null;

  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-0 sm:p-4 lg:p-8"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="relative grid h-dvh w-full grid-cols-1 overflow-hidden bg-[#F1E9D6] text-[#1F1D1E] sm:grid-cols-2 sm:h-[58vh] lg:h-[90vh] lg:max-w-5xl"
      >
        <button
          onClick={onClose}
          type="button"
          className="absolute right-4 top-4 z-20 text-[#EBD9CD] sm:right-5 sm:top-5 sm:text-[#1F1D1E]"
          aria-label="Close modal"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        {/* Poster */}
        <div className="aspect-16/14 w-full shrink-0 sm:aspect-2/3 lg:aspect-3/4 lg:h-full">
          <img
            src={movie.image?.original || "/placeholder.jpg"}
            alt={movie.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex min-h-0 flex-col overflow-hidden p-6 lg:p-8">
          {/* Main Info */}
          <div className="shrink-0">
            <p className="font-body text-[10px] uppercase tracking-widest opacity-50">
              {movie.type || "Movie"}
            </p>

            <h2 className="font-display text-3xl font-semibold uppercase lg:text-6xl">
              {movie.name}
            </h2>

            <div className="mt-3 flex items-center gap-2 font-body text-[10px] uppercase tracking-widest opacity-50 sm:mt-4 lg:mt-6">
              <span>Year: {year}</span>
              <span>•</span>
              <span>Rating: {movie.rating?.average ?? "N/A"} / 10</span>
            </div>

            <div className="mt-2 flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre}
                  className="border border-[#1F1D1E]/20 px-3 py-1 font-body text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="relative h-[calc(100%-22px)] min-h-0 pt-5 sm:pt-7 lg:pt-16">
            <div className="h-full overflow-y-auto pr-2 pb-16">
              <div
                className="font-body text-xs leading-5 sm:leading-6 lg:text-sm"
                dangerouslySetInnerHTML={{
                  __html: movie.summary || "No overview available.",
                }}
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 bg-gradient-to-t from-[#F1E9D6] via-[#F1E9D6]/80 to-transparent" />
          </div>

          {/* Actions */}
          <div className="mt-6 flex w-full shrink-0 gap-2 sm:mt-8">
            <button
              onClick={onClose}
              type="button"
              className="flex-1 border border-[#1F1D1E] px-5 py-3 font-body text-xs font-medium text-[#1F1D1E] sm:text-sm hover:cursor-pointer"
            >
              Maybe Later
            </button>

            <a
              href={movie.officialSite || movie.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center bg-[#1F1D1E] px-5 py-3 font-body text-xs font-medium text-[#EBD9CD] sm:text-sm"
            >
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}