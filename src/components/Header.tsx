'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-1">
            <img
              src="/images/logo.png"
              alt="Samsara Smart World"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Home
            </Link>
            <Link href="/properties/le-meridien-delhi/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Le Meridien, Delhi
            </Link>
            <Link href="/properties/plot-87-sector-44-gurugram/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Plot 87, Gurugram
            </Link>
            <Link href="/coworking/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              Coworking
            </Link>
            <Link href="/about/" className="text-sm font-medium text-gray-700 hover:text-blue-700 transition">
              About
            </Link>
            <Link
              href="/contact/"
              className="rounded-md bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/properties/le-meridien-delhi/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded" onClick={() => setOpen(false)}>
              Le Meridien, Delhi
            </Link>
            <Link href="/properties/plot-87-sector-44-gurugram/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded" onClick={() => setOpen(false)}>
              Plot 87, Gurugram
            </Link>
            <Link href="/coworking/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded" onClick={() => setOpen(false)}>
              Coworking
            </Link>
            <Link href="/about/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact/" className="block px-3 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded text-center" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
