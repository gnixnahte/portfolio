import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    // Keep a stable project root even when commands are run from parent directories.
    root: projectRoot,
  },
};

export default nextConfig;
