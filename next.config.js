/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 763131272,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "c104caf295b5132ab9219ea68f74e24b",
  },
  reactStrictMode: false,
  images: {
    domains: ["https://whats-app-clone-esram75pr-ankit2005.vercel.app","https://whats-app-clone-omega-liart.vercel.app", "localhost"],
  },
};

module.exports = nextConfig;
