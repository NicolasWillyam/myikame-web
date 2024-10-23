"use cient";
import useUserData from "@/hooks/use-userdata";
import React, { useState } from "react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamList from "./team-list";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SearchBar from "../search-bar";
import SearchMemberBar from "../search-member-bar";
import { Skeleton } from "../ui/skeleton";
import { IoSearchOutline } from "react-icons/io5";
import { Input } from "../ui/input";
import NotFoundMember from "../not-found-member";
import { UserData } from "@/entities/user";

const TeamMembersList = ({ data }: { data: UserData | null }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Kiểm tra xem data có tồn tại và có các thuộc tính cần thiết không
  if (!data || !data.teams || !data.teams.users) {
    return <p>No user data available.</p>; // Hiển thị thông báo khi không có dữ liệu người dùng
  }

  const inActivedUsers = data.teams.users.filter(
    (user) => user.is_partner === false && user.is_active === true
  );

  const filteredUsers = inActivedUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCloseDialog = () => {
    setTimeout(() => {
      setSearchTerm(""); // Đặt lại searchTerm về chuỗi rỗng
    }, 500); // Thay đổi thời gian tại đây nếu cần
  };

  const maxUsers = 5;
  return (
    <Dialog onOpenChange={handleCloseDialog}>
      <DialogTrigger>
        <div className="flex items-center">
          {inActivedUsers.slice(0, maxUsers).map(
            (item) =>
              item.avatar !== null &&
              !item.is_partner &&
              item.is_active && (
                <TooltipProvider key={item.id}>
                  {" "}
                  {/* Thêm key độc nhất từ item.id */}
                  <Tooltip>
                    <TooltipTrigger className="p-0 -mr-2">
                      <Image
                        alt="user-avatar"
                        src={item.avatar}
                        width={32}
                        height={32}
                        className="rounded-full border"
                      />
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      align="center"
                      className="text-xs text-left rounded-xl"
                    >
                      <p className="text-xs font-semibold text-[#4E5255]">
                        {item.name}
                      </p>
                      <p className="text-xs text-[#7A8185]">{item.email}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )
          )}

          {inActivedUsers.length > maxUsers && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger className="p-0 -mr-2">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-300 text-center text-white">
                    {inActivedUsers.length - maxUsers}
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  align="end"
                  className="text-xs p-3 rounded-2xl"
                >
                  <TeamList list={inActivedUsers.slice(maxUsers)} />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </DialogTrigger>
      <DialogContent className="rounded-2xl px-6 py-4">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-[#4E5255]">
            Danh sách thành viên
          </DialogTitle>
          <DialogDescription className="space-y-4">
            <hr className="my-4 mt-2 opacity-50" />
            <SearchMemberBar onSearch={setSearchTerm} />

            <div className="h-[264px] overflow-y-auto custom-scroll">
              {filteredUsers.length > 0 ? (
                <TeamList list={filteredUsers} />
              ) : (
                <NotFoundMember />
              )}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMembersList;
