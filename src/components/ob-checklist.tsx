import React from "react";

const checkList = [
  {
    label: "Các thông tin quan trọng",
    list: [
      {
        label: "Nội quy lao động",
        link: "https://iwiki.ikameglobal.com/doc/b46b799df810b6d616693dbb",
      },
      {
        label: "Kích hoạt Google Calendar",
        link: "https://iwiki.ikameglobal.com/doc/ad26b88ec8357a83eaeaf643",
      },
      {
        label: "Xác thực 2 lớp tài khoản",
        link: "https://iwiki.ikameglobal.com/doc/5a0e164a5ce41875b7554a68",
      },
      {
        label: "IT support - Những điều cần biết",
        link: "https://iwiki.ikameglobal.com/doc/c34e6123926814167d21c155",
      },
    ],
  },
  {
    label: "Hệ thống chính sách liên quan",
    list: [
      {
        label: "Tài trợ đào tạo",
        link: "https://iwiki.ikameglobal.com/doc/d464bce9562ea75a6c24a26d",
      },
      {
        label: "Chương trình giới thiệu ứng viên",
        link: "https://iwiki.ikameglobal.com/doc/3062c69185d690825a4a51f0",
      },
    ],
  },
  {
    label: "Hệ thống quản trị mục tiêu",
    list: [
      {
        label: "Tổng quan về OKR",
        link: "https://iwiki.ikameglobal.com/doc/f0e52e0774bdf10024f7d457",
      },
      {
        label: "EKS (Expectations & Key Step)",
        link: "https://iwiki.ikameglobal.com/doc/0dc2f961814b6492c42cb037",
      },
    ],
  },
  {
    label: "iKame Social",
    list: [
      {
        label: "iKame Inc Facebook Group",
        link: "https://www.facebook.com/groups/138959584508457",
      },
      {
        label: "iKame câu lạc bộ",
        link: "https://iwiki.ikameglobal.com/doc/1594075c06e577b8ed36deed",
      },
    ],
  },
];

const ObChecklist = () => {
  return (
    <div className="min-w-[392px] h-fit bg-white border gap-4 p-4 px-5 pb-6 rounded-2xl space-y-1">
      <p className="font-semibold">Onboarding Checklist</p>
      <p className="text-[#7A8185] text-sm">Những gì một iKamer mới cần biết</p>
      <div className="pt-4 flex flex-col gap-6">
        {checkList.map((item, index) => (
          <div key={index} className="text-sm">
            <div className="flex items-start gap-1">
              <div className="w-5 h-5 flex items-center justify-center">
                <p className="text-[#FF950F]  font-semibold">{index + 1}</p>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-semibold">{item.label}</p>
                <div className="flex flex-col gap-2">
                  {item.list.map((item, index) => (
                    <div key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0D87F2] underline underline-offset-2"
                      >
                        {item.label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ObChecklist;
