import React from 'react';

export default function GalleryHero() {
  return (
    <section className="relative py-24 px-6 md:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-amber-500 font-mono text-sm uppercase tracking-wider mb-4 block">Archive</span>
        <h1 className="text-5xl md:text-7xl font-serif font-light mb-6">Gallery</h1>
        <p className="text-zinc-400 max-w-xl text-lg leading-relaxed">
          A comprehensive collection of editorial, portrait, and documentary stories.
        </p>
      </div>
    </section>
  );
}
