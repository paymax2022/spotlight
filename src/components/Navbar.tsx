"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-between items-center px-6 py-4 bg-black relative">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image src="/navbarLogo.svg" alt="TEF Logo" width={200} height={30} />
      </div>

      {/* Menu Button */}
      <button
        className="p-2 rounded-full bg-purple-600 hover:bg-purple-700"
        onClick={() => setMenuOpen(true)}
      >
        <Image src="/menuIcon.png" alt="Menu" width={20} height={20} />
      </button>

      {/* Sidebar Menu - Right Aligned */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-max bg-black p-6 shadow-lg transition-transform">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-full bg-purple-600 hover:bg-purple-700"
            onClick={() => setMenuOpen(false)}
          >
            <Image src="/closeIcon.svg" alt="Close" width={20} height={20} />
          </button>

          {/* Menu Items */}
          <nav className="mt-12 flex flex-col space-y-6 text-white text-lg font-semibold italic">
            <a href="#" className="hover:text-purple-400">
              HOME
            </a>
            <a href="#" className="hover:text-purple-400">
              ABOUT US
            </a>
            <a href="#" className="hover:text-purple-400 flex justify-between">
              TALENT HUNT <span>›</span>
            </a>
            
            <Link href="/campaign" className="hover:text-purple-400">
              CAMPAIGN
            </Link>
            <a href="#" className="hover:text-purple-400">
              CONTACT US
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
