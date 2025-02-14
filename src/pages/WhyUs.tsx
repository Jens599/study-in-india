import { Card, NewsAndUpdates } from "../components";
import WhyUsImage from "../assets/whyUsBanner.jpg";
import { demoData } from "../data/data";
const WhyUs = () => {
  return (
    <>
      <div className="relative isolate grid justify-around bg-blue-100 xl:grid-cols-2">
        <div className="flex flex-col gap-4 p-24 py-24 xl:px-[315px]">
          <h1 className="text-[2.375rem] font-black">Why Us?</h1>
          <p className="text-sm font-black lg:text-lg/normal xl:w-[36ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          src={WhyUsImage}
          alt="Why Us"
          className="absolute -z-10 hidden size-full object-cover lg:block"
        />
      </div>

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[2.375rem] font-black">Study in India</h1>
          <h3 className="text-lg font-black">Some know hows</h3>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>
        <div className="grid w-full place-items-center gap-4 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-3">
          {demoData.map((card) => (
            <Card
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[2.375rem] font-black">Gallary</h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>
        <div className="grid w-full place-items-center gap-4 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-3">
          {demoData.map((card) => (
            <img src={card.image} alt="" />
          ))}
        </div>
      </div>

      <NewsAndUpdates />
    </>
  );
};

export default WhyUs;
