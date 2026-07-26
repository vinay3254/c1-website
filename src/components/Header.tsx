'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

const navLinks = [
  { label: 'Gallery', href: '/gallery' },
  { label: 'Projects', href: '/project-detail' },
  { label: 'Contact', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border' :'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <AppLogo
              size={36}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span className="font-display text-xl font-light tracking-[0.15em] uppercase text-foreground">
              FrameWork
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks?.map((link) => (
              <Link
                key={link?.href}
                href={link?.href}
                className="nav-link text-[11px] font-semibold uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/contact"
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-all duration-300"
            >
              Book a Session
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-all duration-300 origin-center ${
                menuOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </button>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col items-center gap-10">
          {navLinks?.map((link, i) => (
            <Link
              key={link?.href}
              href={link?.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-5xl font-light italic text-foreground hover:text-accent transition-colors duration-300"
              style={{ transitionDelay: menuOpen ? `${i * 80}ms` : '0ms' }}
            >
              {link?.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-[11px] font-bold uppercase tracking-[0.4em] text-accent border border-accent px-8 py-4 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Book a Session
          </Link>
        </nav>
      </div>
    </>
  );
}
