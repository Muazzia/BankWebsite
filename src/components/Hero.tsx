import { discount, robo } from "../assets";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen  bg-mBg relative">
      <div className="wrapper max-w-[300px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1000px] mx-auto pt-[15px]">
        <Navbar />
        <div className="main mt-[50px] md:mt-[80px] lg:mt-[100px] grid grid-cols-1 md:grid-cols-2  ">
          <div className="left w-full md:col-span-1">
            <div className="discount w-full sm:w-[500px] md:w-[450px] lg:w-[410px] h-[40px] px-[10px] flex items-center gap-[13px] bg-gradient-to-br from-neutral-800 to-zinc-900 rounded-lg ">
              <img
                src={discount}
                alt="discount"
                className="h-[32px] w-[32px]"
              />
              <div>
                <p className="text-[11px] lg:font-normal  lg:text-lg">
                  20%
                  <span className="text-white text-opacity-60">
                    {" "}
                    DISCOUNT FOR
                  </span>{" "}
                  1 MONTH
                  <span className="text-white text-opacity-60"> ACCOUNT</span>
                </p>
              </div>
            </div>
            <h2 className="mt-[30px] lg:mt-[15px] text-white text-5xl lg:text-7xl font-semibold  ">
              <p>The Next</p> <div className="textGradient">Generation</div>{" "}
              PayMent Method
            </h2>
            <div className="w-full lg:w-[480px] text-white text-opacity-70 mt-[40px] ">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. We examine annual percentage
              rates, annual fees.
            </div>
            <div className="absolute top-[130px] left-[0px] filter blur-[220px] rounded-[230px] bg-white h-[300px] w-[200px]  text-red-500" />
          </div>
          <div className="right mt-[100px] md:col-span-1 ">
            <div className="img h-[350px] sm:h-[550px]  md:h-full">
              <img
                src={robo}
                className="absolute lg:absolute z-40  bottom-[10px] md:bottom-[20%]  lg:bottom-[10px] right-0 w-[300px] sm:w-[500px] md:w-[350px] lg:w-[500px] xl:w-[500px] "
                alt="robo hand"
              />
            </div>
            {/* <div className="w-96 h-96 lg:absolute z-10 top-[40px] right-[50px] bg-white bg-opacity-20 rounded-full blur-3xl" /> */}
            {/* <svg className=" w-[400px]  h-[350px] lg:absolute right-[70px] bg-gradient-to-r from-transparent to-indigo-900 top-[70px] stroke-black stroke-opacity-100 stroke-1 fill-none filter blur-3xl"></svg> */}

            {/* <div className=" w-[400px] h-[350px]z absolute right-[70px] bg-gradient-to-r from-transparent to-indigo-900 top-[70px]  text-white">
              asd
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
