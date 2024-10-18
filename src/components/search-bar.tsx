import React from "react";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 bg-white px-4 rounded-xl h-12 text-[#A0A4A7] border">
      <IoSearchOutline size={20} className="text-[#A0A4A7]" />
      <Input
        className="rounded-xl border-none p-0 text-sm"
        placeholder="Ứng dụng bạn cần tìm "
      />
    </div>
  );
};

export default SearchBar;
