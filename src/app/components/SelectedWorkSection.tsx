import React from 'react';

export default function SelectedWorkSection() {
  return (
    <section className="py-24 px-6 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl md:text-4xl font-serif">Selected Works</h2>
          <span className="text-amber-500 hover:underline cursor-pointer">View All</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center text-zinc-500">
            Project Showcase 01
          </div>
          <div className="aspect-[4/3] bg-zinc-800 rounded-lg overflow-hidden flex items-center justify-center text-zinc-500">
            Project Showcase 02
          </div>
        </div>
      </div>
    </section>
  );
}
