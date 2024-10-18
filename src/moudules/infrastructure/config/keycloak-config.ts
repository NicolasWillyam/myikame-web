const keycloakConfig = {
  clientId: process.env.KEYCLOAK_CLIENT_ID || "your-client-id",
  clientSecret: process.env.KEYCLOAK_CLIENT_SECRET || "your-client-secret",
  realm: process.env.KEYCLOAK_REALM || "ikame-platform",
  authUrl: process.env.KEYCLOAK_URL || "https://keycloak.ikameglobal.com",
  redirectUri: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
};

export default keycloakConfig;
