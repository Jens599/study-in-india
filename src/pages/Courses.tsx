import { HeroBanner } from "../components";
import { OurCourses } from "../assets";
import CourseActionBar from "../components/CourseActionBar";
import { subjectData } from "../data/data";
import { twMerge } from "tailwind-merge";

const Courses = () => {
  return (
    <>
      <HeroBanner title="Our Courses" image={OurCourses} />

      <div className="my-12 flex flex-col justify-center space-y-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-center text-[2.375rem] font-black">
            Find Study In India Courses 2024
          </h1>
          <div className="bg-accent-red h-1 w-20"></div>
        </div>

        <div className="flex justify-center bg-neutral-100 py-6">
          <div className="container space-y-2 rounded-xl bg-white px-8 py-8">
            <CourseActionBar />
          </div>
        </div>
        <div className="grid w-full place-items-center gap-8 px-8 lg:grid-cols-2 xl:place-items-baseline xl:px-[315px] 2xl:grid-cols-3">
          {subjectData.map((data, index) => (
            <div
              key={index}
              className={twMerge(
                "flex size-full flex-col gap-4 p-12 font-black",
                index % 2 == 0 ? "bg-primary-green/30" : "",
              )}
            >
              <h2 className="text-accent-red text-xl">{data.Course}</h2>

              <div className="flex flex-col gap-1">
                {data.subjects.map((subs, index) => (
                  <span key={index}>{subs}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Courses;
