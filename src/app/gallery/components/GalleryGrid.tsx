import React from 'react';
import AppImage from '@/components/ui/AppImage';

export default function GalleryGrid() {
  return (
    <section className="py-16 px-6 md:px-8 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="aspect-[3/4] relative bg-zinc-900 overflow-hidden group">
          <AppImage
            src="https://images.unsplash.com/photo-1571513176966-90035a8de79c"
            alt="Gallery Item 1"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="aspect-[3/4] relative bg-zinc-900 overflow-hidden group">
          <AppImage
            src="https://images.unsplash.com/photo-1572273191673-dbd7f30e3211"
            alt="Gallery Item 2"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="aspect-[3/4] relative bg-zinc-900 overflow-hidden group">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_1c438c9f7-1772685325442.png"
            alt="Gallery Item 3"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
