import React, { useRef } from "react";
import { Laptop, line, mask } from "../../assets";
import SignUpButton from "../../widgets/SignUpButton";
import { motion } from "framer-motion";

export default function Welcome() {
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

  const scaleIn = {
    hide: {
      opacity: 0,
      scale: 0.5,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: { delay: 2, duration: 6, type: "spring", stiffness: 120 },
    },
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between relative">
      <motion.div
        variants={slideInRight}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="py-7 w-full pl-5"
      >
        <h2 className="text-white-primary text-xl lg:text-5xl font-bold pt-[6rem] leading-10 lg:leading-[72px]">
          Best Place to <span className="text-blue-100">Buy & Sell</span>{" "}
          Digital Assets
        </h2>
        <p className="mt-6 lg:mt-12 text-white-secondary">
          Join our waitlist for an early sign-up bonus!
        </p>

        <div className="w-full mt-12 gap-2 flex items-center">
          <input
            className="w-[10rem] lg:w-[17.3rem] p-4  rounded-xl border border-[#787A8D99] bg-transparent"
            type="text"
            name=""
            id=""
            placeholder="Enter your email "
          />
          <SignUpButton content={"Sign up"} />
        </div>

        <motion.div
          variants={scaleIn}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="lg:w-[21.25rem] h-[19.6rem] absolute left-0 top-0 bg-blue-100 blur-[462px]"
        ></motion.div>

        <motion.div
          variants={scaleIn}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef} className="lg:w-[21.25rem] h-[29.6rem] absolute right-0 bottom-0 bg-blue-100 blur-[562px]"></motion.div>

        <div className="lg:h-[24.6rem] absolute left-[28.9rem] top-[14rem]">
          <img src={line} alt="" />
        </div>

        <div className="w-[21.25rem] h-[19.6rem] absolute right-0 top-[10rem]">
          <img src={mask} alt="" />
        </div>
      </motion.div>

      {/* right */}
      <motion.div
        variants={slideInLeft}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
      >
        <div className="w-[15rem] h-[13rem] lg:w-[30.7rem] lg:h-[26.6rem]">
          <img src={Laptop} className="w-full h-full object-contin" alt="" />
        </div>
      </motion.div>
    </div>
  );
}
