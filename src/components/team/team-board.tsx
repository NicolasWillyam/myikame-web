import React from "react";
import TeamInfo from "./team-info";

const TeamBoard = () => {
  return (
    <div className="w-full sm:w-[392px] h-fit bg-white border gap-4 p-4 px-5 pb-6 rounded-2xl space-y-4">
      <p className="font-semibold">Team của bạn</p>
      <TeamInfo />
    </div>
  );
};

export default TeamBoard;
