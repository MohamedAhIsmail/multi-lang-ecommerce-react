import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import DarkMode from "../DarkMode";
import Nav from "./Nav";
import Search from "./Search";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function MainHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-background-second pb-9">
      <div className="container relative bg-background-main px-5 py-4 rounded-full shadow-md flex justify-between items-center">
        <NavMenu setOpenMenu={setOpenMenu} />
        <Logo />
        <Nav openMenu={openMenu} />
        <div className="flex items-center gap-4 text-text-second text-xl">
          <DarkMode />
          <Link>
            <HiOutlineShoppingCart />
          </Link>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
