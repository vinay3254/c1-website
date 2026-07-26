'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const projectData = {
  intro:
    'Solstice was born from a desire to photograph the exact moment between seasons — when warmth becomes memory and light turns gold before it disappears. Shot over three days in a converted Marais warehouse, this editorial series for Maison Vérité explores the tension between permanence and transience.',
  body: [
    'The collection itself is built on contradiction: structured silhouettes in fluid fabrics, architectural cuts in organic materials. Our challenge was to translate that duality into light and shadow — to make the clothing feel simultaneously frozen and in motion.',
    'We worked with a single tungsten source and large reflectors, refusing the clinical perfection of LED. The warmth of tungsten gave every frame a quality you can almost feel — like afternoon light through amber glass.',
  ],
  services: ['Editorial Photography', 'Art Direction', 'Retouching & Print'],
  deliverables: ['48 retouched images', 'Full digital archive', 'Print-ready files'],
};

export default function ProjectContent() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap?.registerPlugin(ScrollTrigger);

      if (leftRef?.current) {
        gsap?.from(leftRef?.current?.children, {
          scrollTrigger: { trigger: leftRef?.current, start: 'top 85%' },
          y: 40,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: 'power3.out',
        });
      }
      if (rightRef?.current) {
        gsap?.from(rightRef?.current?.children, {
          scrollTrigger: { trigger: rightRef?.current, start: 'top 85%' },
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
        });
      }
    };
    init();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Left: narrative */}
        <div ref={leftRef} className="lg:col-span-7 flex flex-col gap-8">
          <p className="font-display text-2xl md:text-3xl font-light italic text-foreground leading-[1.3] border-l-2 border-accent pl-8">
            {projectData?.intro}
          </p>
          {projectData?.body?.map((para, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {para}
            </p>
          ))}
          <Link
            href="/contact"
            className="self-start text-[11px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-all duration-300 mt-4"
          >
            Book a Similar Session →
          </Link>
        </div>

        {/* Right: sidebar info */}
        <div ref={rightRef} className="lg:col-span-5 flex flex-col gap-10 lg:pl-8 lg:border-l lg:border-border">
          <div>
            <span className="meta-label text-accent mb-4 block">Services Provided</span>
            <ul className="flex flex-col gap-3">
              {projectData?.services?.map((s) => (
                <li key={s} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="accent-line" />
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="meta-label text-accent mb-4 block">Deliverables</span>
            <ul className="flex flex-col gap-3">
              {projectData?.deliverables?.map((d) => (
                <li key={d} className="flex items-center gap-3 text-sm text-foreground">
                  <span className="accent-line" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
          {/* Stats block to fill column height */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-border mt-auto">
            {[
              { value: '3', label: 'Shoot Days' },
              { value: '48', label: 'Final Images' },
              { value: '1', label: 'Light Source' },
              { value: '2026', label: 'Published' },
            ]?.map((stat) => (
              <div key={stat?.label} className="flex flex-col gap-1">
                <span className="font-display text-3xl font-light text-foreground">{stat?.value}</span>
                <span className="meta-label text-muted-foreground">{stat?.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
