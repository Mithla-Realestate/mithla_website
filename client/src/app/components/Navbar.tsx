'use client';

import Link from 'next/link';
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({ subsets: ['latin'], weight: '400' });

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-gray-600">
      <span className={`text-2xl text-gray-900 ${greatVibes.className}`}>Mithila Real Estate</span>
      </Link>

      <div className="space-x-6 text-sm font-medium text-gray-700">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}
