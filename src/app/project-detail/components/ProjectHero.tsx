'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

const project = {
  title: 'Solstice',
  category: 'Editorial',
  year: '2025',
  client: 'Maison Vérité',
  location: 'Paris, France',
  heroImage:
    "https://img.rocket.new/generatedImages/rocket_gen_img_1a231784f-1772737299307.png",
  heroAlt:
    'Fashion model in flowing ivory gown in dark atmospheric studio, dramatic low-key lighting, deep shadows, moody cinematic atmosphere'
};

export default function ProjectHero() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');

      const tl = gsap?.timeline({ delay: 0.2 });

      if (overlayRef?.current) {
        tl?.to(overlayRef?.current, {
          xPercent: 101,
          duration: 1.8,
          ease: 'power4.inOut'
        });
      }
      if (imageRef?.current) {
        tl?.to(imageRef?.current?.querySelector('img'), {
          scale: 1,
          duration: 1.8,
          ease: 'power4.out'
        }, '-=1.8');
      }
      if (titleRef?.current) {
        tl?.from(titleRef?.current, {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out'
        }, '-=1');
      }
      if (metaRef?.current) {
        tl?.from(metaRef?.current?.children, {
          y: 20,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out'
        }, '-=0.8');
      }
    };
    init();
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Full-bleed hero image */}
      <div ref={imageRef} className="absolute inset-0 image-reveal">
        <div ref={overlayRef} className="reveal-overlay" />
        <AppImage
          src={project?.heroImage}
          alt={project?.heroAlt}
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover" />
        
      </div>
      {/* Gradient scrim — bottom-up for white text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 z-10" />
      {/* Grain */}
      <div className="grain-overlay" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-20 px-6 md:px-8 pb-16 md:pb-20 max-w-7xl mx-auto w-full">
        <h1
          ref={titleRef}
          className="heading-xl font-display font-light italic text-white mb-8">
          
          {project?.title}
        </h1>
        <div ref={metaRef} className="flex flex-wrap gap-6 md:gap-10">
          {[
            { label: 'Category', value: project?.category },
            { label: 'Client', value: project?.client },
            { label: 'Location', value: project?.location },
            { label: 'Year', value: project?.year }
          ]?.map((m) =>
            <div key={m?.label}>
              <p className="meta-label text-white/40 mb-1">{m?.label}</p>
              <p className="text-sm font-medium text-white">{m?.value}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
