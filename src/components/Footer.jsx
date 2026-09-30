import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between px-4 py-4 lg:px-12">
      <span className="font-display text-sm sm:text-base font-medium uppercase tracking-tight text-[#1F1D1E] hover:opacity-60">
        CINEREEL
      </span>
      <span className="font-body text-xs text-[#1F1D1E] opacity-60">
        © 2026 Cinereel. All rights reserved.
      </span>
      <a
        href="https://github.com/myshphew"
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs font-medium text-[#1F1D1E] hover:opacity-60 flex gap-1"
      >
        GitHub
        <ArrowUpRight size={16} strokeWidth={1.5} />
      </a>
    </footer>
  );
}
