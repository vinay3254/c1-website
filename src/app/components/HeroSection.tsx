import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-serif tracking-tight mb-6">
          Cinematic Photography & Videography
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-8">
          Capturing stories through editorial visuals, timeless frames, and evocative motion.
        </p>
      </div>
    </section>
  );
}
