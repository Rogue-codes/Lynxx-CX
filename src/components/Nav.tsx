import { useState } from "react";
import { Currency, Logo } from "../assets";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCaretDown, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";
import {FaTimes} from "react-icons/fa"
interface Link {
  label: string;
  link: string;
}
export default function Nav() {
  // const [active, setActive] = useState<number>(0);

  const [showMenu,setShowMenu] = useState<boolean>(false)

  const variants = {
    open: { 
      opacity: 1,
       x:0
      },
    closed: {
      opacity: 0,
      x:"-100%",
      transition: { delay: 0.5, duration: 0.5 },
    },
  };

  const location = useLocation();

  console.log(location);

  const links: Link[] = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "Our Story",
      link: "/story",
    },
    {
      label: "Contact Us",
      link: "/contact",
    },
    {
      label: "Careers",
      link: "/careers",
    },
  ];

  // const handleACtive = (index: number) => {
  //   setActive(index);
  // };
  return (
    <nav className="py-5 z-20 bg-black-100 w-full flex fixed top-0 left-0">
      <div className="w-[95%] mx-auto flex justify-between">
        <div className="flex justify-start gap-3 items-center">
          <div className="w-20 lg:w-[13.6rem]">
            <img className="h-10 w-full" src={Logo} alt="" />
          </div>

          <ul className="hidden lg:flex gap-8 items-center">
            {links.map((item: Link, index) => (
              <li
                key={index}
                className={`${
                  location.pathname === item.link
                    ? "text-blue-100 transition-all"
                    : "text-white-secondary"
                }`}
              >
                <Link to={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex justify-start gap-5 items-center">
          <button className="py-3 w-28 bg-blue-100 text-white-primary rounded-xl">
            Sign Up
          </button>

          <div>
            <div>
              <img src={Currency} alt="" />
            </div>
          </div>
          <AiOutlineCaretDown size="1rem" color="#787A8D" />
        </div>

        {showMenu ? <FaTimes color="#fff" className="lg:hidden block"  size={30} onClick={()=>setShowMenu(!showMenu)}/> : <AiOutlineMenu color="#fff" size={30} className="lg:hidden block"  onClick={()=>setShowMenu(!showMenu)}/> }
      </div>

      <motion.div initial={false}
        animate={showMenu ? "open" : "closed"}
        variants={variants} className="fixed flex flex-col p-5 w-[80%] text-white bg-[#0d1018] shadow-md h-full top-0 left-0">
        {
          links.map((item,index)=>(
            <Link to={item.link} key={index} className="mt-8 text-white-primary text-lg" onClick={()=>setShowMenu(false)}>
              {item.label}
            </Link>
          ))
        }
        <button className="py-3 mt-8 w-28 bg-blue-100 text-white-primary rounded-xl">
        Sign Up
        </button>

        <div>
        <div className="mt-8">
          <img src={Currency} alt="" />
        </div>
        </div>
      </motion.div>
    </nav>
  );
}
