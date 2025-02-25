import { Link } from "react-router-dom";
import { principle, university } from "../assets";
import { courseData, demoData } from "../data/data";
import { FaArrowRight, FaFilePdf } from "react-icons/fa";

const CollegesUniversities = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-14 lg:flex-row">
        <div className="max-w-5xl">
          <img src={university} alt="University" />
        </div>
        <div className="prose xl:prose-2xl max-w-[50ch]">
          <h2 className="text-center font-black xl:text-left">
            CMR University
          </h2>
          <p className="px-2 xl:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="my-16 flex w-full flex-col items-center">
        <div className="prose xl:prose-2xl">
          <h2 className="text-center font-black">About Us</h2>
        </div>
        <p className="mx-auto max-w-7xl px-2 text-lg/normal xl:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>

      <div className="flex flex-col items-center gap-16">
        <div className="prose xl:prose-2xl text-center">
          <h2 className="font-black">Message from Principal/Dean/VC</h2>
        </div>
        <div className="flex flex-col gap-16 xl:flex-row">
          <img
            src={principle}
            alt="Principal"
            className="max-h-2xl object-cover"
          />
          <div className="flex max-w-lg flex-col xl:gap-16">
            <p className="line-clamp-3 xl:line-clamp-none">
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
            </p>
            <p className="line-clamp-3 xl:line-clamp-none">
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
            </p>
          </div>
        </div>
      </div>

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[2.375rem] font-black">Courses</h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>
        <div className="grid w-full place-items-center gap-4 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-3">
          {courseData.slice(0, 6).map((course) => (
            <div className="flex flex-col gap-5">
              <img
                src={course.image}
                alt=""
                className="w-full object-cover xl:max-h-[278px]"
              />
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl font-medium">{course.name}</h3>
                <Link to={course.link} className="flex items-center gap-1">
                  See Course Guide{" "}
                  <FaArrowRight className="text-accent-yellow" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[2.375rem] font-black">Gallary</h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>
        <div className="grid w-full place-items-center gap-4 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-2">
          {demoData.slice(0, 4).map((card) => (
            <img src={card.image} alt="" />
          ))}
        </div>
      </div>

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[2.375rem] font-black">Documents</h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>
        <div className="grid w-full place-items-center gap-4 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-3">
          <FaFilePdf className="text-accent-red place-self-center text-9xl" />
          <FaFilePdf className="text-accent-red place-self-center text-9xl" />
          <FaFilePdf className="text-accent-red place-self-center text-9xl" />
        </div>
      </div>

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-[2.375rem] font-black">Accredition</h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>
        <div className="grid w-full place-items-center gap-4 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-3">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt=""
          />
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1"
            alt=""
          />
        </div>
      </div>
    </>
  );
};
export default CollegesUniversities;
