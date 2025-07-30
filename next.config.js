/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static site export
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

module.exports = nextConfig;
