import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(request: NextRequest) {
    const url = request.nextUrl
    const host = request.headers.get("host")

    const [
        scheme,
        domain,
    ] = process.env.NEXT_PUBLIC_QR_MENU_URL!.split("{alias}")

    const tenantAlias = host
        ?.replaceAll(scheme, "")
        ?.replaceAll(domain, "")

    if (tenantAlias) {
        return NextResponse.rewrite(
            new URL(
                `/${tenantAlias}${url.pathname}${url.search}`,
                request.url
            )
        )
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)"
    ]
}
