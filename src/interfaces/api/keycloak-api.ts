// src/interfaces/api/keycloakApi.ts
import { getUserInfo } from "../../use-cases/get-userinfo";
import { User } from "../../entities/user";

export const fetchUserInfo = async (token: string): Promise<User> => {
  return getUserInfo(token);
};
