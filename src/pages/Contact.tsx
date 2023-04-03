import React from "react";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <div className="w-full pt-28 pb-28 relative">
      <div className="t40-container">
        <h2 className="text-3xl font-bold leading-[64px] mt-2 mb-[5rem] text-white-primary text-center">Contact Us</h2>
        <ContactForm />
      </div>

      
      <div className="w-[21.25rem] h-[19.6rem] absolute left-0 top-0 bg-blue-100 blur-[462px]">

      </div>

      <div className="w-[21.25rem] h-[29.6rem] absolute right-0 bottom-0 bg-blue-100 blur-[562px]">

      </div>
    </div>
  );
}
