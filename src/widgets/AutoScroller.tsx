import React from 'react'

export default function AutoScroller() {
  return (
    <div className='px-5 mt-[6rem] flex items-center gap-2'>
        <button className='w-[34px] relative  h-[50px] rounded-[20px] border-2 border-white-secondary'>
            <div className='h-[8px] absolute left-[48%] top-2 w-[4px] border-2 border-blue-100'></div>
        </button>
        <p className='text-white-secondary'>Enlighten Your World with Crypto</p>
    </div>
  )
}
