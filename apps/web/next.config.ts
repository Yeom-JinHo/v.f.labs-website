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
  async redirects() {
    const onOldHost = [
      { type: "host" as const, value: "v-f-labs-website-web.vercel.app" },
    ];
    return [
      {
        source: "/celebrate-agency/:path*",
        has: onOldHost,
        destination: "https://celebrate-agency.vercel.app/:path*",
        permanent: true,
      },
      {
        source: "/payday-records/:path*",
        has: onOldHost,
        destination: "https://payday-records.vercel.app/:path*",
        permanent: true,
      },
      {
        source: "/vague-frequency-labs/:path*",
        has: onOldHost,
        destination: "https://vague-frequency-labs.vercel.app/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: onOldHost,
        destination: "https://vague-frequency-labs.vercel.app/intro",
        permanent: true,
      },
    ];
  },
};

export default withContentCollections(nextConfig);
