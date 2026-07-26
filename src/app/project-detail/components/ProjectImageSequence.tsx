import React from 'react';

export default function ProjectImageSequence() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-6 space-y-12">
      <div className="aspect-[16/9] bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
        Image Frame 01
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="aspect-[4/5] bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
          Image Frame 02
        </div>
        <div className="aspect-[4/5] bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
          Image Frame 03
        </div>
      </div>
    </div>
  );
}
