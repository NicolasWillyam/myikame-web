import React from "react";
import TeamManagerInfo from "./team-manager-info";
import useUserData from "@/hooks/use-userdata";
import TeamMembers from "./team-members";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";
import LoadingSpinner from "../loading-spinner";
import { UserData } from "@/entities/user";

const TeamName = ({ full_name }: { full_name: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-24">
        <p className="text-sm font-semibold text-[#4E5255]">Team</p>
      </div>
      <div className="w-full flex gap-2 items-center text-[#4E5255] text-sm">
        <Image src="./icons/team-icon.svg" alt="icon" width={20} height={20} />
        <p>{full_name}</p>
      </div>
    </div>
  );
};

const TeamInfo = ({ data }: { data: UserData | null }) => {
  return (
    <div className="flex flex-col gap-6">
      {data?.teams.manager_teams.length! > 0 && (
        <TeamManagerInfo
          avatar={data?.teams.manager_teams[0].users?.avatar!}
          name={data?.teams.manager_teams[0].users?.name!}
          email={data?.teams.manager_teams[0].users?.email!}
        />
      )}

      {data?.teams.full_name! && (
        <TeamName full_name={data?.teams.full_name!} />
      )}
      {data !== null && <TeamMembers data={data} />}
    </div>
  );
};

export default TeamInfo;
