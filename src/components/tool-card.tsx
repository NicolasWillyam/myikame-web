import { ToolData } from "@/entities/tool";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ToolCard = ({ data }: { data: ToolData }) => {
  return (
    <a href={`https://${data.name}.ikameglobal.com/home`} target="_blank">
      <div className="w-full h-full border bg-white rounded-2xl p-6 flex gap-4 items-start hover:scale-[102%] hover:duration-300  hover:shadow-lg cursor-pointer">
        <Image src="./icons/ip-icon.svg" alt="icon" width={38} height={38} />
        <div className="space-y-2">
          <p className="text-2xl font-bold">{data.label}</p>
          <p className="text-[#7A8185] text-sm">{data.description}</p>
        </div>
      </div>
    </a>
  );
};

export default ToolCard;
