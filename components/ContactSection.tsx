'use client';

import React, { useState } from 'react';
import { EDITOR_PROFILE } from '@/data/portfolioData';
import { Mail, MessageSquare, Send, CheckCircle2, ArrowUpRight, Sparkles, Phone, Video } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Commercial & Brand Film',
    budgetRange: '$5,000 - $10,000',
    timeline: 'Within 2-4 Weeks',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate clean submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-28 bg-black overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase">
              LET&apos;S COLLABORATE
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight uppercase leading-[0.95]">
            HAVE A STORY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">
              WORTH TELLING?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-xl text-zinc-300 leading-relaxed">
            &ldquo;Let&apos;s turn your footage into something people remember.&rdquo; Currently booking select commercial campaigns, music videos, and film projects.
          </p>
        </div>

        {/* 2-Column Layout: Direct Contact Info & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* Left Column: Direct Inquiries & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">

              {/* Email Direct Action Card */}
              <a
                href={`mailto:${EDITOR_PROFILE.contacts.email}?subject=Project%20Inquiry%20via%20Portfolio`}
                className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-amber-500/60 transition-all flex items-start justify-between shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase font-bold">
                      DIRECT EMAIL INQUIRIES
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors mt-0.5">
                      {EDITOR_PROFILE.contacts.email}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 font-mono">
                      Average response time: &lt; 4 hours
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-amber-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* WhatsApp Quick Chat Card */}
              <a
                href={`https://wa.me/15553492810?text=Hi%Mahesh,%20I%20saw%20your%20video%20editor%20portfolio%20and%20would%20love%20to%20discuss%20a%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-zinc-950 border border-zinc-800 hover:border-emerald-500/60 transition-all flex items-start justify-between shadow-xl cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-zinc-400 uppercase font-bold">
                      WHATSAPP & URGENT PITCHES
                    </div>
                    <div className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-400 transition-colors mt-0.5">
                      {EDITOR_PROFILE.contacts.whatsapp}
                    </div>
                    <div className="text-xs text-zinc-500 mt-1 font-mono">
                      Available for urgent production turnaround
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>

              {/* Studio Location Badge */}
              <div className="p-5 rounded-2xl bg-zinc-950/60 border border-zinc-900 text-xs font-mono text-zinc-400 flex flex-col gap-1.5">
                <div className="text-zinc-300 font-bold uppercase">PHYSICAL & REMOTE EDITING SUITE</div>
                <div>{EDITOR_PROFILE.location}</div>
                <div className="text-amber-400/90 text-[11px]">Equipped with 10GbE fiber optic raw media streaming</div>
              </div>

            </div>

            {/* Social Channels */}
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-3">
                CHANNELS & WORK REELS
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['INSTAGRAM', 'YOUTUBE', 'VIMEO', 'BEHANCE'].map((channel) => (
                  <a
                    key={channel}
                    href="#"
                    className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-mono text-zinc-300 hover:text-amber-400 transition-colors uppercase"
                  >
                    {channel} ↗
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-zinc-950 border border-zinc-800 shadow-2xl relative">

              {submitted ? (
                <div className="py-12 flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    INQUIRY TRANSMITTED
                  </h3>
                  <p className="mt-2 text-zinc-300 max-w-md text-sm leading-relaxed">
                    Thank you! Your project brief has been received. I review all incoming footage briefs within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 text-xs font-mono text-amber-400 border border-zinc-800"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs font-mono">
                    <span className="text-amber-400 font-bold uppercase">PROJECT INQUIRY FORM</span>
                    <span className="text-zinc-500">* REQUIRED FIELDS</span>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Your Name / Agency *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Christopher Nolan / Studio X"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Project Type
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option>Commercial & Brand Film</option>
                        <option>Music Video</option>
                        <option>Short Film / Documentary</option>
                        <option>Festival / Event Aftermovie</option>
                        <option>Sports & High-Energy Montage</option>
                        <option>Social Media / 9:16 Campaign</option>
                        <option>Color Grading Only (DaVinci Resolve)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-amber-400 transition-colors"
                      >
                        <option>$2,500 – $5,000</option>
                        <option>$5,000 – $10,000</option>
                        <option>$10,000 – $25,000</option>
                        <option>$25,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                      Target Delivery Timeline
                    </label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      placeholder="e.g. Rough cut in 5 days, final delivery by Nov 15"
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>

                  {/* Message & Raw Footage Link */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase mb-1.5">
                      Project Brief & Footage Link (Google Drive, Dropbox, Frame.io) *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the story, desired mood, musical tempo, reference links, and footage status..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-500/20 hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {submitting ? (
                      <span>TRANSMITTING BRIEF...</span>
                    ) : (
                      <>
                        <span>SEND PROJECT BRIEF</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] font-mono text-zinc-500 mt-1">
                    Strict NDA honored. All footage links treated with enterprise confidentiality.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
