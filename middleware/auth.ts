import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import keycloak from "../src/moudules/services/key-cloak-service"; // Đảm bảo đường dẫn chính xác

export function middleware(req: NextRequest) {
  // Kiểm tra nếu người dùng đã được xác thực
  if (!keycloak.authenticated) {
    // Nếu chưa xác thực, chuyển hướng về trang chủ
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Nếu đã xác thực, cho phép tiếp tục đến trang yêu cầu
  return NextResponse.next();
}

// Định nghĩa đường dẫn mà middleware sẽ áp dụng
export const config = {
  matcher: ["/dashboard"], // Đường dẫn nào cần kiểm tra
};
