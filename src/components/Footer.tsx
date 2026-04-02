import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-3">
              <img
                src="/images/logo-white.png"
                alt="Samsara Smart World"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Premium commercial office spaces for lease in Delhi and Gurugram by Millennium Maritech Private Limited.
            </p>
          </div>

          {/* Properties */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Properties</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/properties/le-meridien-delhi/" className="hover:text-white transition">
                  Le Meridien Tower, New Delhi
                </Link>
              </li>
              <li>
                <Link href="/properties/plot-87-sector-44-gurugram/" className="hover:text-white transition">
                  Plot 87, Sector 44, Gurugram
                </Link>
              </li>
              <li>
                <Link href="/coworking/" className="hover:text-white transition">
                  Coworking Space, Gurugram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Abhinav Jha</li>
              <li>
                <a href="tel:+918130292965" className="hover:text-white transition">
                  +91 8130292965
                </a>
              </li>
              <li>
                <a href="mailto:info@samsara-smartworld.com" className="hover:text-white transition">
                  info@samsara-smartworld.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Millennium Maritech Private Limited. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/" className="hover:text-gray-300 transition">Home</Link>
            <Link href="/about/" className="hover:text-gray-300 transition">About</Link>
            <Link href="/contact/" className="hover:text-gray-300 transition">Contact</Link>
            <Link href="/privacy-policy/" className="hover:text-gray-300 transition">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
