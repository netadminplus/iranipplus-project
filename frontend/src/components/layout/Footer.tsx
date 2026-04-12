import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="section py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-slate-400">
        <div>
          <p className="font-semibold text-white mb-2 text-lg">🇮🇷 ایران آی‌پی پلاس</p>
          <p>دسترسی مطمئن به اینترنت ایران از هر کجای دنیا.</p>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">لینک‌ها</p>
          <ul className="space-y-2">
            {[
              ['/pricing', 'قیمت‌ها'],
              ['/blog', 'وبلاگ'],
              ['/setup', 'راهنمای نصب'],
              ['/faq', 'سوالات متداول'],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="hover:text-white transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white mb-3">ارتباط با ما</p>
          <ul className="space-y-2">
            <li>
              <a href="https://t.me/netadminplus" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                📱 تلگرام
              </a>
            </li>
            <li>
              <a href="mailto:support@iranipplus.com" className="hover:text-white transition-colors">
                ✉️ ایمیل پشتیبانی
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-600">
        © {year} ایران آی‌پی پلاس — تمام حقوق محفوظ است.
      </div>
    </footer>
  )
}
