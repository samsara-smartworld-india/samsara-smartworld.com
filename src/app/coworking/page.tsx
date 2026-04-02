import type { Metadata } from 'next';
import Link from 'next/link';
import CoworkingBookingForm from '@/components/CoworkingBookingForm';
import FAQSection from '@/components/FAQSection';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Coworking Space — Sector 44, Gurugram | Book Desks, Conference Room & Podcast Studio',
  description:
    'Book coworking seats from ₹12,000/month, a conference room, or a podcast studio at Plot 87, Sector 44, Gurugram. 40 dedicated desks, high-speed Wi-Fi, 100% power backup. 3 min from HUDA Metro.',
  openGraph: {
    title: 'Coworking Space — Sector 44, Gurugram',
    description: 'Book desks from ₹12,000/mo, conference room, or podcast studio. Premium coworking near HUDA Metro.',
    url: 'https://samsara-smartworld.com/coworking/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coworking Space — Sector 44, Gurugram',
    description: '40 desks, conference room, podcast studio. From ₹12,000/mo.',
  },
  alternates: {
    canonical: 'https://samsara-smartworld.com/coworking/',
  },
};

const faqItems = [
  {
    question: 'How do I book a coworking seat or conference room?',
    answer:
      'Submit a booking request using the form on this page. Select your preferred resource (coworking seat, conference room, or podcast studio), choose your dates and duration, and fill in your contact details. Our team will review availability and confirm your booking within 24 hours via email or phone.',
  },
  {
    question: 'Are bookings confirmed instantly?',
    answer:
      'No. All bookings go through a review process. After you submit a request, our admin team checks availability and confirms your booking within 24 hours. You will receive a confirmation email or phone call once approved.',
  },
  {
    question: 'What is the pricing for coworking seats?',
    answer:
      'Dedicated coworking desks start from ₹12,000 per seat per month. Weekly and shorter-term options are also available. Private cabins for 2–8 seats are priced separately — mention your requirement in the booking form.',
  },
  {
    question: 'Can I book the conference room by the hour?',
    answer:
      'Yes. The conference room (seats 10–12) is available for hourly, half-day, or full-day bookings. Select your preferred time slot when submitting the booking request.',
  },
  {
    question: 'What equipment is available in the podcast studio?',
    answer:
      'The podcast and video studio is fully equipped and production-ready. It includes professional audio setup, lighting, and a creator-ready makeup room. Contact us for specific equipment details.',
  },
  {
    question: 'What amenities are included with a coworking seat?',
    answer:
      'Every coworking seat includes high-speed Wi-Fi, air conditioning, 100% power backup, access to meeting rooms, pantry with tea/coffee, housekeeping, and 24x7 security. The space is fully plug-and-play.',
  },
  {
    question: 'Where is the coworking space located?',
    answer:
      'The coworking space is on the 3rd floor of Plot 87, Sector 44, Institutional Area, Gurugram 122003. It is 3 minutes from HUDA/Millennium City Centre Metro station, near Taj City Centre, Max Healthcare, EY, and Johnson & Johnson.',
  },
  {
    question: 'What is the cancellation policy?',
    answer:
      'Cancellation policies vary by booking type and duration. Please discuss cancellation terms with our team at the time of booking confirmation. Contact us at 8130292965 for specific queries.',
  },
];

const coworkingSchema = {
  '@context': 'https://schema.org',
  '@type': 'CoworkingSpace',
  name: 'Samsara Smartworld Coworking — Sector 44, Gurugram',
  description: 'Grade A+ coworking space with 40 dedicated desks, private cabins, conference room, and podcast studio in Sector 44, Gurugram.',
  url: 'https://samsara-smartworld.com/coworking/',
  telephone: '+918130292965',
  email: 'info@samsara-smartworld.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3rd Floor, Plot No. 87, Sector 44, Institutional Area',
    addressLocality: 'Gurugram',
    addressRegion: 'Haryana',
    postalCode: '122003',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.451194,
    longitude: 77.070867,
  },
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'High-Speed Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Air Conditioning', value: true },
    { '@type': 'LocationFeatureSpecification', name: '100% Power Backup', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Meeting Rooms', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Podcast Studio', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Pantry', value: true },
  ],
};

