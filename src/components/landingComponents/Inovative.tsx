import React from 'react'

type inovativeProps = {
  heading: string,
  img:string,
  buySell?:string,
  smText?:string,
}

export default function Inovative({heading,img,buySell,smText}:inovativeProps) {
  return (
    <div className='lg:mt-40 mt-20 w-full lg:px-5 relative'>
        <h2 className='text-white-primary text-2xl lg:text-5xl font-bold leading-10 lg:leading-[64px] text-center mb-16 lg:mb-28'>{heading}</h2>
        <p className='text-lg text-center font-medium leading-8 lg:leading-6 text-white-primary mb-4 lg:mb-[31px]'><span className='text-blue-100'>{buySell}</span>{smText}</p>
        <div className='w-full lg:w-[67rem] lg:h-[42.75rem]'>
            <img src={img} alt="" />
        </div>

        <div className={`${buySell ? "right-0" : "left-0" } w-[21.25rem] h-[19.6rem] absolute -bottom-64  bg-blue-100 blur-[762px]`}>

        </div>
    </div>
  )
}
