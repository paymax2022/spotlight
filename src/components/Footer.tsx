"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`); 
  };

  return (
    <div className='bg-[#6200DF] max-h-screen px-10 py-10 text-white'>
      <div className='flex justify-center items-center'>
        <Image src='/logo.png' alt='Logo' width={200} height={250} />
      </div>
     <div className='lg:flex justify-between'>
      <div className='mt-5' >
          <p className="font-bold mb-4">JOIN US</p>
          <p>
          Timeless Entertainment Factory is staging talent hunt<br />
          shows across selected states in Nigeria, showcasing<br />
          exceptional talents worthy to be on our platform.    
          </p>
      </div>
     <div  className='flex mt-5 gap-16' >
     <div>
          <p className="font-bold mb-4">MENU</p>
          <ul>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>EVENTS</li>
            <li>TIMELINE</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div>
          <p className="font-bold mb-4">LINKS</p>
          <ul>
            <li>TERMS</li>
            <li>PRIVACY</li>
            <li>COOKIES</li>
          </ul>
        </div>
     </div>
     <div className="mt-8">
        <p className="font-bold text-lg mb-2">SUBSCRIBE AND FOLLOW</p>
        <form onSubmit={handleSubmit} className="flex gap-3 mt-3">
          <input
            type="email"
            placeholder="ENTER YOUR EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-full px-4 py-2 text-black outline-none w-[250px]"
            required
          />
          <button 
            type="submit" 
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
     </div>
      <div className='mt-5 lg:flex lg:justify-between'>
      <p className="text-sm">© 2025 Timeless Entertainment Factory. All Rights Reserved.</p>
      <div className="flex gap-5 mt-5 lg:align-center ">
        <Image src="/facebook.png" alt="Facebook Logo" width={22.5} height={10} />
        <Image src="/x.png" alt="X Logo" width={22.5} height={10} />
        <Image src="/instagram.png" alt="Instagram Logo" width={22.5} height={10} />
      </div>
      </div>
    </div>
  
  );
};

export default Footer;
