import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full p-4 border-t mt-auto bg-background">
      <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Client Website. All rights reserved.
      </div>
    </footer>
  );
}
