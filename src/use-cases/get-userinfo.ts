// src/use-cases/GetUserInfo.ts
import axios from "axios";
import { User } from "../entities/user";

export const getUserInfo = async (token: string): Promise<User> => {
  try {
    const response = await axios.get(
      "https://keycloak.ikameglobal.com/realms/ikame-platform/protocol/openid-connect/userinfo",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data; // Trả về dữ liệu người dùng từ Keycloak
  } catch (error) {
    console.error("Error fetching user info:", error);
    throw error;
  }
};
