import { NavLink } from "react-router-dom";
import heroImage from "../assets/hero.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <>
      <div className="relative flex w-full items-center xl:h-[536px]">
        <div className="bg-accent-yellow/15 z-10 flex w-3xl flex-col gap-4 rounded-3xl pt-7 pr-16 pb-14 pl-12 xl:ml-64">
          <h1 className="text-accent-red text-5xl/tight font-black">
            Begin your Education in India : Study In India
          </h1>
          <span className="text-xl/normal font-black xl:w-[40ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>

          <NavLink
            to="/freeConsultancy"
            className="bg-primary-green flex w-fit items-center justify-center gap-2 rounded-full border-2 px-8 py-4 text-white"
          >
            Free Consultancy <FaArrowRightLong />
          </NavLink>
        </div>
        <div className="absolute flex h-full w-full">
          <img src={heroImage} alt="Hero" className="w-full object-cover" />
        </div>
      </div>
      <div className="my-6 flex w-full items-center justify-center gap-3.5">
        <div className="bg-accent-red size-6 rounded-full"></div>
        <div className="bg-primary-green size-6 rounded-full"></div>
        <div className="bg-primary-green size-6 rounded-full"></div>
        <div className="bg-primary-green size-6 rounded-full"></div>
      </div>
    </>
  );
};

export default Hero;
