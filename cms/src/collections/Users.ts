import type { CollectionConfig } from "payload";

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "email" },
  fields: [
    { name: "name", type: "text", required: true, label: "نام" },
    {
      name: "role",
      type: "select",
      label: "نقش",
      defaultValue: "editor",
      options: [
        { label: "مدیر ارشد", value: "admin" },
        { label: "ویرایشگر",  value: "editor" },
      ],
    },
  ],
};
