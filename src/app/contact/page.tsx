import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/app/contact/components/ContactHero';
import ContactForm from '@/app/contact/components/ContactForm';
import ContactInfo from '@/app/contact/components/ContactInfo';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <section className="py-16 md:py-24 px-6 md:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-border">
              <ContactInfo />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
