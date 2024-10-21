import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { fetchUserInfo } from "../interfaces/api/keycloak-api";
import { getUserFromBackend } from "../use-cases/get-user-data";
import { refreshAccessToken } from "../utils/refresh-token-utils";
import { UserData } from "../entities/user";

// Replace `any` with your backend data type if known
interface BackendData {
  // Define the structure here
}

const useUserData = () => {
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [backendData, setBackendData] = useState<BackendData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("authToken");
      const refreshToken = Cookies.get("refreshToken");

      if (token) {
        try {
          const info = await fetchUserInfo(token);
          const userData = await getUserFromBackend(info.email, token);
          setUserInfo(userData);
        } catch (error) {
          console.error("Failed to fetch user info", error);

          // Refresh token if the current one has expired
          if (refreshToken) {
            const newToken = await refreshAccessToken(refreshToken);
            if (newToken) {
              const info = await fetchUserInfo(newToken);
              const userData = await getUserFromBackend(info.email, newToken);
              setUserInfo(userData);
            }
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (userInfo) {
      setLoading(false);
    }
  }, [userInfo]);

  return { userInfo, loading };
};

export default useUserData;
