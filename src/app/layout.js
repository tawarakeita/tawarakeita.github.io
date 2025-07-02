import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "俵恵太ポートフォリオ",
  description: "俵恵太の制作したアプリなどを紹介しています。",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}