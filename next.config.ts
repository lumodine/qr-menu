import createNextIntlPlugin from "next-intl/plugin"
 
const withNextIntl = createNextIntlPlugin();

/** @type {import("next").NextConfig} */
const nextConfig = {
    useFileSystemPublicRoutes: true,
    images: {
        remotePatterns: [
            {
                hostname: "placehold.co",
            },
            {
                hostname: "cdn.lumodine.com",
            },
        ],
    },
}

export default withNextIntl(nextConfig)
