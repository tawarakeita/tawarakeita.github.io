import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-600 backdrop-blur-md rounded-xl shadow-xl p-8">
        <div className="mt-6 space-y-3 text-white text-lg">
          <p className="text-3xl font-semibold">俵 恵太 / たわら けいた / Tawara Keita</p>
          <div className="flex gap-4 text-2xl">
            <a className="" href="https://x.com/k_tawara0102">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a className="" href="https://www.instagram.com/ecopay_tawara">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="" href="https://github.com/tawarakeita">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p>生年月日: 2012年1月2日</p>
          <p>出身: 島根県松江市（在住）</p>
          <p>主に <span className="font-medium">Ruby</span> で開発しています。</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">ホームへ戻る</Link>
          <Link href="/profile/awards" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">受賞歴</Link>
        </div>
      </div>
    </main>
  )
}