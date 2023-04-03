import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Exchange() {
  const scrollRef = useRef(null);

  const slideUp = {
    hide: {
      opacity: 0,
      y: "5%",
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const appear = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <motion.div
      variants={appear}
      viewport={{ once: true }}
      initial="hide"
      whileInView="show"
      ref={scrollRef}
      className="w-full relative mt-[9rem] py-20 px-5 lg:px-0 rounded-2xl bg-[#212636]"
    >
      <motion.h2
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className=" text-2xl lg:text-5xl text-white-primary font-bold leading-[64px] text-center"
      >
        Exchange the World With Us
      </motion.h2>
      <Link to="/jobs">
        <motion.button
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="px-[1.63rem] py-3 bg-blue-100 flex justify-center items-center rounded-xl mt-10 !mx-auto"
        >
          See all Opportunities
        </motion.button>
      </Link>
      <div className="w-[15.25rem] h-[15.6rem] absolute right-0 top-0 bg-blue-100 blur-[262px]"></div>
    </motion.div>
  );
}
