import React, { useRef } from "react";
import { briefcase } from "../../assets";
import { Data } from "../../utils/Data";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Team() {
  const scrollRef = useRef(null);

  const slideUp = {
    hide: {
      opacity: 0,
      y: "5%",
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
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
    <div className="mt-[8.75rem] relative">
      <motion.h2
        variants={appear}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="text-2xl lg:text-5xl font-bold leading-[64px] text-white-primary text-center"
      >
        Choose Your Team
      </motion.h2>
      <motion.p
        variants={appear}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="lg:mt-20 text-center text-white-primary px-6  text-md font-normal leading-16 lg:leading-4"
      >
        Select a team most relevant to your interests and experience to view job
        openings.
      </motion.p>

      <div className="flex justify-center lg:justify-start mt-20 gap-9 items-center flex-wrap">
        {Data.map((item, index) => (
          <motion.div
            variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef}
            key={index}
            className="py-6 px-6 m-4 bg-[#212636] w-[20rem] rounded-2xl flex justify-start gap-8 items-center"
          >
            <div>
              <img src={briefcase} width={50} alt="" />
            </div>

            <Link
              to={`/jobs/${item.title}`}
              className="hover:text-blue-100 transition-all"
            >
              {item.title}
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="w-[21.25rem] h-[19.6rem] absolute left-0 bottom-0 bg-blue-100 blur-[462px]"></div>
    </div>
  );
}
