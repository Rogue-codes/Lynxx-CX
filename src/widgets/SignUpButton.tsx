import React from 'react'
type buttonProps = {
    content: string
}
export default function SignUpButton({content}:buttonProps) {
  return (
    <div className='py-4 flex justify-center items-center w-28 bg-blue-100 text-white-primary rounded-xl'>{content}</div>
  )
}
