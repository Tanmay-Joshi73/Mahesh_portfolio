'use client';

import React, { useState } from 'react';
import { PROCESS_STEPS } from '@/data/portfolioData';
import { Sparkles, Check, ArrowRight, Play, Film, Clock } from 'lucide-react';

export default function ProcessTimeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="process" className="relative w-full py-20 sm:py-28 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
                POST-PRODUCTION PIPELINE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
              CREATIVE PROCESS
            </h2>
            <p className="mt-2 text-zinc-400 text-sm sm:text-base max-w-xl">
              A battle-tested workflow designed for creative clarity, frame-accurate execution, and friction-free delivery.
            </p>
          </div>

          <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
            <Film className="w-4 h-4 text-amber-400" />
            <span>FRAME.IO CLOUD COLLABORATION ENABLED</span>
          </div>
        </div>

        {/* NLE Timeline Scrubber Bar UI */}
        <div className="mb-12 bg-zinc-950 border border-zinc-800 rounded-2xl p-4 sm:p-6 shadow-2xl">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4 px-2">
            <span className="text-amber-400 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              NLE TIMELINE SEQUENCE
            </span>
            <span>STEP {activeStep.step} OF 04</span>
          </div>

          {/* Interactive Steps Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-amber-500 text-black border-amber-400 shadow-xl shadow-amber-500/20 scale-[1.02]'
                      : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono font-black ${isActive ? 'text-black' : 'text-amber-400'}`}>
                      {step.step}
                    </span>
                    <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-black/20 text-black font-bold' : 'bg-zinc-800 text-zinc-400'}`}>
                      {step.duration}
                    </span>
                  </div>
                  <div className={`text-sm sm:text-base font-extrabold uppercase tracking-tight ${isActive ? 'text-black' : 'text-white'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Active Step Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-950/80 border border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          
          {/* Left Column: Stage Overview */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold w-fit uppercase">
              <span>PHASE {activeStep.step}</span>
              <span>•</span>
              <span>{activeStep.duration}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              {activeStep.headline}
            </h3>

            <p className="text-base text-zinc-300 leading-relaxed">
              {activeStep.description}
            </p>

            <div className="mt-4 pt-6 border-t border-zinc-800">
              <div className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-4">
                STAGE CHECKLIST & DELIVERABLES:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeStep.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Workflow Visualization */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs font-mono flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-zinc-400">STATUS:</span>
                <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STANDARDIZED QA PIPELINE
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-zinc-300">
                  <span>Revisions Included:</span>
                  <span className="text-white font-bold">2 Full Rounds via Frame.io</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Client Feedback Time:</span>
                  <span className="text-white font-bold">Within 24 Hours</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Color Space Management:</span>
                  <span className="text-amber-400 font-bold">ACES 1.3 Certified</span>
                </div>
                <div className="flex justify-between text-zinc-300">
                  <span>Loudness Compliance:</span>
                  <span className="text-white font-bold">EBU R128 (-23 LUFS / -14 LUFS)</span>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
                <button
                  onClick={() => setActiveStepIndex((activeStepIndex + 1) % PROCESS_STEPS.length)}
                  className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>ADVANCE TO NEXT STAGE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
