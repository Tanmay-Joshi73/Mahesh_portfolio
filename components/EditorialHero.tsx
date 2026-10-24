'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EDITOR_PROFILE } from '@/data/portfolioData';
import {
  Play,
  Pause,
  ArrowDown,
  Film,
  Maximize2,
  X,
  Smartphone,
  Volume2,
  VolumeX,
} from 'lucide-react';

interface EditorialHeroProps {
  onOpenReel: () => void;
}

const VIDEO_SRC = '/Content/Bg%20video.mp4';
const FPS = 24;

const pad = (n: number) => String(n).padStart(2, '0');

function toTimecode(t: number) {
  const total = Math.max(0, t);
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = Math.floor(total % 60);
  const f = Math.floor((total % 1) * FPS);
  return `${pad(h)}:${pad(m)}:${pad(s)}:${pad(f)}`;
}

/** Counts up once on mount. Skips the animation if the person prefers reduced motion. */
function useCountUp(target: number, duration = 1600, delay = 900) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setValue(target);
      return;
    }
    let raf = 0;
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 4); // ease-out quart
        setValue(Math.round(target * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [target, duration, delay]);

  return value;
}

export default function EditorialHero({ onOpenReel }: EditorialHeroProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const monitorVideoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Direct DOM refs so the playhead & timecode update at frame rate without re-rendering the page.
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);
  const timecodeRef = useRef<HTMLSpanElement>(null);
  const durationRef = useRef<HTMLSpanElement>(null);

  const userPausedRef = useRef(false);
  const modalStartTimeRef = useRef(0);

  const years = useCountUp(8);
  const projects = useCountUp(150);
  const views = useCountUp(65);

  /* ---------- Live timecode + playhead ---------- */
  useEffect(() => {
    let raf = 0;
    const loop = () => {
      const v = monitorVideoRef.current;
      if (v && v.duration) {
        const pct = (v.currentTime / v.duration) * 100;
        if (fillRef.current) fillRef.current.style.width = `${pct}%`;
        if (playheadRef.current) playheadRef.current.style.left = `${pct}%`;
        if (timecodeRef.current) timecodeRef.current.textContent = toTimecode(v.currentTime);
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMetadata = () => {
    const v = monitorVideoRef.current;
    if (v && durationRef.current) durationRef.current.textContent = toTimecode(v.duration);
  };

  /* ---------- Pause videos when the hero is off-screen (saves battery & GPU) ---------- */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const bg = bgVideoRef.current;
        const mon = monitorVideoRef.current;
        if (entry.isIntersecting) {
          bg?.play().catch(() => { });
          if (!userPausedRef.current) mon?.play().catch(() => { });
        } else {
          bg?.pause();
          mon?.pause();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------- Respect reduced motion: no autoplaying ambient video ---------- */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      bgVideoRef.current?.pause();
      monitorVideoRef.current?.pause();
      userPausedRef.current = true;
      setIsPlaying(false);
    }
  }, []);

  /* ---------- Spotlight that follows the pointer (desktop only, CSS-var driven) ---------- */
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  /* ---------- Monitor controls ---------- */
  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = monitorVideoRef.current;
    if (!v) return;
    if (v.paused) {
      userPausedRef.current = false;
      v.play().then(() => setIsPlaying(true)).catch(() => { });
    } else {
      userPausedRef.current = true;
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = monitorVideoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  /* ---------- Scrubbing the timeline ---------- */
  const seekFromPointer = useCallback((clientX: number) => {
    const track = trackRef.current;
    const v = monitorVideoRef.current;
    if (!track || !v || !v.duration) return;
    const rect = track.getBoundingClientRect();
    const pct = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = pct * v.duration;
  }, []);

  const handleScrubDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.currentTarget.setPointerCapture(e.pointerId);
    seekFromPointer(e.clientX);
  };

  const handleScrubMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) seekFromPointer(e.clientX);
  };

  const handleScrubKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const v = monitorVideoRef.current;
    if (!v) return;
    if (e.key === 'ArrowRight') v.currentTime = Math.min(v.duration, v.currentTime + 1 / FPS);
    if (e.key === 'ArrowLeft') v.currentTime = Math.max(0, v.currentTime - 1 / FPS);
  };

  /* ---------- Modal: open at the same frame, lock scroll, Esc to close ---------- */
  const openModal = () => {
    modalStartTimeRef.current = monitorVideoRef.current?.currentTime ?? 0;
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (!isModalOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    bgVideoRef.current?.pause();
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsModalOpen(false);
    };
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
      bgVideoRef.current?.play().catch(() => { });
    };
  }, [isModalOpen]);

  const onModalMetadata = () => {
    const v = modalVideoRef.current;
    if (v) {
      v.currentTime = modalStartTimeRef.current;
      v.play().catch(() => { });
    }
  };

  /* ---------- Post pipeline, shown as clips on a timeline ---------- */
  const pipeline = [
    { name: 'DaVinci Resolve', role: 'Color', w: 'basis-[34%]', tone: 'bg-amber-500/90 text-black' },
    { name: 'Premiere Pro', role: 'Edit', w: 'basis-[28%]', tone: 'bg-sky-400/90 text-black' },
    { name: 'After Effects', role: 'Motion', w: 'basis-[22%]', tone: 'bg-violet-400/90 text-black' },
    { name: 'ACES 1.3', role: 'Pipeline', w: 'basis-[16%]', tone: 'bg-emerald-400/90 text-black' },
  ];

  return (
    <section
      ref={sectionRef}
      onPointerMove={handlePointerMove}
      className="hero-root relative min-h-[96vh] flex flex-col justify-between pt-28 pb-10 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      <style>{`
        .hero-line { display:block; overflow:hidden; padding-bottom:0.06em; }
        .hero-line > span { display:block; transform:translateY(108%); animation:heroRise 1s cubic-bezier(.2,.8,.2,1) forwards; animation-delay:var(--d,0s); }
        .hero-fade { opacity:0; transform:translateY(10px); animation:heroFade .9s cubic-bezier(.2,.8,.2,1) forwards; animation-delay:var(--d,0s); }
        .hero-monitor { opacity:0; transform:translateY(24px) scale(.97); animation:heroMonitor 1.1s cubic-bezier(.2,.8,.2,1) forwards; animation-delay:.45s; }
        .hero-spot { background:radial-gradient(520px circle at var(--mx,70%) var(--my,30%), rgba(245,158,11,.10), transparent 60%); }
        .hero-grain { background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='.55'/></svg>"); mix-blend-mode:overlay; }
        .hero-ruler { background-image:repeating-linear-gradient(90deg, rgba(255,255,255,.35) 0 1px, transparent 1px 8px); }
        .hero-ruler-major { background-image:repeating-linear-gradient(90deg, rgba(255,255,255,.7) 0 1px, transparent 1px 40px); }
        @keyframes heroRise { to { transform:none; } }
        @keyframes heroFade { to { opacity:1; transform:none; } }
        @keyframes heroMonitor { to { opacity:1; transform:none; } }
        @keyframes heroKen { from { transform:scale(1.05); } to { transform:scale(1.12); } }
        @media (prefers-reduced-motion: reduce) {
          .hero-line > span, .hero-fade, .hero-monitor { animation:none; transform:none; opacity:1; }
          .hero-ken { animation:none !important; }
        }
      `}</style>

      {/* ---------- Ambient background ---------- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
        <video
          ref={bgVideoRef}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="hero-ken w-full h-full object-cover opacity-25 sm:opacity-35 filter brightness-[0.38] contrast-125 saturate-110"
          style={{ animation: 'heroKen 24s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px]" />
        <div className="hero-spot absolute inset-0" />
        <div className="hero-grain absolute inset-0 opacity-[0.07]" />
      </div>

      {/* ---------- Availability ---------- */}
      <div className="hero-fade relative z-10 max-w-7xl mx-auto w-full pt-2" style={{ ['--d' as string]: '0.1s' }}>
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/60 shadow-lg backdrop-blur-md">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-xs tracking-wide text-zinc-300 font-medium">{EDITOR_PROFILE.availability}</span>
        </div>
      </div>

      {/* ---------- Main grid ---------- */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div
              className="hero-fade flex items-center gap-2 text-sm text-amber-400 tracking-wide mb-4"
              style={{ ['--d' as string]: '0.2s' }}
            >
              <Film className="w-4 h-4" />
              <span>{EDITOR_PROFILE.title}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.92] uppercase">
              <span className="hero-line">
                <span style={{ ['--d' as string]: '0.25s' }}>I make every</span>
              </span>
              <span className="hero-line">
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500"
                  style={{ ['--d' as string]: '0.38s' }}
                >
                  frame
                </span>
              </span>
              <span className="hero-line">
                <span style={{ ['--d' as string]: '0.51s' }}>mean something.</span>
              </span>
            </h1>

            <p
              className="hero-fade mt-7 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed"
              style={{ ['--d' as string]: '0.75s' }}
            >
              {EDITOR_PROFILE.subTagline} Cutting commercial campaigns, music videos, and cinematic narratives with
              precision pacing, ACES color science, and evocative sound design.
            </p>

            <div
              className="hero-fade mt-9 flex flex-wrap items-center gap-3.5"
              style={{ ['--d' as string]: '0.9s' }}
            >
              <a
                href="#showcase"
                className="px-7 sm:px-8 py-3.5 sm:py-4 rounded bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-black font-extrabold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-amber-500/20 hover:shadow-amber-400/30 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                Explore my work
              </a>

              <button
                onClick={onOpenReel}
                className="group flex items-center gap-2.5 px-5 sm:px-6 py-3.5 sm:py-4 rounded bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/80 text-white font-bold text-sm tracking-wide transition-all duration-300 hover:border-amber-400/60 hover:-translate-y-0.5 active:scale-[0.98] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
              >
                <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center transition-colors group-hover:bg-amber-500 group-hover:text-black">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                <span>Watch the director&apos;s reel</span>
              </button>

              <a
                href="#contact"
                className="group px-3 py-3.5 text-zinc-400 hover:text-white text-sm font-semibold tracking-wide transition-colors"
              >
                Let&apos;s create something
                <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Metrics */}
            <div
              className="hero-fade mt-10 pt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4 max-w-lg"
              style={{ ['--d' as string]: '1.05s' }}
            >
              <div>
                <div className="text-3xl font-black text-white tabular-nums">{years}+</div>
                <div className="text-xs text-zinc-400 mt-0.5">Years in the suite</div>
              </div>
              <div>
                <div className="text-3xl font-black text-amber-400 tabular-nums">{projects}+</div>
                <div className="text-xs text-zinc-400 mt-0.5">Projects cut</div>
              </div>
              <div>
                <div className="text-3xl font-black text-emerald-400 tabular-nums">{views}M+</div>
                <div className="text-xs text-zinc-400 mt-0.5">Total views</div>
              </div>
            </div>
          </div>

          {/* Right: vertical program monitor */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="hero-monitor relative w-full max-w-[340px] sm:max-w-[370px]">
              <div
                onClick={openModal}
                role="button"
                tabIndex={0}
                aria-label="Expand the vertical cut to full screen"
                onKeyDown={(e) => {
                  if (e.target === e.currentTarget && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    openModal();
                  }
                }}
                className="group relative aspect-[9/16] w-full rounded-2xl md:rounded-3xl overflow-hidden bg-zinc-950 border border-amber-500/40 hover:border-amber-400 shadow-[0_0_60px_rgba(245,158,11,0.22)] hover:shadow-[0_0_80px_rgba(245,158,11,0.35)] transition-all duration-500 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-300"
              >
                <video
                  ref={monitorVideoRef}
                  src={VIDEO_SRC}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={handleMetadata}
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/60 pointer-events-none" />

                {/* Safe-area guides, visible on hover like a real monitor overlay */}
                <div className="absolute inset-[8%] border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />

                {/* Top bar */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-zinc-700/80 text-[11px] text-amber-400 font-semibold">
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-red-500 ${isPlaying ? 'animate-pulse' : 'opacity-40'}`}
                    />
                    <span>{isPlaying ? 'Playing' : 'Paused'}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={toggleMute}
                      className="w-8 h-8 rounded-full bg-black/75 border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                      aria-label={isMuted ? 'Turn sound on' : 'Mute'}
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                    <button
                      onClick={togglePlay}
                      className="w-8 h-8 rounded-full bg-black/75 border border-zinc-700/80 text-white flex items-center justify-center hover:bg-amber-500 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
                      aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? (
                        <Pause className="w-3.5 h-3.5 fill-current" />
                      ) : (
                        <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Expand hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 backdrop-blur-[2px] z-20 pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-black font-extrabold text-xs tracking-wide shadow-2xl translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                    <span>Expand vertical cut</span>
                  </div>
                </div>

                {/* Bottom: timecode + scrubbable timeline */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 z-30" onClick={(e) => e.stopPropagation()}>
                  <div className="flex items-end justify-between mb-2 font-mono">
                    <div className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                      <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                      <span>9:16 · {FPS} fps</span>
                    </div>
                    <div className="text-right leading-none">
                      <span ref={timecodeRef} className="text-sm text-white font-semibold tabular-nums">
                        00:00:00:00
                      </span>
                      <span className="text-[10px] text-zinc-500 tabular-nums">
                        {' / '}
                        <span ref={durationRef}>00:00:00:00</span>
                      </span>
                    </div>
                  </div>

                  <div
                    ref={trackRef}
                    role="slider"
                    tabIndex={0}
                    aria-label="Scrub the video"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    onPointerDown={handleScrubDown}
                    onPointerMove={handleScrubMove}
                    onKeyDown={handleScrubKey}
                    className="relative h-7 cursor-ew-resize touch-none select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 rounded-sm"
                  >
                    <div className="hero-ruler absolute inset-x-0 top-0 h-2 opacity-60" />
                    <div className="hero-ruler-major absolute inset-x-0 top-0 h-3.5 opacity-70" />
                    <div className="absolute inset-x-0 bottom-0 h-1.5 rounded-full bg-white/15 overflow-hidden">
                      <div ref={fillRef} className="h-full w-0 bg-amber-500" />
                    </div>
                    <div ref={playheadRef} className="absolute top-0 bottom-0 left-0 w-0 pointer-events-none">
                      <div className="absolute -translate-x-1/2 top-0 w-2.5 h-2.5 bg-amber-400 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
                      <div className="absolute -translate-x-1/2 top-2 bottom-0 w-px bg-amber-400" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 px-1">
                <span>Vertical film master</span>
                <button
                  onClick={openModal}
                  className="text-amber-400 font-semibold hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300 rounded-sm"
                >
                  View full screen ↗
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Bottom: pipeline as timeline clips ---------- */}
      <div
        className="hero-fade relative z-10 max-w-7xl mx-auto w-full pt-5 border-t border-zinc-900/80 flex flex-col lg:flex-row lg:items-center justify-between gap-5"
        style={{ ['--d' as string]: '1.2s' }}
      >
        <div className="flex-1 min-w-0">
          <div className="text-xs text-zinc-500 mb-2">Post pipeline</div>
          <div className="flex gap-1 max-w-2xl">
            {pipeline.map((clip) => (
              <div
                key={clip.name}
                className={`${clip.w} ${clip.tone} rounded-[3px] px-2.5 py-1.5 min-w-0 transition-transform duration-300 hover:-translate-y-0.5 cursor-default`}
                title={`${clip.name} · ${clip.role}`}
              >
                <div className="text-[11px] font-bold leading-tight truncate">{clip.name}</div>
                <div className="text-[10px] opacity-70 leading-tight truncate">{clip.role}</div>
              </div>
            ))}
          </div>
        </div>

        <a
          href="#showcase"
          className="group flex items-center gap-2 text-xs text-zinc-400 hover:text-amber-400 transition-colors shrink-0"
        >
          <span>Scroll to the archive</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
        </a>
      </div>

      {/* ---------- Fullscreen vertical lightbox ---------- */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Vertical cut, full screen"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative h-[90vh] max-h-[900px] aspect-[9/16] rounded-2xl overflow-hidden border border-amber-500/50 shadow-[0_0_120px_rgba(245,158,11,0.25)] bg-black animate-in zoom-in-95 duration-300"
          >
            <video
              ref={modalVideoRef}
              src={VIDEO_SRC}
              loop
              controls
              playsInline
              onLoadedMetadata={onModalMetadata}
              className="w-full h-full object-contain bg-black"
            />
            <button
              ref={closeBtnRef}
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/80 border border-zinc-700 text-white hover:bg-amber-500 hover:text-black transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-300"
              aria-label="Close full screen view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}