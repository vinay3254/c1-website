'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';

// BENTO GRID AUDIT:
// Cards: [Portrait, Wedding, Commercial, Architecture, Travel, Editorial] = 6 cards
// Layout: 12-col grid
// Row 1: [col 1-4: Portrait rs-2] [col 5-8: Wedding rs-1] [col 9-12: Commercial rs-1]
// Row 2: [col 1-4: OCCUPIED Portrait] [col 5-8: Architecture rs-1] [col 9-12: Travel rs-1]
// Row 3: [col 1-12: Editorial cs-full]
// Placed: 6/6 cards ✓

const categories = ['All', 'Portrait', 'Wedding', 'Commercial', 'Architecture', 'Travel', 'Editorial'];

const galleryItems = [
  {
    id: 1,
    title: 'Portrait Series',
    category: 'Portrait',
    count: 24,
    year: '2026',
    colSpan: 'col-span-12 md:col-span-4',
    rowSpan: 'md:row-span-2',
    aspectClass: 'aspect-[3/4] md:aspect-auto md:h-full',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8059f93-1772073644036.png",
    alt: 'Close portrait of woman in clean minimal studio, bright white background, even soft lighting, open airy atmosphere'
  },
  {
    id: 2,
    title: 'Wedding Stories',
    category: 'Wedding',
    count: 18,
    year: '2025',
    colSpan: 'col-span-12 md:col-span-4',
    rowSpan: '',
    aspectClass: 'aspect-[4/3]',
    image: "https://images.unsplash.com/photo-1731664453832-ec0aebb23b8a",
    alt: 'Couple at outdoor wedding ceremony, bright natural daylight, lush garden backdrop, warm golden afternoon light'
  },
  {
    id: 3,
    title: 'Commercial & Brand',
    category: 'Commercial',
    count: 31,
    year: '2025',
    colSpan: 'col-span-12 md:col-span-4',
    rowSpan: '',
    aspectClass: 'aspect-[4/3]',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18c3fcab2-1772196420648.png",
    alt: 'Product flat lay on bright white surface, clean studio lighting, crisp commercial photography aesthetic'
  },
  {
    id: 4,
    title: 'Architecture',
    category: 'Architecture',
    count: 15,
    year: '2024',
    colSpan: 'col-span-12 md:col-span-4',
    rowSpan: '',
    aspectClass: 'aspect-[4/3]',
    image: "https://images.unsplash.com/photo-1627977843484-a64b6f0da55b",
    alt: 'Modern glass skyscraper exterior with bright overcast sky, clean architectural lines, open daylight atmosphere'
  },
  {
    id: 5,
    title: 'Travel & Place',
    category: 'Travel',
    count: 42,
    year: '2024',
    colSpan: 'col-span-12 md:col-span-4',
    rowSpan: '',
    aspectClass: 'aspect-[4/3]',
    image: "https://images.unsplash.com/photo-1709572368609-fd172bd56732",
    alt: 'Sweeping mountain vista at golden hour, warm amber sky, broad open landscape, bright panoramic daylight'
  },
  {
    id: 6,
    title: 'Editorial',
    category: 'Editorial',
    count: 29,
    year: '2026',
    colSpan: 'col-span-12',
    rowSpan: '',
    aspectClass: 'aspect-[21/9]',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b95514bf-1776491281960.png",
    alt: 'Wide editorial fashion shoot in bright open studio, clean white walls, natural diffused light, airy minimal set'
  }
];

export default function GalleryGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filtered = activeFilter === 'All' ?
    galleryItems :
    galleryItems.filter((item) => item.category === activeFilter);

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
          delay: i * 0.08
        });
        if (overlay) tl.to(overlay, { xPercent: 101, duration: 1.2, ease: 'power4.inOut' });
        if (img) tl.to(img, { scale: 1, duration: 1.2, ease: 'power4.out' }, '-=1.2');
      });
    };
    init();
  }, [activeFilter]);

  return (
    <section className="pb-24 md:pb-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16 border-b border-border pb-8">
          {categories.map((cat) =>
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`text-[11px] font-bold uppercase tracking-[0.3em] px-4 py-2 min-h-[44px] transition-all duration-300 ${
                activeFilter === cat ?
                  'bg-foreground text-primary-foreground' :
                  'text-muted-foreground hover:text-foreground'
              }`}>
              {cat}
            </button>
          )}
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className={`grid grid-cols-12 gap-4 md:gap-6 ${
            activeFilter === 'All' ? 'auto-rows-[280px]' : ''
          }`}>
          
          {(activeFilter === 'All' ? galleryItems : filtered).map((item, i) =>
            <div
              key={item.id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className={`group cursor-pointer ${
                activeFilter === 'All' ?
                  `${item.colSpan} ${item.rowSpan}` :
                  'col-span-12 md:col-span-6 lg:col-span-4'
              }`}>
              
              <Link href="/project-detail" className="block h-full">
                <div className={`relative image-reveal overflow-hidden h-full ${
                  activeFilter !== 'All' ? 'aspect-[3/4]' : item.aspectClass
                }`}>
                  <div className="reveal-overlay" />
                  <AppImage
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1200ms] ease-out" />
                
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-500 z-10" />

                  {/* Hover info */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                    <div className="bg-background/90 backdrop-blur-sm p-5">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-display text-xl font-light italic text-foreground mb-1">
                            {item.title}
                          </h3>
                          <p className="meta-label text-muted-foreground">
                            {item.category} · {item.count} images · {item.year}
                          </p>
                        </div>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent mt-1">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Category badge (always visible) */}
                  <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-background/70 backdrop-blur-sm">
                    <span className="meta-label text-foreground">{item.category}</span>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
