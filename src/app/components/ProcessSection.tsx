import React from 'react';

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif mb-12 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-zinc-800 rounded-lg">
            <span className="text-amber-500 font-mono text-xl mb-4 block">01</span>
            <h3 className="text-xl font-semibold mb-2">Discovery</h3>
            <p className="text-zinc-400">Understanding your concept, vision, and creative goals.</p>
          </div>
          <div className="p-6 border border-zinc-800 rounded-lg">
            <span className="text-amber-500 font-mono text-xl mb-4 block">02</span>
            <h3 className="text-xl font-semibold mb-2">Production</h3>
            <p className="text-zinc-400">Capturing cinematic stills and motion with precision.</p>
          </div>
          <div className="p-6 border border-zinc-800 rounded-lg">
            <span className="text-amber-500 font-mono text-xl mb-4 block">03</span>
            <h3 className="text-xl font-semibold mb-2">Delivery</h3>
            <p className="text-zinc-400">High-end grading, editing, and final delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
