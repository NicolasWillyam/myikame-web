import React from "react";
import TeamMembersList from "./team-members-list";

const TeamMembers = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-24">
        <p className="text-sm font-semibold text-[#4E5255]">Thành viên</p>
      </div>
      <div className="w-full flex items-center">
        <TeamMembersList />
      </div>
    </div>
  );
};

export default TeamMembers;
