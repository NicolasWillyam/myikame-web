// src/interfaces/api/backendApi.ts
import { getUserFromBackend } from "../../use-cases/get-user-data";
import { UserData } from "../../entities/user";

export const fetchUserFromBackend = async (
  userId: string,
  token: string
): Promise<UserData> => {
  return getUserFromBackend(userId, token);
};
