const images = [
  "/images/p12.avif",
  "/images/p13.avif",
  "/images/p14.avif",
  "/images/p15.avif",
  "/images/p21.avif",
  "/images/p22.avif",
  "/images/p23.avif",
  "/images/p24.avif",
  "/images/p25.avif",
  "/images/p32.avif",
  "/images/p33.avif",
  "/images/p34.avif",
  "/images/p35.avif",
  "/images/p43.avif",
  "/images/p44.avif",
  "/images/p45.avif",
];

export default function ImageGrid() {
  return (
    <div
      className="
          absolute 
          lg:mt-4
          right-2 lg:right-12 
          top-1/2
          -translate-y-1/2 lg:-translate-y-1/2
          grid grid-cols-5
          w-100 sm:w-156 lg:w-172
          gap-2 sm:gap-2.5 lg:gap-3
        "
    >
      <div
        className="
            flex w-full aspect-32/43
            flex-col items-end justify-end
            text-left
            font-body
            text-[8px] sm:text-[10px] lg:text-xs
            leading-tight
          "
      >
        <p>A better way</p>
        <p>to discover</p>
        <p>what to watch.</p>
      </div>
      {images.slice(0, 4).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}

      {images.slice(4, 9).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}

      <EmptyCell />
      {images.slice(9, 13).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}

      <EmptyCell />
      <EmptyCell />
      {images.slice(13, 16).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}
    </div>
  );
}

function ImageCard({ src }) {
  return (
    <div className="w-full aspect-32/43 overflow-hidden">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}

function EmptyCell() {
  return <div className="w-full aspect-32/43" />;
}
