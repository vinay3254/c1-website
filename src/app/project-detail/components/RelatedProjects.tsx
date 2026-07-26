'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const related = [
  {
    id: 1,
    title: 'Roots & Rhythm',
    category: 'Documentary',
    image: "https://images.unsplash.com/photo-1677526991751-f0a04993e438",
    alt: 'Mountain landscape at golden hour, warm amber sky, bright open panoramic daylight'
  },
  {
    id: 2,
    title: 'Liminal',
    category: 'Portrait',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8059f93-1772073644036.png",
    alt: 'Close portrait of woman in minimal studio, clean bright white background, soft even lighting'
  },
  {
    id: 3,
    title: 'Concrete & Glass',
    category: 'Architecture',
    image: "https://images.unsplash.com/photo-1702284308041-948c75927b99",
    alt: 'Modern glass tower exterior against bright overcast sky, clean architectural lines'
  }
];

export default function RelatedProjects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const overlay = card.querySelector('.reveal-overlay') as HTMLElement;
        const img = card.querySelector('img') as HTMLElement;
        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 85%' },
          delay: i * 0.1
        });
        if (overlay) tl.to(overlay, { xPercent: 101, duration: 1.2, ease: 'power4.inOut' });
        if (img) tl.to(img, { scale: 1, duration: 1.2, ease: 'power4.out' }, '-=1.2');
      });
    };
    init();
  }, []);

  return (
    <section className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12 md:mb-16">
          <div>
            <span className="meta-label text-accent mb-4 block">Continue Exploring</span>
            <h2 className="heading-md font-display font-light text-foreground">
              Related <span className="italic">Projects</span>
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden md:block text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300">
            
            Full Gallery →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {related.map((project, i) =>
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group cursor-pointer">
              
              <Link href="/project-detail">
                <div className="relative aspect-[3/4] image-reveal overflow-hidden">
                  <div className="reveal-overlay" />
                  <AppImage
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1000ms] ease-out" />
                
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 z-10" />
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-background/80 backdrop-blur-sm">
                    <span className="meta-label text-foreground">{project.category}</span>
                  </div>
                </div>
                <div className="flex justify-between items-start pt-5">
                  <h3 className="font-display text-xl font-light italic text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/50 group-hover:text-accent transition-colors duration-300 mt-1">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
