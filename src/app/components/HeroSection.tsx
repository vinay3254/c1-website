'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let gsap: typeof import('gsap').gsap;
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger;

    const init = async () => {
      const gsapMod = await import('gsap');
      const stMod = await import('gsap/ScrollTrigger');
      gsap = gsapMod.gsap;
      ScrollTrigger = stMod.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Image reveal: overlay wipe + image descale
      const tl = gsap.timeline({ delay: 0.3 });

      if (overlayRef.current) {
        tl.to(overlayRef.current, {
          xPercent: 101,
          duration: 1.6,
          ease: 'power4.inOut'
        });
      }

      if (imageRef.current) {
        tl.to(
          imageRef.current,
          {
            scale: 1,
            duration: 1.6,
            ease: 'power4.out'
          },
          '-=1.6'
        );
      }

      // Content stagger reveal
      const contentEls = [
        eyebrowRef.current,
        headingRef.current,
        bodyRef.current,
        ctaRef.current
      ].filter(Boolean);

      tl.from(
        contentEls,
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out'
        },
        '-=1.2'
      );

      // Scroll line infinite
      if (scrollLineRef.current) {
        gsap.to(scrollLineRef.current, {
          yPercent: 200,
          repeat: -1,
          duration: 1.6,
          ease: 'power1.inOut'
        });
      }
    };

    init();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 px-6 md:px-8 overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Watermark background text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        aria-hidden="true">
        
        <span className="hero-watermark font-display italic text-foreground opacity-[0.04]">
          FRAMEWORK
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12 gap-6 md:gap-8 items-center min-h-[calc(100vh-5rem)]">
        {/* Left: Content */}
        <div className="col-span-12 md:col-span-5 order-2 md:order-1 flex flex-col justify-center gap-8 py-12 md:py-0">
          <span
            ref={eyebrowRef}
            className="meta-label text-accent">
            
            Visual Storytelling Studio
          </span>

          <h1
            ref={headingRef}
            className="heading-xl font-display font-light text-foreground">
            
            Frames <br />
            That <span className="italic">Speak</span>
          </h1>

          <p
            ref={bodyRef}
            className="text-sm leading-relaxed text-muted-foreground max-w-sm">
            
            Photography and videography that captures not just what you see —
            but what you feel. Every frame is a deliberate choice.
          </p>

          <div ref={ctaRef} className="flex items-center gap-8">
            <Link
              href="/gallery"
              className="btn-fill border border-foreground px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-foreground hover:text-primary-foreground transition-colors duration-500">
              
              <span>View Gallery</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-foreground/20" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                40+ Projects
              </span>
            </div>
          </div>
        </div>

        {/* Right: Hero Image */}
        <div className="col-span-12 md:col-span-7 order-1 md:order-2">
          <div className="relative w-full aspect-[4/5] md:aspect-[3/4] image-reveal group">
            <div ref={overlayRef} className="reveal-overlay" />
            <AppImage
              src="https://images.unsplash.com/photo-1571513176966-90035a8de79c"
              alt="Photographer crouching with camera in dramatic low-key studio lighting, dark background, warm spotlight highlighting equipment"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="w-full h-full object-cover" />
            
            {/* Image caption */}
            <div className="absolute bottom-6 right-6 z-20 text-right opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="meta-label text-white/70 block">Behind the Lens</span>
            </div>
            {/* Stat overlay card */}
            <div className="absolute bottom-6 left-6 z-20 bg-background/95 backdrop-blur-sm px-5 py-4 border border-border">
              <p className="meta-label text-muted-foreground mb-1">Client Satisfaction</p>
              <p className="font-display text-2xl font-light text-foreground">98<span className="text-accent text-base">%</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
        <span className="meta-label text-muted-foreground opacity-50">Scroll</span>
        <div className="scroll-line-track w-px h-14 bg-foreground/10 relative overflow-hidden">
          <div ref={scrollLineRef} className="absolute top-0 left-0 w-full h-full bg-accent scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
