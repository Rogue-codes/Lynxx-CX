import React, { useRef } from "react";
import { first, futuristic, second, third } from "../../assets";
import SignUpButton from "../../widgets/SignUpButton";
import { motion } from "framer-motion";
export default function About() {
  const scrollRef = useRef(null);

  const appear = {
    hide: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };

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

  const slideUp = {
    hide: {
      y: "20%",
      opacity: 0,
    },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <div className="w-full px-5">
      <motion.h2
        variants={appear}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-white-primary text-2xl lg:text-5xl font-bold leading-[64px] text-center my-16 lg:my-[8.5rem]"
      >
        About Us
      </motion.h2>

      <div className="flex flex-wrap gap-2">
        <motion.div
          variants={slideInRight}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="w-full lg:w-[49%] lg:h-[37.1rem] border-2 p-2 rounded-2xl border-blue-100"
        >
          <img
            src={futuristic}
            className="h-full w-full object-cover rounded-2xl"
            alt=""
          />
        </motion.div>

        <motion.div
          variants={slideInLeft}
          viewport={{ once: true }}
          initial="hide"
          whileInView="show"
          ref={scrollRef}
          className="w-full mt-8 lg:mt-0 lg:w-[50%]"
        >
          <p className="text-[#FBFBFB] pl-4 lg:pl-7 text-md lg:text-lg leading-[30px] font-medium">
            An <span className="text-blue-100">Innovative Exchange</span>with
            the best liquidity, lowest fees, and top security of your assets.{" "}
            <br />
            Founded and run by a team of cryptocurrency experts, we have build a
            state-of-the-art platform that caters to all your crypto needs.
          </p>
          <motion.div
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="flex mt-8 lg:mt-0 justify-between items-center"
          >
            <div>
              <img src={first} alt="" />
            </div>
            <div>
              <h2 className="text-blue-100 text-3xl leading-[48px] font-semibold">
                100+
              </h2>
              <p className="text-white-secondary text-xs lg:text-md leading-6 font-normal">
                Total Trading Pairs
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="flex justify-between items-center"
          >
            <div>
              <img src={second} alt="" />
            </div>
            <div>
              <h2 className="text-blue-100 text-3xl leading-[48px] font-semibold">
                100+
              </h2>
              <p className="text-white-secondary text-xs lg:text-md leading-6 font-normal">
                Countries Supported
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="flex justify-between items-center"
          >
            <div>
              <img src={third} alt="" />
            </div>
            <div>
              <h2 className="text-blue-100 text-3xl leading-[48px] font-semibold">
                5+
              </h2>
              <p className="text-white-secondary text-xs lg:text-md leading-6 font-normal">
                Upcoming Features
              </p>
            </div>
          </motion.div>
          <motion.button
            variants={appear}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            className="py-3 mx-auto flex justify-center px-7 bg-blue-100 rounded-xl lg:ml-9 mt-9"
          >
            Learn more
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
