/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/FWD-react",
  assetPrefix: "/FWD-react",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.xkcd.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
