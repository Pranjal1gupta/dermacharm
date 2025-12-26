import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';
import Preloader from '../components/Preloader';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DermaCharma Clinic',
  description: 'Professional dermatology and skincare services',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-[#E9F5F3] via-[#FFFFFF] to-[#CDBBA7]/40 text-[#2A3D45] antialiased`}>
        <Preloader />
        <div className="relative min-h-screen flex flex-col">
          <header className="fixed top-0 left-0 right-0 z-50 w-full">
            <Topbar />
            <Navbar />
          </header>
          <main className="flex flex-col flex-1 pt-16 xs:pt-[72px] sm:pt-[88px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
