'use client';

import Link from 'next/link';

const aestheticTreatments = [
  {
    name: 'Dermal Fillers',
    description: 'Strategically placed bio-compatible fillers to restore volume, enhance contours, and create natural definition.',
    benefits: ['Volume restoration', 'Natural enhancement', 'Precise contouring', 'Immediate results'],
  },
  {
    name: 'Botulinum Toxin',
    description: 'Professional injectables to smooth dynamic wrinkles while preserving natural facial expression.',
    benefits: ['Expression lines softening', 'Preventative anti-aging', 'Natural results', 'Customized treatment'],
  },
  {
    name: 'Thread Lifts',
    description: 'Minimally invasive lifting technique using specialty threads to tighten and support facial structures.',
    benefits: ['Skin tightening', 'Natural lift', 'Collagen stimulation', 'Minimal downtime'],
  },
  {
    name: 'Microcurrent Toning',
    description: 'Non-invasive facial toning using micro-level electrical currents to lift and define facial contours.',
    benefits: ['Muscle toning', 'Facial definition', 'Skin firmness', 'Non-invasive approach'],
  },
  {
    name: 'Chemical Peels',
    description: 'Professional-grade peels tailored to address aging signs and reveal fresh, glowing skin.',
    benefits: ['Texture refinement', 'Age spot reduction', 'Glow enhancement', 'Minimal downtime'],
  },
  {
    name: 'Contouring Massage',
    description: 'Specialized facial massage techniques to sculpt, define, and enhance natural facial features.',
    benefits: ['Facial sculpting', 'Lymphatic drainage', 'Enhanced glow', 'Tension relief'],
  },
];

export default function AestheticTreatmentsPage() {
  return (
    <section className="bg-[#FAFAF8] w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12">
      <div className="mx-auto max-w-6xl space-y-10 xs:space-y-12 sm:space-y-14 md:space-y-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Aesthetic Treatments</p>
          <h1 className="mt-2 xs:mt-3 sm:mt-4 text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-[#404040]">
            Enhance your natural beauty artfully
          </h1>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base md:text-lg text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
            Achieve facial harmony and natural enhancement through our artistic and scientifically-proven aesthetic treatments.
          </p>
        </div>

        <div className="grid gap-6 xs:gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {aestheticTreatments.map((treatment) => (
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
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Ready to Transform</p>
          <h2 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl font-bold text-[#404040]">Discover your most confident self</h2>
          <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#404040]/70 mx-auto max-w-2xl mb-6 xs:mb-8 sm:mb-10">
            Schedule a consultation with our aesthetic specialists to discuss your goals and create a personalized treatment plan.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center rounded-full bg-[#C9A961] px-6 xs:px-8 sm:px-10 py-2 xs:py-2.5 sm:py-3 text-xs xs:text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#B8935D]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
