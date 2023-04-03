import React, { useRef } from "react";
import ContactForm from "../components/contact/ContactForm";
import { motion } from "framer-motion";
export default function Contact() {
  const scrollRef = useRef(null);

  const appear = {
    hide: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <div className="w-full pt-28 pb-28 relative">
      <div className="t40-container">
        <motion.h2
          variants={appear}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="text-3xl font-bold leading-[64px] mt-2 mb-[5rem] text-white-primary text-center"
        >
          Contact Us
        </motion.h2>
        <ContactForm />
      </div>

      <div className="w-full lg:w-[21.25rem] h-[19.6rem] absolute left-0 top-0 bg-blue-100 blur-[462px]"></div>

      <div className="w-full lg:w-[21.25rem] h-[29.6rem] absolute right-0 bottom-0 bg-blue-100 blur-[562px]"></div>
    </div>
  );
}
