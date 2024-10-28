"use client";
import keycloak, {
  initializeKeycloak,
} from "@/moudules/services/key-cloak-service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const router = useRouter(); // Khởi tạo router

  useEffect(() => {
    if ("caches" in window) {
      caches.keys().then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName);
        });
      });
    }
  }, []);

  useEffect(() => {
    initializeKeycloak()
      .then(() => {
        if (keycloak.authenticated) {
          router.push("/");
        } else {
          router.push("/login");
        }
      })
      .catch((error) =>
        console.error("Error during Keycloak initialization:", error)
      );
  }, []);

  const handleLogin = () => {
    keycloak.login({
      redirectUri: window.location.origin + "/auth",
      idpHint: "google", // "google" là IDP bạn đã cấu hình trong Keycloak cho đăng nhập Google
    });
  };

  return (
    <main className="w-screen h-screen bg-cover bg-no-repeat bg-center bg-[url('https://storage.googleapis.com/my-ikame-web/assets/images/Background.png')]">
      <div className="w-full h-full bg-black/50 text-white flex justify-center items-center">
        <div
          style={{
            backdropFilter: "blur(20px)", // Apply a blur effect to the background
            boxShadow: "0px 0px 16px 0px rgba(175, 182, 186, 0.32)", // Apply a box shadow
            background: "rgba(78, 82, 85, 0.4)", // Set the background color with 40% opacity
          }}
          className="px-8 py-6 sm:px-16 sm:py-10 rounded-[48px] sm:rounded-[56px] flex flex-col items-center space-y-6 sm:space-y-8"
        >
          <Image
            src={"/images/logo-white.svg"}
            alt="icon"
            width={172}
            height={56}
          />
          <div className="space-y-2 sm:space-y-4 text-center">
            <p className="text-2xl sm:text-5xl font-extrabold">
              Chào mừng tới, <span className="text-[#FF950F]">My iKame</span>
            </p>
            <p className="sm:text-2xl sm:font-bold font-medium">
              Khám phá iKame ngày hôm nay!
            </p>
          </div>
          <button
            className="bg-[#FF950F] w-fit px-16 h-12 rounded-xl text-sm font-medium"
            onClick={handleLogin}
          >
            Đăng nhập với Google
          </button>
        </div>
      </div>
    </main>
  );
}
