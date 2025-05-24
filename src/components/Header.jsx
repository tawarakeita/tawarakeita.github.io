import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <div>
      <header className="h-[60px] bg-neutral-300 flex items-center justify-between">
        <div className='flex'>
          <Link className='m-[15px] cursor-pointer inline-block text-black' href="/">
            プロフィール
          </Link>
          <Link className='m-[15px] cursor-pointer inline-block text-black' href="/apps">
            <span>制作アプリ</span>
          </Link>
        </div>
        <div className='flex'>
          <a className="" href="https://github.com/tawarakeita">
            <FontAwesomeIcon className='m-[15px]' size="2x" icon={faGithub} />
          </a>
          <a className="" href="https://x.com/k_tawara0102">
            <FontAwesomeIcon className='m-[15px]' size="2x" icon={faXTwitter} />
          </a>
        </div>
      </header>
    </div>
  );
}