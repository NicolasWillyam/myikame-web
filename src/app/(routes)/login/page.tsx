"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import {
  // authKeycloak,
  getToken,
  initializeKeycloak,
} from "../../../moudules/services/key-cloak-service";
import LoadingSpinner from "@/components/loading-spinner";

const LoginPage = () => {
  useEffect(() => {
    const login = async () => {
      try {
        await initializeKeycloak(); // Gọi hàm này để khởi tạo Keycloak

        const tokens = getToken(); // Lấy accessToken và refreshToken sau khi đăng nhập

        if (tokens) {
          const { accessToken, refreshToken } = tokens;

          if (accessToken) {
            localStorage.setItem("token", accessToken);
            Cookies.set("authToken", accessToken, { expires: 7 });
          }

          if (refreshToken) {
            Cookies.set("refreshToken", refreshToken, { expires: 7 });
          }

          window.location.href = "/dashboard"; // Chuyển hướng đến trang dashboard
        }
      } catch (error) {
        console.error("Error during Keycloak initialization:", error);
      }
    };

    login();
  }, []);
  return (
    <div>
      <LoadingSpinner />
    </div>
  );
};

export default LoginPage;
