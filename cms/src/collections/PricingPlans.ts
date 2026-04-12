import type { CollectionConfig } from "payload";

export const PricingPlans: CollectionConfig = {
  slug: "pricing-plans",
  admin: { useAsTitle: "name", defaultColumns: ["name", "price", "currency", "active"] },
  labels: { singular: "پلن قیمت‌گذاری", plural: "پلن‌های قیمت‌گذاری" },
  access: { read: () => true },
  fields: [
    { name: "name",       type: "text",   required: true, label: "نام پلن", localized: true },
    { name: "price",      type: "number", required: true, label: "قیمت" },
    {
      name: "currency",
      type: "select",
      defaultValue: "USD",
      options: [
        { label: "دلار",  value: "USD" },
        { label: "یورو",  value: "EUR" },
      ],
    },
    {
      name: "billingPeriod",
      type: "select",
      label: "دوره صورت‌حساب",
      options: [
        { label: "ماهانه",   value: "monthly" },
        { label: "سه‌ماهه", value: "quarterly" },
        { label: "سالانه",  value: "yearly" },
      ],
    },
    {
      name: "features",
      type: "array",
      label: "ویژگی‌ها",
      fields: [
        { name: "feature", type: "text", label: "ویژگی", localized: true },
      ],
    },
    { name: "highlighted", type: "checkbox", label: "پلن برجسته",        defaultValue: false, admin: { position: "sidebar" } },
    { name: "active",      type: "checkbox", label: "فعال",               defaultValue: true,  admin: { position: "sidebar" } },
    { name: "order",       type: "number",   label: "ترتیب نمایش",        defaultValue: 0,     admin: { position: "sidebar" } },
  ],
};
