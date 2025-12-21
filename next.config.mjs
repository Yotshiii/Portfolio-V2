/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages friendly: static export + trailing slashes
  output: "export",
  trailingSlash: true,
  // If you deploy under https://<user>.github.io/<repo>/ set NEXT_PUBLIC_BASE_PATH="/<repo>"
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || "",
  images: {
    unoptimized: true,
  },
}

export default nextConfig
