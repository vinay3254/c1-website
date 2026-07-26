import React from 'react';

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Your Name</label>
        <input type="text" className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Email Address</label>
        <input type="email" className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white" placeholder="john@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Project Type</label>
        <select className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white">
          <option>Photography</option>
          <option>Videography</option>
          <option>Full Editorial Campaign</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
        <textarea rows={4} className="w-full p-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white" placeholder="Tell us about your project..."></textarea>
      </div>
      <button type="submit" className="w-full py-4 bg-amber-500 text-black font-semibold rounded-lg hover:bg-amber-400 transition">
        Send Inquiry
      </button>
    </form>
  );
}
