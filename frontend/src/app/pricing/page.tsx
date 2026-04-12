import type { Metadata } from "next";
export const metadata: Metadata = { title: "تعرفه‌ها" };

export default function PricingPage() {
  return (
    <main className="section pt-32">
      <h1 className="text-4xl font-bold gradient-text mb-4">تعرفه‌ها</h1>
      <p className="text-white/50">پلن‌های انعطاف‌پذیر برای همه نیازها</p>
    </main>
  );
}
