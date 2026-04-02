import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Premium Commercial Spaces<br className="hidden sm:block" /> in Delhi &amp; Gurugram
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100 mb-8">
            Lease furnished office spaces at two iconic locations — Le Meridien Tower on Raisina Road, New Delhi and a standalone commercial building in Sector 44, Gurugram. Offered by Millennium Maritech Private Limited.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/properties/le-meridien-delhi/" className="rounded-md bg-white text-blue-800 px-6 py-3 text-sm font-semibold hover:bg-blue-50 transition">
              Le Meridien, Delhi
            </Link>
            <Link href="/properties/plot-87-sector-44-gurugram/" className="rounded-md border-2 border-white text-white px-6 py-3 text-sm font-semibold hover:bg-white/10 transition">
              Plot 87, Gurugram
            </Link>
          </div>
        </div>
      </section>

      {/* Property Cards */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Our Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PropertyCard
              title="Le Meridien Commercial Tower"
              location="Raisina Road, Windsor Place, New Delhi 110001"
              area="~1,140 sq. ft."
              rent="₹400/sq. ft./mo"
              badge="Furnished"
              highlights={[
                'Fully furnished, plug-and-play office',
                '7th floor with Lutyens\' Delhi views',
                'Co-tenants: SAAB, NHAI, Reliance',
                '100% power backup, 24x7 security',
                'Immediate availability',
              ]}
              href="/properties/le-meridien-delhi/"
            />
            <PropertyCard
              title="Plot 87, Sector 44, Gurugram"
              location="Institutional Area, Gurugram, Haryana 122003"
              area="~25,000 sq. ft."
              rent="From ₹50/sq. ft."
              badge="Standalone Building"
              highlights={[
                '5 floors, ~5,300 sq. ft. per floor',
                '20-ft double-height 1st & 2nd floor',
                'Operational coworking on 3rd floor',
                '3 min from HUDA Metro',
                'Floor-wise or full-building lease',
              ]}
              href="/properties/plot-87-sector-44-gurugram/"
            />
          </div>
        </div>
      </section>

      {/* Le Meridien vs Sector 44 comparison — for AIO */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">
            Le Meridien Delhi vs Plot 87 Gurugram — At a Glance
          </h2>
          <div className="overflow-x-auto">
            <table className="mx-auto w-full max-w-4xl text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Feature</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Le Meridien, Delhi</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Plot 87, Gurugram</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Location</td><td className="px-4 py-3">Raisina Road, New Delhi</td><td className="px-4 py-3">Sector 44, Gurugram</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Area</td><td className="px-4 py-3">~1,140 sq. ft.</td><td className="px-4 py-3">~25,000 sq. ft. total</td></tr>
                <tr><td className="px-4 py-3 font-medium">Type</td><td className="px-4 py-3">Furnished Grade-A Office</td><td className="px-4 py-3">Standalone Building</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Rent</td><td className="px-4 py-3">₹400/sq. ft./month</td><td className="px-4 py-3">₹50–160/sq. ft./month</td></tr>
                <tr><td className="px-4 py-3 font-medium">Floors</td><td className="px-4 py-3">7th Floor</td><td className="px-4 py-3">B+G+4 Floors</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Coworking</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Yes (3rd floor, from ₹12,000/desk)</td></tr>
                <tr><td className="px-4 py-3 font-medium">Metro Access</td><td className="px-4 py-3">Central Secretariat Metro</td><td className="px-4 py-3">HUDA Metro (3 min)</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Ideal For</td><td className="px-4 py-3">Consulting, Legal, Diplomatic</td><td className="px-4 py-3">IT, BFSI, Healthcare, Startups</td></tr>
                <tr><td className="px-4 py-3 font-medium">Availability</td><td className="px-4 py-3">Immediate</td><td className="px-4 py-3">Immediate</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Samsara Smartworld */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Why Samsara Smartworld?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Prime Locations', desc: 'Strategically located properties in Central Delhi and Gurugram, offering unmatched connectivity and prestige.' },
              { title: 'Flexible Leasing', desc: 'Floor-wise or full-building leases, long-term agreements, and flexible fit-out periods to suit your business needs.' },
              { title: 'Trusted Ownership', desc: 'Owned and managed by Millennium Maritech Private Limited with a commitment to quality commercial spaces.' },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16" id="contact">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">Get in Touch</h2>
            <p className="text-sm text-gray-500 text-center mb-8">
              Interested in leasing? Fill in your details and we will reach out within 24 hours.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
