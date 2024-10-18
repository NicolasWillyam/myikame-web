import React from "react";
import useUserData from "../hooks/use-userdata";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { IoIosArrowDown } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { logout } from "@/moudules/services/key-cloak-service";
import { Skeleton } from "@/components/ui/skeleton";

const UserInfo = () => {
  const { userInfo, backendData, loading } = useUserData();

  if (loading) {
    return (
      <div className="flex gap-2">
        <Skeleton className="h-8 w-8 rounded-full bg-[#4E5255]/20" />
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-32 bg-[#4E5255]/20" />
          <Skeleton className="h-3 w-24 bg-[#4E5255]/20" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-2">
      <div className="h-8 w-8 rounded-full bg-[#4E5255]/20">
        <Image
          alt="user-avatar"
          src={userInfo?.avatar!}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="space-y-0">
        <p className="text-xs font-semibold text-[#4E5255]">{userInfo?.name}</p>
        <p className="text-xs text-[#7A8185]">{userInfo?.positions.name}</p>
      </div>
      <Popover>
        <PopoverTrigger>
          <IoIosArrowDown className="text-[#7A8185]" size={16} />
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="w-fit flex gap-1.5 items-center py-2 px-3 cursor-pointer text-sm text-[#4E5255]"
          onClick={logout}
        >
          <IoLogOutOutline size={18} />
          Logout
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UserInfo;
