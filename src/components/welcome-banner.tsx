import useUserData from "@/hooks/use-userdata";
import React from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton"; // Đảm bảo rằng bạn đã nhập Skeleton

const WelcomeBanner = () => {
  const { userInfo, backendData, loading } = useUserData();

  return (
    <div
      style={{ backgroundImage: `url('/images/welcome-banner.png')` }}
      className="h-32 sm:h-[200px] bg-white bg-center bg-cover bg-no-repeat w-full flex items-center rounded-2xl px-6 sm:px-10 py-12 gap-4 sm:gap-8 border"
    >
      {loading ? (
        <>
          <Skeleton className="h-[100px] w-[100px] bg-[#4E5255]/20 rounded-full" />
          <div className="space-y-2 tracking-tight">
            <Skeleton className="h-7 w-[330px] bg-[#4E5255]/20" />
            <Skeleton className="h-7 w-[220px] bg-[#FF950F]/40" />

            <Skeleton className="h-5 w-[420px] bg-[#4E5255]/20" />
          </div>
        </>
      ) : (
        <>
          <Image
            alt="user-avatar"
            src={userInfo?.avatar!}
            width={100}
            height={100}
            className="rounded-full"
          />
          <div className="sm:space-y-1 tracking-tight">
            <p className="sm:text-2xl font-semibold">
              Chào mừng bạn tới My iKame,{"  "}
            </p>
            <p className="sm:text-2xl font-semibold text-[#FF950F]">
              {userInfo?.name}
            </p>
            <p className="text-xs sm:text-base text-[#7A8185]">
              Hãy cùng nhau tạo nên những cột mốc mới ngày hôm nay.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default WelcomeBanner;
