/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // output: export for static GitHub Pages deployment
    output: 'export',
    images: {
        unoptimized: true
    }
};

module.exports = nextConfig;
