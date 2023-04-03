import React from "react";
import { mission } from "../../assets";

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
  reversedGradient?:boolean
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
  reversedGradient
}: storyProps) {
  return (
    <div
      className={`${
        reversed ? "flex-row-reverse text-right" : "flex-row"
      } flex justify-between items-start w-[80%] mx-auto mt-24 lg:mt-[7rem] relative flex-wrap`}
    >
      <div className="text-white-primary w-[28rem]">
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
        <p className="mt-6 text-md lg:text-left text-center font-normal">{text}</p>

        {years && (
          <div className="flex justify-start items-center gap-6 mt-6">
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
      </div>
      <div className="h-[25rem] mt-12 lg:mt-0 w-[25rem]">
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
      </div>

      <div className={`${reversedGradient ? "right-0" : "left-0"} w-[15.25rem] h-[15.6rem] absolute top-0 bg-blue-100 blur-[256px]`}></div>
    </div>
  );
}
