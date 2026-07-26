'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function ContactHero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const tl = gsap?.timeline({ delay: 0.2 });

      if (overlayRef?.current) {
        tl?.to(overlayRef?.current, {
          xPercent: 101,
          duration: 1.6,
          ease: 'power4.inOut'
        });
      }
      if (imageRef?.current) {
        tl?.to(imageRef?.current?.querySelector('img'), {
          scale: 1,
          duration: 1.6,
          ease: 'power4.out'
        }, '-=1.6');
      }
      if (contentRef?.current) {
        tl?.from(contentRef?.current?.children, {
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out'
        }, '-=1');
      }
    };
    init();
  }, []);

  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
      {/* Full-bleed image */}
      <div ref={imageRef} className="absolute inset-0 image-reveal">
        <div ref={overlayRef} className="reveal-overlay" />
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_178cefb23-1772782299608.png"
          alt="Camera equipment on a dark studio surface, dramatic low-key lighting, deep shadows, moody cinematic atmosphere"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover brightness-[0.3]" />
        
      </div>

      {/* Gradient scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
      <div className="grain-overlay" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 px-6 md:px-8 pb-14 md:pb-16 max-w-7xl mx-auto w-full">
        <div ref={contentRef}>
          <span className="meta-label text-accent mb-4 block">Get in Touch</span>
          <h1 className="heading-xl font-display font-light italic text-white">
            Let's <span className="not-italic">Create</span> <br /> Together
          </h1>
        </div>
      </div>
    </section>
  );
}
