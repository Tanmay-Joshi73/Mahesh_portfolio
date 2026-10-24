'use client';

import React, { useState, useRef } from 'react';
import { Project, PROJECTS, EDITOR_PROFILE } from '@/data/portfolioData';
import { Play, Maximize2, Sparkles } from 'lucide-react';

interface HeroMosaicProps {
  onSelectProject: (project: Project) => void;
  isMuted: boolean;
}

export default function HeroMosaic({ onSelectProject, isMuted }: HeroMosaicProps) {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  // Categories directly matching the reference image plus 'ALL'
  const categories = [
    { label: 'ALL', value: 'ALL' },
    { label: 'FILM & TV', value: 'FILM & TV' },
    { label: 'SHORTS', value: 'SHORTS' },
    { label: 'MUSIC VIDEO', value: 'MUSIC VIDEO' },
    { label: 'COMMERCIAL', value: 'COMMERCIAL' },
  ];

  // Map 8 projects to the 8 surrounding grid slots (positions 0 to 7)
  const sortedProjects = [...PROJECTS].sort((a, b) => (a.mosaicPosition ?? 0) - (b.mosaicPosition ?? 0));
  const tiles = {
    topLeft: sortedProjects[0],     // Volvo CMC
    topCenter: sortedProjects[1],   // Omah
    topRight: sortedProjects[2],    // Style Union Final
    midLeft: sortedProjects[3],     // Own Skin
    midRight: sortedProjects[4],    // VJ Setup Aftermovie
    bottomLeft: sortedProjects[5],  // SSE Football
    bottomCenter: sortedProjects[6],// Style Union Draft
    bottomRight: sortedProjects[7], // Symbi Basketball
  };

  const isHighlighted = (project?: Project) => {
    if (!project) return false;
    if (activeCategory === 'ALL') return true;
    return project.category === activeCategory;
  };

  return (
    <section id="showcase" className="relative w-full bg-black py-8 sm:py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Header with Editorial Meta */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
                INTERACTIVE SHOWCASE ARCHIVE
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white uppercase">
              SELECTED WORKS & CUTS
            </h2>
          </div>
          <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
            <span className="hidden sm:inline">HOVER TO PREVIEW REEL</span>
            <span className="text-zinc-600">/</span>
            <span className="text-amber-400">CLICK TO EXPAND CASE STUDY</span>
          </div>
        </div>

        {/* The Signature 3x3 Mosaic Frame with Bold Amber Border */}
        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden cinema-border shadow-[0_0_50px_rgba(245,158,11,0.2)] bg-amber-500">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3 bg-amber-500 p-2.5 sm:p-3">

            {/* ROW 1 */}
            {/* 1. Top Left Tile */}
            <MosaicTile
              project={tiles.topLeft}
              isHighlighted={isHighlighted(tiles.topLeft)}
              onSelect={() => onSelectProject(tiles.topLeft)}
              isHovered={hoveredProjectId === tiles.topLeft.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.topLeft.id : null)}
              isGlobalMuted={isMuted}
            />

            {/* 2. Top Center Tile */}
            <MosaicTile
              project={tiles.topCenter}
              isHighlighted={isHighlighted(tiles.topCenter)}
              onSelect={() => onSelectProject(tiles.topCenter)}
              isHovered={hoveredProjectId === tiles.topCenter.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.topCenter.id : null)}
              isGlobalMuted={isMuted}
            />

            {/* 3. Top Right Tile */}
            <MosaicTile
              project={tiles.topRight}
              isHighlighted={isHighlighted(tiles.topRight)}
              onSelect={() => onSelectProject(tiles.topRight)}
              isHovered={hoveredProjectId === tiles.topRight.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.topRight.id : null)}
              isGlobalMuted={isMuted}
            />

            {/* ROW 2 */}
            {/* 4. Mid Left Tile */}
            <MosaicTile
              project={tiles.midLeft}
              isHighlighted={isHighlighted(tiles.midLeft)}
              onSelect={() => onSelectProject(tiles.midLeft)}
              isHovered={hoveredProjectId === tiles.midLeft.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.midLeft.id : null)}
              isGlobalMuted={isMuted}
            />

            {/* 5. ICONIC CENTER IDENTITY CARD */}
            <div className="relative bg-[#F5A623] text-black flex flex-col items-center justify-center p-6 sm:p-8 min-h-[260px] sm:min-h-[290px] rounded-lg md:rounded-xl shadow-inner select-none transition-transform hover:scale-[1.01] duration-300">
              {/* Subtle film grain texture overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

              {/* Mascot / Avatar Illustration */}
              <div className="relative mb-3 flex items-center justify-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 border-2 border-white/60 p-1 shadow-md flex items-center justify-center overflow-hidden">
                  {/* Distinctive Illustrated Editor Avatar matching the reference */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Background Circle */}
                    <circle cx="50" cy="50" r="48" fill="#F97316" />
                    {/* Shoulders / Shirt */}
                    <path d="M20 90 C 25 70, 75 70, 80 90 Z" fill="#EC4899" />
                    <path d="M35 72 L50 90 L65 72" fill="#F43F5E" />
                    {/* Head / Skin */}
                    <ellipse cx="50" cy="52" rx="20" ry="22" fill="#FED7AA" />
                    {/* Beard */}
                    <path d="M32 50 C 32 75, 68 75, 68 50 C 65 62, 35 62, 32 50 Z" fill="#92400E" />
                    {/* Glasses */}
                    <circle cx="43" cy="48" r="7" fill="none" stroke="#18181B" strokeWidth="2.5" />
                    <circle cx="57" cy="48" r="7" fill="none" stroke="#18181B" strokeWidth="2.5" />
                    <line x1="50" y1="48" x2="50" y2="48" stroke="#18181B" strokeWidth="2.5" />
                    {/* Eyes */}
                    <circle cx="43" cy="48" r="2.5" fill="#18181B" />
                    <circle cx="57" cy="48" r="2.5" fill="#18181B" />
                    {/* Smile */}
                    <path d="M46 60 Q 50 64 54 60" stroke="#FFFFFF" strokeWidth="2" fill="none" />
                    {/* Cap */}
                    <path d="M28 42 C 28 26, 72 26, 72 42 Z" fill="#EA580C" />
                    <path d="M24 41 C 24 37, 76 37, 76 41 Z" fill="#C2410C" />
                    {/* Cap Visor */}
                    <path d="M22 41 Q 50 36 78 41 Q 50 44 22 41 Z" fill="#9A3412" />
                    {/* Mascot Kitten / Camera */}
                    <ellipse cx="64" cy="74" rx="10" ry="11" fill="#B45309" />
                    <polygon points="56,66 60,60 63,67" fill="#B45309" />
                    <polygon points="65,67 68,60 72,66" fill="#B45309" />
                    <circle cx="61" cy="72" r="1.5" fill="#18181B" />
                    <circle cx="67" cy="72" r="1.5" fill="#18181B" />
                    <polygon points="63,75 65,75 64,77" fill="#F43F5E" />
                  </svg>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center z-10">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] uppercase">
                  {EDITOR_PROFILE.name}
                </h1>
                <p className="text-xs sm:text-sm font-black tracking-wider text-white/95 uppercase mt-0.5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
                  FILM/TV EDITOR
                </p>
              </div>

              {/* Category Filter Pills directly matching the reference */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mt-5 sm:mt-6 z-10">
                {categories.map((cat) => {
                  const isActive = activeCategory === cat.value;
                  return (
                    <button
                      key={cat.value}
                      onClick={() => setActiveCategory(cat.value)}
                      className={`text-[10px] sm:text-xs font-black tracking-wider uppercase px-2.5 py-1 rounded transition-all cursor-pointer ${isActive
                          ? 'bg-black text-amber-400 shadow-md scale-105'
                          : 'text-blue-900/90 hover:text-black hover:bg-black/10'
                        }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              {/* Status footer inside center card */}
              <div className="mt-4 flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-black/70">
                <Sparkles className="w-3 h-3 text-white" />
                <span>8 MASTER EDITS IN TIMELINE</span>
              </div>
            </div>

            {/* 6. Mid Right Tile */}
            <MosaicTile
              project={tiles.midRight}
              isHighlighted={isHighlighted(tiles.midRight)}
              onSelect={() => onSelectProject(tiles.midRight)}
              isHovered={hoveredProjectId === tiles.midRight.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.midRight.id : null)}
              isGlobalMuted={isMuted}
            />

            {/* ROW 3 */}
            {/* 7. Bottom Left Tile */}
            <MosaicTile
              project={tiles.bottomLeft}
              isHighlighted={isHighlighted(tiles.bottomLeft)}
              onSelect={() => onSelectProject(tiles.bottomLeft)}
              isHovered={hoveredProjectId === tiles.bottomLeft.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.bottomLeft.id : null)}
              isGlobalMuted={isMuted}
            />

            {/* 8. Bottom Center Tile */}
            <MosaicTile
              project={tiles.bottomCenter}
              isHighlighted={isHighlighted(tiles.bottomCenter)}
              onSelect={() => onSelectProject(tiles.bottomCenter)}
              isHovered={hoveredProjectId === tiles.bottomCenter.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.bottomCenter.id : null)}
              isGlobalMuted={isMuted}
            />

            {/* 9. Bottom Right Tile */}
            <MosaicTile
              project={tiles.bottomRight}
              isHighlighted={isHighlighted(tiles.bottomRight)}
              onSelect={() => onSelectProject(tiles.bottomRight)}
              isHovered={hoveredProjectId === tiles.bottomRight.id}
              onHover={(hover) => setHoveredProjectId(hover ? tiles.bottomRight.id : null)}
              isGlobalMuted={isMuted}
            />

          </div>
        </div>

        {/* Legend under mosaic */}
        <div className="flex flex-wrap items-center justify-between text-xs text-zinc-400 font-mono mt-4 px-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
              <span>COLOR GRADED IN DAVINCI RESOLVE</span>
            </span>
            <span className="hidden md:inline text-zinc-700">|</span>
            <span className="hidden md:inline">SOUND SWEETENED IN 5.1 SURROUND</span>
          </div>
          <div className="text-amber-400/90 flex items-center gap-1">
            <span>FILTER ACTIVE:</span>
            <span className="font-bold text-white uppercase">{activeCategory}</span>
          </div>
        </div>

      </div>
    </section>
  );
}

// Mosaic Tile Sub-component with smooth video preview on hover
interface MosaicTileProps {
  project: Project;
  isHighlighted: boolean;
  onSelect: () => void;
  isHovered: boolean;
  onHover: (hover: boolean) => void;
  isGlobalMuted: boolean;
}

function MosaicTile({
  project,
  isHighlighted,
  onSelect,
  isHovered,
  onHover,
  isGlobalMuted,
}: MosaicTileProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    onHover(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    onHover(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-lg md:rounded-xl cursor-pointer bg-zinc-950 transition-all duration-300 ${isHighlighted
          ? 'opacity-100 ring-1 ring-black/40 hover:scale-[1.015] hover:shadow-2xl z-10'
          : 'opacity-35 grayscale contrast-75'
        }`}
    >
      {/* Background Video Element or Cinematic Poster */}
      {project.videoSrc ? (
        <video
          ref={videoRef}
          src={project.videoSrc}
          muted={isGlobalMuted}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
        />
      ) : (
        <div className={`w-full h-full bg-gradient-to-br ${project.posterBg} flex flex-col justify-center items-center p-4 relative`}>
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:12px_12px]" />
          <div className="w-10 h-10 rounded-full bg-black/50 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300 shadow-lg">
            <Play className="w-4 h-4 fill-current ml-0.5" />
          </div>
          <span className="mt-2 text-[10px] font-mono tracking-widest text-zinc-400 group-hover:text-amber-400 transition-colors uppercase">
            MASTER ARCHIVE
          </span>
        </div>
      )}

      {/* Fallback / Gradient when video is loading */}
      <div className={`absolute inset-0 bg-gradient-to-t ${project.posterBg} opacity-20 pointer-events-none`} />

      {/* Film Slate Tag / Category Badge (Always visible) */}
      <div className="absolute top-2.5 left-2.5 z-20 flex items-center gap-2">
        <span className="px-2 py-0.5 rounded bg-black/85 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-amber-400 border border-zinc-700/60 uppercase">
          {project.category}
        </span>
        <span className="hidden group-hover:inline-block px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-mono text-zinc-300">
          {project.runtime}
        </span>
      </div>

      {/* Subtle play indicator button top right */}
      <div className="absolute top-2.5 right-2.5 z-20 w-7 h-7 rounded-full bg-black/75 backdrop-blur-md border border-zinc-700/80 flex items-center justify-center text-white/90 group-hover:bg-amber-500 group-hover:text-black group-hover:border-amber-400 transition-colors">
        <Play className="w-3 h-3 fill-current ml-0.5" />
      </div>

      {/* Hover Information Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3.5 z-20">
        <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-[10px] font-mono tracking-wider text-amber-400 uppercase">
            {project.client} • {project.year}
          </p>
          <h3 className="text-sm sm:text-base font-extrabold text-white leading-snug tracking-tight">
            {project.title}
          </h3>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-zinc-800 text-[10px] text-zinc-300 font-mono">
            <span>{project.role[0]}</span>
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <span>EXPLORE</span>
              <Maximize2 className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
