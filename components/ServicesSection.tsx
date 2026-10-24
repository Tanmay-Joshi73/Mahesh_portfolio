'use client';

import React from 'react';
import { SERVICES } from '@/data/portfolioData';
import { Film, Music, Zap, Palette, Volume2, Smartphone, Check, Clock, ArrowRight } from 'lucide-react';

export default function ServicesSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Film': return <Film className="w-5 h-5 text-amber-400" />;
      case 'Music': return <Music className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-amber-400" />;
      case 'Volume2': return <Volume2 className="w-5 h-5 text-amber-400" />;
      case 'Smartphone': return <Smartphone className="w-5 h-5 text-amber-400" />;
      default: return <Film className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="services" className="relative w-full py-20 sm:py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                CAPABILITIES & DELIVERABLES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              POST-PRODUCTION SERVICES
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              From raw camera ingest to broadcast-ready master deliverables, engineered for maximum viewer retention and aesthetic prestige.
            </p>
          </div>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-amber-500 text-xs font-mono font-bold text-amber-400 hover:text-white transition-all uppercase w-fit"
          >
            <span>CUSTOM INQUIRY</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-7 rounded-2xl bg-zinc-950 border border-zinc-800/80 hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div>
                {/* Header: Icon & Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:bg-amber-500/10 group-hover:border-amber-500/30 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono text-zinc-600 font-bold">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white uppercase group-hover:text-amber-400 transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-xs text-amber-400/90 font-mono leading-normal">
                  {service.subtitle}
                </p>

                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="mt-6 pt-6 border-t border-zinc-900 flex flex-col gap-3">
                <div className="text-[11px] font-mono font-bold text-zinc-300 uppercase tracking-wider">
                  KEY DELIVERABLES:
                </div>
                <ul className="space-y-1.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-zinc-400">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Turnaround Pill */}
                <div className="mt-4 pt-3 border-t border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-amber-500" />
                    <span>TURNAROUND:</span>
                  </span>
                  <span className="text-white font-bold">{service.turnaround}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
