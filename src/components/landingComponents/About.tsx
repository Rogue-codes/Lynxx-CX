import React from "react";
import { first, futuristic, second, third } from "../../assets";
import SignUpButton from "../../widgets/SignUpButton";

export default function About() {
  return (
    <div className="w-full px-5">
      <h2 className="text-white-primary text-2xl lg:text-5xl font-bold leading-[64px] text-center my-16 lg:my-[8.5rem]">
        About Us
      </h2>

      <div className="flex flex-wrap gap-2">
        <div className="w-full lg:w-[49%] lg:h-[37.1rem] border-2 p-2 rounded-2xl border-blue-100">
          <img
            src={futuristic}
            className="h-full w-full object-cover rounded-2xl"
            alt=""
          />
        </div>
        <div className="w-full mt-8 lg:mt-0 lg:w-[50%]">
          <p className="text-[#FBFBFB] pl-4 lg:pl-7 text-md lg:text-lg leading-[30px] font-medium">
            An <span className="text-blue-100">Innovative Exchange</span>with
            the best liquidity, lowest fees, and top security of your assets.{" "}
            <br />
            Founded and run by a team of cryptocurrency experts, we have build a
            state-of-the-art platform that caters to all your crypto needs.
          </p>
          <div className="flex mt-8 lg:mt-0 justify-between items-center">
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
          </div>

          <div className="flex justify-between items-center">
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
          </div>

          <div className="flex justify-between items-center">
            <div>
              <img src={third} alt="" />
            </div>
            <div>
              <h2 className="text-blue-100 text-3xl leading-[48px] font-semibold">
                5+
              </h2>
              <p className="text-white-secondary text-xs lg:text-md leading-6 font-normal">
                Upcoming Innovative Features
              </p>
            </div>
          </div>
          <button className="py-3 px-7 bg-blue-100 rounded-xl ml-9 mt-9">
          Learn more
          </button>
        </div>
      </div>
    </div>
  );
}
