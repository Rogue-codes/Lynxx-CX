import React, { useRef } from "react";
import { work } from "../../assets";
import { motion } from "framer-motion";
function WorkWithUs() {
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

  const slideRight = {
    hide: {
      opacity: 0,
      x: "-5%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  const slideLeft = {
    hide: {
      opacity: 0,
      x: "5%",
    },
    show: {
      opacity: 1,
      x: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="mt-[11.25rem] w-full relative">
      <motion.h2
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-2xl lg:text-5xl text-white-primary font-bold leading-[64px] text-center"
      >
        Work With Us
      </motion.h2>

      <div className="mt-12 lg:mt-[5rem] flex flex-wrap justify-center gap-8 items-center">
        <motion.div
          variants={slideRight}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="w-[29.25rem]"
        >
          <motion.h2
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-xl font-semibold text-white-primary leading-8"
          >
            Bridge the Gap at Lynx CX
          </motion.h2>
          <motion.p
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="text-lg mt-[1.4rem] font-normal leading-[30px] text-white-secondary"
          >
            An <span className="text-blue-100">Innovative Exchange</span> with
            the best liquidity, lowest fees, and top security of your assets.{" "}
            <br />
            <br /> Founded and run by a team of cryptocurrency experts, we have
            build a state-of-the-art platform that caters to all your crypto
            needs.
          </motion.p>
        </motion.div>

        <motion.div
          variants={slideLeft}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="w-[31.25rem] h-[30rem]"
        >
          <img src={work} alt="" />
        </motion.div>
      </div>
      <div className="w-[15.25rem] h-[15.6rem] absolute right-0 top-0 bg-blue-100 blur-[262px]"></div>
    </div>
  );
}

export default WorkWithUs;
