import './globals.css';
import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';
import Topbar from '../components/Topbar';

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
      </head>
      <body className={`${inter.className} bg-gradient-to-b from-[#E9F5F3] via-[#FFFFFF] to-[#CDBBA7]/40 text-[#2A3D45] antialiased`}>
        <div className="relative min-h-screen">
          <header className="sticky top-0 z-50">
            <Topbar />
            <Navbar />
          </header>
          <main className="flex flex-col pb-20">{children}</main>
          <Footer />
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
