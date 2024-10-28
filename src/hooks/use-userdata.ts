import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { fetchUserInfo } from "../interfaces/api/keycloak-api";
import { getUserFromBackend } from "../use-cases/get-user-data";
import { refreshAccessToken } from "../utils/refresh-token-utils";
import { UserData } from "../entities/user";
import keycloak, {
  getUserInfo,
  initializeKeycloak,
} from "@/moudules/services/key-cloak-service";
import { useRouter } from "next/navigation";

const useUserData = () => {
  const router = useRouter(); // Khởi tạo router
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUserData = async (token: string) => {
    const userProfile = await getUserInfo();

    if (userProfile?.userProfile?.email) {
      const userData = await getUserFromBackend(
        userProfile.userProfile.email,
        token
      );
      setUserInfo(userData);
    } else {
      console.error("Email is not available in userProfile");
    }
  };

  const handleTokenRefresh = async () => {
    if (keycloak.refreshToken) {
      const newToken = await refreshAccessToken(keycloak.refreshToken);
      if (newToken) {
        await fetchUserData(newToken);
      } else {
        console.error("Failed to refresh token");
      }
    }
  };

  useEffect(() => {
    const initKeycloak = async () => {
      try {
        const { userProfile } = (await initializeKeycloak()) as any;

        if (userProfile) {
          await fetchUserData(userProfile.accessToken!);
        } else {
          router.push("/login");
        }
      } catch (error) {
        console.error("Error during Keycloak initialization:", error);
      } finally {
        setLoading(false);
      }
    };

    initKeycloak();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        if (keycloak.authenticated) {
          await fetchUserData(keycloak.token!);
        } else {
          console.error("User is not authenticated");
        }
      } catch (error) {
        console.error("Failed to fetch user info", error);
        await handleTokenRefresh();
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { userInfo, loading };
};

export default useUserData;
