import type { Metadata } from "next";
export const metadata: Metadata = { title: "سوالات متداول" };

export default function FaqPage() {
  return (
    <main className="section pt-32">
      <h1 className="text-4xl font-bold gradient-text mb-4">سوالات متداول</h1>
      <p className="text-white/50">پاسخ به رایج‌ترین سوالات شما</p>
    </main>
  );
}
