const features = [
  {
    icon: '🏦',
    title: 'بانکداری آنلاین',
    desc: 'ورود به درگاه‌های بانکی ایران بدون محدودیت جغرافیایی.',
  },
  {
    icon: '🎓',
    title: 'دانشگاه‌ها و آموزش',
    desc: 'دسترسی به سامانه‌های دانشگاهی، سجاد و امور دانشجویی.',
  },
  {
    icon: '🏛️',
    title: 'سامانه‌های دولتی',
    desc: 'ثبت‌احوال، مالیات، و سایر پورتال‌های دولتی.',
  },
  {
    icon: '📺',
    title: 'سرگرمی و رسانه',
    desc: 'فیلیمو، نماوا، آپارات و پلتفرم‌های ایرانی.',
  },
  {
    icon: '⚡',
    title: 'سرعت بالا',
    desc: 'سرورهای بهینه‌شده با پهنای باند نامحدود.',
  },
  {
    icon: '🔐',
    title: 'حریم خصوصی',
    desc: 'بدون ذخیره‌سازی لاگ. ترافیک شما کاملاً خصوصی.',
  },
]

export default function Features() {
  return (
    <section className="py-24" id="features">
      <div className="section">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            چرا <span className="text-gradient">ایران آی‌پی پلاس؟</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            همه چیزی که برای اتصال به ایران نیاز دارید، در یک سرویس.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 hover:bg-white/10 transition-colors group"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                {f.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">{f.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
