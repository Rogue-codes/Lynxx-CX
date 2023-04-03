import React, {useRef} from 'react'
import { motion } from 'framer-motion'
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

  const scrollRef = useRef(null);

  const slideUp = {
    hide: {
      opacity: 0,
      y: "5%",
    },
    show: {
      opacity: 1,
      y: "0%",
      transition: { delay: 1.5, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  
  return (
    <div className='p-4 lg:px-[7.5rem] bg-[#090B11] py-12 flex-col flex lg:flex-row justify-between items-start'>
      <div className='w-full lg:w-[30%]'>
        <motion.div variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='w-28 lg:w-full lg:-ml-16 h-14'>
          <img src={Logo} className='w-full h-full' alt="" />
        </motion.div>

        <div className='flex justify-around mb-7 lg:justify-start gap-5 w-full items-center mt-7 lg:mt-[7rem]'>
          {
            imgs.map((img,index) =>(
              <motion.div variants={slideUp}
              viewport={{ once: true }}
              initial="hide"
              whileInView="show"
              ref={scrollRef} key={index}><img src={img} alt="" /></motion.div>
            ))
          }
        </div>
      </div>

      <div className='flex flex-wrap w-full justify-between lg:w-[30%]'>
        <ul className='border-w text-white-primary'>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-lg font-semibold left-8 text-white-primary mb-6'>About us</motion.li>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-md font-normal left-6 text-white-secondary mb-4'>Our Story</motion.li>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-md font-normal left-6 text-white-secondary mb-4'>Terms Of Use</motion.li>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-md font-normal left-6 text-white-secondary mb-4'>Privacy Policy</motion.li>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-md font-normal left-6 text-white-secondary mb-4'>News</motion.li>
        </ul>

        <ul className='border-w text-white-primary'>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-lg font-semibold left-8 text-white-primary mb-6'>Support</motion.li>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-md font-normal left-6 text-white-secondary mb-4'>Community</motion.li>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-md font-normal left-6 text-white-secondary mb-4'>Discord</motion.li>
          <motion.li variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-md font-normal left-6 text-white-secondary mb-4'>Telegram</motion.li>
        </ul>
      </div>

      <div className='lg:ml-16'>
        <motion.p variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='text-lg font-semibold left-8 text-white-primary mb-6'>Subscribe</motion.p>
        <motion.div variants={slideUp}
        viewport={{ once: true }}
        initial="hide"
        whileInView="show"
        ref={scrollRef} className='flex gap-2 items-center'>
        <input className='w-40 lg:w-[17.4rem] bg-transparent p-4 border border-[#787A8D] rounded-xl placeholder:text-sm placeholder:lg:text-md' type="text" placeholder='Enter your email' /> 
        <SignUpButton content="Sign up"/>
        </motion.div>
      </div>
    </div>
  )
}
