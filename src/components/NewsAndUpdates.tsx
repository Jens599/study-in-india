import { cardItems } from "../data/data";
import Card from "./Card";

const NewsAndUpdates = () => {
  return (
    <div className="bg-background-gray w-full px-16 py-16 xl:px-[315px]">
      <div className="flex flex-col gap-4 font-black">
        <span className="text-4xl/normal">News & Updates</span>
        <span className="text-text-gray after:bg-accent-red text-xl/normal after:block after:h-1 after:w-[5ch] after:content-['']">
          Let's help you live your <br /> dream
        </span>
      </div>
      <div className="mt-14 grid justify-center gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-0">
        {cardItems.map((item, index) => (
          <Card
            key={index}
            date={item.date}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsAndUpdates;
