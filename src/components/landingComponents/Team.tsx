import React from "react";
import { fb, linkedin, teamimg, tele } from "../../assets";
type team = {
  img: string;
  name: string;
  desc: string;
  social: string[];
};
export default function Team() {
  const team: team[] = [
    {
      img: teamimg,
      name: "rami",
      desc: `“Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.”`,
      social:[
        linkedin, tele, fb
      ]
    },
    {
      img: teamimg,
      name: "rami",
      desc: `“Lynx CX is an up-and-coming digital asset exchange designed to be the powerhouse of the crypto economy: a one-stop-shop that provides customers with fair, accessible, efficient, and transparent crypto services, meeting any and all needs they may have.Lynx CX aims to provide access to anyone within our legal means to participate and invest in the crypto economy.”`,
      social:[
        linkedin, tele, fb
      ]
    },
  ];
  return (
    <div className="mt-28 px-5 relative">
      <h2 className="text-white-primary text-2xl lg:text-5xl leading-10 lg:leading-[64px] font-bold text-center mb-28">Team Behind Lynx CX</h2>
      <div className="flex flex-wrap justify-between">
      {team.map((team, index) => (
        <div key={index} className="lg:h-[31.25rem] mt-12 lg:mt-0 w-full lg:w-[32.5rem] border-2 border-blue-100 rounded-[24px]">
          <div className="lg:w-28 w-14 h-14 lg:h-28 mx-auto -mt-5 lg:-mt-12">
            <img src={team.img} alt="" />
          </div>
          <h2 className="text-white-primary text-xl my-3 lg:my-6 text-center">{team.name.toUpperCase()}</h2>
          <p className="text-md leading-6 text-center text-white-secondary font-normal px-5">{team.desc}</p>
          <div className="flex justify-center gap-4 mt-2 mb-2 lg:mt-12">
            {
                team.social.map((social,index)=>(
                    <div key={index}>
                        <img src={social} alt="" />
                    </div>
                ))
            }
          </div>
        </div>
      ))}
      </div>
      <div className="w-[21.25rem] h-[19.6rem] absolute right-0 top-0 bg-blue-100 blur-[462px]"></div>
    </div>
  );
}
