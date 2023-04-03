import React, {useRef} from 'react'
import {motion} from "framer-motion"
export default function AutoScroller() {
  
  const scrollRef = useRef(null);
  const slideUp = {
    hide: {
      y: "20%",
      opacity: 0,
    },
    show: {
      y: "0%",
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <motion.div variants={slideUp}
    viewport={{ once: true }}
    initial="hide"
    whileInView="show"
    ref={scrollRef}  className='px-5 my-8 lg:mt-[6rem] flex items-center gap-2'>
        <button className='w-[34px] relative  h-[50px] rounded-[20px] border-2 border-white-secondary'>
            <div className='h-[8px] absolute left-[48%] top-2 w-[4px] border-2 border-blue-100'></div>
        </button>
        <p className='text-white-secondary text-xs lg:text-sm'>Enlighten Your World with Crypto</p>
    </motion.div>
  )
}
