import { ToolData, ToolsList } from "@/entities/tool"; // Cập nhật import
import useToolsData from "@/hooks/use-toolsdata";
import React from "react";
import ToolCard from "../tool-card";

const ToolsListData = ({
  data,
  type,
}: {
  data: ToolData | null;
  type: string;
}) => {
  console.log("tools", data);

  return (
    <div className="w-full grid lg:grid-cols-2 gap-4 mt-4">
      {data?.map(
        (item, index) => item.type === type && <ToolCard data={item} />
      )}
    </div>
  );
};

export default ToolsListData;
