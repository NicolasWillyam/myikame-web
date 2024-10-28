"use client";
import { UserData } from "@/entities/user";
import {
  getUserInfo,
  initializeKeycloak,
} from "@/moudules/services/key-cloak-service";
import { getUserFromBackend } from "@/use-cases/get-user-data";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useAuth() {
  const router = useRouter(); // Khởi tạo router
  const [userInfo, setUserInfo] = useState<UserData | null>(null);
  const [authenciation, setAuthenciation] = useState<Boolean>(false);
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

  useEffect(() => {
    const initKeycloak = async () => {
      try {
        const { userProfile } = (await initializeKeycloak()) as any;

        if (userProfile) {
          await fetchUserData(userProfile.accessToken!);
          setAuthenciation(true);
        } else {
          router.push("/login");
          setAuthenciation(false);
        }
      } catch (error) {
        console.error("Error during Keycloak initialization:", error);
      } finally {
        setLoading(false);
      }
    };

    initKeycloak();
  }, []);

  return { loading, authenciation };
}
