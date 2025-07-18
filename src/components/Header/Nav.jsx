import { NavLink } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import {
  HiOutlineHome,
  HiOutlineTag,
  HiOutlinePhone,
  HiOutlineLightBulb,
} from "react-icons/hi";
import { AiOutlineProduct } from "react-icons/ai";

const navLinks = {
  en: [
    { name: "Home", path: "/", icon: <HiOutlineHome /> },
    { name: "Categories", path: "/categories", icon: <HiOutlineTag /> },
    { name: "New Arrivals", path: "/new-arrivals", icon: <AiOutlineProduct /> },
    { name: "About", path: "/about", icon: <HiOutlineLightBulb /> },
    { name: "Contact", path: "/contact", icon: <HiOutlinePhone /> },
  ],
  ar: [
    { name: "الرئيسية", path: "/", icon: <HiOutlineHome /> },
    { name: "التصنيفات", path: "/categories", icon: <HiOutlineTag /> },
    { name: "وصل حديثًا", path: "/new-arrivals", icon: <AiOutlineProduct /> },
    { name: "عن الموقع", path: "/about", icon: <HiOutlineLightBulb /> },
    { name: "تواصل معنا", path: "/contact", icon: <HiOutlinePhone /> },
  ],
};

function Nav({ openMenu }) {
  const { language = "en" } = useLanguage();
  const links = navLinks[language] || navLinks["en"];

  return (
    <>
      <nav
        className={`absolute shadow-sm lg:shadow-none left-0 bg-background-main w-full top-20 lg:static rounded-lg ${
          openMenu ? "flex" : "hidden"
        } justify-center lg:flex`}
      >
        <ul className="px-4 pt-15 pb-4 lg:p-0 lg:flex lg:gap-5 items-center">
          {links.map((link) => (
            <li
              className="p-2 lg:p-0 text-text-second relative group"
              key={link.name}
            >
              <NavLink to={link.path} className="flex items-center gap-2">
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </NavLink>
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 dark:bg-white bg-slate-600 rounded-full group-hover:w-full duration-300 transition-all"></span>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
