export default function MovieCard({ movie }) {
  const year = movie.premiered ? Number(movie.premiered.slice(0, 4)) : null;

  return (
    <div className="text-[#1F1D1E]">
      <img
        src={movie.image?.original || "/placeholder.jpg"}
        alt={movie.name}
        className="w-full aspect-3/4 object-cover"
      />

      <h2 className="mt-4 font-display text-2xl/normal font-semibold uppercase">
        {movie.name}
      </h2>

      <p className="font-body text-sm opacity-50">{year ?? "N/A"}</p>
    </div>
  );
}
