import { cookies } from "next/headers";

export function middleware(request) {
  const currentUser = cookies().has("user_id_invoice");
  if (currentUser && request.nextUrl.pathname == "/") {
    return Response.redirect(new URL(`/dashboard`, request.url));
  }
  if (currentUser && request.nextUrl.pathname.endsWith("register")) {
    return Response.redirect(new URL("/dashboard", request.url));
  }
  if (!currentUser && request.nextUrl.pathname.includes("feed")) {
    return Response.redirect(new URL("/", request.url));
  }
}