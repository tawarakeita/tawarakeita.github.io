import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import HeaderClient from "../components/HeaderClient";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { NavBreadcrumb } from "@/components/nav-breadcrumb";
config.autoAddCss = false

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "俵恵太 Portfolio",
  description: "俵恵太のプロフィールや制作したアプリなどを紹介しています。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased">
        <HeaderClient />
        <main className="min-h-screen flex flex-col pt-16">
          <NavBreadcrumb />
          <div className="flex-1 flex flex-col">{children}</div>
        </main>
      </body>
    </html>
  );
}