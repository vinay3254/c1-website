import React from 'react';

export default function ContactInfo() {
  return (
    <div className="space-y-8 text-zinc-300">
      <div>
        <h3 className="text-amber-500 font-mono text-sm uppercase mb-2">Direct Contact</h3>
        <p className="text-xl font-semibold">hello@framework.studio</p>
        <p className="text-zinc-400">+1 (555) 234-5678</p>
      </div>
      <div>
        <h3 className="text-amber-500 font-mono text-sm uppercase mb-2">Studio Location</h3>
        <p className="text-zinc-400">New York, NY & London, UK</p>
      </div>
      <div>
        <h3 className="text-amber-500 font-mono text-sm uppercase mb-2">Socials</h3>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Vimeo</a>
          <a href="#" className="hover:text-white transition">Behance</a>
        </div>
      </div>
    </div>
  );
}
