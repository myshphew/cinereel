import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="ml-3 my-8 flex p-3 w-full max-w-lg text-[#1F1D1D] bg-[#EBD9CD] items-center gap-3">

      <input
        type="text"
        placeholder="What will you watch tonight?"
        className="flex-1 font-body text-base font-medium outline-none placeholder:text-[#1F1D1D50]"
      />
      <Search size={18} strokeWidth={1.5}/>
    </div>
  );
}
