import { withPayload } from "@payloadcms/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
};

export default withPayload(nextConfig);
