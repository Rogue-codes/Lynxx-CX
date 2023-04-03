import React, {useRef} from 'react'
import { videoImg } from '../../assets'
import {motion} from "framer-motion"
export default function Video() {
  const scrollRef = useRef(null);
  const ZoomIn = {
    hide: {
      scale: .5,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1, duration: 1, type: "spring", stiffness: 120 },
    },
  };
  return (
    <motion.div variants={ZoomIn}
    viewport={{ once: true }}
    initial="hide"
    whileInView="show"
    ref={scrollRef}  className='w-full p-5 mt-20 lg:mt-40 relative'>
        <div>
            <img src={videoImg} alt="" />
        </div>

        <div className="w-full lg:w-[21.25rem] h-[19.6rem] absolute right-0 -bottom-64  bg-blue-100 blur-[762px]">

        </div>
    </motion.div>
  )
}
