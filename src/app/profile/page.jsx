import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Page() {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-gray-600 backdrop-blur-md rounded-xl shadow-xl p-8 my-auto">
        <div className="space-y-3 text-white text-lg">
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
          <p>開発: Ruby/Rails/Next.js etc.</p>
          <hr className="my-3 w-[20%]" />
          <p>ecoPayプロジェクトFounder。</p>
          <p><a href="https://gounokawa.com" className="underline">江の川鐵道</a>をボランティアとして応援しています。</p>
          <hr className="my-3 w-[20%]" />
          <p><a href="https://mirachalle-shimane.com/u-18/" className="underline">島根未来共創チャレンジ</a> U-18 4期生</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/profile/awards" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">受賞歴</Link>
        </div>
      </div>
    </div>
  )
}