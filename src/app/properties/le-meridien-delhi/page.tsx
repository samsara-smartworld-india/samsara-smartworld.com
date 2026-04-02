import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getLeMeridienOfferSchema, getLeMeridienFAQSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Le Meridien Commercial Tower Office for Rent — Raisina Road, New Delhi',
  description:
    'Lease a 1,140 sq. ft. fully furnished office on the 7th floor of Le Meridien Commercial Tower, Raisina Road, New Delhi. ₹400/sq. ft., Lutyens Delhi views, co-tenants SAAB, NHAI, Reliance. Immediate availability.',
  openGraph: {
    title: 'Le Meridien Commercial Tower Office for Rent — Raisina Road, New Delhi',
    description:
      'Premium furnished office at Le Meridien Tower. 1,140 sq. ft., 7th floor, Lutyens Delhi views. ₹400/sq. ft. Immediate availability.',
    url: 'https://samsara-smartworld.com/properties/le-meridien-delhi/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Le Meridien Commercial Tower Office — Raisina Road, Delhi',
    description: 'Furnished 1,140 sq. ft. office, 7th floor, Lutyens Delhi skyline. ₹400/sq. ft.',
  },
  alternates: {
    canonical: 'https://samsara-smartworld.com/properties/le-meridien-delhi/',
  },
};

const faqItems = [
  {
    question: 'What is the rent for office space at Le Meridien Commercial Tower?',
    answer:
      'The rent is ₹400 per sq. ft. per month, which comes to approximately ₹4,40,000 per month plus GST for the ~1,140 sq. ft. carpet area office on the 7th floor.',
  },
  {
    question: 'Is the office at Le Meridien furnished?',
    answer:
      'Yes, the office is fully furnished and executive-ready with a plug-and-play setup. It includes executive cabins, a conference room, reception area, kitchen, switch/server room, personal chamber, and shower facility.',
  },
  {
    question: 'What is the lease structure for commercial space on Raisina Road?',
    answer:
      'Long-term leases are available with flexible fit-out periods. The office is available for immediate possession with 100% power backup and 24x7 security.',
  },
  {
    question: 'Which companies are co-tenants at Le Meridien Tower?',
    answer:
      'Co-tenants include SAAB, NHAI, Reliance, Kawasaki, and other blue-chip corporates, making it an elite commercial address.',
  },
  {
    question: 'Is parking available at Le Meridien Commercial Tower?',
    answer:
      'Yes, both covered and open parking options are available at Le Meridien Commercial Tower.',
  },
  {
    question: 'How close is Le Meridien Tower to the Metro?',
    answer:
      'The office is easily accessible via Central Secretariat Metro and Airport Express Line. Connaught Place, Janpath, and India Gate are all nearby.',
  },
];

export default function LeMeridienPage() {
  return (
    <>
      <SchemaMarkup data={[getLeMeridienOfferSchema(), getLeMeridienFAQSchema()]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Le Meridien, Delhi</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Le Meridien Commercial Tower, New Delhi
          </h1>
          <p className="text-blue-100 max-w-2xl mb-6">
            7th Floor, Units 702 &middot; 703 &middot; 704, Le Meridien Commercial Complex, Raisina Road, Windsor Place, New Delhi 110001
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 px-3 py-1 rounded text-sm">~1,140 sq. ft.</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">₹400/sq. ft./month</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">Fully Furnished</span>
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
              <div><span className="block text-xs text-gray-500 mb-1">Carpet Area</span><span className="font-semibold">~1,140 sq. ft.</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Super Built-up</span><span className="font-semibold">~1,150 sq. ft.</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Monthly Rent</span><span className="font-semibold">~₹4,40,000 + GST</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Rate</span><span className="font-semibold">₹400/sq. ft./mo</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Floor</span><span className="font-semibold">7th Floor</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Condition</span><span className="font-semibold">Fully Furnished</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Power Backup</span><span className="font-semibold">100%</span></div>
              <div><span className="block text-xs text-gray-500 mb-1">Availability</span><span className="font-semibold">Immediate</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Exterior', 'Reception', 'Executive Cabin', 'Conference Room', 'Kitchen', 'Skyline View', 'Corridor', 'Lobby'].map((label) => (
              <div key={label} className="aspect-[4/3] rounded-lg bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center border border-gray-200">
                <span className="text-xs text-gray-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Key Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              { title: 'Executive-Ready Layout', desc: 'Executive cabins, conference room, reception area, kitchen, switch/server room, personal chamber, and shower facility.' },
              { title: 'Uninhibited Skyline Views', desc: '7th floor panoramic views overlooking Lutyens\' Delhi — Rashtrapati Bhavan, Parliament, and India Gate.' },
              { title: 'Blue-Chip Co-Tenants', desc: 'Share the building with SAAB, NHAI, Reliance, Kawasaki, and other major corporates.' },
              { title: 'Unbeatable Location', desc: 'Adjacent to Rashtrapati Bhavan and Parliament. Minutes from Connaught Place, Janpath, and Central Secretariat Metro.' },
              { title: '24x7 Operations', desc: '100% power backup, round-the-clock security, covered and open parking available.' },
              { title: 'Flexible Terms', desc: 'Long-term leases available with flexible fit-out periods. Maintenance at actuals.' },
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

      {/* Commercial Terms */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Commercial Terms</h2>
          <div className="overflow-x-auto">
            <table className="w-full max-w-2xl text-sm border border-gray-200 rounded-lg overflow-hidden">
              <tbody className="divide-y divide-gray-200">
                <tr><td className="px-4 py-3 font-medium bg-gray-50 w-1/3">Carpet Area</td><td className="px-4 py-3">~1,140 sq. ft.</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Super Built-up Area</td><td className="px-4 py-3">~1,150 sq. ft.</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Rent</td><td className="px-4 py-3">₹400 per sq. ft. per month (~₹4,40,000/month + GST)</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Maintenance</td><td className="px-4 py-3">As per actuals</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Lease Type</td><td className="px-4 py-3">Long-term leases available</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Fit-out Period</td><td className="px-4 py-3">Flexible</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Parking</td><td className="px-4 py-3">Covered &amp; open parking available</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Power Backup</td><td className="px-4 py-3">100%</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Security</td><td className="px-4 py-3">24x7</td></tr>
                <tr><td className="px-4 py-3 font-medium bg-gray-50">Availability</td><td className="px-4 py-3">Immediate</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ideal For */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Ideal For</h2>
          <div className="flex flex-wrap gap-3">
            {['Consulting Firms', 'Law Offices', 'Executive Meeting Spaces', 'Diplomatic Liaison Offices', 'Government-Facing Corporates', 'Family Offices', 'Wealth Management Firms'].map((item) => (
              <span key={item} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Location</h2>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8!2d77.2095!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99d07c56d%3A0xdb60e74e9e2d44ee!2sLe%20Meridien%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Le Meridien Commercial Tower, Raisina Road, New Delhi"
            />
          </div>
          <p className="mt-3 text-sm text-gray-500">
            Adjacent to Rashtrapati Bhavan, Parliament House, Central Secretariat. Near Janpath, Connaught Place, India Gate. Metro and Airport Express accessible.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FAQSection items={faqItems} />
        </div>
      </div>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Site Visit</h2>
            <p className="text-sm text-gray-500 mb-8">
              Interested in this office? Fill in your details or call Abhinav Jha at{' '}
              <a href="tel:+918130292965" className="text-blue-700 font-medium">8130292965</a>.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
