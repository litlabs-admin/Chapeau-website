/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Client logos in the trust strip are first-party SVGs; allow next/image to
    // serve them. Sandboxed + CSP'd so an SVG can't execute script.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Mock portrait avatars (people + testimonials) until real client/team
    // photography is supplied. Swap these URLs for first-party assets later.
    remotePatterns: [
      { protocol: "https", hostname: "randomuser.me", pathname: "/api/portraits/**" },
    ],
  },
  webpack: (config, { dev }) => {
    // On Windows the webpack filesystem cache (.next/cache/**/*.pack.gz) gets
    // corrupted by AV/file-locking, causing ENOENT crashes in dev. Use the
    // in-memory cache instead so there are no pack files to corrupt.
    if (dev) {
      config.cache = { type: "memory" };
    }
    return config;
  },
};

export default nextConfig;
