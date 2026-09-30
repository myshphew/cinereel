import HeroGalleryGrid from "../components/HeroGalleryGrid";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
      flex flex-col lg:flex-row
      w-full h-dvh overflow-hidden
      text-[#EBD9CD]
    "
    >
      <div
        className="
        relative z-10
        flex flex-col
        w-full lg:w-1/2
        px-6 sm:px-8 lg:px-12
        pt-16 lg:pt-16
        pb-8 lg:pb-16
      "
      >
        <h1
          className="
          -ml-1 md:-ml-3 mt-4 md:mt-0 md:w-175
          font-display font-semibold tracking-tighter
          text-[84px] sm:text-[130px] lg:text-[220px]
          leading-20 sm:leading-30 lg:leading-50
        "
        >
          LIGHTS
          <br />
          CAMERA
          <br />
          DISCOVER
        </h1>
        <p
          className="
          mt-3 sm:mt-4 lg:mt-6
          max-w-90 sm:max-w-100
          font-body
          text-sm sm:text-base
          leading-5
        "
        >
          Explore movies and shows, discover what&apos;s trending, and find your
          next favorite reel—all in one place.
        </p>
        <a
          href="/browse"
          className="
            mt-3 sm:mt-4 lg:mt-6
            flex w-fit gap-1
            px-10 sm:px-12 lg:px-16
            py-3
            bg-[#1F1D1E]
            font-body font-medium
            text-sm
            text-[#EBD9CD]
          "
        >
          Explore Shows
          <ArrowUpRight size={16} strokeWidth={1.5} />
        </a>
      </div>
      <div
        className="
        relative
        w-full lg:w-1/2
        flex-1
        min-h-100 sm:min-h-140 lg:min-h-dvh
      "
      >
        <HeroGalleryGrid />
      </div>
    </section>
  );
}
