import axios from "axios";
import keycloakConfig from "../infrastructure/config/keycloak-config";
import keycloak from "./key-cloak-service";

export async function exchangeCodeForToken(code: string) {
  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("client_id", keycloakConfig.clientId);
  params.append("client_secret", keycloakConfig.clientSecret);
  params.append("code", code);
  params.append("redirect_uri", keycloakConfig.redirectUri);

  const { data } = await axios.post(
    `${keycloakConfig.authUrl}/realms/${keycloakConfig.realm}/protocol/openid-connect/token`,
    params
  );

  return data; // Contains access_token, refresh_token, etc.
}
