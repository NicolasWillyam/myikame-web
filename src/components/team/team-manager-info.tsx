import React from "react";
import ManagerInfo from "../manager-info";
import useToolsData from "@/hooks/use-toolsdata";
import { Skeleton } from "../ui/skeleton";

const TeamManagerInfo = () => {
  return (
    <div className="flex gap-4 items-center">
      <div className="w-24">
        <p className="text-sm font-semibold text-[#4E5255]">Quản lí</p>
      </div>
      <div className="w-full flex items-center">
        <ManagerInfo />
      </div>
    </div>
  );
};

export default TeamManagerInfo;
