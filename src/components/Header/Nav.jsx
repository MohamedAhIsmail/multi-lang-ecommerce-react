import { NavLink } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
// import NavMenu from "./NavMenu";

const navLinks = {
  en: [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Deals", path: "/deals" },
    { name: "Contact", path: "/contact" },
    { name: "About", path: "/about" },
  ],
  ar: [
    { name: "الرئيسية", path: "/" },
    { name: "التصنيفات", path: "/categories" },
    { name: "العروض", path: "/deals" },
    { name: "وصل حديثًا", path: "/new-arrivals" },
    { name: "تواصل معنا", path: "/contact" },
    { name: "عن الموقع", path: "/about" },
  ],
};

function Nav({ openMenu }) {
  const { language = "en" } = useLanguage();
  const links = navLinks[language] || navLinks["en"]

  return (
    <>
      <nav
        className={`absolute shadow-sm md:shadow-none left-0 bg-background-main w-full top-20 md:static rounded-lg ${
          openMenu ? "flex" : "hidden"
        } justify-center md:flex`}
      >
        <ul className="px-4 pt-15 pb-4 md:p-0 md:flex md:gap-5 items-center">
          {links.map((link) => (
            <li
              className="p-2 md:p-0 text-text-second font-medium"
              key={link.name}
            >
              <NavLink to={link.path}>{link.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Nav;
