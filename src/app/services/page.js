import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

export default function Page() {
  return (
    <div className="flex flex-col items-center p-6 gap-6 mt-16">
      <h1 className="mb-6 text-4xl font-bold">Services</h1>
      <div className="w-full max-w-3xl bg-gray-600 backdrop-blur-md rounded-xl shadow-xl p-8">
        <div className="space-y-3 text-white text-lg">
          <p className="text-3xl font-semibold">
            もったいない！
            <a href="https://mottainai.kei-apps.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="ml-2" icon={faLink} />
            </a>
          </p>
          <p>開発開始: 2023年</p>
          <p>使用フレームワーク: Rails</p>
          <p>賞味期限を管理するアプリです。</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">ホームへ戻る</Link>
          <Link href="/services/mottainai" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">詳細</Link>
        </div>
      </div>
      <div className="w-full max-w-3xl bg-gray-600 backdrop-blur-md rounded-xl shadow-xl p-8">
        <div className="space-y-3 text-white text-lg">
          <p className="text-3xl font-semibold">
            shareYourLIFE
            <a href="https://syl.kei-apps.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="ml-2" icon={faLink} />
            </a>
          </p>
          <p>開発開始: 2024年</p>
          <p>使用フレームワーク: Rails</p>
          <p>朝ごはんの写真の共有や、寝た時間、起きた時間で競うことができるアプリです。</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">ホームへ戻る</Link>
          <Link href="/services/shareyourlife" className="inline-block px-4 py-2 rounded-md text-sm border text-white border-gray-200">詳細</Link>
        </div>
      </div>
    </div>
  );
}
