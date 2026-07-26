import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import SelectedWorkSection from '@/app/components/SelectedWorkSection';
import ParallaxStatement from '@/app/components/ParallaxStatement';
import ProcessSection from '@/app/components/ProcessSection';
import ClosingCTA from '@/app/components/ClosingCTA';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SelectedWorkSection />
        <ParallaxStatement />
        <ProcessSection />
        <ClosingCTA />
      </main>
      <Footer />
    </>
  );
}
