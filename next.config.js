/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // removed `output: 'export'` to support dynamic API routes and server-side
    // rendering. Static HTML export does not work with Next.js API routes.
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;
