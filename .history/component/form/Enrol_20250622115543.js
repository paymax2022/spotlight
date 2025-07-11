"use client";
import { useEduorContext } from "@/context/EduorContext";
import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactForm = () => {
  const { isValidEmail } = useEduorContext();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill out all fields.", { position: "top-right" });
    } else if (!isValidEmail(email)) {
      toast.warning("Please provide a valid email address.", {
        position: "top-right",
      });
    } else {
      // If the form is successfully submitted, show a success toast
      toast.success("Form submitted successfully!", {
        position: "top-right",
      });
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
         <div className="col-xl-6">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-xl-12">
          <textarea
            rows={8}
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="common_btn_2">
            SEND REQUEST
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
