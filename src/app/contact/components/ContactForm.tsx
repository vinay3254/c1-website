'use client';

import React, { useState, useRef, useEffect } from 'react';

const projectTypes = [
  'Editorial Photography',
  'Wedding & Events',
  'Commercial / Brand',
  'Documentary / Film',
  'Portrait Session',
  'Architecture',
  'Other',
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    date: '',
    message: '',
  });

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      if (formRef.current) {
        gsap.from(Array.from(formRef.current.children), {
          scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
          y: 30,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: 'power3.out',
        });
      }
    };
    init();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submit handler — connect to backend here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col gap-6 py-16">
        <span className="accent-line" />
        <h2 className="heading-md font-display font-light italic text-foreground">
          Message Received
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
          Thank you for reaching out. We'll get back to you within 24–48 hours
          to discuss your project.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="self-start text-[11px] font-bold uppercase tracking-[0.3em] text-accent border-b border-accent pb-0.5 hover:text-foreground hover:border-foreground transition-all duration-300 mt-4"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-10">
        <span className="meta-label text-accent mb-4 block">Inquiry Form</span>
        <h2 className="heading-md font-display font-light text-foreground mb-3">
          Tell Us About <span className="italic">Your Project</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We respond to all inquiries within 24 hours. For urgent requests, reach us directly at{' '}
          <a href="mailto:hello@framework.studio" className="text-accent hover:text-foreground transition-colors">
            hello@framework.studio
          </a>
        </p>
      </div>

      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-8">
        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="meta-label text-muted-foreground">Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your full name"
              className="form-input"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="meta-label text-muted-foreground">Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="form-input"
            />
          </div>
        </div>

        {/* Project Type + Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <label className="meta-label text-muted-foreground">Project Type *</label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="form-input bg-transparent cursor-pointer"
            >
              <option value="" disabled>Select type</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label className="meta-label text-muted-foreground">Preferred Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2">
          <label className="meta-label text-muted-foreground">Project Brief *</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Describe your project, vision, timeline, and any specific requirements..."
            className="form-input resize-none"
          />
        </div>

        {/* Submit */}
        <div className="flex items-center gap-8 pt-2">
          <button
            type="submit"
            className="btn-fill border border-foreground px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-foreground hover:text-primary-foreground transition-colors duration-500 min-h-[52px]"
          >
            <span>Send Inquiry</span>
          </button>
          <p className="text-[11px] text-muted-foreground">
            Response within 24–48 hrs
          </p>
        </div>
      </form>
    </div>
  );
}
