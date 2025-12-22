import { ReactNode } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl border border-[#C9A961]/40 bg-white/90 p-3 xs:p-4 sm:p-6 shadow-lg shadow-[#D4C5B9]/30 transition duration-300 hover:-translate-y-1 hover:border-[#C9A961] hover:shadow-lg hover:shadow-[#C9A961]/30 animate-slide-up h-72 xs:h-80 sm:h-96 flex flex-col">
      <div className="flex justify-center mb-3 xs:mb-4 sm:mb-6">
        <div className="flex h-12 xs:h-14 sm:h-16 w-12 xs:w-14 sm:w-16 items-center justify-center rounded-lg xs:rounded-xl sm:rounded-2xl bg-[#E8DCC8]/40 text-[#C9A961]">
          {icon}
        </div>
      </div>
      <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-[#404040] text-center line-clamp-2">{title}</h3>
      <p className="mt-2 xs:mt-3 sm:mt-4 text-xs sm:text-sm text-[#404040]/70 leading-relaxed line-clamp-4 flex-grow">{description}</p>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#C9A961] via-[#F5F5F5] to-[#DCC9B6]" />
      </div>
    </div>
  );
}
