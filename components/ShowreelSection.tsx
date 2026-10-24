'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Film, Sparkles, Monitor } from 'lucide-react';

interface ShowreelSectionProps {
  isGlobalMuted: boolean;
  onToggleGlobalMute: () => void;
}

export default function ShowreelSection({ isGlobalMuted, onToggleGlobalMute }: ShowreelSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [aspectRatio, setAspectRatio] = useState<'16/9' | '2.39/1' | '9/16'>('16/9');
  const [isCinemaMode, setIsCinemaMode] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Flagship showreel reel (under 100MB limit for GitHub)
  const showreelVideoSrc = "/Content/Bg%20video.mp4";

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const formatSMPTE = (seconds: number) => {
    if (isNaN(seconds)) return '00:00:00:00';
    const fps = 24;
    const totalFrames = Math.floor(seconds * fps);
    const frames = totalFrames % fps;
    const secs = Math.floor(seconds) % 60;
    const mins = Math.floor(seconds / 60) % 60;
    const hrs = Math.floor(seconds / 3600);
    const pad = (n: number) => n.toString().padStart(2, '0');
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}:${pad(frames)}`;
  };

  return (
    <section id="showreel" className={`relative w-full py-16 sm:py-24 bg-black transition-all duration-500 ${isCinemaMode ? 'z-50' : ''}`}>
      {/* Dim overlay when Cinema Mode is active */}
      {isCinemaMode && (
        <div
          onClick={() => setIsCinemaMode(false)}
          className="fixed inset-0 bg-black/95 z-40 backdrop-blur-md cursor-pointer flex items-center justify-center"
        >
          <div className="absolute top-6 right-6 text-zinc-400 text-xs font-mono bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
            CLICK ANYWHERE TO EXIT CINEMA MODE
          </div>
        </div>
      )}

      <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative ${isCinemaMode ? 'z-50' : 'z-10'}`}>
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>SELECTED WORK — 2024–2026</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              DIRECTOR&apos;S SHOWREEL
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              A curated montage of commercial campaigns, festival aftermovies, and rhythmic narrative cuts.
            </p>
          </div>

          {/* Aspect Ratio Switcher Controls */}
          <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 p-1.5 rounded-lg text-xs font-mono">
            <span className="text-zinc-500 px-2 flex items-center gap-1">
              <Monitor className="w-3.5 h-3.5" />
              <span>FORMAT:</span>
            </span>
            <button
              onClick={() => setAspectRatio('16/9')}
              className={`px-2.5 py-1 rounded transition-colors font-semibold ${
                aspectRatio === '16/9' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              16:9 STANDARD
            </button>
            <button
              onClick={() => setAspectRatio('2.39/1')}
              className={`px-2.5 py-1 rounded transition-colors font-semibold ${
                aspectRatio === '2.39/1' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              2.39:1 SCOPE
            </button>
            <button
              onClick={() => setAspectRatio('9/16')}
              className={`px-2.5 py-1 rounded transition-colors font-semibold ${
                aspectRatio === '9/16' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
              }`}
            >
              9:16 REEL
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden bg-zinc-950 border border-zinc-800 shadow-2xl transition-all duration-300 group"
        >
          {/* Main Video Viewport with Aspect Ratio */}
          <div
            className={`w-full relative flex items-center justify-center bg-black transition-all duration-500 ${
              aspectRatio === '16/9'
                ? 'aspect-[16/9]'
                : aspectRatio === '2.39/1'
                ? 'aspect-[21/9]'
                : 'max-w-md mx-auto aspect-[9/16] py-4'
            }`}
          >
            <video
              ref={videoRef}
              src={showreelVideoSrc}
              muted={isGlobalMuted}
              playsInline
              preload="metadata"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {/* Big Center Play Button Overlay (when paused) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] cursor-pointer group/btn"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl shadow-amber-500/40 group-hover/btn:scale-110 group-hover/btn:bg-amber-400 transition-all">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current ml-1" />
                </div>
                <div className="absolute bottom-16 text-center">
                  <span className="text-xs sm:text-sm font-mono tracking-widest text-white/90 bg-black/80 px-4 py-1.5 rounded-full border border-zinc-700 uppercase">
                    CLICK TO PLAY SHOWREEL
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Custom Cinematic Player Controls Bar */}
          <div className="bg-zinc-950/95 border-t border-zinc-800 p-4 flex flex-col gap-3">
            
            {/* Scrubber Bar */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-amber-400 shrink-0">
                {formatSMPTE(currentTime)}
              </span>
              <input
                type="range"
                min={0}
                max={duration || 100}
                step={0.1}
                value={currentTime}
                onChange={handleSeek}
                className="w-full h-1.5 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                {formatSMPTE(duration)}
              </span>
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="p-2 rounded bg-zinc-900 hover:bg-amber-500 hover:text-black text-white transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                </button>

                {/* Audio Toggle */}
                <button
                  onClick={onToggleGlobalMute}
                  className="p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1.5"
                  title="Toggle Sound"
                >
                  {isGlobalMuted ? (
                    <>
                      <VolumeX className="w-4 h-4 text-zinc-500" />
                      <span className="text-[10px] font-mono text-zinc-500">MUTED</span>
                    </>
                  ) : (
                    <>
                      <Volume2 className="w-4 h-4 text-amber-400" />
                      <span className="text-[10px] font-mono text-amber-400">UNMUTED</span>
                    </>
                  )}
                </button>

                <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-zinc-800 text-[11px] font-mono text-zinc-500">
                  <Film className="w-3.5 h-3.5 text-amber-500/80" />
                  <span>24 FPS • 4K PRORES 422HQ MASTER</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Cinema Mode Toggle */}
                <button
                  onClick={() => setIsCinemaMode(!isCinemaMode)}
                  className={`hidden sm:inline-flex px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-colors border ${
                    isCinemaMode
                      ? 'bg-amber-500 text-black border-amber-400 font-bold'
                      : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-white'
                  }`}
                >
                  {isCinemaMode ? 'EXIT CINEMA' : 'CINEMA MODE'}
                </button>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
                  title="Fullscreen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
