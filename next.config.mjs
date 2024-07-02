// validate env variables on build

/** @type {import('next').NextConfig} */
import nextIntl from "next-intl/plugin"
import withBundleAnalyzer from "@next/bundle-analyzer"

const nextConfig = {
  images: {
    remotePatterns: [],
  },
  pageExtensions: ["js", "jsx", "ts", "tsx"],
}

const withNextIntl = nextIntl("./i18n.ts")

// Call the function with the configuration object
const withAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
})

// Merge the configurations
const nextConfigWithAnalyzer = withAnalyzer(nextConfig)

// Merge MDX config with Next.js config
export default withNextIntl(nextConfigWithAnalyzer)
