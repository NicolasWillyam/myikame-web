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
import { ArrowBigDown } from "lucide-react";
import { logout } from "@/moudules/services/key-cloak-service";
import { GoInbox } from "react-icons/go";
import { Skeleton } from "./ui/skeleton";

const ManagerInfo = () => {
  const { userInfo, loading } = useUserData();

  if (loading)
    return (
      <div className="flex gap-2">
        <Skeleton className="h-8 w-8 rounded-full bg-[#4E5255]/20" />
        <div className="space-y-1.5">
          <Skeleton className="h-3 w-24 bg-[#4E5255]/20" />
          <Skeleton className="h-3 w-32 bg-[#4E5255]/20" />
        </div>
      </div>
    );
  return (
    <div className="flex gap-2">
      <div className="h-8 w-8 rounded-full bg-[#4E5255]/20">
        <Image
          alt="user-avatar"
          src={userInfo?.teams.manager_teams[0].users?.avatar!}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
      <div className="space-y-0">
        <p className="text-xs font-semibold text-[#4E5255]">
          {userInfo?.teams.manager_teams[0].users.name}
        </p>
        <p className="text-xs text-[#7A8185]">
          {userInfo?.teams.manager_teams[0].users.email}
        </p>
      </div>
    </div>
  );
};

export default ManagerInfo;
