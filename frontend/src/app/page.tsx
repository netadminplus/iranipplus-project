import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ایران آی‌پی پلاس | آی‌پی ایران برای ایرانیان خارج از کشور",
};

const features = [
  {
    icon: "🏦",
    title: "بانکداری آنلاین",
    desc: "به حساب بانکی ایرانی خود با آی‌پی ایران دسترسی داشته باشید.",
  },
  {
    icon: "🏛️",
    title: "سرویس‌های دولتی",
    desc: "تمدید مدارک، سامانه‌های ثبت‌احوال و سایر خدمات دولتی.",
  },
  {
    icon: "🎓",
    title: "دانشگاه و آموزش",
    desc: "دسترسی به پرتال دانشگاه، کتابخانه‌ها و سامانه‌های آموزشی.",
  },
  {
    icon: "📺",
    title: "رسانه و سرگرمی",
    desc: "سرویس‌های VOD، رادیو و پادکست‌های ایرانی.",
  },
];

const plans = [
  { name: "ماهانه", price: "۱۲ دلار", period: "ماه", highlight: false },
  { name: "سه‌ماهه", price: "۳۰ دلار", period: "۳ ماه", highlight: true, badge: "محبوب‌ترین" },
  { name: "سالانه",  price: "۹۶ دلار", period: "سال",  highlight: false },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Nav ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 h-16">
          <span className="text-xl font-bold gradient-text">ایران آی‌پی پلاس</span>
          <div className="flex items-center gap-3">
            <Link href="/blog"   className="text-sm text-white/60 hover:text-white transition-colors">بلاگ</Link>
            <Link href="/faq"    className="text-sm text-white/60 hover:text-white transition-colors">سوالات</Link>
            <Link href="/pricing" className="btn-primary text-xs px-4 py-2">شروع کنید</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-32 pb-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[600px] rounded-full bg-brand-700/20 blur-[120px]" />
        </div>

        <div className="section relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-800/60 bg-brand-950/60 px-4 py-1.5 text-xs text-brand-300 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
            سرویس فعال و پایدار — ۹۹.۹٪ آپتایم
          </div>

          <h1 className="mx-auto max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            آی‌پی ایرانی برای{" "}
            <span className="gradient-text">ایرانیان خارج از کشور</span>
          </h1>

          <p className="mx-auto max-w-xl text-lg text-white/60 mb-10 leading-relaxed">
            به سادگی به تمام سایت‌ها و سرویس‌های ایرانی دسترسی داشته باشید.
            بانک، دانشگاه، سامانه‌های دولتی — همه با یک اتصال ساده.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/pricing" className="btn-primary px-8 py-3.5 text-base">
              شروع رایگان — ۷ روز آزمایشی
            </Link>
            <Link href="/setup" className="btn-ghost px-8 py-3.5 text-base">
              راهنمای راه‌اندازی
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[
              { v: "+۵۰۰۰", l: "کاربر فعال" },
              { v: "۹۹.۹٪", l: "آپتایم" },
              { v: "<۱۰ms", l: "پینگ اضافه" },
            ].map((s) => (
              <div key={s.l} className="card text-center py-4">
                <div className="text-2xl font-bold gradient-text">{s.v}</div>
                <div className="text-xs text-white/50 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section">
        <h2 className="text-center text-3xl font-bold mb-3">
          چرا <span className="gradient-text">ایران آی‌پی پلاس</span>؟
        </h2>
        <p className="text-center text-white/50 mb-12">
          هر آنچه برای زندگی دیجیتال ایرانی در خارج نیاز دارید.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card group">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-semibold mb-2 group-hover:text-brand-300 transition-colors">
                {f.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing teaser ── */}
      <section className="section border-t border-white/5">
        <h2 className="text-center text-3xl font-bold mb-3">
          پلن‌های <span className="gradient-text">مقرون‌به‌صرفه</span>
        </h2>
        <p className="text-center text-white/50 mb-12">بدون تعهد. لغو هر زمان.</p>
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card relative flex flex-col items-center text-center ${
                p.highlight ? "border-brand-600/60 ring-1 ring-brand-600/30" : ""
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 rounded-full bg-brand-600 px-3 py-0.5 text-xs font-semibold">
                  {p.badge}
                </span>
              )}
              <div className="text-sm text-white/50 mb-2">{p.name}</div>
              <div className="text-3xl font-extrabold mb-1">{p.price}</div>
              <div className="text-xs text-white/40 mb-6">به ازای هر {p.period}</div>
              <Link href="/pricing" className={p.highlight ? "btn-primary w-full justify-center" : "btn-ghost w-full justify-center"}>
                انتخاب پلن
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section text-center border-t border-white/5">
        <h2 className="text-3xl font-bold mb-4">
          آماده‌اید؟ همین حالا شروع کنید.
        </h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          در کمتر از ۵ دقیقه راه‌اندازی کامل. پشتیبانی فارسی ۲۴/۷.
        </p>
        <Link href="/pricing" className="btn-primary px-10 py-4 text-base">
          شروع رایگان ۷ روزه
        </Link>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/5 py-8">
        <div className="section flex flex-col sm:flex-row items-center justify-between gap-4 py-0">
          <span className="text-sm font-semibold gradient-text">ایران آی‌پی پلاس</span>
          <div className="flex gap-6 text-xs text-white/40">
            <Link href="/blog"    className="hover:text-white transition-colors">بلاگ</Link>
            <Link href="/setup"   className="hover:text-white transition-colors">راهنما</Link>
            <Link href="/faq"     className="hover:text-white transition-colors">سوالات متداول</Link>
            <Link href="/pricing" className="hover:text-white transition-colors">تعرفه‌ها</Link>
          </div>
          <span className="text-xs text-white/30">© ۱۴۰۳ ایران آی‌پی پلاس</span>
        </div>
      </footer>
    </main>
  );
}
