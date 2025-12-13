interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white/90 p-3 xs:p-4 sm:p-6 shadow-lg shadow-[#D4C5B9]/30 transition duration-300 hover:-translate-y-1 hover:border-[#C9A961] hover:shadow-lg hover:shadow-[#C9A961]/30 animate-slide-up">
      <div className="flex h-9 xs:h-10 sm:h-12 w-9 xs:w-10 sm:w-12 items-center justify-center rounded-lg xs:rounded-lg sm:rounded-xl bg-[#E8DCC8]/40 text-lg xs:text-xl sm:text-2xl text-[#C9A961]">
        {icon}
      </div>
      <h3 className="mt-3 xs:mt-4 sm:mt-6 text-base xs:text-lg sm:text-xl font-semibold text-[#404040]">{title}</h3>
      <p className="mt-1.5 xs:mt-2 sm:mt-3 text-xs sm:text-sm text-[#404040]/70 leading-relaxed">{description}</p>
     {/* <div className="mt-3 xs:mt-4 sm:mt-6 flex items-center text-xs sm:text-sm font-medium text-[#C9A961]">
        Learn more
        <svg
          className="ml-1 xs:ml-1.5 sm:ml-2 h-3 xs:h-3.5 sm:h-4 w-3 xs:w-3.5 sm:w-4 transition duration-300 group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div> */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C9A961] via-[#F5F5F5] to-[#DCC9B6]" />
      </div>
    </div>
  );
}
