import { FaRegNewspaper } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { twMerge } from "tailwind-merge";

interface TopBannerProps {
  color: string;
}
const TopBanner = ({ color }: TopBannerProps) => {
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
      <div className="flex items-center justify-center gap-1.5">
        <FaRegNewspaper />
        <span>News & Updates</span>
      </div>
      <div className="flex items-center justify-center gap-1.5">
        <HiLocationMarker />
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default TopBanner;
