import React from 'react';
import Link from 'next/link';

export default function AppLogo() {
  return (
    <Link href="/" className="font-display font-light tracking-[0.2em] text-lg uppercase text-foreground">
      FRAMEWORK<span className="text-accent">.</span>
    </Link>
  );
}
