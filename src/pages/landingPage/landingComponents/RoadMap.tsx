import React from "react";
import { roadmap } from "../../../assets";

export default function RoadMap() {
  return (
    <div className="w-full px-5 mt-28 relative">
      <h2 className="text-white-primary text-5xl leading-[64px] font-bold text-center mb-28">
        Our Roadmap
      </h2>
      <div className="bg-[#212636] rounded-[20px]">
        <img src={roadmap} className="rounded-[20px]" alt="" />
      </div>{" "}
      <div className="w-[21.25rem] h-[19.6rem] absolute left-0 top-0 bg-blue-100 blur-[462px]"></div>
    </div>
  );
}
