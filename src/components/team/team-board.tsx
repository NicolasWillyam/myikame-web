import React from "react";
import TeamInfo from "./team-info";
import { UserData } from "@/entities/user";

const TeamBoard = ({ data }: { data: UserData | null }) => {
  console.log(data);
  return (
    <div className="w-full sm:w-[392px] h-fit bg-white border gap-4 p-4 px-5 pb-6 rounded-2xl space-y-4">
      <p className="font-semibold">Team của bạn</p>
      <TeamInfo data={data} />
    </div>
  );
};

export default TeamBoard;