export default function CoworkingPage() {
  return (
    <>
      <SchemaMarkup data={[coworkingSchema]} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-900 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/properties/plot-87-sector-44-gurugram/" className="hover:text-white">Plot 87, Gurugram</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Coworking</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Coworking Space — Sector 44, Gurugram
          </h1>
          <p className="text-blue-100 max-w-2xl mb-6">
            Grade A+ coworking on the 3rd floor of Plot 87. Dedicated desks, private cabins, conference room, and a fully equipped podcast & video studio.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="bg-white/20 px-3 py-1 rounded text-sm">40 Seats</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">From ₹12,000/mo</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">3 min from Metro</span>
            <span className="bg-white/20 px-3 py-1 rounded text-sm">Podcast Studio</span>
          </div>
        </div>
      </section>

      {/* Inventory Cards */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">Available Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Conference Room */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Conference Room</h3>
              <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded mb-3 w-fit">1 Available</span>
              <ul className="text-sm text-gray-600 space-y-1.5 mb-4 flex-1">
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Seats 10–12 people
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Projector & whiteboard
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Hourly / half-day / full-day
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Air conditioned, Wi-Fi
                </li>
              </ul>
              <a
                href="#booking"
                className="block text-center rounded-md bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-800 transition"
              >
                Request Booking
              </a>
            </div>

            {/* Podcasting Studio */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Podcast & Video Studio</h3>
              <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded mb-3 w-fit">1 Available</span>
              <ul className="text-sm text-gray-600 space-y-1.5 mb-4 flex-1">
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Professional audio & lighting
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Video production ready
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Creator-ready makeup room
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Hourly / half-day / full-day
                </li>
              </ul>
              <a
                href="#booking"
                className="block text-center rounded-md bg-purple-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-purple-800 transition"
              >
                Request Booking
              </a>
            </div>

            {/* Coworking Seats */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <div className="h-14 w-14 rounded-lg bg-emerald-50 flex items-center justify-center mb-4">
                <svg className="h-7 w-7 text-emerald-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Coworking Seats</h3>
              <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded mb-3 w-fit">40 Available</span>
              <ul className="text-sm text-gray-600 space-y-1.5 mb-4 flex-1">
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Dedicated desks from ₹12,000/mo
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Private cabins (2–8 seats)
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Daily / weekly / monthly plans
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-4 w-4 text-green-500 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  High-speed Wi-Fi, power backup
                </li>
              </ul>
              <a
                href="#booking"
                className="block text-center rounded-md bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition"
              >
                Request Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Coworking image */}
      <section className="py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <img
              src="/images/plot-87-gurugram/coworking.png"
              alt="Coworking space at Plot 87 Sector 44 Gurugram — dedicated desks, private cabins, podcast studio, and makeup room"
              className="w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Amenities Included</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              { icon: 'wifi', label: 'High-Speed Wi-Fi' },
              { icon: 'bolt', label: '100% Power Backup' },
              { icon: 'snow', label: 'Air Conditioning' },
              { icon: 'shield', label: '24x7 Security & CCTV' },
              { icon: 'coffee', label: 'Pantry & Tea/Coffee' },
              { icon: 'sparkles', label: 'Housekeeping' },
              { icon: 'building', label: '2 High-Speed Elevators' },
              { icon: 'users', label: 'Meeting Rooms' },
              { icon: 'printer', label: 'Printing & Scanning' },
              { icon: 'car', label: 'Parking Available' },
              { icon: 'droplet', label: 'Uninterrupted Water' },
              { icon: 'fire', label: 'Fire Safety Systems' },
            ].map((amenity) => (
              <div key={amenity.label} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <svg className="h-5 w-5 text-blue-600 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-gray-700">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Location</h2>
          <p className="text-sm text-gray-600 mb-4">
            3rd Floor, Plot No. 87, Sector 44, Institutional Area, Gurugram 122003
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6 text-sm">
            <div className="bg-blue-50 rounded-lg px-4 py-3 text-center">
              <span className="block text-lg font-bold text-blue-700">3 min</span>
              <span className="text-gray-600">HUDA Metro</span>
            </div>
            <div className="bg-blue-50 rounded-lg px-4 py-3 text-center">
              <span className="block text-lg font-bold text-blue-700">5 min</span>
              <span className="text-gray-600">IFFCO Chowk</span>
            </div>
            <div className="bg-blue-50 rounded-lg px-4 py-3 text-center">
              <span className="block text-lg font-bold text-blue-700">8 min</span>
              <span className="text-gray-600">Golf Course Road</span>
            </div>
            <div className="bg-blue-50 rounded-lg px-4 py-3 text-center">
              <span className="block text-lg font-bold text-blue-700">25 min</span>
              <span className="text-gray-600">IGI Airport T3</span>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src="https://www.google.com/maps?q=28.451194,77.070867&z=17&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coworking space at Plot 87, Sector 44, Gurugram"
            />
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-16 bg-gray-50 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Booking</h2>
              <p className="text-sm text-gray-500">
                Fill in the details below. Our team will confirm availability within 24 hours.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Or call Abhinav Jha at{' '}
                <a href="tel:+918130292965" className="text-blue-700 font-medium">8130292965</a>
              </p>
            </div>
            <CoworkingBookingForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FAQSection items={faqItems} />
      </div>
    </>
  );
}
