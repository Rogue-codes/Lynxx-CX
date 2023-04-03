import React, {useRef} from "react";
import {motion} from "framer-motion"
interface careers {
  title: string;
  desc: string;
}

interface desc {
  number: string;
  details: string;
}

export default function Values() {
  const data: careers[] = [
    {
      title: "User-Focused",
      desc: `We protect our users by putting our users' needs first and delivering quality service.`,
    },
    {
      title: "User-Focused",
      desc: `We protect our users by putting our users' needs first and delivering quality service.`,
    },
    {
      title: "User-Focused",
      desc: `We protect our users by putting our users' needs first and delivering quality service.`,
    },
    {
      title: "User-Focused",
      desc: `We protect our users by putting our users' needs first and delivering quality service.`,
    },
    {
      title: "User-Focused",
      desc: `We protect our users by putting our users' needs first and delivering quality service.`,
    },
  ];

  const desc: desc[] = [
    {
      number: "40+",
      details: "Nationalities",
    },
    {
      number: "2K+",
      details: "Employees",
    },
    {
      number: "2K+",
      details: "Locations",
    },
  ];

  const scrollRef = useRef(null);

  const slideUp = {
    hide: {
      opacity: 0,
      y: "-95%",
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <div className="w-full py-12 relative">
      <motion.h2 variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className="text-center text-white-primary text-2xl lg:text-5xl mt-[5rem] leading-[64px] font-bold">
        Our Values
      </motion.h2>
      <motion.p variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className="text-md font-normal mt-8 lg:mt-20 text-white-secondary leading-6 text-center">
        Lynx CX Core Values guide our behavior, decisions, and action, enabling
        unified collaboration across our diverse, international teams.
      </motion.p>

      <div className="flex justify-start gap-8 mt-20 items-center flex-wrap">
        {data.map((item, index) => (
          <motion.div
          variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
            className="w-[22rem] mb-16 h-[18rem] p-5 bg-[#212636] mx-auto lg:mx-0"
            key={index}
          >
            <div className="border-b-2 border-blue-100">
              <h1 className="text-2xl leading-7 font-medium text-blue-100">
                0{index + 1}
              </h1>
              <p className="text-xl font-medium leading-8 text-white-primary mt-6">
                {item.title}
              </p>
              <p className="mt-3 text-white-secondary mb-20">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex flex-wrap w-full items-center py-8 rounded-2xl bg-blue-100">
        {desc.map((item, index) => (
          <div
            key={index}
            className="border-l-[.5px] border-white-secondary w-[24rem] mt-12 flex  flex-col items-center"
          >
            <div className="w-24 flex justify-center items-center h-24 bg-[#212636] rounded-full">
              <h1 className="text-white text-2xl text-white-primary">
                {item.number}
              </h1>
            </div>
            <p className="mt-4 text-xl leading-8 font-medium text-black-100">
              {item.details}
            </p>
          </div>
        ))}
      </div>

      <div className="w-[21.25rem] h-[19.6rem] absolute left-0 top-0 bg-blue-100 blur-[462px]"></div>

      <div className="w-[21.25rem] h-[29.6rem] absolute right-0 bottom-0 bg-blue-100 blur-[562px]"></div>
    </div>
  );
}
