import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface CardProps {
  date?: string;
  image: string;
  title: string;
  subTitle?: string;
  description?: string;
  link?: string;
}

const Card = ({ date, image, title, description, link }: CardProps) => {
  return (
    <div className="w-[409px]">
      <img src={image} />
      <div className="flex flex-col gap-2 leading-1.5 font-black">
        {date && <span className="text-text-gray mt-4 text-lg">{date}</span>}
        <span className="max-w-[25ch] text-2xl">{title}</span>

        {description && (
          <span className="text-text-gray text-lg">{description}</span>
        )}

        {link && (
          <NavLink
            to={link}
            className="text-accent-red flex items-center gap-1"
          >
            Read More
            <FaArrowRight />
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Card;
