import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://iranipplus.com"),
  title: {
    default: "ایران آی‌پی پلاس | آی‌پی ایران برای ایرانیان خارج از کشور",
    template: "%s | ایران آی‌پی پلاس",
  },
  description:
    "با ایران آی‌پی پلاس به سادگی به سایت‌های ایرانی دسترسی پیدا کنید. آی‌پی ایرانی برای بانکداری، پرداخت و سرویس‌های دولتی.",
  keywords: ["آی‌پی ایران", "VPN ایران", "ایران آی‌پی", "دسترسی به سایت ایرانی"],
  openGraph: {
    locale: "fa_IR",
    type: "website",
    siteName: "ایران آی‌پی پلاس",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
