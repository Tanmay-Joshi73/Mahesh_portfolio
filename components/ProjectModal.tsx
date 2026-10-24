'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Project, PROJECTS } from '@/data/portfolioData';
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Sliders,
  ChevronLeft,
  ChevronRight,
  Film,
  Award,
  Layers,
  Cpu,
  Clock,
  Sparkles,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNavigate: (project: Project) => void;
}

export default function ProjectModal({ project, onClose, onNavigate }: ProjectModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [colorGradeSplit, setColorGradeSplit] = useState(50); // 0 to 100%
  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'COLOR_GRADE' | 'TIMELINE'>('OVERVIEW');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl max-h-[95vh] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-y-auto flex flex-col">
        
        {/* Modal Top Navigation Bar */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-4 bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold uppercase">
              {project.category}
            </span>
            <span className="text-zinc-500 text-xs font-mono hidden sm:inline">•</span>
            <span className="text-zinc-400 text-xs font-mono hidden sm:inline">{project.client}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Prev / Next controls */}
            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-lg p-1">
              <button
                onClick={() => onNavigate(prevProject)}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
                title="Previous Project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate(nextProject)}
                className="p-1.5 text-zinc-400 hover:text-white rounded hover:bg-zinc-800 transition-colors"
                title="Next Project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Hero Video Player Viewport or Cinematic Screener Banner */}
        <div className="relative aspect-[16/9] w-full bg-black overflow-hidden group">
          {project.videoSrc ? (
            <>
              <video
                ref={videoRef}
                src={project.videoSrc}
                autoPlay
                playsInline
                loop
                muted={isMuted}
                className="w-full h-full object-cover"
                onClick={togglePlay}
              />

              {/* Floating Player Overlay Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-xl border border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-1.5 rounded-md bg-amber-500 text-black hover:bg-amber-400 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-1.5 rounded-md text-zinc-300 hover:text-amber-400 transition-colors flex items-center gap-1 text-xs font-mono"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-zinc-500" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                    <span className="hidden sm:inline">{isMuted ? 'MUTED' : 'UNMUTED'}</span>
                  </button>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                  <span className="text-white font-bold">{project.runtime}</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-amber-400">{project.aspectRatio}</span>
                </div>
              </div>
            </>
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.posterBg} flex flex-col justify-center items-center p-8 sm:p-12 relative text-center`}>
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:20px_20px]" />
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                MASTER CUT CASE STUDY
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight max-w-2xl">
                {project.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm font-mono text-zinc-400 max-w-md">
                Client Master Screener • Available in ProRes 422HQ upon request
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs font-mono text-zinc-400 bg-black/50 px-4 py-2 rounded-lg border border-zinc-800">
                <span>RUNTIME: <strong className="text-white">{project.runtime}</strong></span>
                <span className="text-zinc-700">|</span>
                <span>ASPECT: <strong className="text-amber-400">{project.aspectRatio}</strong></span>
                <span className="text-zinc-700">|</span>
                <span>CLIENT: <strong className="text-white">{project.client}</strong></span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Content Sections */}
        <div className="p-6 sm:p-8 flex flex-col gap-8">
          
          {/* Project Title & Fast Meta */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-zinc-800">
            <div>
              <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
                {project.genre} • {project.year}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight uppercase">
                {project.title}
              </h2>
              <p className="mt-3 text-zinc-300 text-base leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Quick Specs Pill Box */}
            <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-xl flex flex-col gap-2 min-w-[240px] shrink-0 text-xs font-mono">
              <div className="flex justify-between text-zinc-400">
                <span>CLIENT:</span>
                <span className="text-white font-bold">{project.client}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>RUNTIME:</span>
                <span className="text-amber-400 font-bold">{project.runtime}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>ASPECT:</span>
                <span className="text-white">{project.aspectRatio}</span>
              </div>
              <div className="flex justify-between text-zinc-400">
                <span>ROLES:</span>
                <span className="text-zinc-200">{project.role.join(', ')}</span>
              </div>
            </div>
          </div>

          {/* Interactive Tabs Header */}
          <div className="flex items-center gap-3 border-b border-zinc-800">
            <button
              onClick={() => setActiveTab('OVERVIEW')}
              className={`pb-3 text-xs sm:text-sm font-mono tracking-wider uppercase transition-colors relative cursor-pointer ${
                activeTab === 'OVERVIEW'
                  ? 'text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>CREATIVE BRIEF & CUT APPROACH</span>
              {activeTab === 'OVERVIEW' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('COLOR_GRADE')}
              className={`pb-3 text-xs sm:text-sm font-mono tracking-wider uppercase transition-colors relative cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'COLOR_GRADE'
                  ? 'text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>COLOR GRADE LAB (BEFORE / AFTER)</span>
              {activeTab === 'COLOR_GRADE' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('TIMELINE')}
              className={`pb-3 text-xs sm:text-sm font-mono tracking-wider uppercase transition-colors relative cursor-pointer ${
                activeTab === 'TIMELINE'
                  ? 'text-amber-400 font-bold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>KEY TAKEAWAYS & TOOLS</span>
              {activeTab === 'TIMELINE' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400" />
              )}
            </button>
          </div>

          {/* Tab 1: Overview & Creative Brief */}
          {activeTab === 'OVERVIEW' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-bold mb-3">
                  <Film className="w-4 h-4" />
                  <span>THE CREATIVE BRIEF</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {project.creativeBrief}
                </p>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase font-bold mb-3">
                  <Layers className="w-4 h-4" />
                  <span>EDITORIAL & PACING APPROACH</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {project.editingApproach}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Interactive Before/After Color Grading Comparison */}
          {activeTab === 'COLOR_GRADE' && (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white uppercase">
                    COLOR SCIENCE & LOOK DEVELOPMENT
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Drag the interactive comparison slider below to see RAW flat log profile vs finished ACES color grade.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-zinc-900 px-3 py-1.5 rounded border border-zinc-800">
                  <span>CAMERA:</span>
                  <span className="text-white font-bold">{project.colorGrading.camera}</span>
                </div>
              </div>

              {/* Interactive Split-Screen Slider Box */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden border border-zinc-800 bg-black select-none">
                
                {/* 1. Finished Grade (Base Layer) */}
                <video
                  src={project.videoSrc}
                  muted
                  autoPlay
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 z-20 px-2.5 py-1 rounded bg-black/80 text-[11px] font-mono font-bold text-amber-400 border border-zinc-700">
                  FINISHED GRADE (REC.709)
                </div>

                {/* 2. Raw / Log Profile (Clipped Top Layer with Filter Simulation) */}
                <div
                  className="absolute inset-0 overflow-hidden z-10 pointer-events-none"
                  style={{ width: `${colorGradeSplit}%` }}
                >
                  <video
                    src={project.videoSrc}
                    muted
                    autoPlay
                    loop
                    playsInline
                    className="w-full h-full object-cover filter contrast-75 brightness-110 saturate-50 sepia-0"
                    style={{ width: '100%', maxWidth: 'none' }}
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/80 text-[11px] font-mono font-bold text-zinc-400 border border-zinc-700">
                    RAW LOG PROFILE (S-LOG3 / FLAT)
                  </div>
                </div>

                {/* Vertical Divider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-amber-400 z-20 shadow-[0_0_15px_rgba(245,158,11,0.8)] pointer-events-none"
                  style={{ left: `${colorGradeSplit}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-amber-500 border-2 border-black flex items-center justify-center text-black font-black text-xs shadow-xl">
                    ↔
                  </div>
                </div>

                {/* Invisible HTML range input for full dragging support */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={colorGradeSplit}
                  onChange={(e) => setColorGradeSplit(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 z-30 cursor-ew-resize"
                  aria-label="Color Grade Split Slider"
                />
              </div>

              {/* Color Grading Metadata Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono">
                  <span className="text-zinc-500 block mb-1">COLOR SPACE:</span>
                  <span className="text-white font-bold">{project.colorGrading.colorSpace}</span>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono">
                  <span className="text-zinc-500 block mb-1">LOOK / LUT:</span>
                  <span className="text-amber-400 font-bold">{project.colorGrading.lut}</span>
                </div>
                <div className="p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 text-xs font-mono">
                  <span className="text-zinc-500 block mb-1">PALETTE NOTES:</span>
                  <span className="text-zinc-300">{project.colorGrading.notes}</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Key Takeaways & Tools */}
          {activeTab === 'TIMELINE' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>TECHNICAL & EDITORIAL HIGHLIGHTS</span>
                </h4>
                <ul className="space-y-3">
                  {project.keyTakeaways.map((point, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <span className="text-amber-400 font-mono font-bold">0{index + 1}.</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-zinc-900/60 border border-zinc-800">
                <h4 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  <span>SOFTWARE & HARDWARE PIPELINE</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.software.map((s, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-black border border-zinc-700 text-xs font-mono text-white"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-xs text-zinc-400 leading-relaxed font-mono">
                  All media rendered directly in 4K ProRes 422HQ masters with separate audio stems for dialogue, music, and sound effects.
                </p>
              </div>
            </div>
          )}

          {/* Next / Previous Project Footer */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onNavigate(prevProject)}
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors uppercase"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREVIOUS: {prevProject.title}</span>
            </button>

            <button
              onClick={() => onNavigate(nextProject)}
              className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors uppercase"
            >
              <span>NEXT: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
