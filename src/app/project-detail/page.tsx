import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectHero from '@/app/project-detail/components/ProjectHero';
import ProjectContent from '@/app/project-detail/components/ProjectContent';
import ProjectImageSequence from '@/app/project-detail/components/ProjectImageSequence';
import RelatedProjects from '@/app/project-detail/components/RelatedProjects';

export default function ProjectDetailPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectHero />
        <ProjectContent />
        <ProjectImageSequence />
        <RelatedProjects />
      </main>
      <Footer />
    </>
  );
}
