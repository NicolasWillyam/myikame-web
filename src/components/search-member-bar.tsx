import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";

interface SearchMemberBarProps {
  onSearch: (value: string) => void;
}

const SearchMemberBar: React.FC<SearchMemberBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Gửi giá trị tìm kiếm lên component cha
  };

  return (
    <div className="flex items-center gap-2 bg-white px-3 rounded-xl h-10 text-[#A0A4A7] border">
      <IoSearchOutline size={20} className="text-[#A0A4A7]" />
      <Input
        value={searchTerm}
        onChange={handleSearchChange}
        className="rounded-xl h-9 border-none p-0 text-sm"
        placeholder="Tìm kiếm thành viên"
      />
    </div>
  );
};

export default SearchMemberBar;
