import React, { useRef } from "react";
import { mission } from "../../assets";
import { motion } from "framer-motion";

interface storyProps {
  header: string;
  semiHeader?: string;
  text: string;
  img?: string;
  reversed?: boolean;
  years?: boolean;
  noImages?: boolean;
  header2?: string;
  text2?: string;
  reversedGradient?: boolean;
}
export default function OurStory({
  header,
  semiHeader,
  text,
  img,
  reversed,
  years,
  noImages,
  header2,
  text2,
  reversedGradient,
}: storyProps) {
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
    <div
      className={`${
        reversed ? "flex-row-reverse text-right" : "flex-row"
      } flex justify-between items-start w-[80%] mx-auto mt-24 lg:mt-[7rem] relative flex-wrap`}
    >
      <motion.div
        variants={slideInRight}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-white-primary w-[28rem]"
      >
        <h2 className="text-md lg:text-start text-center font-semibold leading-6 text-blue-100">
          {header}
        </h2>
        <h2
          className={`${
            reversed ? "w-full" : "w-full lg:w-[70%]"
          } mt-6 text-20 text-center leading-6 uppercase text-white-secondary ]`}
        >
          {semiHeader}
        </h2>
        <p className="mt-6 text-md lg:text-left text-center font-normal">
          {text}
        </p>

        {years && (
          <div className="flex justify-center lg:justify-start items-center gap-6 mt-6 mx-auto lg:mx-0">
            <div>
              <p className="text-xl lg:text-3xl text-blue-100 font-semibold leading-10">
                3 Years
              </p>
              <p className="text-xs lg:text-md font-normal text-white-secondary mt-2">
                of development
              </p>
            </div>

            <div>
              <p className="text-xl lg:text-3xl text-blue-100 font-semibold leading-10">
                {">"}100
              </p>
              <p className="text-xs lg:text-md font-normal text-white-secondary mt-2">
                satisfied users
              </p>
            </div>
          </div>
        )}
      </motion.div>
      <motion.div
        variants={slideInLeft}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="h-[25rem] mt-12 lg:mt-0 w-[25rem] mx-auto lg:mx-0"
      >
        {noImages ? (
          <>
            <p className="text-md lg:text-start text-center font-semibold leading-6 text-blue-100">
              {header2}
            </p>
            <p className="mt-6 text-md font-normal lg:text-start text-center text-white-primary">
              {text2}
            </p>
          </>
        ) : (
          <img src={img} className="w-full h-full object-cover" alt="" />
        )}
      </motion.div>

      <div
        className={`${
          reversedGradient ? "right-0" : "left-0"
        } w-full lg:w-[15.25rem] h-[15.6rem] absolute top-0 bg-blue-100 blur-[256px]`}
      ></div>
    </div>
  );
}
