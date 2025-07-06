import { NavLink } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";

const navLinks = {
  en: [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
    { name: "New Arrivals", path: "/new-arrivals" },
    { name: "Gift Cards", path: "/gift-cards" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  ar: [
    { name: "الرئيسية", path: "/" },
    { name: "التصنيفات", path: "/categories" },
    { name: "العروض", path: "/deals" },
    { name: "وصل حديثًا", path: "/new-arrivals" },
    { name: "بطاقات الهدايا", path: "/gift-cards" },
    { name: "من نحن", path: "/about" },
    { name: "تواصل معنا", path: "/contact" },
  ],
};

function Nav() {
  const { language } = useLanguage();
  const links = navLinks[language];

  return (
    <nav>
      <ul className="flex gap-5 items-center">
        {links.map((link) => (
          <li className="text-text-second font-medium" key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
