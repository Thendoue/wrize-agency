/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // needed for static export
  basePath: "/wrize-agency", // 👈 your GitHub repo name
  assetPrefix: "/wrize-agency/", // 👈 same here
  images: { unoptimized: true }, // disable image optimization for static export
};

export default nextConfig;

