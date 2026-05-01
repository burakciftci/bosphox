import type { NextConfig } from "next";
import os from "os";
import path from "path";

/**
 * Windows'ta `.next/trace` için EPERM (Defender / kilit) yaşanırsa varsayılan
 * `npm run dev` çıktıyı `%TEMP%/bosphox-next-dev` altına alır. Proje içi `.next`
 * için: `npm run dev:local`.
 */
const useTempDist =
  process.env.NEXT_USE_TEMP_DIST === "1" && process.env.NODE_ENV !== "production";

const nextConfig: NextConfig = {
  ...(useTempDist ? { distDir: path.join(os.tmpdir(), "bosphox-next-dev") } : {}),
  devIndicators: false,
};

export default nextConfig;
