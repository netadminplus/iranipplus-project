import type { Metadata } from "next";
export const metadata: Metadata = { title: "راهنمای نصب" };

export default function SetupPage() {
  return (
    <main className="section pt-32">
      <h1 className="text-4xl font-bold gradient-text mb-4">راهنمای راه‌اندازی</h1>
      <p className="text-white/50">نصب و پیکربندی در کمتر از ۵ دقیقه</p>
    </main>
  );
}
