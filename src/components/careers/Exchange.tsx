import React from "react";
import { Link } from "react-router-dom";

export default function Exchange() {
  return (
    <div className="w-full relative mt-[9rem] py-20 px-5 lg:px-0 rounded-2xl bg-[#212636]">
      <h2 className=" text-2xl lg:text-5xl text-white-primary font-bold leading-[64px] text-center">
        Exchange the World With Us
      </h2>
      <Link to="/jobs">
      <button className="px-[1.63rem] py-3 bg-blue-100 flex justify-center items-center rounded-xl mt-10 !mx-auto">
        See all Opportunities
      </button>
      </Link>
      <div className="w-[15.25rem] h-[15.6rem] absolute right-0 top-0 bg-blue-100 blur-[262px]"></div>
    </div>
  );
}
