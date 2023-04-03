import React, {useRef} from "react";
import { roadmap } from "../../assets";
import {motion} from "framer-motion"
export default function RoadMap() {
  const scrollRef = useRef(null);
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
    <div className="w-full px-5 mt-8 lg:mt-28 relative">
      <motion.h2 variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef} className="text-white-primary text-2xl lg:text-5xl leading-[64px] font-bold text-center mb-8 mb-28">
        Our Roadmap
      </motion.h2>
      <motion.div variants={slideUp}
            viewport={{ once: true }}
            initial="hide"
            whileInView="show"
            ref={scrollRef} className="bg-[#212636] rounded-[20px]">
        <img src={roadmap} className="rounded-[20px]" alt="" />
      </motion.div>{" "}
      <div className="w-full lg:w-[21.25rem] h-[19.6rem] absolute left-0 top-0 bg-blue-100 blur-[462px]"></div>
    </div>
  );
}
