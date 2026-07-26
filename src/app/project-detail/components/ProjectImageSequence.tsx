'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

// BENTO GRID AUDIT for image sequence:
// Cards: [Full-wide, Left-tall, Right-top, Right-bottom, Center-wide] = 5 cards
// Row 1: [col 1-12: FullWide cs-12]
// Row 2: [col 1-5: LeftTall rs-2] [col 6-12: RightTop cs-7]
// Row 3: [col 1-5: OCCUPIED LeftTall] [col 6-12: RightBottom cs-7]
// Placed: 5/5 ✓

const images = [
  {
    id: 1,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_19e5903ef-1783560999543.png",
    alt: 'Fashion model in ivory jacket in clean bright studio, soft even lighting, airy open atmosphere',
    colSpan: 'col-span-12',
    aspectClass: 'aspect-[21/9]',
    rowSpan: '',
    caption: 'Look 01 — Ivory Sculpt Jacket'
  },
  {
    id: 2,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_19b35e7d1-1772088037403.png",
    alt: 'Full length portrait of model in linen column dress, bright studio background, clean natural light',
    colSpan: 'col-span-12 md:col-span-5',
    aspectClass: 'aspect-[3/4] md:aspect-auto md:h-full',
    rowSpan: 'md:row-span-2',
    caption: 'Look 02 — Linen Column'
  },
  {
    id: 3,
    src: "https://img.rocket.new/generatedImages/rocket_gen_img_1bec820fd-1772554791324.png",
    alt: 'Model in pleated skirt against bright white background, natural window light, clean minimal setting',
    colSpan: 'col-span-12 md:col-span-7',
    aspectClass: 'aspect-[4/3]',
    rowSpan: '',
    caption: 'Look 03 — Pleated Mirage'
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1726203747240-c64e7e26c99a",
    alt: 'Wide shot of shopping district, bright outdoor daylight, clean urban environment, open sky background',
    colSpan: 'col-span-12 md:col-span-7',
    aspectClass: 'aspect-[4/3]',
    rowSpan: '',
    caption: 'Behind the Scenes'
  }
];

export default function ProjectImageSequence() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const overlay = card.querySelector('.reveal-overlay') as HTMLElement;
        const img = card.querySelector('img') as HTMLElement;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 85%' },
          delay: i * 0.05
        });
        if (overlay) tl.to(overlay, { xPercent: 101, duration: 1.3, ease: 'power4.inOut' });
        if (img) tl.to(img, { scale: 1, duration: 1.3, ease: 'power4.out' }, '-=1.3');
      });
    };
    init();
  }, []);

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto pt-16 md:pt-20">
        <span className="meta-label text-accent mb-8 block">Full Sequence</span>
        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[300px]">
          {images.map((img, i) =>
            <div
              key={img.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`group ${img.colSpan} ${img.rowSpan}`}>
              
              <div className={`relative image-reveal overflow-hidden h-full ${img.aspectClass}`}>
                <div className="reveal-overlay" />
                <AppImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[1000ms] ease-out" />
              
                {/* Caption on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <span className="meta-label text-white/80">{img.caption}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
