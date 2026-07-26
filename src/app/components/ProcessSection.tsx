'use client';

import React, { useEffect, useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description:
      'We start with a 30-minute conversation to understand your vision, goals, and the story you want to tell. No briefs — just a real dialogue.',
    detail: '30-min call · Free',
  },
  {
    number: '02',
    title: 'Creative Direction',
    description:
      'We build a mood board and shot list together. Every location, light condition, and styling choice is deliberate and tailored to your project.',
    detail: 'Mood board · Location scout',
  },
  {
    number: '03',
    title: 'The Shoot',
    description:
      'On the day, we work fast and precise. Our approach is calm, collaborative, and focused on capturing authentic moments, not posed perfection.',
    detail: 'Half or full day',
  },
  {
    number: '04',
    title: 'Delivery',
    description:
      'Edited images and/or final video delivered within 7–14 days via private gallery. Print-ready, web-optimized, and licensed for your use.',
    detail: '7–14 day turnaround',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          scrollTrigger: { trigger: headerRef.current, start: 'top 85%' },
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        });
      }

      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        gsap.from(step, {
          scrollTrigger: { trigger: step, start: 'top 85%' },
          y: 30,
          opacity: 0,
          duration: 0.9,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    };

    init();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="grid md:grid-cols-2 gap-12 items-end mb-16 md:mb-24">
          <div>
            <span className="meta-label text-accent mb-4 block">The Process</span>
            <h2 className="heading-lg font-display font-light text-foreground">
              How We <br /> <span className="italic">Work Together</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
            From first conversation to final delivery — a clear, collaborative process
            designed around your project and timeline.
          </p>
        </div>

        {/* Steps — asymmetric bento-style, NOT a uniform 4-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.number}
              ref={(el) => { stepsRef.current[i] = el; }}
              className={`group relative border border-border p-8 transition-all duration-500 hover:border-accent ${
                i === 1 ? 'lg:mt-12' : i === 3 ? 'lg:mt-6' : ''
              }`}
            >
              {/* Number */}
              <div className="flex justify-between items-start mb-10">
                <span className="font-display text-5xl font-light text-foreground/10 group-hover:text-accent/30 transition-colors duration-500">
                  {step.number}
                </span>
                <span className="accent-line" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-light italic text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {step.description}
              </p>
              <span className="meta-label text-accent">{step.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
