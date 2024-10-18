// src/utils/tokenUtils.ts
import Cookies from "js-cookie";
import axios from "axios";

const KEYCLOAK_URL = "https://keycloak.ikameglobal.com"; // URL của Keycloak
const CLIENT_ID = "ikame-sso"; // ID của client
const REFRESH_TOKEN_URL = `${KEYCLOAK_URL}/realms/ikame-platform/protocol/openid-connect/token`;

interface TokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
}

export const refreshAccessToken = async (
  refreshToken: string
): Promise<string | null> => {
  try {
    const response = await axios.post<TokenResponse>(
      REFRESH_TOKEN_URL,
      new URLSearchParams({
        grant_type: "refresh_token",
        client_id: CLIENT_ID,
        refresh_token: refreshToken,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const newAccessToken = response.data.access_token;
    // Lưu token mới vào cookies
    Cookies.set("authToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    console.error("Failed to refresh access token", error);
    return null; // Hoặc xử lý lỗi theo cách khác
  }
};
