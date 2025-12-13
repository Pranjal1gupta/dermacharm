import Link from 'next/link';
import Image from 'next/image';

const socialLinks = [
  { icon: 'facebook', href: 'https://www.facebook.com/p/Dermacharm-Aesthetics-61577171443099/', label: 'Facebook' },
  { icon: 'instagram', href: 'https://www.instagram.com/dermacharmaesthetics/', label: 'Instagram' },
  { icon: 'twitter', href: 'https://twitter.com', label: 'Twitter' },
  { icon: 'linkedin', href: 'https://linkedin.com', label: 'LinkedIn' },
];

const primaryLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
];

const treatmentLinks = [
  { href: '/treatments/skin', label: 'Skin Treatments' },
  { href: '/treatments/hair', label: 'Hair Treatment' },
  { href: '/treatments/aesthetic', label: 'Aesthetic Treatment' },
  { href: '/treatments/laser', label: 'Laser Treatment' },
  { href: '/treatments/dermatosurgery', label: 'Dermatosurgery' },
];

const navGroups = [
  {
    title: 'Explore',
    items: primaryLinks,
  },
  {
    title: 'Treatments',
    items: treatmentLinks,
  },
  {
    title: 'Quick Links',
    items: [
      { href: '/contact', label: 'Contact' },
      { href: '/book', label: 'Book Visit' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F6] border-t border-[#C9A961]/30 text-[#404040]">
      <div className="w-full px-2 xs:px-3 sm:px-4">
        <div className="max-w-7xl mx-auto py-10 xs:py-12 sm:py-14 md:py-16 lg:py-20">
          <div className="grid gap-6 xs:gap-8 sm:gap-10 grid-cols-1 xs:grid-cols-2 md:grid-cols-4">
            <div className="col-span-1 xs:col-span-1 flex flex-col items-start">
              <Link href="/" className="inline-flex items-center" aria-label="Dermacharm home">
                <Image src="/logo.png" alt="Dermacharm" width={140} height={40} priority className="h-12 xs:h-14 sm:h-16 w-auto" />
              </Link>
              <div className="flex gap-3 xs:gap-4 mt-4 xs:mt-5 sm:mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-10 w-10 xs:h-11 xs:w-11 rounded-full border border-[#C9A961]/40 text-[#C9A961] hover:bg-[#C9A961] hover:border-[#C9A961] hover:text-white transition"
                  >
                    {social.icon === 'facebook' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                      </svg>
                    )}
                    {social.icon === 'twitter' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 002.856-3.515 10 10 0 01-2.836.856 4.958 4.958 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === 'linkedin' && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                      </svg>
                    )}
                  </a>
                ))}
              </div>
            </div>
            {navGroups.map((group) => (
              <div key={group.title} className="col-span-1">
                <p className="text-xs xs:text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A961]">{group.title}</p>
                <ul className="mt-2 xs:mt-3 sm:mt-4 space-y-1 xs:space-y-1.5 sm:space-y-2 text-xs xs:text-sm text-[#404040]/70">
                  {group.items.map((item) => (
                    <li key={item.href} className="hover:text-[#C9A961] transition text-bold">
                      <Link href={item.href} className="hover:text-[#C9A961]">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-[#C9A961]/20 py-3 xs:py-4 sm:py-5 text-center text-xs xs:text-xs text-[#404040]/60 px-2 xs:px-3 sm:px-4 mb-20 sm:mb-0 bg-white/50">
        © {new Date().getFullYear()} Dermacharm Aesthetics. All rights reserved.
      </div>
    </footer>
  );
}
