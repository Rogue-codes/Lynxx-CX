import React from 'react'
import { briefcase } from '../../assets'
import { Data } from '../../utils/Data'
import { Link } from 'react-router-dom'

export default function Team() {
  return (
    <div className='mt-[8.75rem] relative'>
        <h2 className='text-2xl lg:text-5xl font-bold leading-[64px] text-white-primary text-center'>Choose Your Team</h2>
        <p className='lg:mt-20 text-center text-white-primary px-6  text-md font-normal leading-16 lg:leading-4'>Select a team most relevant to your interests and experience to view job openings.</p>

        <div className='flex justify-center lg:justify-start mt-20 gap-9 items-center flex-wrap'>
            {
                Data.map((item,index)=>(
                    <div key={index} className='py-6 px-6 m-4 bg-[#212636] w-[20rem] rounded-2xl flex justify-start gap-8 items-center'>
                        <div>
                            <img src={briefcase} width={50} alt="" />
                        </div>

                        <Link to={`/jobs/${item.title}`} className='hover:text-blue-100 transition-all'>{item.title}</Link>
                    </div>
                ))
            }
        </div>
        <div className="w-[21.25rem] h-[19.6rem] absolute left-0 bottom-0 bg-blue-100 blur-[462px]"></div>
    </div>
  )
}
