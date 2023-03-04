import React from 'react'

type inovativeProps = {
  heading: string,
  img:string,
  buySell?:string,
  smText?:string,
}

export default function Inovative({heading,img,buySell,smText}:inovativeProps) {
  return (
    <div className='mt-40 w-full px-5 relative'>
        <h2 className='text-white-primary text-5xl font-bold leading-[64px] text-center mb-28'>{heading}</h2>
        <p className='text-lg text-center font-medium leading-6 text-white-primary mb-[31px]'><span className='text-blue-100'>{buySell}</span>{smText}</p>
        <div className='w-[67rem] h-[42.75rem]'>
            <img src={img} alt="" />
        </div>

        <div className={`${buySell ? "right-0" : "left-0" } w-[21.25rem] h-[19.6rem] absolute -bottom-64  bg-blue-100 blur-[762px]`}>

        </div>
    </div>
  )
}
