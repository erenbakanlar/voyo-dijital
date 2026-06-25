import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Birden fazla lockfile tespit edildiğinde doğru proje kökünü sabitler
  turbopack: {
    root: path.join(__dirname),
  },
  // Lint'i build sürecinden ayır: sunucuda build, ignore-scripts ile atlanan
  // ESLint resolver'ına (unrs-resolver) takılmasın. Lint'i "npm run lint" ile yap.
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
