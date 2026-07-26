'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

const featuredProjects = [
  {
    id: 1,
    title: 'Solstice',
    category: 'Editorial',
    year: '2025',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c438c9f7-1772685325442.png",
    alt: 'Fashion model in flowing ivory garment against bright airy white studio, soft diffused natural light',
    offset: false
  },
  {
    id: 2,
    title: 'Roots & Rhythm',
    category: 'Documentary',
    year: '2025',
    image: "https://images.unsplash.com/photo-1572273191673-dbd7f30e3211",
    alt: 'Mountain landscape at golden hour with warm amber sky, open terrain, bright panoramic daylight',
    offset: true
  },
  {
    id: 3,
    title: 'Liminal',
    category: 'Portrait',
    year: '2026',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8059f93-1772073644036.png",
    alt: 'Close portrait of woman with clean minimal bright background, even studio lighting, open and airy atmosphere',
    offset: false
  }
];

export default function SelectedWorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Heading reveal
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
          y: 50,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out'
        });
      }

      // Card image reveals
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const overlay = card.querySelector('.reveal-overlay') as HTMLElement;
        const img = card.querySelector('img') as HTMLElement;

        const tl = gsap.timeline({
          scrollTrigger: { trigger: card, start: 'top 80%' },
          delay: i * 0.1
        });

        if (overlay) tl.to(overlay, { xPercent: 101, duration: 1.4, ease: 'power4.inOut' });
        if (img) tl.to(img, { scale: 1, duration: 1.4, ease: 'power4.out' }, '-=1.4');

        // Card content
        const content = card.querySelector('.card-content') as HTMLElement;
        if (content) {
          gsap.from(content, {
            scrollTrigger: { trigger: card, start: 'top 75%' },
            y: 20,
            opacity: 0,
            duration: 0.8,
            delay: 0.4 + i * 0.1,
            ease: 'power3.out'
          });
        }
      });
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headingRef} className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div>
            <span className="meta-label text-accent mb-4 block">Selected Work</span>
            <h2 className="heading-xl font-display font-light text-foreground">
              Stories <br /> in <span className="italic">Light</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="max-w-xs text-sm text-muted-foreground leading-relaxed text-left md:text-right">
              A curated selection of editorial, documentary, and portrait work from 2024–2026.
            </p>
            <Link
              href="/gallery"
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-foreground border-b border-foreground/30 pb-0.5 hover:border-accent hover:text-accent transition-all duration-300">
              
              View All Projects →
            </Link>
          </div>
        </div>

        {/* Offset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featuredProjects.map((project, i) =>
            <div
              key={project.id}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`group cursor-pointer ${project.offset ? 'md:mt-20' : ''}`}>
              
              <Link href="/project-detail">
                {/* Image */}
                <div className="relative aspect-[3/4] image-reveal overflow-hidden">
                  <div className="reveal-overlay" />
                  <AppImage
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
                
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500 z-10" />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-background/80 backdrop-blur-sm">
                    <span className="meta-label text-foreground">{project.category}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-content flex justify-between items-start pt-5">
                  <div>
                    <h3 className="font-display text-2xl font-light italic text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="meta-label text-muted-foreground mt-1">{project.category} / {project.year}</p>
                  </div>
                  <span className="text-muted-foreground/50 group-hover:text-accent transition-colors duration-300 mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
