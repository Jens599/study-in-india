import { Map, Marker } from "pigeon-maps";

const ContactUs = () => {
  const { x, y } = { x: 27.741493705530218, y: 85.33139438850685 };

  return (
    <>
      <div className="relative isolate grid justify-around bg-blue-100 xl:grid-cols-2">
        <div className="flex flex-col gap-4 p-24 py-24 xl:px-[315px]">
          <h1 className="text-[2.375rem] font-black">Why Us?</h1>
          <p className="line-clamp-6 xl:line-clamp-none text-sm font-black lg:text-lg/normal xl:w-[36ch]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <img
          src="https://placehold.co/600x400"
          alt="Why Us"
          className="absolute -z-10 hidden size-full object-cover lg:block"
        />
      </div>
      <Map height={300} defaultCenter={[x, y]} defaultZoom={18}>
        <Marker width={50} anchor={[x, y]} />
      </Map>
    </>
  );
};

export default ContactUs;
