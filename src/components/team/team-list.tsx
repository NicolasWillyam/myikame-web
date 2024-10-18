import { UserData, UserDetails } from "@/entities/user";
import React from "react";
import Image from "next/image";

const TeamList = ({ list }: { list: UserDetails[] }) => {
  console.log("list", list);
  return (
    <div className="flex flex-col gap-4">
      {list.map(
        (item, index) =>
          item.avatar !== null && (
            <div key={index} className="flex gap-2 items-center">
              <div className="h-10 w-10 rounded-full bg-[#4E5255]/20">
                <Image
                  alt="user-avatar"
                  src={item?.avatar!}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="space-y-1 text-left">
                <div className="flex gap-1.5 items-center">
                  <p className="text-xs font-semibold text-[#4E5255]">
                    {item.name}
                  </p>
                  <div className="h-1 w-1 rounded-full bg-[#D9D9D9]"></div>
                  <p className="text-xs font-semibold text-[#4E5255]">
                    {/* {item.name} */}
                    iKamer
                  </p>
                </div>
                <p className="text-xs text-[#7A8185]">{item.email}</p>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default TeamList;
