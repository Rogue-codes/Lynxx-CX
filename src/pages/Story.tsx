import React from "react";
import { mission, vision, years } from "../assets";
import OurStory from "../components/ourstory/OurStory";

export default function Story() {
  return (
    <div className="lg:mt-[5.2rem]">
      <div className="t40-container py-8">
        <div>
          <h1 className="text-4xl font-bold text-white-primary leading-[64px] mt-16 lg:mt-8 text-center">Contact Us</h1>
        </div>
        <OurStory
          header="Our mission"
          semiHeader="Paving the way for achieving your financial goals!"
          text="We want to give you the best possible overview of your finances so that you can take control of your financial future yourself. It is our claim to present the finances of our customers holistically, transparently and clearly, regardless of large financial institutions; better than other software in the private customer segment - at fair terms."
          img={mission}
        />
        <OurStory
          header="Our vision"
          reversed
          reversedGradient
          semiHeader="Business intelligence for private investors"
          text='While companies have been able to gain valuable insights from the data they generate with the help of expensive ERP software for decades, we also want to make the advantages of digitization available to private individuals. True to the motto: "what is measured, gets done!" We want to help people achieve their financial goals with smart tools.'
          img={vision}
        />
        <OurStory
          header="Our history"
          years
          img={years}
          text="Alex - the founder of MyFinance - has been looking for a comparable application for over a year. Since he only found what he was looking for in the USA, but denied wanting to gain a foothold in Europe, he decided to take things into his own hands. He founded MyFinance UG and started developing together with a small team of programmers. As the project took shape, the team of shareholders around Alex continued to grow. MyFinance is now designed by a young and dynamic team that drives the dream of holistic financial software independently of large financial institutions."
        />
        <OurStory
          header="Our company"
          text="MyFinance is a FinTech StartUp made in Frankfurt. In the immediate vicinity of the financial metropolis, an owner-managed company was created with the vision of supporting and accompanying people in their wealth accumulation. By compatibility with all common platforms, we provide our users with a comprehensive financial overview. Whether securities accounts, PayPal or checking accounts - we bring everything together in a single place from which independent financial management is possible. Unique, independent and safe."
          header2="Our team"
          text2="The MyFinance team consists of young entrepreneurs, business informatics specialists and internationally active programmers. We profile ourselves through rich experience in the fields of finance, data science and analytics. Through the independence of large investors, we guarantee our users data sovereignty and personal support."
          noImages
          reversedGradient
        />
      </div>
    </div>
  );
}
