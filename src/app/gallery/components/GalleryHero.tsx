'use client';

import React, { useEffect, useRef } from 'react';

export default function GalleryHero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const tl = gsap?.timeline({ delay: 0.2 });
      if (headingRef?.current) {
        tl?.from(headingRef?.current, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
        });
      }
      if (subRef?.current) {
        tl?.from(subRef?.current, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
        }, '-=0.8');
      }
    };
    init();
  }, []);

  return (
    <section className="pt-36 pb-16 px-6 md:px-8 relative overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="hero-watermark font-display italic text-foreground opacity-[0.03]">
          GALLERY
        </span>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <span className="meta-label text-accent mb-5 block">Full Portfolio</span>
        <h1
          ref={headingRef}
          className="heading-xl font-display font-light text-foreground mb-6"
        >
          The <span className="italic">Archive</span>
        </h1>
        <p
          ref={subRef}
          className="text-sm text-muted-foreground max-w-md leading-relaxed"
        >
          Six years of editorial, documentary, portrait, and commercial work.
          Filter by category or browse the full collection.
        </p>
      </div>
    </section>
  );
}
