import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Bỏ qua xác thực nếu người dùng đang ở trang /login
  if (pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  // Lấy cookies từ request headers
  const cookieHeader = req.headers.get("cookie") || "";

  // Tìm token trong cookies
  const cookies = Object.fromEntries(
    cookieHeader.split("; ").map((cookie) => {
      const [key, value] = cookie.split("=");
      return [key, decodeURIComponent(value)];
    })
  );

  const token = cookies["authToken"]; // Lấy giá trị authToken từ cookies

  if (!token) {
    // Nếu không có token, chuyển hướng đến trang /login
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Nếu đã có token, cho phép tiếp tục
  return NextResponse.next();
}

// Định nghĩa các đường dẫn middleware sẽ áp dụng
export const config = {
  matcher: ["/dashboard/:path*"], // Middleware được áp dụng cho /dashboard và các sub-path của nó
};
