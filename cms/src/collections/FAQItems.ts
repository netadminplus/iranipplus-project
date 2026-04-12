import type { CollectionConfig } from "payload";

export const FAQItems: CollectionConfig = {
  slug: "faq-items",
  admin: { useAsTitle: "question", defaultColumns: ["question", "category", "order"] },
  labels: { singular: "سوال متداول", plural: "سوالات متداول" },
  access: { read: () => true },
  fields: [
    { name: "question", type: "text",     required: true, label: "سوال",  localized: true },
    { name: "answer",   type: "richText", required: true, label: "جواب",  localized: true },
    {
      name: "category",
      type: "select",
      label: "دسته‌بندی",
      options: [
        { label: "عمومی",    value: "general" },
        { label: "فنی",      value: "technical" },
        { label: "پرداخت",   value: "billing" },
      ],
    },
    { name: "order", type: "number", label: "ترتیب نمایش", defaultValue: 0, admin: { position: "sidebar" } },
  ],
};
