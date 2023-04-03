import React from "react";
import { money } from "../../assets";

export default function WhyWorkHere() {
  return (
    <div className="lg:mt-40 relative">
      <h2 className="text-2xl lg:text-5xl text-white-primary font-bold leading-[64px] text-center">
      Why Work Here
      </h2>

      <p className='lg:mt-20 text-center text-white-primary text-md font-normal leading-8 lg:leading-4'>We are proud to offer competitive benefits that enable healthy and fulfilling careers at Lynx CX.</p>

      <div className="flex flex-wrap items-center gap-4 lg:mt-[5.25rem]">
        <div className="my-10 px-5 lg:px-14 py-10 bg-[#212636] rounded-2xl w-[28rem] border-2 border-blue-100">
          <div className="w-20 h-20 border relative flex justify-center items-center rounded-full">
            <img src={money} alt="" />
          <div className="bg-blue-100 w-5 h-5 border-2  absolute left-5 top-8 blur-[22px]"></div>
          </div>
          <ul className="mt-8">
            <li className="text-md mt-4 text-white-secondary leading-6">Competitive salary</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Option to be paid in crypto</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Health insurance</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Flexible working hours</li>
          </ul>
        </div>

        <div className="my-10 px-5 lg:px-14 py-10 bg-[#212636] rounded-2xl w-[28rem] border-2 border-blue-100">
          <div className="w-20 h-20 border relative flex justify-center items-center rounded-full">
            <img src={money} alt="" />
            
          <div className="bg-blue-100 w-5 h-5 border-2  absolute left-5 top-8 blur-[22px]"></div>
          </div>
          <ul className="mt-8">
            <li className="text-md mt-4 text-white-secondary leading-6">Competitive salary</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Option to be paid in crypto</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Health insurance</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Flexible working hours</li>
          </ul>
        </div>

        <div className="my-10 px-5 lg:px-14 py-10 bg-[#212636] rounded-2xl w-[28rem] border-2 border-blue-100">
          <div className="w-20 h-20 border relative flex justify-center items-center rounded-full">
            <img src={money} alt="" />
            
          <div className="bg-blue-100 w-5 h-5 border-2  absolute left-5 top-8 blur-[22px]"></div>
          </div>
          <ul className="mt-8">
            <li className="text-md mt-4 text-white-secondary leading-6">Competitive salary</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Option to be paid in crypto</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Health insurance</li>
            <li className="text-md mt-4 text-white-secondary leading-6">Flexible working hours</li>
          </ul>
        </div>
      </div>
      <div className="w-[15.25rem] h-[15.6rem] absolute left-0 top-0 bg-blue-100 blur-[262px]"></div>

    </div>
  );
}
