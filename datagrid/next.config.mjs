let userConfig = undefined;
try {
  userConfig = await import("./v0-user-next.config");
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

mergeConfig(nextConfig, userConfig);

/**
 * Merges properties from a user configuration object into a base Next.js configuration.
 *
 * For each property in {@link userConfig}, if the corresponding value in {@link nextConfig} is a non-array object, the properties are shallowly merged; otherwise, the value from {@link userConfig} replaces the one in {@link nextConfig}.
 *
 * @param {object} nextConfig - The base Next.js configuration object to be modified.
 * @param {object} [userConfig] - The user-defined configuration object whose properties are merged into {@link nextConfig}.
 */
function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return;
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === "object" &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

export default nextConfig;
