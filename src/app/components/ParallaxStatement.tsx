'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function ParallaxStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const verticalTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap?.registerPlugin(ScrollTrigger);

      // Parallax image
      if (imageRef?.current) {
        gsap?.to(imageRef?.current, {
          scrollTrigger: {
            trigger: sectionRef?.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          },
          y: '-18%',
          ease: 'none'
        });
      }

      // Title reveal (slide up from overflow hidden)
      if (titleRef?.current) {
        gsap?.to(titleRef?.current, {
          scrollTrigger: { trigger: sectionRef?.current, start: 'top 60%' },
          y: 0,
          duration: 1.6,
          ease: 'power4.out'
        });
      }

      // Content reveal
      if (contentRef?.current) {
        gsap?.to(contentRef?.current, {
          scrollTrigger: { trigger: sectionRef?.current, start: 'top 50%' },
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out'
        });
      }

      // Vertical text parallax
      if (verticalTextRef?.current) {
        gsap?.to(verticalTextRef?.current, {
          scrollTrigger: {
            trigger: sectionRef?.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          },
          y: -80,
          ease: 'none'
        });
      }
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="full-bleed relative flex items-center overflow-hidden">
      
      {/* Background image with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 h-[130%] -top-[15%] parallax-img">
        
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_15d6790c6-1772148150364.png"
          alt="Dimly lit backstage corridor with deep shadows, atmospheric moody low-key lighting, dark walls and dramatic contrast"
          fill
          sizes="100vw"
          className="w-full h-full object-cover brightness-[0.35] contrast-[1.1]"
          priority />
        
      </div>

      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Scrim for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8 py-32 md:py-40">
          <div className="col-span-12 md:col-span-9 lg:col-span-8">
            {/* Title with overflow hidden for slide-up */}
            <div className="overflow-hidden mb-12">
              <h2
                ref={titleRef}
                className="heading-xl font-display font-light italic text-white leading-[0.88]"
                style={{ transform: 'translateY(100%)' }}>
                
                The <br />
                <span className="not-italic md:pl-20">Unseen</span> <br />
                <span className="italic">Moment</span>
              </h2>
            </div>

            {/* Body content */}
            <div
              ref={contentRef}
              className="flex flex-col gap-10 opacity-0"
              style={{ transform: 'translateY(30px)' }}>
              
              <p className="text-lg font-light leading-relaxed text-white/70 max-w-xl border-l border-white/20 pl-8">
                Every shoot is a conversation between light and shadow, between
                stillness and motion. We don't capture moments — we craft them
                with intention, precision, and an eye trained on the extraordinary.
              </p>
              <div className="flex items-center gap-8">
                <Link
                  href="/gallery"
                  className="group relative border border-white/30 px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-white overflow-hidden hover:border-white transition-colors duration-300">
                  
                  <span className="relative z-10 group-hover:text-foreground transition-colors duration-500">
                    Explore Projects
                  </span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </Link>
                <span className="meta-label text-white/40">2024–2026 Archive</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative large text */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hidden lg:block pointer-events-none"
        aria-hidden="true">
        
        <span className="bg-decorative-text text-white"
        style={{ fontSize: '18rem', lineHeight: 1 }}>
          SS26
        </span>
      </div>

      {/* Vertical text */}
      <div
        ref={verticalTextRef}
        className="absolute left-6 bottom-20 z-10 hidden md:block"
        aria-hidden="true">
        
        <div className="vertical-text text-white/30 text-[10px] flex items-center gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          FrameWork Studio / 2026 / Visual Narrative
        </div>
      </div>
    </section>
  );
}
