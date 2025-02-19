interface HeroBannerProps {
  title: string;
  description?: string;
  image: string;
}

const HeroBanner = ({ title, description, image }: HeroBannerProps) => {
  return (
    <div className="relative isolate grid justify-around bg-blue-100 xl:grid-cols-2">
      <div className="flex flex-col gap-4 p-24 py-24 xl:px-[315px]">
        <h1 className="text-xl font-black xl:text-4xl">{title}</h1>
        <p className="line-clamp-6 text-sm font-black lg:text-lg/normal xl:line-clamp-none xl:w-[36ch]">
          {description ??
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        </p>
      </div>
      <img
        src={image}
        alt={title}
        className="absolute -z-10 hidden size-full object-cover lg:block"
      />
    </div>
  );
};
export default HeroBanner;
