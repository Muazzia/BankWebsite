import { arrow, star, tick } from "../assets";
import { useState } from "react";

const arr = [
  {
    id: 1,
    icon: star,
    heading: "Rewards",
    para: "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: 2,
    icon: tick,
    heading: "100% Secured",
    para: "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: 3,
    icon: arrow,
    heading: "Balance Transfer",
    para: "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];
const Info = () => {
  const [selected, setSelected] = useState(arr[0]);

  return (
    <section
      id="info"
      className="flex flex-col md:flex-row gap-[40px] md:gap-[10px] lg:gap-0 justify-between"
    >
      <div className="left">
        <h2 className="md:w-[300px] lg:w-[540px] text-5xl md:text-4xl lg:text-5xl font-semibold leading-[4.5rem] sm:leading-10  tracking-[0.48px]">
          You do the business, we’ll handle the money
        </h2>
        <p className="md:w-[300px] lg:w-[440px] mt-[24px] text-white text-opacity-70 text-lg font-normal ">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="btnGradient text-black py-[10px] mt-[40px] px-[22px] rounded-lg ">
          Get Started
        </button>
      </div>
      <div className="right flex flex-col gap-[20px]">
        {arr.map((t, i) => (
          <div
            key={i}
            onClick={() => {
              setSelected(t);
            }}
            className={`content min-h-[100px] md:w-[370px] lg:w-[440px] pl-[20px]  py-[22px] rounded-2xl 
            shadow flex flex-row items-center gap-5 cursor-pointer
            ${selected === t && "bg-gradient-to-br from-[#494949]  to-zinc-900"}
        `}
          >
            <img
              className="md:h-[45px] md:w-[45px] object-cover lg:h-[64px] lg:w-[94px] "
              src={t.icon}
              alt="img"
            />
            <div className="right ">
              <h4 className="text-white text-lg font-semibold capitalize leading-normal tracking-tight">
                {t.heading}
              </h4>
              <p className="text-white text-opacity-70 md:w-[250px] lg:w-[330px] text-normal text-base font-normal">
                {t.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Info;
