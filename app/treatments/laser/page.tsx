'use client';

import Link from 'next/link';

const laserTreatments = [
  {
    name: 'Fractional CO2 Laser',
    description: 'Advanced resurfacing technology for deep skin renewal, scar revision, and significant texture improvement.',
    benefits: ['Scar reduction', 'Deep rejuvenation', 'Texture refinement', 'Lasting results'],
  },
  {
    name: 'Diode Laser Hair Removal',
    description: 'Precision hair removal technology effective on all skin types with minimal discomfort.',
    benefits: ['Permanent reduction', 'All skin types', 'Precise targeting', 'Safe and effective'],
  },
  {
    name: 'Q-Switch Nd:YAG Laser',
    description: 'High-energy laser for tattoo removal, pigmentation correction, and age spot treatment.',
    benefits: ['Tattoo removal', 'Pigment correction', 'Age spot removal', 'Clear results'],
  },
  {
    name: 'Erbium Laser',
    description: 'Precise ablative resurfacing for controlled skin rejuvenation with excellent healing.',
    benefits: ['Controlled depth', 'Rapid healing', 'Skin tightening', 'Wrinkle reduction'],
  },
  {
    name: 'PicoWay Laser',
    description: 'Ultra-fast picosecond technology for efficient tattoo removal and skin rejuvenation.',
    benefits: ['Fast treatment', 'Fewer sessions', 'Minimal scarring', 'All colors'],
  },
  {
    name: 'IPL Photofacial',
    description: 'Intense pulsed light treatment for sun damage, rosacea, and overall skin tone improvement.',
    benefits: ['Even tone', 'Rosacea reduction', 'Sun damage reversal', 'Glow enhancement'],
  },
];

export default function LaserTreatmentsPage() {
  return (
    <section className="bg-[#FAFAF8] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Laser Treatments</p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]">
            Cutting-edge laser technology
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
            Experience precision laser treatments for hair removal, tattoo removal, scar revision, and complete skin rejuvenation.
          </p>
        </div>

        <div className="grid gap-6 xs:gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {laserTreatments.map((treatment) => (
            <div key={treatment.name} className="group rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/50 bg-white/90 p-4 xs:p-6 sm:p-8 shadow-lg shadow-[#D4C5B9]/30 transition hover:-translate-y-1 hover:border-[#C9A961]">
              <h3 className="text-lg xs:text-xl sm:text-2xl font-semibold text-[#404040]">{treatment.name}</h3>
              <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#404040]/70 leading-relaxed">{treatment.description}</p>
              <ul className="mt-4 xs:mt-5 sm:mt-6 space-y-2 xs:space-y-2.5 sm:space-y-3">
                {treatment.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 xs:gap-2.5 sm:gap-3 text-xs xs:text-xs sm:text-sm text-[#404040]">
                    <span className="mt-1.5 xs:mt-2 h-1.5 xs:h-2 w-1.5 xs:w-2 rounded-full bg-[#C9A961] flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/40 bg-gradient-to-br from-white via-[#FAFAF8] to-[#E8DCC8] p-6 xs:p-8 sm:p-10 md:p-12 text-center shadow-2xl shadow-[#D4C5B9]/40">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Ready to Treat</p>
          <h2 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl font-bold text-[#404040]">Experience precision laser technology</h2>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#404040]/70 mx-auto max-w-2xl mb-6 xs:mb-8 sm:mb-10">
            Schedule a consultation with our laser specialists to discuss which treatment is best suited for your needs.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-[#C9A961] px-6 xs:px-8 sm:px-10 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#B8935D]"
          >
            Book Laser Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
