'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function ContactPage() {
  const [isGlobalMuted, setIsGlobalMuted] = useState(true);

  const toggleGlobalMute = () => {
    setIsGlobalMuted((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#f5f3ef] flex flex-col film-grain selection:bg-amber-500 selection:text-black">
      
      {/* Navigation */}
      <Navbar
        isMuted={isGlobalMuted}
        onToggleMute={toggleGlobalMute}
      />

      <main className="flex-1 flex flex-col pt-24 sm:pt-28">
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
