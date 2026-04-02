import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/SchemaMarkup';
import { getRealEstateAgentSchema } from '@/lib/schema';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://samsara-smartworld.com'),
  title: {
    default: 'Samsara Smartworld — Premium Commercial Spaces in Delhi & Gurugram',
    template: '%s | Samsara Smartworld',
  },
  description:
    'Lease premium furnished office spaces in Central Delhi (Le Meridien Tower, Raisina Road) and Gurugram (Sector 44). By Millennium Maritech Private Limited.',
  keywords: [
    'office space for rent Delhi',
    'commercial space Gurugram',
    'Le Meridien commercial tower',
    'Sector 44 Gurugram office',
    'premium office Delhi NCR',
    'coworking space Gurugram',
    'furnished office Raisina Road',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://samsara-smartworld.com',
    siteName: 'Samsara Smartworld',
    title: 'Samsara Smartworld — Premium Commercial Spaces in Delhi & Gurugram',
    description:
      'Lease premium furnished office spaces in Central Delhi and Gurugram by Millennium Maritech Private Limited.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samsara Smartworld — Premium Commercial Spaces in Delhi & Gurugram',
    description:
      'Lease premium furnished office spaces in Central Delhi and Gurugram by Millennium Maritech Private Limited.',
  },
  alternates: {
    canonical: 'https://samsara-smartworld.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased text-gray-900 bg-white min-h-screen flex flex-col`}>
        <SchemaMarkup data={getRealEstateAgentSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
