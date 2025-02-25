import { useState } from "react";
import { sampleTags } from "../data/data";
import { Chips } from ".";

const CourseActionBar = () => {
  const [tags, setTags] = useState<string[]>(sampleTags);

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };
  return (
    <>
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
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Chips key={tag} label={tag} onRemove={removeTag} />
        ))}
      </div>
    </>
  );
};
export default CourseActionBar;
