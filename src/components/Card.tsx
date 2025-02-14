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
    <div className="max-w-[409px]">
      <img src={image} />
      <div className="flex flex-col gap-2 font-black">
        {date && <span className="text-text-gray mt-4 text-lg">{date}</span>}
        <span className="xl:max-w-[25ch] xl:text-2xl">{title}</span>

        {description && (
          <span className="text-text-gray text-sm xl:text-lg">
            {description}
          </span>
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
