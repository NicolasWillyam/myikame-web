// src/use-cases/GetUserFromBackend.ts
import axios from "axios";
import { User, UserData } from "../entities/user";

export const getUserFromBackend = async (
  userId: string,
  token: string
): Promise<UserData> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/v2/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.data; // Trả về dữ liệu người dùng từ backend
  } catch (error) {
    console.error("Error fetching user from backend:", error);
    throw error;
  }
};
