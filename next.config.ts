/** @type {import('next').NextConfig} */
const nextConfig = {
    useFileSystemPublicRoutes: true,
    images: {
        remotePatterns: [
            {
                hostname: 'placehold.co'
            }
        ]
    }
}

export default nextConfig
