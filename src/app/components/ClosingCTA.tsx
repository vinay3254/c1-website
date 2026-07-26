'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ClosingCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap?.registerPlugin(ScrollTrigger);

      if (contentRef?.current) {
        gsap?.from(contentRef?.current?.children, {
          scrollTrigger: { trigger: contentRef?.current, start: 'top 80%' },
          y: 50,
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: 'power3.out',
        });
      }
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 md:py-40 px-6 md:px-8 bg-primary overflow-hidden"
    >
      {/* Diagonal shimmer */}
      <div className="absolute inset-0 diagonal-shimmer" aria-hidden="true" />
      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />
      {/* Decorative bg text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="font-display italic text-primary-foreground opacity-[0.025]"
          style={{ fontSize: 'clamp(5rem, 20vw, 18rem)', lineHeight: 0.85, letterSpacing: '-0.03em' }}>
          BOOK
        </span>
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div ref={contentRef} className="flex flex-col items-center text-center gap-10">
          <span className="meta-label text-accent">Ready to Create?</span>

          <h2 className="heading-xl font-display font-light italic text-primary-foreground">
            Let's Make <br />
            <span className="not-italic">Something</span> <br />
            Unforgettable
          </h2>

          <p className="text-sm text-primary-foreground/50 max-w-md leading-relaxed">
            Whether it's a brand campaign, a documentary short, or a portrait session —
            every project starts with a single conversation.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Link
              href="/contact"
              className="btn-fill btn-fill-accent border border-accent px-12 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-accent hover:text-accent-foreground transition-colors duration-500"
            >
              <span>Book a Session</span>
            </Link>
            <Link
              href="/gallery"
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 flex items-center gap-3"
            >
              <span className="w-8 h-px bg-primary-foreground/20" />
              Browse Gallery First
            </Link>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-12 pt-12 border-t border-primary-foreground/10 w-full max-w-lg">
            {[
              { value: '8+', label: 'Years Active' },
              { value: '240+', label: 'Projects Delivered' },
              { value: '14', label: 'Countries Shot In' },
            ]?.map((stat) => (
              <div key={stat?.label} className="flex flex-col items-center gap-2">
                <span className="font-display text-3xl font-light text-primary-foreground">{stat?.value}</span>
                <span className="meta-label text-primary-foreground/40">{stat?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
