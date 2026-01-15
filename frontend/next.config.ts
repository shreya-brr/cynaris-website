import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "localhost",        // for local Strapi images
      "127.0.0.1",
      "cynarissolutions.com", // if you reference their images
    ],
  },
};

export default nextConfig;
