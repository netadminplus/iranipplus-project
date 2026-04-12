import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="section relative z-10 text-center py-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm text-sky-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          سرویس فعال و پایدار
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-slide-up">
          آی‌پی ایران،{' '}
          <span className="text-gradient">هر کجای دنیا</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up">
          با ایران آی‌پی پلاس، به بانک ملت، شبا، سامانه‌های دولتی و پلتفرم‌های ایرانی از اروپا، آمریکا، کانادا و هر کجای دیگری دسترسی داشته باشید.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Link
            href="/pricing"
            className="px-8 py-4 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-2xl transition-all shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5"
          >
            مشاهده پلان‌ها
          </Link>
          <Link
            href="/setup"
            className="px-8 py-4 glass hover:bg-white/10 text-slate-200 font-semibold rounded-2xl transition-all"
          >
            راهنمای اتصال
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          {[
            ['🔒', 'اتصال رمزنگاری‌شده'],
            ['⚡', 'پینگ پایین'],
            ['🌍', '+۴۰ کشور پشتیبانی'],
            ['💬', 'پشتیبانی ۲۴/۷'],
          ].map(([icon, text]) => (
            <div key={text} className="flex items-center gap-2">
              <span>{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
