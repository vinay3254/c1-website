import React from 'react';
import '../styles/index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Client Website',
  description: 'Welcome to Client Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
