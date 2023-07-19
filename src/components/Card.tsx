import { cardSvg } from "../assets";
const Card = () => {
  return (
    <section
      id="card"
      className="flex gap-[30px] mb-[40px] flex-col md:flex-row mt-[100px]"
    >
      <div className="left md:w-1/2 w-full">
        <h3 className=" text-white text-4xl font-semibold leading-[4rem] tracking-wide">
          Find a better card deal in few easy steps.
        </h3>
        <p className="text-white text-opacity-70 text-lg font-normal leading-loose tracking-tight">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
      </div>
      <div className="right md:w-1/2 w-full flex justify-center relative items-center">
        <img src={cardSvg} alt="" />
      </div>
    </section>
  );
};

export default Card;
