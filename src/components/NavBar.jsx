import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-40 flex w-full items-center justify-between px-4 py-4 lg:px-12">
      <a
        href="/"
        className="font-display text-xl sm:text-2xl font-semibold uppercase tracking-tight text-[#1F1D1E]"
      >
        CINEREEL
      </a>
      <a
        href="/browse"
        className="flex items-center gap-1 bg-[#1F1D1E] px-4 sm:px-5 py-2 sm:py-3 font-body text-xs font-medium text-[#EBD9CD]"
      >
        All Shows
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </a>
    </nav>
  );
}
