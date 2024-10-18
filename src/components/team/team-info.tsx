import React from "react";
import ManagerInfo from "../manager-info";
import TeamManagerInfo from "./team-manager-info";
import useUserData from "@/hooks/use-userdata";
import TeamMembers from "./team-members";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

const TeamName = () => {
  const { userInfo, loading } = useUserData();
  if (loading)
    return (
      <div className="flex gap-4 items-center">
        <div className="w-24">
          <p className="text-sm font-semibold text-[#4E5255]">Team</p>
        </div>
        <Skeleton className="h-5 w-32 rounded-full bg-[#4E5255]/20 mr-auto" />
      </div>
    );
  return (
    <div className="flex gap-4 items-center">
      <div className="w-24">
        <p className="text-sm font-semibold text-[#4E5255]">Team</p>
      </div>
      <div className="w-full flex gap-2 items-center text-[#4E5255] text-sm">
        <Image src="./icons/team-icon.svg" alt="icon" width={20} height={20} />
        <p>{userInfo?.teams.full_name}</p>
      </div>
    </div>
  );
};

const TeamInfo = () => {
  return (
    <div className="flex flex-col gap-6">
      <TeamManagerInfo />
      <TeamName />
      <TeamMembers />
    </div>
  );
};

export default TeamInfo;
