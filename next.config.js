/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [{
            source: '/api/:path*',
            destination: 'https://api.preqin.com/api/:path*'
        },
        {
            source: '/connect/:path*',
            destination: 'https://api.preqin.com/connect/:path*'
        }]
    }
}

module.exports = nextConfig
