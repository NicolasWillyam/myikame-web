import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { IoSearchOutline } from "react-icons/io5";
import { UserData } from "@/entities/user";
import useToolsData from "@/hooks/use-toolsdata";
import { ToolData } from "@/entities/tool";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  const { toolsData } = useToolsData();

  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState<ToolData[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = (value: string) => {
    let results: ToolData[] = [];

    if (toolsData) {
      // Lọc dữ liệu dựa trên giá trị tìm kiếm
      results = toolsData.filter(
        (item) =>
          item.label.toLowerCase().includes(value.toLowerCase()) ||
          item.description.toLowerCase().includes(value.toLowerCase())
      );
    }

    setSearchResults(results);
    setShowResults(results.length > 0);
  };

  return (
    <div className="relative w-full">
      <div className="flex items-center gap-2 bg-white px-4 rounded-xl h-12 text-[#A0A4A7] border">
        <IoSearchOutline size={20} className="text-[#A0A4A7]" />
        <Input
          className="rounded-xl border-none p-0 text-sm"
          placeholder="Ứng dụng bạn cần tìm"
          value={searchValue}
          onChange={(e) => {
            const value = e.target.value;
            setSearchValue(value);
            handleSearch(value);
          }}
          onFocus={() => setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)} // Giữ kết quả hiển thị khi nhấp vào.
        />
      </div>

      {/* Hiển thị bảng kết quả */}
      {showResults && searchResults.length > 0 && (
        <div className=" absolute bg-white border mt-2 rounded-xl shadow-lg w-full z-10 max-h-60 overflow-y-auto overflow-x-hidden">
          {searchResults.map((result) => (
            <a href={result.link || "#"} target="_blank" key={result.id}>
              <div
                className="p-3 h-12 flex items-center gap-2 hover:bg-gray-100 cursor-pointer mr-2 rounded-r-full"
                onMouseDown={() => {
                  setSearchValue(result.label);
                  // setShowResults(false);
                }}
              >
                <Image
                  src={
                    result.icon ||
                    "https://storage.googleapis.com/my-ikame-web/assets/icons/ic_app.png"
                  }
                  alt="icon"
                  width={24}
                  height={24}
                />

                <div className="flex gap-2 items-center">
                  <p className="font-medium">{result.label}</p>
                  <p className="mt-1 text-xs font-normal text-[#7A8185] hidden sm:block truncate">
                    {result.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
