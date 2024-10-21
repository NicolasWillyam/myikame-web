"use client";
import Logo from "@/components/logo";
import keycloak, {
  initializeKeycloak,
} from "@/moudules/services/key-cloak-service";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    initializeKeycloak().catch((error) =>
      console.error("Error during Keycloak initialization:", error)
    );
  }, []);
  const handleLogin = () => {
    keycloak.login({
      redirectUri: window.location.origin + "/login",
      idpHint: "google", // "google" là IDP bạn đã cấu hình trong Keycloak cho đăng nhập Google
    });
  };

  const router = useRouter();
  return (
    <main
      style={{ backgroundImage: `url('/images/background.png')` }}
      className="w-screen h-screen bg-cover bg-no-repeat bg-center"
    >
      <div className="w-full h-full bg-black/50 text-white flex justify-center items-center">
        <div className="grid grid-cols-2 gap-20 items-center">
          <div className="space-y-2">
            <p className="text-5xl font-bold ">
              Welcome to <span className="text-[#f9a323]">MyIkame</span>
            </p>
            <p className="text-2xl">
              The <span className="text-[#f9a323] font-bold">All-in-one</span>{" "}
              place to discover iKame
            </p>
          </div>

          <div className="w-full p-10 py-16 bg-white rounded-[40px] flex flex-col justify-center items-center gap-8">
            <Image
              src="./images/logo.svg"
              alt="logo_image"
              width={230}
              height={80}
            />
            <button
              className="bg-[#f9a323] w-full h-12 rounded-2xl text-lg font-semibold"
              onClick={handleLogin}
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
