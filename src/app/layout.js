import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import LayoutShell from "@/components/LayoutShell";
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
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}