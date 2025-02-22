"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-black relative">
    
      <div className="flex items-center space-x-2">
        <Link href="/">
        <Image src="/navbarLogo.svg" alt="TEF Logo" width={200} height={30} />
        </Link>
      </div>

    
      <button
        className="p-2 rounded-full bg-purple-600 hover:bg-purple-700"
        onClick={() => setMenuOpen(true)}
      >
        <Image src="/menuIcon.png" alt="Menu" width={20} height={20} />
      </button>

   
      {menuOpen && (
        <div className="fixed top-0 z-[9999] right-0 w-1/2 lg:w-60 rounded-lg h-max bg-black p-6 shadow-lg transition-transform">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-purple-600 hover:bg-purple-700"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/closeIcon.svg" alt="Close" width={20} height={20} />
          </button>

          {/* Menu Items */}
          <nav className="mt-12 flex flex-col space-y-6 text-white text-lg font-semibold italic">
            <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
              HOME
            </Link>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
              ABOUT US
            </a>
            {/* <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-purple-400 flex justify-between">
              TALENT HUNT <span>›</span>
            </a> */}
            <Link href="/campaign" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
              CAMPAIGN
            </Link>
            <a href="#" onClick={() => setMenuOpen(false)} className="hover:text-purple-400">
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
