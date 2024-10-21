"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";
import keycloak, {
  // authKeycloak,
  getToken,
  initializeKeycloak,
} from "../../../moudules/services/key-cloak-service";
import LoadingSpinner from "@/components/loading-spinner";

const LoginPage = () => {
  useEffect(() => {
    const login = async () => {
      try {
        const auth = await initializeKeycloak(); // Gọi hàm này để khởi tạo Keycloak với check-sso
        if (auth) {
          window.location.href = "/dashboard"; // Chuyển hướng đến trang dashboard nếu đã xác thực
        }
      } catch (error) {
        console.error("Error during Keycloak initialization:", error);
      }
    };

    login();
  }, []);

  return <div>{/* <LoadingSpinner /> */}</div>;
};

export default LoginPage;
