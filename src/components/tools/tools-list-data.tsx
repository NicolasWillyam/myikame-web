import { ToolData, ToolsList } from "@/entities/tool"; // Cập nhật import
import useToolsData from "@/hooks/use-toolsdata";
import React from "react";
import ToolCard from "../tool-card";

const ToolsListData = ({
  data,
  type,
}: {
  data: ToolData[] | null;
  type: string;
}) => {
  return (
    <div className="w-full grid lg:grid-cols-2 gap-4 mt-4">
      {data
        ?.filter((item) => item.type === type) // Filter by type
        .sort((a, b) => a.index - b.index) // Sort by index
        .map((item) => (
          <ToolCard key={item.id} data={item} /> // Render ToolCard with unique key
        ))}
    </div>
  );
};

export default ToolsListData;
