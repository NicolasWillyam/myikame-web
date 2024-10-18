// src/use-cases/GetUserFromBackend.ts
import axios from "axios";
import { User, UserData } from "../entities/user";
import { ToolData } from "@/entities/tool";

export const getToolsData = async (token: string): Promise<ToolData> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_DOMAIN}/api/v2/tools`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("đabáhgdh", response.data.data);

    return response.data.data; // Trả về dữ liệu người dùng từ backend
  } catch (error) {
    console.error("Error fetching user from backend:", error);
    throw error;
  }
};
