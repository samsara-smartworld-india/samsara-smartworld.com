import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import ImageGallery from '@/components/ImageGallery';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getPlot87OfferSchema, getPlot87FAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Commercial Building for Lease — Plot 87, Sector 44, Gurugram',
  description:
    'Lease a standalone 25,000 sq. ft. commercial building in Sector 44, Gurugram. Floor-wise from ₹50/sq. ft., double-height ceilings, coworking space, 3 min from HUDA Metro. Immediate availability.',
  openGraph: {
    title: 'Standalone Commercial Building — Sector 44, Gurugram',
    description:
      '25,000 sq. ft. institutional building with double-height floors and coworking. From ₹50/sq. ft.',
    url: 'https://samsara-smartworld.com/properties/plot-87-sector-44-gurugram/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Building for Lease — Sector 44, Gurugram',
    description: '25,000 sq. ft. standalone building, coworking space, from ₹50/sq. ft.',
  },
  alternates: {
    canonical: 'https://samsara-smartworld.com/properties/plot-87-sector-44-gurugram/',
  },
};

const faqItems = [
  {
    question: 'How big is the commercial building at Plot 87 Sector 44 Gurugram?',
    answer:
      'The building offers approximately 25,000 sq. ft. of commercial space across Basement + Ground + 4 Upper Floors, with each floor plate being approximately 5,300 sq. ft.',
  },
  {
    question: 'What is the rent for office space at Plot 87 Sector 44 Gurugram?',
    answer:
      'Rents vary by floor: Basement at ₹50/sq. ft., Ground floor at ₹85/sq. ft., 1st-2nd floors (double height) at ₹160/sq. ft., 4th floor at ₹85/sq. ft. Coworking desks start from ₹12,000/month. Full building lease available at a blended rate of ₹75/sq. ft. (negotiable).',
  },
  {
    question: 'Is there a coworking space in Sector 44 Gurugram?',
    answer:
      'Yes, the 3rd floor has an operational Grade A+ coworking space with 20-30 dedicated desks, private cabins for 2-8 seats, a podcast and video studio, creator-ready makeup room, high-speed Wi-Fi, meeting rooms, and pantry. Desks start from ₹12,000/month.',
  },
  {
    question: 'What is special about the 1st and 2nd floors at Plot 87?',
    answer:
      'The 1st and 2nd floors feature 20-foot double-height ceilings, making them ideal for flagship offices, showrooms, training centres, or creative studios.',
  },
  {
    question: 'How far is Plot 87 from the nearest metro station?',
    answer:
      'Plot 87 is just 3 minutes from HUDA/Millennium City Centre Metro station, 5 minutes from IFFCO Chowk, 8 minutes from Golf Course Road, and 25 minutes from IGI Airport Terminal 3.',
  },
  {
    question: 'Can I lease a single floor at Plot 87 Gurugram?',
    answer:
      'Yes, floor-wise leasing is available. You can lease individual floors or the entire building. Maintenance cost is ₹15/sq. ft. with separate electricity and water meters per floor.',
  },
  {
    question: 'What infrastructure does Plot 87 Sector 44 offer?',
    answer:
      'The building features 2 high-speed elevators, 100% DG power backup, fire detection and suppression systems, CCTV-monitored 24x7 security, separate electricity and water meters per floor, visitor management system, and uninterrupted water supply.',
  },
];

