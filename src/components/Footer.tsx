import React from 'react'
import { Facebook, instagram, Logo, mesenger, tiktok, twitter, Youtube } from '../assets'
import SignUpButton from '../widgets/SignUpButton'

export default function Footer() {
  const imgs : string[] = [
    instagram,
    Youtube,
    Facebook,
    tiktok,
    twitter,
    mesenger
  ]

  return (
    <div className='p-4 lg:px-[7.5rem] bg-[#090B11] py-12 flex-col flex lg:flex-row justify-between items-start'>
      <div className='w-full lg:w-[30%]'>
        <div className='w-28 lg:w-full lg:-ml-16 h-14'>
          <img src={Logo} className='w-full h-full' alt="" />
        </div>

        <div className='flex justify-around mb-7 lg:justify-start gap-5 w-full items-center mt-7 lg:mt-[7rem]'>
          {
            imgs.map((img,index) =>(
              <div key={index}><img src={img} alt="" /></div>
            ))
          }
        </div>
      </div>

      <div className='flex flex-wrap w-full justify-between lg:w-[30%]'>
        <ul className='border-w text-white-primary'>
          <li className='text-lg font-semibold left-8 text-white-primary mb-6'>About us</li>
          <li className='text-md font-normal left-6 text-white-secondary mb-4'>Our Story</li>
          <li className='text-md font-normal left-6 text-white-secondary mb-4'>Terms Of Use</li>
          <li className='text-md font-normal left-6 text-white-secondary mb-4'>Privacy Policy</li>
          <li className='text-md font-normal left-6 text-white-secondary mb-4'>News</li>
        </ul>

        <ul className='border-w text-white-primary'>
          <li className='text-lg font-semibold left-8 text-white-primary mb-6'>Support</li>
          <li className='text-md font-normal left-6 text-white-secondary mb-4'>Community</li>
          <li className='text-md font-normal left-6 text-white-secondary mb-4'>Discord</li>
          <li className='text-md font-normal left-6 text-white-secondary mb-4'>Telegram</li>
        </ul>
      </div>

      <div className='lg:ml-16'>
        <p className='text-lg font-semibold left-8 text-white-primary mb-6'>Subscribe</p>
        <div className='flex gap-2 items-center'>
        <input className='w-40 lg:w-[17.4rem] bg-transparent p-4 border border-[#787A8D] rounded-xl placeholder:text-sm placeholder:lg:text-md' type="text" placeholder='Enter your email' /> 
        <SignUpButton content="Sign up"/>
        </div>
      </div>
    </div>
  )
}
