import { useState } from "react";
import Chips from "./Chips";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { courseData, sampleTags } from "../data/data";

const CoursesSection = () => {
  const [tags, setTags] = useState<string[]>(sampleTags);

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <div className="container space-y-2 rounded-xl bg-white px-8 py-8">
      <div className="grid font-bold xl:grid-cols-[0.25fr_2fr_0.5fr]">
        <select
          name="courses"
          id="courses"
          className="h-full w-full py-2 text-center outline outline-gray-300"
        >
          <option value="-1">Courses</option>
          <option value="btech">B.Tech</option>
          <option value="bsc">B.Sc</option>
          <option value="bba">BBA</option>
          <option value="bcom">B.Com</option>
          <option value="ba">BA</option>
          <option value="barch">B.Arch</option>
          <option value="bca">BCA</option>
          <option value="bpharm">B.Pharm</option>
          <option value="bdes">B.Des</option>
          <option value="llb">LLB</option>
        </select>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          className="w-full px-2 py-2 outline outline-gray-300"
        />
        <div className="hidden items-center gap-1 xl:flex">
          <button className="ml-1 h-full grow cursor-pointer outline outline-gray-300 hover:bg-gray-100">
            B.Tech
          </button>
          <button className="h-full grow cursor-pointer outline outline-gray-300 hover:bg-gray-100">
            MBBS
          </button>
          <button className="h-full grow cursor-pointer outline outline-gray-300 hover:bg-gray-100">
            BBA
          </button>
          <button className="h-full grow cursor-pointer outline outline-gray-300 hover:bg-gray-100">
            BBM
          </button>
        </div>
      </div>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <Chips key={tag} label={tag} onRemove={removeTag} />
        ))}
      </div>
      <div className="mt-4 grid gap-4 xl:grid-cols-3">
        {courseData.slice(0, 3).map((course) => (
          <div className="flex flex-col gap-5">
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