export default function Plot87Page() {
  return (
    <>
      <SchemaMarkup data={[getPlot87OfferSchema(), getPlot87FAQSchema()]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Plot 87, Gurugram</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Plot 87, Sector 44, Gurugram
          </h1>
          <p className="text-blue-100 max-w-2xl mb-6">
            Standalone Institutional-Zoned Commercial Building, Plot No. 87, Sector 44, Institutional Area, Gurugram, Haryana 122003
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 px-3 py-1 rounded text-sm">~25,000 sq. ft.</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">From ₹50/sq. ft.</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">Standalone Building</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">Immediate</span>
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 md:p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-4">At a Glance</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <div><span className="block text-xs text-gray-500 mb-1">Total Area</span><span className="font-semibold">~25,000 sq. ft.</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Floor Plate</span><span className="font-semibold">~5,300 sq. ft.</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Floors</span><span className="font-semibold">B + G + 4</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Facade</span><span className="font-semibold">Modern Stone</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Starting Rent</span><span className="font-semibold">₹50/sq. ft./mo</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Maintenance</span><span className="font-semibold">₹15/sq. ft.</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Special Feature</span><span className="font-semibold">20-ft double-height</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Availability</span><span className="font-semibold">Immediate</span></div>
            </div>
          </div>
        </div>
      </section>

      <ImageGallery
        images={[
          { src: '/images/plot-87-gurugram/exterior-render.png', alt: 'Plot 87 Sector 44 Gurugram standalone institutional building exterior render with stone facade', label: 'Building Exterior' },
          { src: '/images/plot-87-gurugram/double-height.png', alt: 'Double-height first and second floor with 20-foot ceilings at Plot 87 Sector 44 Gurugram', label: '1st–2nd Floor — 20 ft Double Height' },
          { src: '/images/plot-87-gurugram/fourth-floor.png', alt: 'Fourth floor open office space with natural light and wooden door frames at Plot 87 Gurugram', label: '4th Floor Office Space' },
          { src: '/images/plot-87-gurugram/coworking.png', alt: 'Grade A+ coworking space on 3rd floor — dedicated desks, private cabins, podcast studio at Plot 87', label: '3rd Floor — Coworking Space' },
          { src: '/images/plot-87-gurugram/floor-plan-4th.png', alt: 'Fourth floor architectural plan of Plot 87 Sector 44 Gurugram showing 5,300 sq. ft. layout with balcony', label: 'Floor Plan — 4th Floor' },
        ]}
      />

      {/* Floor-by-Floor Breakdown */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Floor-by-Floor Breakdown</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-3xl text-sm border border-gray-200 rounded-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Floor</th>
                  <th className="px-4 py-3 text-left font-semibold">Area</th>
                  <th className="px-4 py-3 text-left font-semibold">Rent</th>
                  <th className="px-4 py-3 text-left font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium">Basement</td><td className="px-4 py-3">~5,300 sq. ft.</td><td className="px-4 py-3">₹50/sq. ft.</td><td className="px-4 py-3">Back-office operations, R&D labs, server rooms</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">Ground</td><td className="px-4 py-3">~5,300 sq. ft.</td><td className="px-4 py-3">₹85/sq. ft.</td><td className="px-4 py-3">Corporate reception, institutional office, professional association office</td></tr>
                <tr><td className="px-4 py-3 font-medium">1st Floor</td><td className="px-4 py-3">~5,300 sq. ft.</td><td className="px-4 py-3">₹160/sq. ft.</td><td className="px-4 py-3 text-blue-700 font-medium">Double-height (20 ft) — flagship corporate offices, training centres</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">2nd Floor</td><td className="px-4 py-3">~5,300 sq. ft.</td><td className="px-4 py-3">₹160/sq. ft.</td><td className="px-4 py-3 text-blue-700 font-medium">Double-height (20 ft) — R&D centres, education & training institutes</td></tr>
                <tr><td className="px-4 py-3 font-medium">3rd Floor</td><td className="px-4 py-3">~5,300 sq. ft.</td><td className="px-4 py-3">₹12K–18K/desk/mo</td><td className="px-4 py-3">Operational coworking space</td></tr>
                <tr className="bg-gray-50"><td className="px-4 py-3 font-medium">4th Floor</td><td className="px-4 py-3">~5,300 sq. ft.</td><td className="px-4 py-3">₹85/sq. ft.</td><td className="px-4 py-3">Corporate offices, professional society offices</td></tr>
                <tr className="bg-blue-50"><td className="px-4 py-3 font-bold">Full Building</td><td className="px-4 py-3 font-bold">~25,000 sq. ft.</td><td className="px-4 py-3 font-bold">~₹75/sq. ft. (negotiable)</td><td className="px-4 py-3 font-bold">Single-tenant institutional headquarters</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Coworking Highlight */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 md:p-10 border border-indigo-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4">3rd Floor — Grade A+ Coworking Space</h2>
            <p className="text-sm text-gray-700 mb-6 max-w-2xl">
              An operational, ready-to-use coworking floor with premium amenities for freelancers, small teams, and creators. Book desks, the conference room, or the podcast studio.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              {[
                '20–30 dedicated desks',
                'Private cabins (2–8 seats)',
                'Podcast & video studio',
                'Creator-ready makeup room',
                'High-speed Wi-Fi',
                'Meeting rooms',
                'Pantry & housekeeping',
                '100% power backup',
                'From ₹12,000/desk/month',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/coworking/"
                className="inline-flex items-center gap-2 rounded-md bg-indigo-700 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-800 transition"
              >
                Book a Desk, Conference Room, or Studio
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: 'Standalone Institutional Building', desc: 'HUDA-allotted institutional plot with modern stone facade, north-facing. Permitted for corporate offices, R&D centres, training institutes, and professional associations. Complete branding and signage freedom.' },
              { title: 'Double-Height Ceilings', desc: '1st and 2nd floors offer dramatic 20-ft ceiling height — ideal for flagship offices, showrooms, or training centres.' },
              { title: 'Full Infrastructure', desc: '2 high-speed elevators, 100% DG power backup, fire detection & suppression, CCTV security 24x7, visitor management system.' },
              { title: 'Independent Metering', desc: 'Separate electricity and water meters per floor. Uninterrupted water supply.' },
              { title: 'Prime Gurugram Location', desc: '3 min from HUDA Metro, 5 min from IFFCO Chowk, 8 min from Golf Course Road, 25 min from IGI Airport T3.' },
              { title: 'Premium Neighbourhood', desc: 'Near Taj City Centre, Max Healthcare, EY, Johnson & Johnson, Williams Sonoma, PolicyBazaar.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <svg className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Zoning */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8 mb-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Institutional Area Zoning — Permitted Uses</h2>
            <p className="text-sm text-gray-600 mb-4">
              As per HUDA (now HSVP) guidelines, institutional plots in Gurugram permit the following uses for up to 75% of the building area:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {[
                { title: 'Corporate Offices', desc: 'Headquarters, regional offices, branch offices' },
                { title: 'Research & Development Centres', desc: 'R&D labs, innovation hubs, technology centres' },
                { title: 'Education & Training Centres', desc: 'Corporate training, skill development, academies' },
                { title: 'Professional Associations & Societies', desc: 'Industry bodies, trade associations, non-commercial organisations' },
                { title: 'Other Institutional Uses', desc: 'Foundations, think tanks, institutional operations' },
              ].map((item) => (
                <div key={item.title} className="flex gap-2">
                  <svg className="h-4 w-4 text-amber-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <div>
                    <span className="font-semibold text-gray-900">{item.title}</span>
                    <span className="text-gray-500"> — {item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Note: No shop or commercial/manufacturing activity is permitted on institutional plots as per Haryana Urban Development Regulations, 1978.
            </p>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6">Ideal For</h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Corporate Offices & Headquarters',
              'R&D Centres',
              'Education & Training Institutes',
              'Professional Associations',
              'IT & BFSI Companies',
              'Healthcare & EdTech Firms',
              'Consulting & Advisory Firms',
              'Startups (50–200 employees)',
              'Coworking Operators',
              'Think Tanks & Foundations',
            ].map((item) => (
              <span key={item} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Location</h2>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=28.451194,77.070867&z=17&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Plot 87, Sector 44, Gurugram"
            />
          </div>
          <p className="mt-3 text-sm text-gray-500">
            3 min from HUDA/Millennium City Metro, 5 min from IFFCO Chowk, 8 min from Golf Course Road, 25 min from IGI Airport T3. Near Taj City Centre, Max Healthcare, EY, Johnson &amp; Johnson.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQSection items={faqItems} />
      </div>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Site Visit</h2>
            <p className="text-sm text-gray-500 mb-8">
              Interested in this property? Fill in your details or call Abhinav Jha at{' '}
              <a href="tel:+918130292965" className="text-blue-700 font-medium">8130292965</a>.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
