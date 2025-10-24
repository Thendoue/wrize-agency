/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // needed for static export
  basePath: "/wrize-media-agency", // 👈 your GitHub repo name
  assetPrefix: "/wrize-media-agency/", // 👈 same here
  images: { unoptimized: true }, // disable image optimization for static export
};

export default nextConfig;

