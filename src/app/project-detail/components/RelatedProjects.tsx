import React from 'react';

export default function RelatedProjects() {
  return (
    <section className="py-20 px-6 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-serif mb-8">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[3/4] bg-zinc-900 rounded-lg p-4 flex items-end">
            <span className="font-serif text-lg">Urban Monoliths</span>
          </div>
          <div className="aspect-[3/4] bg-zinc-900 rounded-lg p-4 flex items-end">
            <span className="font-serif text-lg">Silent Horizon</span>
          </div>
          <div className="aspect-[3/4] bg-zinc-900 rounded-lg p-4 flex items-end">
            <span className="font-serif text-lg">Golden Hour Editorial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
