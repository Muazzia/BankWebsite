import {
  appStore,
  google,
  greenBall,
  netflix,
  paypall,
  redBall,
  redPoly,
  svgApple,
  svgGoogle,
} from "../assets";

const arr = [
  {
    icon: redBall,
    heading: "Dribble Pro",
    time: "15 Days ago",
    price: "-250,00",
  },
  {
    icon: netflix,
    heading: "Netflix",
    time: "4 Days ago",
    price: "-250,00",
  },
  {
    icon: greenBall,
    heading: "Manulife Cash",
    time: "4 Days ago",
    price: "-250,00",
  },
];

const Billing = () => {
  return (
    <section
      id="billing"
      className="pt-[150px] flex gap-[40px] flex-col lg:flex-row  "
    >
      <div className="l w-full sm:w-[50%] h-[550px] relative flex flex-col items-center gap-[30px] sm:block">
        <div
          className="p-[20px] w-[230px] h-[210px] flex flex-col justify-between bg-gradient-to-br from-[#8a8a8a] to-black rounded-lg  sm:ml-[250px] z-10 relative"
          id="paypal"
        >
          <div className="top flex items-start gap-[12px] justify-start">
            <img src={paypall} alt="paypal" />
            <div>
              <h3 className="text-2xl font-semibold leading-10 tracking-tight">
                PayPal
              </h3>
              <p className="text-opacity-70 text-white text-xs font-normal leading-tight tracking-tight">
                Checkout
              </p>
            </div>
          </div>
          <div className="mid flex justify-between items-center">
            <div className="left">
              <p className="text-white text-opacity-70">Total</p>
              <h3>$210</h3>
            </div>
            <div className="right">
              <button
                className="textGradient px-[10px] py-[7px] bg-gray-700  rounded-md border border-white
            "
              >
                Change
              </button>
            </div>
          </div>
          <div className="bottom">
            <button className="btnGradient w-full text-black py-[7px] rounded-xl">
              Make Payment
            </button>
          </div>
        </div>
        <div className="w-[95%] sm:w-[335px] static sm:absolute top-[160px] h-[350px] sm:h-[310px] rounded-lg bg-gradient-to-br from-[#8a8a8a] to-black p-[22px]">
          <h3 className="mb-[30px] text-xl font-semibold">Last Transaction</h3>
          <div className="space-y-[30px]">
            {arr.map((t, i) => (
              <div key={i} className="row flex items-center justify-between">
                <div className="flex">
                  <img src={t.icon} alt="redBall" className="mr-[12px]" />
                  <div className="flex flex-col">
                    <h3>{t.heading}</h3>
                    <p className="text-white text-opacity-70">{t.time}</p>
                  </div>
                </div>
                <div className="flex gap-[4px]">
                  <img src={redPoly} alt="" />
                  <p className="">{t.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="r md:w-full lg:w-[50%]  flex flex-col">
        <div>
          <h2 className="text-white text-5xl font-semibold leading-[5rem] tracking-wide mb-[24px]">
            Easily control your billing & invoicing.
          </h2>
          <p className="text-white text-opacity-70 text-lg font-normal leading-7 tracking-tight">
            Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
            aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
            placerat.
          </p>
        </div>
        <div className="flex mt-[20px] gap-[20px]">
          <img
            src={svgApple}
            alt=""
            className="border border-gray-700 rounded-lg"
          />
          <img
            src={svgGoogle}
            alt=""
            className="border border-gray-700 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
