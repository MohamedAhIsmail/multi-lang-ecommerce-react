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
    <div className="pb-9">
      <div className="container">
        <div className="relative px-4 bg-background-main py-4 rounded-full shadow-md flex justify-between items-center">
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
    </div>
  );
}

export default MainHeader;
