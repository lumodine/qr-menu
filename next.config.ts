import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    useFileSystemPublicRoutes: true,
    images: {
        remotePatterns: [
            {
                hostname: "placehold.co",
            },
            {
                hostname: "picsum.photos",
            },
            {
                hostname: "cdn.lumodine.com",
            },
        ],
    },
}

export default nextConfig
