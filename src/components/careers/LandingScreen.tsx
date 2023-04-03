import React, { useRef } from "react";
import { monitor } from "../../assets";
import { motion } from "framer-motion";

function LandingScreen() {
  const scrollRef = useRef(null);

  const slideInRight = {
    hide: {
      opacity: 0,
      x: "-95%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const slideInLeft = {
    hide: {
      opacity: 0,
      x: "25%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <div className="w-full mt-32 lg:mt-0 flex flex-wrap justify-center gap-12 items-center h-[40rem]">
      <motion.div
        variants={slideInRight}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
      >
        <h2 className="text-5xl text-white-primary">
          Careers at <span className="text-blue-100">Lynx CX</span>
        </h2>
        <p className="mt-10 text-lg font-normal leading-7 text-white-secondary">
          Join our quest to increase the freedom of money!
        </p>

        <button className="w-[12rem] mt-12 text-md font-medium leading-6 h-12 bg-blue-100 text-black-100 rounded-xl">
          View Openings
        </button>
      </motion.div>

      <motion.div
        variants={slideInLeft}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="w-[30rem] h-[20rem]"
      >
        <img src={monitor} className="w-full h-full object-contain" alt="" />
      </motion.div>
    </div>
  );
}

export default LandingScreen;
