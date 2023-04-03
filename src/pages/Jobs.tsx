import React, {useState} from "react";
import { monitor } from "../assets";
import { Data } from "../utils/Data";

export default function Jobs() {
  const [filterVal,setfilterVal] = useState<string>('')

  const filterJobs = Data.filter(item=>item.categories.includes(filterVal))
  

  console.log(filterJobs)
  
  return (
    <div className="w-full pt-32">
      <div className="t40-container">
        <div className="flex flex-wrap justify-center gap-2 items-center">
          <div className=" w-[40rem]">
            <h2 className="text-5xl text-white-primary">
              Business Development
            </h2>
            <p className="mt-10 text-lg font-normal leading-7 text-white-secondary">
              We drive growth by building strategic partnerships that open up
              new markets and pave the way for the next stage of mainstream
              cryptocurrency adoption.
            </p>
          </div>

          <div className=" mt-28 lh:mt-0 w-[30rem] h-[20rem]">
            <img
              src={monitor}
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>

        <div className="w-full mt-12 relative">
          <h2 className="text-white-primary text-center text-5xl leading-[64px] font-700 ">Job Openings</h2>

          <header className="flex mt-12 justify-center items-center">
            <select name="" value={filterVal} onChange={(e)=>setfilterVal(e.target.value)} id="" className="focus:outline-none w-[22.4rem] h-12  bg-black-100 p-2 rounded-xl text-white-secondary">
              <option value="">All</option>
              <option value="Business Development">Business Development</option>
              <option value="Sales">Sales</option>
              <option value="Engineering">Engineering</option>
            </select>
          </header>

          <main className="pb-14 mt-12">
            {
              filterJobs.map((job,index)=>(
                <div key={index} className="flex p-4 lg:w-[60%] mt-8 mx-auto justify-between items-center gap-12">
                  <div>
                    <p className="text-white-primary">{job.title}</p>
                    <p className="text-white-secondary">{job.location}</p>
                  </div>

                  <button className='w-[7rem] py-2 bg-blue-100 text-md font-medium leading-6 rounded-xl'>Apply</button>
                </div>
              ))
            }
          </main>


          <div className="w-full lg:w-[21.25rem] h-[19.6rem] absolute left-0 top-0 bg-blue-100 blur-[462px]"></div>

          <div className="w-full lg:w-[21.25rem] h-[29.6rem] absolute right-0 bottom-0 bg-blue-100 blur-[562px]"></div>
        </div>
      </div>
    </div>
  );
}
