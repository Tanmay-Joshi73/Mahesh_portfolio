'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { EDITOR_PROFILE } from '@/data/portfolioData';
import { Film, Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  isMuted: boolean;
  onToggleMute: () => void;
}

export default function Navbar({ isMuted, onToggleMute }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timecode, setTimecode] = useState('01:00:00:00');

  // SMPTE 24fps timecode generator
  useEffect(() => {
    let frame = 0;
    const interval = setInterval(() => {
      frame = (frame + 1) % 86400; // 1 hour loop
      const fps = 24;
      const totalSeconds = Math.floor(frame / fps);
      const frames = frame % fps;
      const seconds = totalSeconds % 60;
      const minutes = Math.floor(totalSeconds / 60) % 60;
      const hours = 1 + Math.floor(totalSeconds / 3600);

      const pad = (n: number) => n.toString().padStart(2, '0');
      setTimecode(`${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`);
    }, 1000 / 24);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SHOWCASE', href: '#showcase' },
    { label: 'WORK', href: '#work' },
    { label: 'SHOWREEL', href: '#showreel' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md bg-amber-500 flex items-center justify-center text-black font-black text-lg tracking-tighter group-hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
              <Film className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors uppercase">
                {EDITOR_PROFILE.name}
              </span>
              <span className="text-[10px] tracking-widest text-zinc-400 uppercase font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                REC 24FPS
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-semibold tracking-wider text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-md transition-all uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions: Timecode, Mute toggle & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            {/* SMPTE Timecode Display */}
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-zinc-950 border border-zinc-800 rounded font-mono text-xs text-amber-400/90 tracking-widest">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
              <span>TC {timecode}</span>
            </div>

            {/* Audio Toggle */}
            <button
              onClick={onToggleMute}
              title={isMuted ? 'Unmute Ambient Sound' : 'Mute Ambient Sound'}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-xs text-zinc-300 hover:text-amber-400 transition-all cursor-pointer"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-[11px] font-mono">MUTED</span>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 bg-amber-400 animate-sound-1" />
                    <span className="w-0.5 bg-amber-400 animate-sound-2" />
                    <span className="w-0.5 bg-amber-400 animate-sound-3" />
                    <span className="w-0.5 bg-amber-400 animate-sound-4" />
                  </div>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-mono text-amber-400">AUDIO ON</span>
                </>
              )}
            </button>

            {/* CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black font-bold text-xs uppercase tracking-wider rounded transition-all shadow-md hover:shadow-amber-500/25 cursor-pointer"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleMute}
              className="p-2 text-zinc-300 hover:text-amber-400 bg-zinc-900 rounded-md border border-zinc-800"
              aria-label="Toggle Audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-300 hover:text-white bg-zinc-900 rounded-md border border-zinc-800"
              aria-label="Open Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col p-6 md:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-amber-500 flex items-center justify-center text-black font-black">
                <Film className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-white text-base uppercase">{EDITOR_PROFILE.name}</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="py-4 font-mono text-xs text-amber-400 flex items-center justify-between border-b border-zinc-900">
            <span>SMPTE TIME:</span>
            <span>{timecode}</span>
          </div>

          <nav className="flex flex-col gap-2 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-lg font-bold tracking-wider text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/60 rounded-lg transition-colors uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-center text-sm uppercase tracking-wider rounded-lg transition-all"
            >
              LET&apos;S CREATE SOMETHING
            </a>
            <div className="text-center text-xs font-mono text-zinc-500">
              {EDITOR_PROFILE.location}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
