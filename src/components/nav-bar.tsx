import React from "react";
import Logo from "./logo";
import UserInfo from "./user-info";
import { UserData } from "@/entities/user";

const NavBar = ({ data }: { data: UserData | null }) => {
  return (
    <div className="w-screen fixed top-0 bg-white border-b-[1px] z-[10]">
      <div className="max-w-7xl h-16 px-7 mx-auto flex items-center justify-between">
        <Logo />
        <UserInfo
          avatar={data?.avatar!}
          name={data?.name!}
          position={data?.positions.name!}
        />
      </div>
    </div>
  );
};

export default NavBar;
