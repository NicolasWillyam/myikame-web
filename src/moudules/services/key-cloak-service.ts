import Keycloak from "keycloak-js";
import Cookies from "js-cookie";

const keycloakUrl = process.env.NEXT_PUBLIC_KEYCLOAK_URL!;
const realm = process.env.NEXT_PUBLIC_KEYCLOAK_REALM!;
const clientId = process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!;

// Khởi tạo Keycloak với các trường thiết yếu
const keycloak = new Keycloak({
  url: keycloakUrl, // Đảm bảo rằng biến môi trường KEYCLOAK_URL đã được thiết lập
  realm: realm, // Đảm bảo rằng biến môi trường KEYCLOAK_REALM đã được thiết lập
  clientId: clientId, // Đảm bảo rằng biến môi trường KEYCLOAK_CLIENT_ID đã được thiết lập
});

let isInitialized = false; // Biến để theo dõi xem Keycloak đã được khởi tạo hay chưa

export const initializeKeycloak = () => {
  return new Promise((resolve, reject) => {
    keycloak
      .init({
        onLoad: "check-sso",
        silentCheckSsoRedirectUri:
          window.location.origin + "/silent-check-sso.html",
        pkceMethod: "S256",
      })
      .then((authenticated) => {
        const token = getToken();
        storeTokens(token!);
        resolve(keycloak);
        return true;
      })
      .catch((error) => {
        console.error("Failed to initialize Keycloak:", error);
        reject(error);
      });
  });
};

// OLD VERSION
// export const initializeKeycloak = () => {
//   return new Promise((resolve, reject) => {
//     keycloak
//       .init({ onLoad: "login-required" })
//       .then((authenticated) => {
//         if (authenticated) {
//           window.location.href = "/dashboard";
//           getToken();
//           resolve(keycloak);
//         } else {
//           console.warn("Not authenticated");
//           window.location.href = "/";
//           reject("Not authenticated");
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to initialize Keycloak:", error);
//         reject(error);
//       });
//   });
// };

// Hàm đăng xuất
export const logout = () => {
  if (keycloak) {
    keycloak.logout({
      redirectUri: (window.location.href = "/login"), // URL mà người dùng sẽ được chuyển đến sau khi đăng xuất
    });
  } else {
    console.error("Keycloak instance is not initialized.");
  }
};

interface Tokens {
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

// Function to get the tokens
export const getToken = (): Tokens | null => {
  if (keycloak.authenticated) {
    // Kiểm tra xem Keycloak đã xác thực chưa
    const accessToken = keycloak.token; // Lấy access token
    const refreshToken = keycloak.refreshToken; // Lấy refresh token

    return { accessToken, refreshToken }; // Trả về đối tượng chứa cả access token và refresh token
  }
  return null; // Trả về null nếu không xác thực
};

export const storeTokens = (tokens: Tokens) => {
  if (tokens) {
    const { accessToken, refreshToken } = tokens;

    // Lưu access token vào Local Storage
    localStorage.setItem("authToken", accessToken!);
    localStorage.setItem("refreshToken", refreshToken!);

    // Lưu refresh token vào Session Storage
    sessionStorage.setItem("authToken", accessToken!);
    sessionStorage.setItem("refreshToken", refreshToken!);

    // Lưu refresh token vào Cookies
    Cookies.set("authToken", accessToken!, { expires: 7 }); // Đặt thời gian hết hạn cho cookie
    Cookies.set("refreshToken", refreshToken!, { expires: 7 }); // Đặt thời gian hết hạn cho cookie
  }
};

// Hàm tải thông tin người dùng
export const getUserInfo = () => {
  return keycloak.loadUserProfile();
};

export default keycloak;
