import React from 'react'
import { archive, moneycoin, profit, shield, transfer } from '../../../assets'

type perks = {
    img: string,
    title: string,
    description: string
}
export default function Perks() {
    const data : perks[] =[
        {
            img:shield,
            title:"Security",
            description:"Secure transaction and account information with 2-factor authentication (2FA)",
        },
        {
            img:transfer,
            title:"Exchange",
            description:"Trade 75+ digital asset pairs",
        },
        {
            img:profit,
            title:"Assets",
            description:"Secure, cold storage of all your", 
        },
        {
            img:moneycoin,
            title:"Liquidity",
            description:"Deep aggregated liquidity to ensure quick order execution",
        },
        {
            img:transfer,
            title:"Ease of Use",
            description:"Sophisticated UI and architecture that will cater to all users",
        },
        {
            img:archive,
            title:"Transparency and Proof of Reserves",
            description:"Sophisticated UI and architecture that will cater to all users",
        },

    ]
  return (
    <div className='w-full flex mt-16 px-5 relative justify-between items-center flex-wrap'>
        {
            data.map((data,index)=>(
                <div key={index} className="w-[32%] px-5 rounded-[20px] my-2 h-[20rem] bg-[rgba(33,38,54,0.4)] hover:border-2 border-blue-100 transition-all" >
                    <div className='w-20 mx-auto relative bg-black-100 mt-10 h-20 flex justify-center items-center rounded-full border'>
                        <img className='relative z-10' src={data.img} alt="" />
                        <div className='w-8 h-8 bg-blue-100 absolute left-[30%] top-[30%] blur-[20px]'></div>
                    </div>
                    <h2 className='text-xl leading-8 text-center text-white-primary mt-10'>{data.title}</h2>
                    <p className='text-md leading-6 text-center text-white-secondary mt-4'>{data.description}</p>
                </div>
            ))
        }
        <div className="w-[21.25rem] h-[19.6rem] absolute left-0 -bottom-64  bg-blue-100 blur-[762px]">

        </div>
    </div>
  )
}
