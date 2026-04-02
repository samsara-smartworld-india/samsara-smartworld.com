import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Samsara Smartworld — Millennium Maritech Private Limited',
  description:
    'Samsara Smartworld is a commercial leasing initiative by Millennium Maritech Private Limited, offering premium office spaces in New Delhi and Gurugram.',
  alternates: {
    canonical: 'https://samsara-smartworld.com/about/',
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">About Samsara Smartworld</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Millennium Maritech Private Limited</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Samsara Smartworld is a commercial real estate leasing initiative by Millennium Maritech Private Limited. We offer premium commercial spaces across two strategically located properties in the National Capital Region — Central Delhi and Gurugram.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Philosophy</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that where you work shapes how you work. Our properties are chosen for their strategic locations, superior infrastructure, and the prestige they bring to your business. From a fully furnished executive office on Raisina Road overlooking Lutyens&apos; Delhi, to a standalone commercial building with coworking capabilities in Gurugram&apos;s institutional hub, we provide spaces that elevate your business presence.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">What We Offer</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Premium Locations:</strong> Central Delhi (Raisina Road, near Parliament &amp; Rashtrapati Bhavan) and Gurugram (Sector 44, near HUDA Metro).</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Flexible Leasing:</strong> Floor-wise, full-building, or coworking desk options with customizable terms.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Ready Infrastructure:</strong> Furnished offices, 100% power backup, elevators, fire safety, and 24x7 security.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span><strong>Immediate Availability:</strong> Move in right away — no waiting period for either property.</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Properties</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link href="/properties/le-meridien-delhi/" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition">
                <h4 className="font-semibold text-gray-900 mb-1">Le Meridien Tower, Delhi</h4>
                <p className="text-sm text-gray-500">Raisina Road, New Delhi — ~1,140 sq. ft. furnished office</p>
              </Link>
              <Link href="/properties/plot-87-sector-44-gurugram/" className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition">
                <h4 className="font-semibold text-gray-900 mb-1">Plot 87, Sector 44, Gurugram</h4>
                <p className="text-sm text-gray-500">Institutional Area — ~25,000 sq. ft. standalone building</p>
              </Link>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center">
              <p className="text-gray-700 font-medium mb-2">Ready to find your next office?</p>
              <Link href="/contact/" className="inline-block rounded-md bg-blue-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition">
                Contact Us
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
