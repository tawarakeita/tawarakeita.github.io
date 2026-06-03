import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
      <main className="flex flex-col gap-8 row-start-2 items-center min-h-screen justify-center">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-8xl font-bold">Tawara Keita</h1>
          <div>
            <a className="" href="https://x.com/k_tawara0102">
              <FontAwesomeIcon className='m-[15px]' size="2x" icon={faXTwitter} />
            </a>
            <a className="" href="https://www.instagram.com/ecopay_tawara">
              <FontAwesomeIcon className='m-[15px]' size="2x" icon={faInstagram} />
            </a>
            <a className="" href="https://github.com/tawarakeita">
              <FontAwesomeIcon className='m-[15px]' size="2x" icon={faGithub} />
            </a>
          </div>
          <div className="flex gap-4 flex-col items-center text-2xl">
            <Link href="/profile">
              <span>Profile</span>
            </Link>
            <Link href="/services">
              <span>Services</span>
            </Link>
            <Link href="/contact">
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </main>
  );
}
