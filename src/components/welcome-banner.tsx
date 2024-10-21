import useUserData from "@/hooks/use-userdata";
import React from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"; // Đảm bảo rằng bạn đã nhập Skeleton
import { UserData } from "@/entities/user";

const WelcomeBanner = ({ data }: { data: UserData | null }) => {
  return (
    <div
      style={{ backgroundImage: `url('/images/welcome-banner.png')` }}
      className="h-32 sm:h-[200px] bg-white bg-center bg-cover bg-no-repeat w-full flex items-center rounded-2xl px-6 sm:px-10 py-12 gap-4 sm:gap-8 border"
    >
      <Image
        alt="user-avatar"
        src={data?.avatar!}
        width={100}
        height={100}
        className="rounded-full"
      />
      <div className="sm:space-y-1 tracking-tight">
        <p className="sm:text-2xl font-semibold">
          Chào mừng bạn tới My iKame,{"  "}
        </p>
        <p className="sm:text-2xl font-semibold text-[#FF950F]">
          {data?.name!}
        </p>
        <p className="text-xs sm:text-base text-[#7A8185]">
          Hãy cùng nhau tạo nên những cột mốc mới ngày hôm nay.
        </p>
      </div>
    </div>
  );
};

export default WelcomeBanner;
