import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Eksportuje stronę jako statyczne pliki HTML
  images: {
    unoptimized: true, // Wyłącza optymalizację Next.js dla obrazów (bo wymaga serwera)
  },
};

export default nextConfig;
