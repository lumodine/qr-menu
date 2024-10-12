import { type NextRequest, NextResponse } from "next/server"

const allowedTenants = ["test", "deneme"] // TODO

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  const tenantId = pathname.split("/")[1]
  
  if (!tenantId) {
    // TODO
  }

  const hasTenant = allowedTenants.includes(tenantId)
  if (!hasTenant) {
    // TODO
  }

  const response = NextResponse.next()

  response.headers.set("x-tenant-id", tenantId)
  response.cookies.set("tenantId", tenantId)
  
  return response
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
