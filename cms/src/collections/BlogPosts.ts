import type { CollectionConfig } from "payload";

export const BlogPosts: CollectionConfig = {
  slug: "blog-posts",
  admin: { useAsTitle: "title", defaultColumns: ["title", "category", "status", "updatedAt"] },
  labels: { singular: "مقاله", plural: "مقالات" },
  access: {
    read: () => true,
  },
  fields: [
    { name: "title",   type: "text",     required: true,  label: "عنوان", localized: true },
    { name: "slug",    type: "text",     required: true,  label: "اسلاگ", unique: true },
    { name: "excerpt", type: "textarea", required: false, label: "خلاصه", localized: true },
    {
      name: "category",
      type: "select",
      label: "دسته‌بندی",
      options: [
        { label: "راهنما",     value: "guide" },
        { label: "اخبار",      value: "news" },
        { label: "آموزش",      value: "tutorial" },
      ],
    },
    {
      name: "status",
      type: "select",
      label: "وضعیت",
      defaultValue: "draft",
      options: [
        { label: "پیش‌نویس",   value: "draft" },
        { label: "منتشرشده",  value: "published" },
      ],
      admin: { position: "sidebar" },
    },
    { name: "coverImage", type: "upload", relationTo: "media", label: "تصویر شاخص" },
    { name: "content",    type: "richText", label: "محتوا", localized: true },
    { name: "publishedAt", type: "date", label: "تاریخ انتشار", admin: { position: "sidebar" } },
  ],
};
