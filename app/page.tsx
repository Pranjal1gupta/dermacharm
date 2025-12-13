import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import TreatmentsSection from '../components/TreatmentsSection';
import Gallery from '../components/Gallery';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';

const services = [
  {
    title: 'Skin Therapy Studio',
    description: 'Custom facials, HydraGlow rituals, and pigment-correcting programs for luminous skin.',
    icon: '✨',
  },
  {
    title: 'Hair Revive Lounge',
    description: 'Scalp detox, PRP stimulation, and strengthening boosters that restore fuller strands.',
    icon: '💆‍♀️',
  },
  {
    title: 'Laser Atelier',
    description: 'Next-gen diode and Q-switch lasers for scar revision, hair reduction, and resurfacing.',
    icon: '⚡',
  },
  {
    title: 'Aesthetic Artistry',
    description: 'Injectables, contouring, and regenerative treatments that enhance natural harmony.',
    icon: '🌸',
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <TreatmentsSection />
      <Gallery />
      <AboutSection />
      
     
      <section className="relative w-full px-2 xs:px-3 sm:px-4 py-6 xs:py-8 sm:py-10 md:py-12 bg-[#FAFAF7]">
        <div className="absolute inset-x-0 top-2 xs:top-4 sm:top-8 mx-auto h-full max-w-6xl rounded-2xl xs:rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#F5F5F5] via-[#C9A961] to-[#E8DCC8] blur-3xl opacity-60" />
        <div className="relative mx-auto max-w-7xl rounded-2xl xs:rounded-2xl sm:rounded-3xl border border-[#C9A961]/60 bg-white/90 px-3 xs:px-4 sm:px-6 md:px-8 py-8 xs:py-12 sm:py-16 md:py-20 shadow-2xl shadow-[#D4C5B9]/40 backdrop-blur">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#C9A961]">Our Expertise</p>
            <h2 className="mt-2 xs:mt-3 sm:mt-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-[#404040]">Signature Services crafted for every skin and hair journey</h2>
            <p className="mt-2 xs:mt-3 sm:mt-4 text-xs xs:text-sm sm:text-base text-[#404040]/70 mx-auto max-w-3xl leading-relaxed">
              Explore high-touch programs led by board-certified dermatologists using clinically proven devices and
              luxurious care rituals inspired by global wellness destinations.
            </p>
          </div>
          <div className="mt-8 xs:mt-10 sm:mt-12 grid grid-cols-1 gap-3 xs:gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} title={service.title} description={service.description} icon={service.icon} />
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
