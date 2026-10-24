'use client';

import React, { useState, useRef } from 'react';
import { Project, PROJECTS } from '@/data/portfolioData';
import { Play, ArrowUpRight, Film, Clock, User, Eye, Layers } from 'lucide-react';

interface ProjectGalleryProps {
  onSelectProject: (project: Project) => void;
  isGlobalMuted: boolean;
}

export default function ProjectGallery({ onSelectProject, isGlobalMuted }: ProjectGalleryProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('ALL');

  const filterTabs = [
    { label: 'ALL PROJECTS', value: 'ALL' },
    { label: 'COMMERCIAL', value: 'COMMERCIAL' },
    { label: 'MUSIC VIDEO', value: 'MUSIC VIDEO' },
    { label: 'SHORTS', value: 'SHORTS' },
    { label: 'FILM & TV', value: 'FILM & TV' },
  ];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section id="work" className="relative w-full py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                PORTFOLIO INDEX
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              SELECTED PROJECTS
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              An editorial archive of commercial films, music visuals, and festival narratives cut in the suite.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedFilter(tab.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? 'bg-amber-500 text-black font-bold shadow-lg shadow-amber-500/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Asymmetrical Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project, index) => {
            // Give alternating cards visual rhythm (e.g., first card or every 3rd card takes full width or prominent sizing)
            const isWide = index % 3 === 0;

            return (
              <ProjectCard
                key={project.id}
                project={project}
                isWide={isWide}
                onSelect={() => onSelectProject(project)}
                isGlobalMuted={isGlobalMuted}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isWide: boolean;
  onSelect: () => void;
  isGlobalMuted: boolean;
}

function ProjectCard({ project, isWide, onSelect, isGlobalMuted }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div
      onClick={onSelect}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group flex flex-col bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-500 cursor-pointer shadow-xl ${
        isWide ? 'md:col-span-2' : 'col-span-1'
      }`}
    >
      {/* Video Preview Frame or Cinematic Poster */}
      <div className={`relative w-full overflow-hidden bg-black ${isWide ? 'aspect-[21/9]' : 'aspect-[16/9]'}`}>
        {project.videoSrc ? (
          <video
            ref={videoRef}
            src={project.videoSrc}
            muted={isGlobalMuted}
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.posterBg} flex flex-col justify-center items-center p-8 relative`}>
            <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] opacity-5 [background-size:16px_16px]" />
            <div className="text-center z-10">
              <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase">
                {project.genre}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase mt-1 tracking-tight">
                {project.title}
              </h3>
            </div>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

        {/* Badges on Top */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono font-bold text-amber-400 border border-zinc-700 uppercase">
            {project.category}
          </span>
          <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-md text-[11px] font-mono text-zinc-300 border border-zinc-800 flex items-center gap-1.5">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>{project.runtime}</span>
          </span>
        </div>

        {/* Center Hover Action */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center shadow-2xl shadow-amber-500/40 transform scale-75 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom Slate info overlay on video */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-zinc-400 z-10">
          <span className="flex items-center gap-1 text-zinc-300">
            <Film className="w-3 h-3 text-amber-400" />
            <span>{project.aspectRatio}</span>
          </span>
          <span className="text-zinc-500">{project.year}</span>
        </div>
      </div>

      {/* Card Content & Details */}
      <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
            <span>CLIENT: {project.client}</span>
            <span className="text-amber-400">{project.genre}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-400 transition-colors uppercase leading-tight">
            {project.title}
          </h3>

          <p className="mt-2.5 text-zinc-400 text-sm leading-relaxed line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Card Footer: Roles & Action */}
        <div className="mt-6 pt-4 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.role.map((r, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-zinc-300"
              >
                {r}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-1 text-xs font-bold text-amber-400 group-hover:translate-x-1 transition-transform">
            <span>VIEW CASE STUDY</span>
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
