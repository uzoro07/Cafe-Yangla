import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-[#0C0804] border-t border-[#2B2620] py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-playfair font-semibold tracking-wider text-white mb-2">
            CAFE YANGLA
          </h3>
          <p className="text-[#A39F98] text-sm font-light">
            North Sikkim's Finest Cafe
          </p>
        </div>

        <div className="flex items-center gap-8 text-sm text-[#A39F98]">
          <a href="#home" className="hover:text-[#D4A373] transition-colors">Home</a>
          <a href="#menu" className="hover:text-[#D4A373] transition-colors">Menu</a>
          <a href="#location" className="hover:text-[#D4A373] transition-colors">Location</a>
        </div>

        <div className="text-[#A39F98] text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Cafe Yangla.</p>
          <p className="mt-1 opacity-60">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};