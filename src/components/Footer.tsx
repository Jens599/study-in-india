import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FooterData as links } from "../data/data";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between">
      <div className="flex flex-col items-center justify-around gap-16 bg-black pt-14 pb-28 xl:flex-row xl:justify-between xl:px-52">
        <div className="flex flex-col gap-10">
          <img src={logo} alt="logo" className="" />
          <div className="flex gap-2">
            <NavLink to="#" className="">
              <FaFacebook />
            </NavLink>
            <NavLink to="#" className="">
              FA
            </NavLink>
            <NavLink to="#" className="">
              FA
            </NavLink>
            <NavLink to="#" className="">
              FA
            </NavLink>
          </div>
        </div>

        {links.map((link) => (
          <div className="">
            <h1 className="mb-1.5 text-xl font-black text-white">
              {link.heading}
            </h1>
            <div className="text-text-gray flex flex-col gap-2 text-lg font-black">
              {link.titles.map((title) => (
                <NavLink to={title.path}>{title.title}</NavLink>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-primary-green flex flex-col xl:flex-row items-center justify-between py-5 text-white xl:flex-row xl:px-52">
        <span>Copyright © 2024 Study In India</span>
        <div className="flex gap-1">
          <span>Disclaimer</span>
          <span>Privacy Policy</span>
          <span>Terms Of Use</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
