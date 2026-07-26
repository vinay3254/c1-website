import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <AppLogo
            size={28}
            className="transition-transform duration-300 group-hover:rotate-12"
          />
          <span className="font-display text-base font-light tracking-[0.15em] uppercase text-foreground">
            FrameWork
          </span>
        </Link>

        {/* Links */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {[
            { label: 'Gallery', href: '/gallery' },
            { label: 'Projects', href: '/project-detail' },
            { label: 'Contact', href: '/contact' },
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
          ]?.map((link) => (
            <Link
              key={link?.label}
              href={link?.href}
              className="nav-link text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {link?.label}
            </Link>
          ))}
        </nav>

        {/* Social + Copyright */}
        <div className="flex items-center gap-5">
          {[
            { label: 'IG', href: '#', title: 'Instagram' },
            { label: 'BE', href: '#', title: 'Behance' },
            { label: 'VS', href: '#', title: 'Vimeo' },
          ]?.map((s) => (
            <a
              key={s?.label}
              href={s?.href}
              title={s?.title}
              className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground hover:text-accent transition-colors duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {s?.label}
            </a>
          ))}
          <span className="text-[10px] text-muted-foreground tracking-wider hidden lg:block">
            © 2026 FrameWork
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-6 text-center lg:hidden">
        <span className="text-[10px] text-muted-foreground tracking-wider">
          © 2026 FrameWork
        </span>
      </div>
    </footer>
  );
}
