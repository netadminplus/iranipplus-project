import type { Metadata } from "next";
export const metadata: Metadata = { title: "بلاگ" };

export default function BlogPage() {
  return (
    <main className="section pt-32">
      <h1 className="text-4xl font-bold gradient-text mb-4">بلاگ</h1>
      <p className="text-white/50">مقالات و راهنماهای ایران آی‌پی پلاس</p>
      {/* Articles fetched from Payload CMS REST API */}
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card">
          <span className="text-xs text-brand-400">راهنما</span>
          <h2 className="font-semibold mt-2 mb-1">نصب روی ویندوز</h2>
          <p className="text-sm text-white/50">آموزش کامل نصب و راه‌اندازی...</p>
        </div>
      </div>
    </main>
  );
}
