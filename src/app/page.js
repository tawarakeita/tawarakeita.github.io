import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
      <div className="flex flex-col gap-8 row-start-2 items-center min-h-screen justify-center">
        <div className="flex flex-col gap-8 items-center ml-5">
          <h1 className="text-8xl font-bold">Tawara Keita</h1>
          <div className="mr-auto sm:m-auto flex gap-5 sm:gap-6">
            <a className="" href="https://x.com/k_tawara0102">
              <FontAwesomeIcon size="2x" icon={faXTwitter} />
            </a>
            <a className="" href="https://www.instagram.com/ecopay_tawara">
              <FontAwesomeIcon size="2x" icon={faInstagram} />
            </a>
            <a className="" href="https://github.com/tawarakeita">
              <FontAwesomeIcon size="2x" icon={faGithub} />
            </a>
          </div>
          <div className="flex gap-4 flex-col items-start text-2xl mr-auto sm:m-auto sm:items-center">
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
      </div>
  );
}
