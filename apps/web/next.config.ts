import { fileURLToPath } from "url";
import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";
import createJiti from "jiti";

createJiti(fileURLToPath(import.meta.url))("./src/env");

// todo: setup eslint CI
const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@repo/ui"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  experimental: {
    viewTransition: true,
    reactCompiler: true,
  },
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withContentCollections(nextConfig);
