import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useState } from "react";
import { RiMenu2Line, RiMenuFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

const Header = () => {
  const [hbmenu, setHbmenu] = useState<boolean>(true);
  const toggleHbMenu = () => {
    setHbmenu(!hbmenu);
  };

  const color = window.location.pathname === "/home" ? "blue" : "green";

  return (
    <header className="flex flex-col items-center justify-between xl:my-5 xl:mr-20 xl:ml-28 xl:flex-row">
      <img
        src={logo}
        className="max-h-32 object-cover"
        alt="Study in India Logo"
      />
      <button
        className="my-4 flex h-full w-full items-center justify-center xl:hidden"
        onClick={toggleHbMenu}
      >
        {hbmenu ? (
          <RiMenuFill className="text-4xl" />
        ) : (
          <RiMenu2Line className="text-4xl" />
        )}
      </button>
      <div
        className={twMerge(
          "font-open-sans-hebrew size-full flex-col items-center font-black xl:flex xl:size-fit xl:flex-row xl:gap-16",
          hbmenu ? "hidden" : "flex",
        )}
      >
        <nav className="flex size-full flex-col xl:flex-row xl:gap-10">
          <NavLink className="py-2 text-center" to="/collegesUniversities">
            Colleges/Universities
          </NavLink>
          <NavLink className="py-2 text-center" to="/courses">
            Courses
          </NavLink>
          <NavLink className="py-2 text-center" to="/whyUs">
            Why Us
          </NavLink>
          <NavLink className="py-2 text-center" to="/scholarship">
            Scholarship
          </NavLink>
          <NavLink className="py-2 text-center" to="/blogs">
            Blogs
          </NavLink>
        </nav>

        <NavLink
          to="/applyNow"
          className={twMerge(
            "bg-primary-blue mb-4 rounded-xl px-3 py-3.5 text-center text-nowrap text-white xl:mb-0",
            color === "blue" ? "bg-primary-blue" : "bg-primary-green",
          )}
        >
          Apply Now
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
