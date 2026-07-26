'use client';

import React, { useEffect, useRef } from 'react';

const quickContacts = [
  {
    label: 'Email',
    value: 'hello@framework.studio',
    href: 'mailto:hello@framework.studio',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+1 (212) 555-0194',
    href: 'tel:+12125550194',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.39 2 2 0 0 1 3.62 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.14-1.14a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    value: '@framework.studio',
    href: 'https://instagram.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const availability = [
  { day: 'Monday – Friday', time: 'Available' },
  { day: 'Saturday', time: 'By Arrangement' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactInfo() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap?.registerPlugin(ScrollTrigger);

      if (sectionRef?.current) {
        gsap?.from(Array.from(sectionRef?.current?.children), {
          scrollTrigger: { trigger: sectionRef?.current, start: 'top 85%' },
          y: 30,
          opacity: 0,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
        });
      }
    };
    init();
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col gap-12">
      {/* Quick Contact Cards */}
      <div>
        <span className="meta-label text-accent mb-6 block">Direct Contact</span>
        <div className="flex flex-col gap-4">
          {quickContacts?.map((contact) => (
            <a
              key={contact?.label}
              href={contact?.href}
              className="group flex items-center gap-4 p-5 border border-border hover:border-accent transition-colors duration-300"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-secondary text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300 flex-shrink-0">
                {contact?.icon}
              </div>
              <div>
                <p className="meta-label text-muted-foreground mb-0.5">{contact?.label}</p>
                <p className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                  {contact?.value}
                </p>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="ml-auto text-muted-foreground/30 group-hover:text-accent transition-colors duration-300">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          ))}
        </div>
      </div>
      {/* Availability */}
      <div>
        <span className="meta-label text-accent mb-6 block">Availability</span>
        <div className="flex flex-col gap-3">
          {availability?.map((a) => (
            <div key={a?.day} className="flex justify-between items-center py-3 border-b border-border last:border-0">
              <span className="text-sm text-muted-foreground">{a?.day}</span>
              <span className={`meta-label ${a?.time === 'Available' ? 'text-accent' : a?.time === 'Closed' ? 'text-muted-foreground/40' : 'text-foreground'}`}>
                {a?.time}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Studio Location */}
      <div className="p-6 bg-secondary border border-border">
        <span className="meta-label text-accent mb-4 block">Studio Location</span>
        <p className="text-sm text-foreground font-medium mb-1">FrameWork Studio</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          247 West 38th Street, Suite 12<br />
          New York, NY 10018<br />
          United States
        </p>
        <p className="meta-label text-muted-foreground mt-4">
          Available for travel worldwide
        </p>
      </div>
      {/* Response promise */}
      <div className="flex items-start gap-4 p-5 border-l-2 border-accent bg-accent/5">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-accent flex-shrink-0 mt-0.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
        <div>
          <p className="text-sm font-medium text-foreground mb-1">24–48 Hour Response</p>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Every inquiry receives a personal response — no auto-replies, no templates.
          </p>
        </div>
      </div>
    </div>
  );
}
