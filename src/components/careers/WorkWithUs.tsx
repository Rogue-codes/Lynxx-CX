import React from "react";
import { work } from "../../assets";

function WorkWithUs() {
  return (
    <div className="mt-[11.25rem] w-full relative">
      <h2 className="text-2xl lg:text-5xl text-white-primary font-bold leading-[64px] text-center">
        Work With Us
      </h2>

      <div className="mt-12 lg:mt-[14rem] flex flex-wrap justify-center gap-8 items-center">
        <div className="w-[29.25rem]">
          <h2 className="text-xl font-semibold text-white-primary leading-8">Bridge the Gap at Lynx CX</h2>
          <p className="text-lg mt-[1.4rem] font-normal leading-[30px] text-white-secondary">
            An <span className="text-blue-100">Innovative Exchange</span> with the best liquidity, lowest
            fees, and top security of your assets. <br /><br /> Founded and run by a team of
            cryptocurrency experts, we have build a state-of-the-art platform
            that caters to all your crypto needs.
          </p>
        </div>

        <div className="w-[31.25rem] h-[30rem]">
          <img src={work} alt="" />

        </div>
      </div>
      <div className="w-[15.25rem] h-[15.6rem] absolute right-0 top-0 bg-blue-100 blur-[262px]"></div>
    </div>
  );
}

export default WorkWithUs;
