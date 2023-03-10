import { useState } from "react";
import { direction } from "../../../assets";
import { AiOutlineCaretDown } from "react-icons/ai";

type accordionProps = {
  header: string;
  content: string;
  img: string;
};
export default function Faq() {
  const accordion: accordionProps[] = [
    {
      header: "What is Lynx CX?",
      content: `Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides 
            customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.
            
            Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.
            `,
      img: direction,
    },
    {
      header: "Why can’t i use Lynx CX yet?",
      content: `Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides 
            customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.
            
            Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.
            `,
      img: direction,
    },
    {
      header: "How many trading pairs will be supported on Lynx CX?",
      content: `Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides 
            customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.
            
            Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.
            `,
      img: direction,
    },
    {
      header: "What kind of services will be available for Lynx CX users?",
      content: `Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides 
            customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.
            
            Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.
            `,
      img: direction,
    },
    {
      header: "What are your trading fees?",
      content: `Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides 
            customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.
            
            Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.
            `,
      img: direction,
    },
    {
      header: "What is our mission?",
      content: `Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides 
            customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.
            
            Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.
            `,
      img: direction,
    },
  ];
  const [active, setActive] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    // if index is already active
    active === index ? setActive(null) : setActive(index);
  };
  return (
    <div className="w-full px-5 mt-28 mb-40">
      <h2 className="mb-[8.5rem] text-center font-bold text-white-primary text-5xl leading-[64px]">
        Frequently Asked Questions
      </h2>
      <>
        {accordion.map((data, index) => (
          <div className={`${index !== active ? "h-14" : "h-[15.25rem]"} bg-[#21263666] transition-all overflow-hidden p-4 mb-5`}>
            <div className="flex justify-between cursor-pointer" onClick={()=>toggleAccordion(index)}>
              <h2 className="text-white-primary text-[18px] leading-6 font-normal mb-6">
                What is Lynx CX?
              </h2>

              <AiOutlineCaretDown
                size="1rem"
                cursor="pointer"
                color="#2C9BF6"
                
              />
            </div>
            <div className="flex gap-4">
              <div>
                <img width={50} src={direction} alt="" />
              </div>
              <p className="text-white-secondary">
                Lynx CX is an up-and-coming digital asset exchange designed to
                be the powerhouse of the crypto economy: a one-stop-shop that
                provides customers with fair, accessible, efficient, and
                transparent crypto services, meeting any and all needs they may
                have. <br /> <br /> Lynx CX aims to provide access to anyone
                within our legal means to participate and invest in the crypto
                economy.
              </p>
            </div>
          </div>
        ))}
      </>
    </div>
  );
}
