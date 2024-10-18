import Image from "next/image";
import React from "react";

const NotFoundMember = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-1">
      <Image src="./icons/not-found.svg" alt="icons" width={120} height={120} />
      <p className="text-sm text-[#7A8185]">Không tìm thấy thành viên!</p>
    </div>
  );
};

export default NotFoundMember;
