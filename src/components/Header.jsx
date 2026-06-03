import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/90 backdrop-blur-sm flex items-center justify-between px-6 shadow-sm">
    <nav className="flex items-center gap-4">
      <Link href="/" className="text-black hover:text-gray-700">TOP</Link>
      <Link href="/profile" className="text-black hover:text-gray-700">PROFILE</Link>
      <Link href="/services" className="text-black hover:text-gray-700">SERVICES</Link>
      <Link href="/contact" className="text-black hover:text-gray-700">CONTACT</Link>
    </nav>

    <div className="sm:flex items-center gap-3 hidden">
      <a href="https://x.com/k_tawara0102" className="text-gray-700 hover:text-black">
        <FontAwesomeIcon className="text-2xl" icon={faXTwitter} />
      </a>
      <a href="https://www.instagram.com/ecopay_tawara" className="text-gray-700 hover:text-black">
        <FontAwesomeIcon className="text-2xl" icon={faInstagram} />
      </a>
      <a href="https://github.com/tawarakeita" className="text-gray-700 hover:text-black">
        <FontAwesomeIcon className="text-2xl" icon={faGithub} />
      </a>
    </div>
  </header>
  );
}