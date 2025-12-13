'use client';

import Image from 'next/image';
import { useState } from 'react';

const treatments = [
  {
    id: 'laser-atrium',
    name: 'Laser Atrium Resurfacing',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80',
    shortDescription: 'Hybrid fractional resurfacing calibrates energy delivery to sculpt tone refinement and glass-skin clarity.',
    description:
      'Our laser atrium pairs dual-wavelength resurfacing with lymphatic cooling to soften etched lines, fade stubborn hyperpigmentation, and rebuild collagen density without disrupting barrier resilience.',
    benefits: ['Precise pigment balancing', 'Collagen renewal boost', 'Minimal social downtime'],
  },
  {
    id: 'cellular-studio',
    name: 'Cellular Revival Studio',
    image: 'https://images.unsplash.com/photo-1643684460412-76908d8e5a25?w=500&q=80',
    shortDescription: 'PRF concentrates woven with LED photobiomodulation awaken dermal stem cells for resilient radiance.',
    description:
      'The revival studio sequence layers platelet-rich fibrin with oxygenated serums and multi-spectrum LED to energize cellular turnover, recalibrate hydration memory, and cushion stressed skin matrices.',
    benefits: ['Amplified cellular turnover', 'Inflammation control', 'Deep hydration lock'],
  },
  {
    id: 'scalp-lounge',
    name: 'Scalp Renewal Lounge',
    image: 'https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_930/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/xxvgvr4sruzccnzsgvhx/DamHyeWonScalpLoungeHapjeongKyoboBookStoreBranch%7CSeoul.jpg',
    shortDescription: 'Detox exfoliation merges with growth-factor infusions reviving thinning roots and soothing imbalanced scalps.',
    description:
      'Micromist exfoliation, red-light modulation, and targeted mesotherapy wake dormant follicles while recalibrating microbiome harmony for fuller, denser strands.',
    benefits: ['Enhanced follicle vitality', 'Balanced scalp microbiome', 'Stronger strand anchoring'],
  },
  {
    id: 'derma-ritual',
    name: 'Dermal Ritual Sculpt',
    image: 'https://images.unsplash.com/photo-1643684391140-c5056cfd3436?w=500&q=80',
    shortDescription: 'Skin mapping diagnostics choreograph contouring massage, gua sha lymphatics, and peptide infusion sequences.',
    description:
      'A multi-sensory ritual aligning fascia release, gua sha precision, and biomimetic peptides to detox stagnation, lift contours, and illuminate tone harmonies.',
    benefits: ['Immediate sculpted lift', 'Improved lymphatic flow', 'Radiance amplification'],
  },
  {
    id: 'aqua-firm',
    name: 'Aqua Firm Infusion',
    image: 'https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?w=500&q=80',
    shortDescription: 'Ultrasonic cleansing merges with oxygen domes and peptide chambers saturating dermal layers with active hydration.',
    description:
      'A cascade of ultrasonic extractions, oxygen therapy, and cryo-infusions locks hyaluronic micro-reservoirs into deeper layers to smooth texture and restore luminous bounce.',
    benefits: ['Pore refinement', 'Hydration reservoirs filled', 'Smooth glassy finish'],
  },
  {
    id: 'lumi-lift',
    name: 'LumiLift Contour Lab',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=500&q=80',
    shortDescription: 'Microcurrent waveforms paired with buccal sculpting synchronize neuromuscular lift and fascia release.',
    description:
      'Alternating microcurrent frequencies and buccal massage activate muscle memory, release jaw tension, and refine cheek architecture for editorial-grade definition.',
    benefits: ['Defined jawline', 'Relaxed facial tension', 'Longer-lasting lift'],
  },
];

const truncateCopy = (text: string) => (text.length > 120 ? `${text.slice(0, 118).trim()} (....)` : text);

