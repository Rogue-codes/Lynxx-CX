import React from "react";
import { monitor } from "../../assets";

function LandingScreen() {
  return (
    <div className="w-full mt-32 lg:mt-0 flex flex-wrap justify-center gap-12 items-center h-[40rem]">
      <div>
        <h2 className="text-5xl text-white-primary">
          Careers at <span className="text-blue-100">Lynx CX</span>
        </h2>
        <p className="mt-10 text-lg font-normal leading-7 text-white-secondary">
          Join our quest to increase the freedom of money!
        </p>

        <button className="w-[12rem] mt-12 text-md font-medium leading-6 h-12 bg-blue-100 text-black-100 rounded-xl">View Openings</button>
      </div>

      <div className="w-[30rem] h-[20rem]">
        <img src={monitor} className="w-full h-full object-contain" alt="" />
      </div>
    </div>
  );
}

export default LandingScreen;
