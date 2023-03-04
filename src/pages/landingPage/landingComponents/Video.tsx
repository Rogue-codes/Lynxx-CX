import React from 'react'
import { videoImg } from '../../../assets'

export default function Video() {
  return (
    <div className='w-full p-5 mt-40 relative'>
        <div>
            <img src={videoImg} alt="" />
        </div>

        <div className="w-[21.25rem] h-[19.6rem] absolute right-0 -bottom-64  bg-blue-100 blur-[762px]">

        </div>
    </div>
  )
}
