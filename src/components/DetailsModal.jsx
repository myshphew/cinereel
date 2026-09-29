import { X } from "lucide-react";

export default function DetailsModal({ movie, onClose }) {
  if (!movie) return null;

  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-8">
      <div className="relative grid w-full max-w-5xl grid-cols-2 overflow-hidden bg-[#EBD9CD] text-[#1F1D1E]">

        <button
          onClick={onClose}
          type="button"
          className="absolute right-5 top-5 z-10"
          aria-label="Close modal"
        >
          <X size={24} strokeWidth={1.5} />
        </button>

        <div className="h-full min-h-150">
          <img
            src={movie.image?.original || "/placeholder.jpg"}
            alt={movie.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between p-10">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-widest opacity-50">
              {movie.type || "Movie"}
            </p>

            <h2 className="max-w-md font-display text-6xl/none font-semibold uppercase">
              {movie.name}
            </h2>

            <div className="mt-6 flex gap-4 font-body text-sm opacity-60">
              <span>{year}</span>
              <span>•</span>
              <span>{movie.rating?.average ?? "N/A"} / 10</span>
              <span>•</span>
              <span>{movie.runtime ? `${movie.runtime} min` : "N/A"}</span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {movie.genres?.map((genre) => (
                <span
                  key={genre}
                  className="border border-[#1F1D1E]/20 px-3 py-1 font-body text-xs"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <p className="mb-2 font-body text-xs uppercase tracking-widest opacity-50">
                Overview
              </p>

              <div
                className="max-w-lg font-body text-sm leading-6"
                dangerouslySetInnerHTML={{
                  __html: movie.summary || "No overview available.",
                }}
              />
            </div>
          </div>

          <a
            href={movie.officialSite || movie.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex w-fit items-center bg-[#1F1D1E] px-6 py-3 font-body text-sm font-medium text-[#EBD9CD]"
          >
            Watch
          </a>
        </div>
      </div>
    </div>
  );
}
