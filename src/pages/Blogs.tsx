import { BlogImage } from "../assets";
import { HeroBanner } from "../components";

const Blogs = () => {
  return (
    <>
      <HeroBanner title="Blog & Updates" image={BlogImage} />

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-[2.375rem] font-black">
            News & Updates
          </h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>

        <div className="grid w-full place-items-center gap-8 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-3">
          {[...Array(6)].map(() => (
            <div className="bg-primary-green/30 max-w-md">
              <img
                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
                className="object-cover"
              />
              <div className="space-y-2.5 px-7 py-5 font-black">
                <p className="text-text-gray">
                  {new Date().toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
                <h2 className="text-2xl">Study In India?</h2>
                <p className="text-text-gray line-clamp-3 text-lg/normal">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam perferendis quae maiores nulla quam ab vitae accusamus
                  modi dolorum itaque ratione nihil soluta sunt saepe alias
                  fugit, nam sapiente suscipit.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Blogs;
