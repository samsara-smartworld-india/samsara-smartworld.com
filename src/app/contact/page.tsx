import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us — Samsara Smartworld',
  description:
    'Contact Samsara Smartworld for premium commercial office spaces in Delhi and Gurugram. Call 8130292965 or email info@samsara-smartworld.com.',
  alternates: {
    canonical: 'https://samsara-smartworld.com/contact/',
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-blue-200 mb-4">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold">Contact Us</h1>
          <p className="text-blue-100 mt-2">Get in touch to schedule a site visit or learn more about our properties.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Abhinav Jha</h3>
                  <p className="text-sm text-gray-500">Millennium Maritech Private Limited</p>
                  <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <p>
                      Phone:{' '}
                      <a href="tel:+918130292965" className="text-blue-700 hover:underline">
                        +91 8130292965
                      </a>
                    </p>
                    <p>
                      Email:{' '}
                      <a href="mailto:info@samsara-smartworld.com" className="text-blue-700 hover:underline">
                        info@samsara-smartworld.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Property 1 */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-1">Le Meridien Commercial Tower</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    7th Floor, Units 702-704, Le Meridien Commercial Complex, Raisina Road, Windsor Place, New Delhi 110001
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.8!2d77.2095!3d28.6129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2a99d07c56d%3A0xdb60e74e9e2d44ee!2sLe%20Meridien%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Le Meridien Commercial Tower location"
                    />
                  </div>
                </div>

                {/* Property 2 */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-1">Plot 87, Sector 44, Gurugram</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Plot No. 87, Sector 44, Institutional Area, Gurugram, Haryana 122003
                  </p>
                  <div className="rounded-lg overflow-hidden border border-gray-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.5!2d77.035!3d28.449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18ee82ebd3c3%3A0x6dab46bc68e5e32f!2sSector%2044%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Plot 87, Sector 44, Gurugram location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