export default function TreatmentsSection() {
  const [selectedTreatment, setSelectedTreatment] = useState<(typeof treatments)[number] | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#FAFAF8] to-[#F5F2EE] w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <p className="text-sm lg:text-base font-semibold uppercase tracking-[0.4em] text-[#C9A961] mb-4">Curated Protocol Index</p>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#404040] leading-tight mb-6 lg:mb-8 max-w-4xl mx-auto">
            List Of Treatments At Derms
          </h1>
          <p className="mx-auto max-w-3xl text-sm sm:text-base lg:text-lg text-[#404040]/80 leading-relaxed">
            Immerse in multi-sensory dermatology that fuses clinical precision with deeply restorative rituals for skin,
            scalp, and total complexion health.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {treatments.map((treatment) => (
            <div 
              key={treatment.id} 
              className="group relative overflow-hidden rounded-3xl h-72 lg:h-80 shadow-2xl shadow-[#D4C5B9]/30 hover:shadow-3xl hover:shadow-[#C9A961]/20 transition-all duration-500 border border-[#C9A961]/20 hover:border-[#C9A961]/40 cursor-pointer"
              onClick={() => setSelectedTreatment(treatment)}
            >
              {/* Background Image */}
              <Image 
                src={treatment.image} 
                alt={treatment.name} 
                fill 
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-300" 
                priority={false}
              />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Front Card Content */}
              <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                <h3 className="text-xl lg:text-2xl font-bold text-white text-center mb-2 leading-tight">{treatment.name}</h3>
                <p className="text-xs lg:text-sm text-white/80 text-center font-medium uppercase tracking-wider">
                  Tap to explore
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#C9A961]/95 to-[#E8DCC8]/95 p-6 lg:p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm">
                <p className="text-sm lg:text-base font-medium leading-relaxed text-white/95 mb-6 lg:mb-8">
                  {truncateCopy(treatment.shortDescription)}
                </p>
                <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity delay-150">
                  <div className="w-2 h-2 bg-white/60 rounded-full mr-2 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.3em] font-semibold text-white">Preview Ritual</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#404040]/80 backdrop-blur-sm p-4" onClick={() => setSelectedTreatment(null)}>
          <div 
            className="relative w-full max-w-4xl rounded-3xl border-2 border-[#C9A961]/30 bg-white/95 backdrop-blur-xl shadow-3xl shadow-[#D4C5B9]/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              className="absolute top-4 right-4 w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg shadow-[#C9A961]/30 flex items-center justify-center text-xl lg:text-2xl font-bold text-[#404040] hover:text-[#C9A961] hover:bg-[#C9A961]/10 hover:scale-110 transition-all duration-200 z-10"
              onClick={() => setSelectedTreatment(null)}
            >
              ✕
            </button>

            <div className="p-6 lg:p-8 max-h-[85vh] overflow-y-auto">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-12 items-start">
                {/* Image */}
                <div className="relative h-72 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-[#FAFAF8] to-[#F0EDE8] group flex-shrink-0 shadow-2xl shadow-[#D4C5B9]/20 border border-[#C9A961]/20">
                  <Image 
                    src={selectedTreatment.image} 
                    alt={selectedTreatment.name}
                    fill 
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:from-black/10 transition-all duration-700" />
                </div>

                {/* Content */}
                <div className="space-y-4 lg:space-y-6">
                  <div>
                    <p className="text-xs lg:text-sm font-semibold uppercase tracking-[0.4em] text-[#C9A961] mb-2">Treatment Blueprint</p>
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[#404040] leading-tight">{selectedTreatment.name}</h2>
                  </div>
                  
                  <p className="text-sm lg:text-base text-[#404040]/80 leading-relaxed">{selectedTreatment.description}</p>
                  
                  <ul className="space-y-2 lg:space-y-3">
                    {selectedTreatment.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 lg:gap-4 group">
                        <div className="w-2 h-2 lg:w-2.5 lg:h-2.5 bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] rounded-full mt-1.5 lg:mt-2 flex-shrink-0 animate-pulse group-hover:scale-125 transition-transform duration-200" />
                        <span className="text-sm lg:text-base text-[#404040] leading-relaxed">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full lg:w-auto group relative px-6 lg:px-10 py-3 lg:py-4 rounded-2xl bg-gradient-to-r from-[#C9A961] to-[#E8DCC8] text-white font-semibold uppercase tracking-[0.2em] text-xs lg:text-sm overflow-hidden shadow-xl shadow-[#C9A961]/30 hover:shadow-2xl hover:shadow-[#C9A961]/50 transition-all duration-300">
                    <span className="relative z-10">Book Consultation</span>
                    <div className="absolute inset-0 bg-white/20 -skew-x-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
