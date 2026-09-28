const images = [
  "/public/images/p12.avif",
  "/public/images/p13.avif",
  "/public/images/p14.avif",
  "/public/images/p15.avif",
  "/public/images/p21.avif",
  "/public/images/p22.avif",
  "/public/images/p23.avif",
  "/public/images/p24.avif",
  "/public/images/p25.avif",
  "/public/images/p32.avif",
  "/public/images/p33.avif",
  "/public/images/p34.avif",
  "/public/images/p35.avif",
  "/public/images/p43.avif",
  "/public/images/p44.avif",
  "/public/images/p45.avif",
];

export default function ImageGrid() {
  return (
    <div className="-ml-16 h-fit w-fit grid grid-cols-5 gap-3">
      {/* Row 1 — Col 1 */}
      <div className="w-32 h-43 flex flex-col items-end justify-end text-left font-body text-xs">
        <p>A better way</p>
        <p>to discover</p>
        <p>what to watch.</p>
      </div>
      {/* Row 1 — Col 2 → 5 */}
      {images.slice(0, 4).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}
      {/* Row 2 — Col 1 → 5 */}
      {images.slice(4, 9).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}
      {/* Row 3 — Col 1 empty */}
      <div />
      {/* Row 3 — Col 2 → 5 */}
      {images.slice(9, 13).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}
      {/* Row 4 — Col 1 & 2 empty */}
      <div />
      <div />
      {/* Row 4 — Col 3 → 5 */}
      {images.slice(13, 16).map((src, index) => (
        <ImageCard key={index} src={src} />
      ))}
    </div>
  );
}

function ImageCard({ src }) {
  return (
    <div className="w-32 h-43 overflow-hidden">
      <img src={src} alt="" className="w-full h-full object-cover" />
    </div>
  );
}
