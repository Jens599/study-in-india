import { FaRegNewspaper } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const TopBanner = () => {
  const color = window.location.pathname === "/home" ? "blue" : "green";
  return (
    <div
      className={twMerge(
        color === "blue"
          ? "bg-primary-blue"
          : color === "green"
            ? "bg-primary-green"
            : "bg-sky-600", // default fallback
        "hidden justify-end gap-12 px-16 py-3.5 text-white md:flex",
      )}
    >
      <Link
        to="newsAndUpdate"
        className="flex items-center justify-center gap-1.5"
      >
        <FaRegNewspaper />
        <span>News & Updates</span>
      </Link>
      <Link
        to="/contactUs"
        className="flex items-center justify-center gap-1.5"
      >
        <HiLocationMarker />
        <span>Contact Us</span>
      </Link>
    </div>
  );
};

export default TopBanner;
