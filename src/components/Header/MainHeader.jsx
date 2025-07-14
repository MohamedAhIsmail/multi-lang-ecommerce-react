import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useState } from "react";
import DarkMode from "../DarkMode";
import Nav from "./Nav";
import Search from "./Search";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { Badge } from "../ui/badge";

function MainHeader() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="pb-9">
      <div className="container">
        <div className="relative px-4 bg-background-main py-4 rounded-full shadow-md flex justify-between items-center">
          <NavMenu setOpenMenu={setOpenMenu} />
          <Logo />
          <Nav openMenu={openMenu} />
          <div className="flex items-center gap-4 text-text-second text-2xl">
            <DarkMode />
            <Link className="relative">
              <HiOutlineShoppingCart />
              <Badge
                
                className="bg-button-main absolute -top-2 -right-2 w-5 h-5 text-white"
              >
                0
              </Badge>
            </Link>
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
