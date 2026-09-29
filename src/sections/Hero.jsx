import HeroGalleryGrid from "../components/HeroGalleryGrid";

export default function Hero() {
  return (
    <div className="relative px-12 h-dvh flex items-center overflow-hidden bg-[#AD2F18] text-[#EBD9CD]">
      <div>
        <h1 className="text-[200px] leading-46 tracking-tighter font-semibold font-display">
          LIGHTS
          <br />
          CAMERA
          <br />
          DISCOVER
        </h1>

        <p className="ml-3 mt-8 max-w-md font-body text-base leading-5 font-normal">
          Explore movies and shows, discover what’s trending, and find your next
          favorite reel—all in one place.
        </p>
      </div>

      <HeroGalleryGrid />

      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <img src="/acetateDisc.avif" alt="disc" className="h-dvh" />
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-64 -translate-x-24">
        <img src="/butterfly.avif" alt="butterfly" className="h-80" />
      </div>

      <div className="absolute right-0 bottom-1 -translate-y-12 -translate-x-124">
        <img src="/cassettes.avif" alt="cassettes" className="h-64" />
      </div>
    </div>
  );
}
