import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Samsara Smartworld (samsara-smartworld.com) operated by Millennium Maritech Private Limited. Learn how we collect, use, and protect your personal information.',
  alternates: {
    canonical: 'https://samsara-smartworld.com/privacy-policy/',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-blue-700">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: 2 April 2026</p>

        <div className="prose prose-gray prose-sm max-w-none space-y-8">

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              This Privacy Policy explains how <strong>Millennium Maritech Private Limited</strong> (operating as &ldquo;Samsara Smartworld&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, discloses, and safeguards your personal information when you visit our website <strong>samsara-smartworld.com</strong> (the &ldquo;Site&rdquo;) or interact with our services. By using the Site, you consent to the data practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">2. Information We Collect</h2>

            <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">2.1 Information You Provide</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              When you fill out a contact form, booking request, or inquiry form on our Site, we may collect:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number (with country code)</li>
              <li>Company name</li>
              <li>Property of interest or booking preferences</li>
              <li>Any additional information you include in the message field</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">2.2 Information Collected Automatically</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              When you visit the Site, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on the Site</li>
              <li>Device identifiers</li>
            </ul>

            <h3 className="text-sm font-semibold text-gray-900 mt-4 mb-2">2.3 Google reCAPTCHA</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We use Google reCAPTCHA v3 to protect our forms from spam and abuse. reCAPTCHA collects hardware and software information (such as device and application data) and sends it to Google for analysis. Your use of reCAPTCHA is subject to Google&apos;s{' '}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Privacy Policy</a> and{' '}
              <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline">Terms of Service</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li>To respond to your inquiries about our commercial properties</li>
              <li>To process and confirm coworking space booking requests</li>
              <li>To schedule property site visits</li>
              <li>To send you relevant property information, brochures, or floor plans you have requested</li>
              <li>To communicate with you about leasing terms and availability</li>
              <li>To improve our website and user experience</li>
              <li>To prevent spam and protect the security of our Site</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">4. How We Share Your Information</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              We do <strong>not sell, rent, or trade</strong> your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li><strong>Service providers:</strong> We use Formspree to process form submissions. Your form data is transmitted to Formspree for delivery to our email. Formspree&apos;s privacy policy applies to their processing of your data.</li>
              <li><strong>Google:</strong> reCAPTCHA data is processed by Google as described above.</li>
              <li><strong>Legal requirements:</strong> We may disclose your information if required by law, court order, or government regulation.</li>
              <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">5. Data Retention</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. Inquiry and booking data is typically retained for up to 24 months after your last interaction with us. You may request deletion of your data at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">6. Data Security</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              We implement reasonable technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Our Site is served over HTTPS, ensuring encrypted transmission of data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">7. Cookies and Tracking</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our Site does not use first-party cookies for tracking or analytics. However, third-party services embedded on the Site (such as Google reCAPTCHA and Google Maps) may set their own cookies. Please refer to Google&apos;s cookie policy for details on how they use cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">8. Your Rights</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Depending on your jurisdiction, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Objection:</strong> Object to processing of your personal data</li>
              <li><strong>Withdrawal of consent:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              To exercise any of these rights, please contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">9. Third-Party Links</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our Site may contain links to third-party websites (such as Google Maps, property portals, or social media platforms). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">10. Children&apos;s Privacy</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              Our Site and services are intended for business professionals and are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us and we will promptly delete it.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">11. Changes to This Policy</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically. Continued use of the Site after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-gray-900 mb-3">12. Contact Us</h2>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              If you have any questions about this Privacy Policy or wish to exercise your data rights, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-5 text-sm text-gray-700 space-y-1.5">
              <p><strong>Millennium Maritech Private Limited</strong></p>
              <p>Contact Person: Abhinav Jha</p>
              <p>
                Email:{' '}
                <a href="mailto:info@samsara-smartworld.com" className="text-blue-700 underline">
                  info@samsara-smartworld.com
                </a>
              </p>
              <p>
                Phone:{' '}
                <a href="tel:+918130292965" className="text-blue-700 underline">
                  +91 8130292965
                </a>
              </p>
              <p>Website: samsara-smartworld.com</p>
            </div>
          </section>

        </div>
      </div>
    </article>
  );
}
