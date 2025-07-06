import { HiBars3 } from "react-icons/hi2";

function NavMenu({ setOpenMenu }) {
  return (
    <div className="block md:hidden cursor-pointer text-text-second text-2xl">
      <div onClick={() => setOpenMenu((open) => !open)}>
        <HiBars3 />
      </div>
    </div>
  );
}

export default NavMenu;
