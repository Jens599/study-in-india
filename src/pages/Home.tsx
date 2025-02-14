import { NavLink } from "react-router-dom";
import { Carousel, CoursesSection, Hero, NewsAndUpdates } from "../components";
import campusImage from "../assets/Campus.jpeg";
import { carouselItems } from "../data/data";
import Testimonials01 from "../assets/Testimonials 01.svg";
import Testimonials02 from "../assets/Testimonials 02.svg";
import Testimonials03 from "../assets/Testimonials 03.svg";
import { RiDoubleQuotesL } from "react-icons/ri";
import FormImage from "../assets/FormImage.png";
import BookingForm from "../components/BookingForm";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="my-11 flex flex-col items-center justify-center gap-4">
        <h1 className="text-primary-green text-center text-4xl font-black">
          About Study in In<span className="text-accent-red">d</span>ia
        </h1>
        <div className="mx-20 my-10 flex flex-col items-center justify-between gap-20 text-justify xl:flex-row">
          <div className="flex flex-col gap-4">
            <span className="line-clamp-6 text-lg/normal xl:line-clamp-none xl:w-[711px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </span>
            <NavLink
              to="#"
              className="text-accent-red cursor-pointer font-black"
            >
              Read More
            </NavLink>
          </div>
          <div className="relative xl:h-[522px] xl:w-[562px]">
            <img
              src={campusImage}
              alt="Image of the Campus"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 size-full bg-black/50 transition-all duration-300 hover:bg-black/0"></div>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-black">Institution</h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>

        <Carousel items={carouselItems} />

        <NewsAndUpdates />

        <div
          className="my-16 flex flex-col items-center justify-center gap-5"
          id="Testimonials"
        >
          <h1 className="text-center text-4xl font-bold">
            What Student Say About Us?
          </h1>
          <div className="bg-accent-red h-1 w-20"></div>
          <div className="my-16 flex w-full flex-col items-center justify-between gap-16 xl:flex-row xl:gap-4 xl:px-[382px]">
            {/* Left testimonial card */}

            <div className="relative isolate flex h-[377.81px] w-[343.26px] flex-col items-center">
              {/* Profile image */}
              <div className="size-20 translate-x-5 overflow-hidden rounded-full bg-black">
                <img
                  src="https://api.samplefaces.com/face?width=200&n=1"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              {/* Testimonial text content */}
              <div className="flex w-[27ch] translate-x-5 flex-col items-center gap-2 text-center font-black">
                <h1 className="font-bold">Sarah Chen</h1>
                <h2 className="">International Student</h2>
                <RiDoubleQuotesL className="text-accent-red text-2xl" />
                <p>
                  Studying in India has been a transformative experience. The
                  rich culture and academic excellence have broadened my
                  horizons immensely.
                </p>
              </div>
              {/* Background decorative image */}
              <img
                src={Testimonials01}
                alt="Testimonial 01"
                className="absolute inset-0 -z-10 size-full"
              />
            </div>

            {/* Center testimonial card - larger size */}
            <div className="relative isolate flex h-[466px] w-[380px] translate-y-7 flex-col items-center xl:w-[434px] xl:translate-y-0">
              {/* Profile image */}
              <div className="size-24 -translate-y-7 overflow-hidden rounded-full bg-black">
                <img
                  src="https://api.samplefaces.com/face?width=200&n=2"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              {/* Testimonial text content */}
              <div className="flex w-[27ch] -translate-y-7 flex-col items-center gap-2 text-center leading-1.5 font-black">
                <h1 className="text-2xl font-bold">Michael Rodriguez</h1>
                <h2 className="text-lg">Exchange Student</h2>
                <RiDoubleQuotesL className="text-accent-red text-3xl" />
                <p className="text-lg">
                  The quality of education and the welcoming atmosphere at
                  Indian universities exceeded my expectations. It's been an
                  incredible journey.
                </p>
              </div>
              {/* Background decorative image */}
              <img
                src={Testimonials02}
                alt="Testimonial 02"
                className="absolute inset-0 -z-10 size-full"
              />
            </div>
            {/* Right testimonial card */}
            <div className="relative isolate flex h-[377.81px] w-[343.26px] flex-col items-center">
              {/* Profile image */}
              <div className="size-20 -translate-x-5 overflow-hidden rounded-full bg-black">
                <img
                  src="https://api.samplefaces.com/face?width=200&n=3"
                  alt=""
                  className="size-full object-cover"
                />
              </div>
              {/* Testimonial text content */}
              <div className="flex w-[27ch] -translate-x-5 flex-col items-center gap-2 text-center leading-1.5 font-black">
                <h1 className="text-lg font-bold">Emma Thompson</h1>
                <h2 className="text-xs">Graduate Student</h2>
                <RiDoubleQuotesL className="text-accent-red text-2xl" />
                <p className="text-xs">
                  The blend of traditional wisdom and modern education in India
                  has given me a unique perspective in my field of study.
                </p>
              </div>
              {/* Background decorative image */}
              <img
                src={Testimonials03}
                alt="Testimonial 03"
                className="absolute inset-0 -z-10 size-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="my-16 flex flex-col items-center justify-center gap-16">
        <div className="flex w-full flex-col items-center">
          <h1 className="text-center text-4xl font-black">
            Study in{" "}
            <span className="text-primary-green">
              In<span className="text-accent-red">d</span>ia
            </span>{" "}
            free Assessment
          </h1>
          <span className="text-text-gray text-center text-xl xl:w-[38ch]">
            Fill in your details below to get a personalised advice
          </span>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>

        <div className="container mx-auto flex overflow-hidden rounded-lg bg-neutral-200">
          <div className="hidden w-full md:block md:w-1/2">
            <img src={FormImage} className="h-full w-full object-cover" />
          </div>

          <div className="w-full p-6 md:w-1/2">
            <BookingForm />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-neutral-200 py-8">
        <CoursesSection />
      </div>
    </>
  );
};

export default Home;
