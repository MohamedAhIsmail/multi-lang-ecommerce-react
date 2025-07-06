import { Link } from "react-router-dom";
import DarkMode from "../DarkMode";
import { HiOutlineShoppingCart } from "react-icons/hi2";

function MainHeader() {
  return (
    <div className="py-3 bg-background-second">
      <div className="container bg-background-main px-6 py-4 rounded-full shadow-md flex justify-between items-center">
        <Link to="/">
          <h1 className="text-heading text-xl font-semibold">Cartzilla</h1>
        </Link>

        <nav></nav>

        <div className="flex items-center gap-4 text-text-second text-lg">
          <DarkMode />
          <Link>
            <HiOutlineShoppingCart className="text-heading" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
