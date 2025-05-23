import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "images.pexels.com" },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
        test: /\.svg$/,
        use: [{loader: '@svgr/webpack', options: { icon: true }}],
    })

    return config
},

};

export default nextConfig;
