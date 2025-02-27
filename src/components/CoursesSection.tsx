import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { courseData } from "../data/data";
import CourseActionBar from "./CourseActionBar";

const CoursesSection = () => {
  return (
    <div className="container space-y-2 rounded-xl bg-white px-8 py-8">
      <CourseActionBar />
      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        {courseData.slice(0, 3).map((course, index) => (
          <div key={index} className="flex flex-col gap-5">
            <img
              src={course.image}
              alt=""
              className="w-full object-cover xl:max-h-[278px]"
            />
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-medium">{course.name}</h3>
              <Link to={course.link} className="flex items-center gap-1">
                See Course Guide <FaArrowRight className="text-accent-yellow" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
