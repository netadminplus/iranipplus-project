import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next";

const nextConfig: NextConfig = {
  output: "standalone",
};

export default withPayload(nextConfig);
