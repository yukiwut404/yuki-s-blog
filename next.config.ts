// import type { NextConfig } from "next";
// const nextConfig: NextConfig = {
//   images: { unoptimized: true },
// };
// export default nextConfig;

import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages && {
    output: "export",
    basePath: "/yuki-s-blog",
    trailingSlash: true,
  }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
