import React from "react";
import Logo from "./logo";
import UserInfo from "./user-info";

const NavBar = () => {
  return (
    <div className="w-screen fixed top-0 bg-white border-b-[1px] z-[10]">
      <div className="max-w-7xl h-16 px-10 mx-auto flex items-center justify-between">
        <Logo />
        <UserInfo />
      </div>
    </div>
  );
};

export default NavBar;
