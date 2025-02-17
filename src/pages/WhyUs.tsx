import { Card, HeroBanner, NewsAndUpdates } from "../components";
import WhyUsImage from "../assets/whyUsBanner.jpg";
import { demoData } from "../data/data";
const WhyUs = () => {
  return (
    <>
      <HeroBanner title="Why Us?" image={WhyUsImage} />

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
