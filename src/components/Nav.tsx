import {useState} from 'react'
import { Currency, Logo } from '../assets'
import {Link } from 'react-router-dom'
import {AiOutlineCaretDown} from 'react-icons/ai'
interface Link {
    label: string;
    link: string;
  }
export default function Nav() {
    const [active,setActive] = useState<number>(0)

    const links: Link[] = [
        {
            label:"Home",
            link:"/"
        },
        {
            label:"Our Story",
            link:"/story"
        },
        {
            label:"Contact Us",
            link:"/contact"
        },
        {
            label:"Careers",
            link:"/careers"
        },
    ]

    const handleACtive = (index:number) => {
        setActive(index)
    }
  return (
    <nav className='py-5 z-20 bg-black-100 w-full flex fixed top-0 left-0'>
        <div  className='t40-container flex justify-between'>
        <div className='flex justify-start gap-3 items-center'>
        
            <div className='w-[13.6rem]'>
                <img className='h-10 w-full' src={Logo} alt="" />
            </div>

        <ul className='flex gap-4 items-center'>
            {
                links.map((item: Link,index)=>(
                    <li key={index} className={`${index === active ? "text-blue-100 transition-all" : "text-white-secondary"}`} onClick={()=>handleACtive(index)}>
                        <Link to={item.link}>{item.label}</Link>
                    </li>
                ))
            }

        </ul>
        </div>

        <div className='flex justify-start gap-5 items-center'>
            <button className='py-3 w-28 bg-blue-100 text-white-primary rounded-xl'>
                Sign Up
            </button>

            <div>
                <div><img src={Currency} alt="" /></div>

            </div>
            <AiOutlineCaretDown size="1rem" color="#787A8D"/>
        </div>
        </div>
    </nav>
  )
}
