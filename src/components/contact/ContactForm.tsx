import React, { useRef } from "react";
import { calling, mail, vector } from "../../assets";
import { motion } from "framer-motion";

export default function ContactForm() {
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
    <div className="w-full lg:w-[90%] mx-auto flex justify-around items-start flex-wrap">
      <motion.div
        variants={slideInRight}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="w-full lg:w-[40%]"
      >
        <div className="flex justify-between items-center ">
          <div className="w-16 lg:w-[4rem] flex justify-center items-center bg-black-100 rounded-full border h-[4rem]">
            <img src={vector} alt="" />
          </div>
          <p className="text-sm lg:text-md w-[70%] lg:w-[80%] text-white-secondary leading-6 font-normal">
            Alfred-Lechler Strasse 8, 68940 Koln, Germany
          </p>
        </div>

        <div className="flex mt-8 justify-between items-center ">
          <div className="w-[4rem] flex justify-center items-center bg-black-100 rounded-full border h-[4rem]">
            <img src={mail} alt="" />
          </div>
          <p className="text-sm lg:text-md w-[70%] lg:w-[80%] text-white-secondary leading-6 font-normal">
            Contact@lynxcx.com
          </p>
        </div>

        <div className="flex mt-8 justify-between items-center ">
          <div className="w-[4rem] flex justify-center items-center bg-black-100 rounded-full border h-[4rem]">
            <img src={calling} alt="" />
          </div>
          <p className="text-sm lg:text-md w-[70%] lg:w-[80%] text-white-secondary leading-6 font-normal">
            +48 579 874 885 77{" "}
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={slideInLeft}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef}
        className="w-full lg:w-[35rem] px-2 lg:px-5 mt-12 lg:mt-0 py-10 bg-black-100"
      >
        <h2 className="text-lg leading-6 text-center font-medium text-white-secondary">
          How can we help you?
        </h2>
        <p className="text-sm leading-6 text-center font-medium text-white-secondary">
          We will send you a response as soon as possible.
        </p>
        <form action="" className="mt-6 px-2">
          <div className="flex flex-wrap justify-between items-center">
            <div className="w-full lg:w-[15rem] ">
              <label
                htmlFor=""
                className="text-md text-white-secondary leading-4 block"
              >
                Email
              </label>
              <input
                type="text"
                name=""
                id=""
                className="border text-white-secondary w-full mt-2 bg-transparent pl-2 h-[3.5rem] rounded-xl placeholder:text-sm"
                placeholder="type here..."
              />
            </div>

            <div className="w-full mt-8 lg:mt-0 lg:w-[15rem] ">
              <label
                htmlFor=""
                className="text-md text-white-secondary leading-4 block"
              >
                Name
              </label>
              <input
                type="text"
                name=""
                id=""
                className="text-white-secondary border w-full mt-2 bg-transparent pl-2 h-[3.5rem] rounded-xl placeholder:text-sm"
                placeholder="type here..."
              />
            </div>
          </div>

          <div className="w-full lg:w-[15rem] mt-6">
            <select
              name=""
              id=""
              className="border text-white-secondary  w-full mt-2 bg-transparent pl-2 h-[3.5rem] rounded-xl text-sm"
            >
              <option value="">Funding Issue</option>
              <option value="">Trading Issue</option>
              <option value="">Account Creation Issue</option>
              <option value="">Verification Issue</option>
            </select>
          </div>

          <div className="w-full mx-auto mt-6">
            <textarea
              name=""
              id=""
              className="text-white-secondary rounded-xl p-5 w-full h-[10.75rem] bg-transparent border"
              placeholder="Please write your message"
            ></textarea>
          </div>

          <button className="w-32 lg:w-[12rem] py-3 mx-auto flex justify-center lg:mx-0 lg:py-4 bg-blue-100 text-md mt-8 font-medium leading-6 rounded-xl">
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
}
