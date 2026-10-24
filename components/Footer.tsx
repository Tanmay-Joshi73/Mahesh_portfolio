'use client';

import React from 'react';
import Link from 'next/link';
import { EDITOR_PROFILE } from '@/data/portfolioData';
import { Film, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8 text-xs font-mono text-zinc-500">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-amber-500 text-black flex items-center justify-center font-black">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-bold text-sm uppercase">{EDITOR_PROFILE.name}</div>
              <div className="text-[10px] text-zinc-400">{EDITOR_PROFILE.title}</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" className="hover:text-amber-400 transition-colors uppercase">HOME</Link>
            <Link href="/work" className="hover:text-amber-400 transition-colors uppercase">WORK</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors uppercase">ABOUT</Link>
            <Link href="/services" className="hover:text-amber-400 transition-colors uppercase">SERVICES</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors uppercase">CONTACT</Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-800 cursor-pointer"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © 2026 {EDITOR_PROFILE.name}. ALL RIGHTS RESERVED. CUT TO PERFECTION.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>24 FPS MASTER TIMELINE</span>
            <span>•</span>
            <span>PRORES 422HQ</span>
            <span>•</span>
            <span className="text-amber-400">ACES 1.3 COLOR</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
