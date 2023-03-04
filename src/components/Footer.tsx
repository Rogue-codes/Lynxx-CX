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
    <div className='px-[7.5rem] bg-[#090B11] py-12 flex justify-between items-start'>
      <div>
        <div>
          <img src={Logo} alt="" />
        </div>

        <div>
          {
            imgs.map((img) =>(
              <div>{img}</div>
            ))
          }
        </div>
      </div>

      <div className='flex justify-between w-[30%]'>
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

      <div>
        <p className='text-lg font-semibold left-8 text-white-primary mb-6'>Subscribe</p>
        <div className='flex gap-2 items-center'>
        <input className='w-[17.4rem] bg-transparent p-4 border border-[#787A8D] rounded-xl' type="text" placeholder='Enter your email' /> 
        <SignUpButton content="Sign up"/>
        </div>
      </div>
    </div>
  )
}
