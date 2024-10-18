import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const cultureList = [
  {
    label: "Ngọn lửa chung",
    link: "https://example.com/noi-quy-lao-dong",
  },
  {
    label: "Tôn trọng",
    link: "https://example.com/noi-quy-lao-dong",
  },
  {
    label: "Nghĩ lớn",
    link: "https://example.com/noi-quy-lao-dong",
  },
  {
    label: "Trao quyền - Tự chủ",
    link: "https://example.com/noi-quy-lao-dong",
  },
  {
    label: "Sáng tạo - Cải tiến - Đổi mới",
    link: "https://example.com/noi-quy-lao-dong",
  },
  {
    label: "Khát khao nâng tầm",
    link: "https://example.com/noi-quy-lao-dong",
  },
];

const CultureBoard = () => {
  return (
    <div className="w-full sm:w-[392px] h-fit bg-white border gap-4 p-4 px-5 rounded-2xl space-y-1">
      <p className="font-semibold">6 văn hoá - giá trị cốt lõi iKame </p>
      <div className="pt-4 flex flex-col gap-4">
        {cultureList.map((item, index) => (
          <div key={index} className="text-sm">
            <div className="flex items-start gap-1">
              <div className="w-8 h-8 flex items-center justify-center">
                <p className="text-[#FF950F] text-2xl font-bold">{index + 1}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold mt-1.5">{item.label}</p>
                <div className="flex flex-col gap-2"></div>
              </div>
            </div>
          </div>
        ))}
        <a
          href="https://iwiki.ikameglobal.com/doc/af60aa0922fcc6681bc085b8"
          className="text-xs flex items-center underline underline-offset-2 text-[#0D87F2] font-medium"
          target="_blank"
        >
          Xem chi tiết
          <IoIosArrowRoundForward size={20} />
        </a>
      </div>
    </div>
  );
};

export default CultureBoard;
