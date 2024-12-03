import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    useFileSystemPublicRoutes: true,
    images: {
        remotePatterns: [
            {
                hostname: "cdn.lumodine.com",
            },
        ],
    },
}

export default nextConfig
