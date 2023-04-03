import React, { useRef } from "react";
import { money } from "../../assets";
import { motion } from "framer-motion";

export default function WhyWorkHere() {
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

  return (
    <div className="lg:mt-40 relative">
      <motion.h2
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-2xl lg:text-5xl text-white-primary font-bold leading-[64px] text-center"
      >
        Why Work Here
      </motion.h2>

      <motion.p
        variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="lg:mt-20 text-center text-white-primary text-md font-normal leading-8 lg:leading-4"
      >
        We are proud to offer competitive benefits that enable healthy and
        fulfilling careers at Lynx CX.
      </motion.p>

      <div className="flex flex-col lg:flex-row items-center gap-4 lg:mt-[5.25rem]">
        <motion.div
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="my-10 px-5 lg:px-14 py-10 bg-[#212636] rounded-2xl w-[28rem] border-2 border-blue-100"
        >
          <div className="w-20 h-20 border relative flex justify-center items-center rounded-full">
            <img src={money} alt="" />
            <div className="bg-blue-100 w-5 h-5 border-2  absolute left-5 top-8 blur-[22px]"></div>
          </div>
          <ul className="mt-8">
            <li className="text-md mt-4 text-white-secondary leading-6">
              Competitive salary
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Option to be paid in crypto
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Health insurance
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Flexible working hours
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="my-10 px-5 lg:px-14 py-10 bg-[#212636] rounded-2xl w-[28rem] border-2 border-blue-100"
        >
          <div className="w-20 h-20 border relative flex justify-center items-center rounded-full">
            <img src={money} alt="" />

            <div className="bg-blue-100 w-5 h-5 border-2  absolute left-5 top-8 blur-[22px]"></div>
          </div>
          <ul className="mt-8">
            <li className="text-md mt-4 text-white-secondary leading-6">
              Competitive salary
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Option to be paid in crypto
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Health insurance
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Flexible working hours
            </li>
          </ul>
        </motion.div>

        <motion.div
          variants={slideUp}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="my-10 px-5 lg:px-14 py-10 bg-[#212636] rounded-2xl w-[28rem] border-2 border-blue-100"
        >
          <div className="w-20 h-20 border relative flex justify-center items-center rounded-full">
            <img src={money} alt="" />

            <div className="bg-blue-100 w-5 h-5 border-2  absolute left-5 top-8 blur-[22px]"></div>
          </div>
          <ul className="mt-8">
            <li className="text-md mt-4 text-white-secondary leading-6">
              Competitive salary
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Option to be paid in crypto
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Health insurance
            </li>
            <li className="text-md mt-4 text-white-secondary leading-6">
              Flexible working hours
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="w-[15.25rem] h-[15.6rem] absolute left-0 top-0 bg-blue-100 blur-[262px]"></div>
    </div>
  );
}
