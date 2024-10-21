import React from "react";
import Image from "next/image";
import useToolsData from "@/hooks/use-toolsdata";
import { Skeleton } from "../ui/skeleton";

const TeamManagerInfo = ({
  avatar,
  name,
  email,
}: {
  avatar: string;
  name: string;
  email: string;
}) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-24">
        <p className="text-sm font-semibold text-[#4E5255]">Quản lí</p>
      </div>
      <div className="w-full flex items-center">
        <div className="flex gap-2">
          <div className="h-8 w-8 rounded-full bg-[#4E5255]/20">
            <Image
              alt="user-avatar"
              src={avatar!}
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <div className="space-y-0">
            <p className="text-xs font-semibold text-[#4E5255]">{name}</p>
            <p className="text-xs text-[#7A8185]">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamManagerInfo;
