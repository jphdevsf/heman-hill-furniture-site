"use client";
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Static calculation
  return (
    <footer className="bg-black row-start-3 flex gap-6 flex-wrap items-center justify-center mt-32 md:mt-6">
      <p className="text-sm text-white my-5 font-light">© {currentYear} HemanHill.</p>
    </footer>
  );
};

export default Footer;