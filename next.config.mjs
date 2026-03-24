/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/insoulcar',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
