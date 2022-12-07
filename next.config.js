/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ik.imagekit.io", "kycfoundation.in"],
    path:'',
    loader: 'imgix',
  },
};

module.exports = nextConfig;
