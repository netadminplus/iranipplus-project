import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { BlogPosts } from "./collections/BlogPosts";
import { FAQItems } from "./collections/FAQItems";
import { Media } from "./collections/Media";
import { PricingPlans } from "./collections/PricingPlans";
import { Users } from "./collections/Users";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL ?? "http://localhost:3001",
  admin: {
    user: "users",
    meta: {
      titleSuffix: "— ایران آی‌پی پلاس CMS",
    },
  },
  collections: [Media, Users, BlogPosts, FAQItems, PricingPlans],
  editor: lexicalEditor({}),
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? "",
    },
  }),
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  localization: {
    locales: [
      { label: "فارسی", code: "fa" },
      { label: "English", code: "en" },
    ],
    defaultLocale: "fa",
    fallback: true,
  },
  cors: [
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://iranipplus.com",
  ],
  csrf: [
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://iranipplus.com",
  ],
});
