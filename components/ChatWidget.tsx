'use client';

import { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

const suggestions = ['Book a consultation', 'Ask about laser therapy', 'Get skincare routine'];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div className="fixed bottom-2 xs:bottom-3 sm:bottom-6 right-2 xs:right-3 sm:right-6 z-50 flex flex-col items-end space-y-2 xs:space-y-3 sm:space-y-4">
      <div
        className={`w-64 xs:w-72 sm:w-80 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#E8D5B5]/80 bg-white/95 shadow-2xl shadow-[#D4C5B9]/60 ring-1 ring-white/40 transition-all duration-300 max-h-[55vh] xs:max-h-[60vh] sm:max-h-96 ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-[#8B6F47] via-[#C9A961] to-[#FFFBF5] px-3 sm:px-4 py-2.5 sm:py-3 text-white">
          <div className="flex-1">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-white/80">Dermacharm Concierge</p>
            <p className="text-base sm:text-lg font-semibold">Chat with us</p>
          </div>
          <button type="button" onClick={() => setOpen(false)} className="rounded-full bg-white/20 p-1 flex-shrink-0 ml-2">
            <X className="h-4 w-4 text-[#8B6F47]" />
          </button>
        </div>
        <div className="flex max-h-48 sm:max-h-64 flex-col gap-3 sm:gap-4 overflow-y-auto px-3 sm:px-4 py-3 sm:py-4 text-sm text-[#8B6F47]">
          <div className="self-start rounded-lg sm:rounded-2xl bg-[#FFFBF5] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-[#8B6F47]">
            Hi there! I can help you choose the right treatment or schedule a visit.
          </div>
          {suggestions.map((item) => (
            <button
              key={item}
              type="button"
              className="self-start rounded-full border border-[#E8D5B5]/60 px-2.5 sm:px-4 py-1.5 sm:py-2 text-left text-xs font-medium text-[#8B6F47]/80 transition hover:border-[#C9A961] hover:text-[#8B6F47]"
              onClick={() => setMessage(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <form
          className="flex items-center gap-2 border-t border-[#E8D5B5]/30 bg-white px-3 sm:px-4 py-2 sm:py-3 flex-shrink-0"
          onSubmit={(event) => {
            event.preventDefault();
            setMessage('');
          }}
        >
          <input
            type="text"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type..."
            className="flex-1 rounded-full border border-[#E8D5B5]/50 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm outline-none focus:border-[#C9A961]"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#C9A961] p-1.5 sm:p-2 text-white shadow hover:bg-[#8B6F47] flex-shrink-0"
          >
            <Send className="h-3.5 sm:h-4 w-3.5 sm:w-4" />
          </button>
        </form>
      </div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="relative inline-flex items-center gap-1.5 xs:gap-2 sm:gap-3 rounded-full bg-[#8B6F47] px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 text-xs sm:text-sm text-white shadow-xl shadow-[#D4C5B9]/70 transition hover:-translate-y-0.5"
      >
        {!open && (
          <span className="absolute -right-1 -top-1 flex h-2.5 xs:h-3 w-2.5 xs:w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C9A961] opacity-75" />
            <span className="relative inline-flex h-full w-full rounded-full bg-[#C9A961]" />
          </span>
        )}
        <span className="flex h-7 xs:h-8 sm:h-10 w-7 xs:w-8 sm:w-10 items-center justify-center rounded-full bg-white/20 flex-shrink-0">
          <MessageCircle className="h-3.5 xs:h-4 sm:h-5 w-3.5 xs:w-4 sm:w-5" />
        </span>
        <span className="text-left hidden sm:block">
          {open ? 'Close chat' : 'Need skincare help?'}
          <span className="block text-xs text-white/70">Chat with Dermacharm</span>
        </span>
        <span className="text-left sm:hidden">
          {open ? 'Close' : 'Chat'}
        </span>
      </button>
    </div>
  );
}
