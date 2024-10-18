import React from "react";
import ToolCard from "./tool-card";
import ToolsListData from "./tools/tools-list-data";
import useToolsData from "@/hooks/use-toolsdata";
import { Skeleton } from "@/components/ui/skeleton"; // Đảm bảo rằng bạn đã nhập Skeleton

const ToolsList = () => {
  const { toolsData, loading } = useToolsData();

  if (loading) {
    return (
      <div className="w-full flex flex-col gap-8">
        <div className="w-full space-y-4">
          <Skeleton className="h-6 w-[300px] rounded-md bg-[#4E5255]/10" />
          <div className="flex flex-col gap-4">
            <div className="w-full grid grid-cols-2 gap-4">
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
            </div>
          </div>
        </div>

        <div className="w-full space-y-4">
          <Skeleton className="h-6 w-[300px] rounded-md bg-[#4E5255]/10" />

          <div className="flex flex-col gap-4">
            <div className="w-full grid grid-cols-2 gap-4">
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
              <Skeleton className="h-28 w-full rounded-2xl bg-[#4E5255]/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-8">
      <div className="w-full">
        <p className="text-xl font-semibold ">Business Management Apps</p>
        <ToolsListData data={toolsData} type="bm" />
      </div>

      <div className="w-full">
        <p className="text-xl font-semibold">Business Support Apps</p>
        <ToolsListData data={toolsData} type="bs" />
      </div>
    </div>
  );
};

export default ToolsList;
