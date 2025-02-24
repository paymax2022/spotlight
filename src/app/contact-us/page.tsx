"use client";

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    option: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex flex-col md:flex-row bg-purple-500 text-black rounded-xl shadow-lg overflow-hidden max-w-4xl mx-5 lg:mx-auto my-10">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-2xl font-bold mb-4">Get in Touch!</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Choose</option>
            <option value="option1">Vote</option>
            <option value="option2">Contest</option>
            <option value="option3">Contestants</option>
            <option value="option4">Complaint</option>
            <option value="option5">Partnership</option>
            <option value="option6">Sponsorship</option>
          </select>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 h-24"
          ></textarea>
          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800 transition"
          >
            Get In Touch!
          </button>
        </form>
      </div>
  
      <div className="w-full md:w-1/2">
        <img
          src="/contact-us.png"
          alt="Camera"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ContactForm;
