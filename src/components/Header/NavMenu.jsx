import { HiBars3 } from "react-icons/hi2";

function NavMenu() {
  return (
    <div className="fixed left-0 top-0 bg-white h-100 w-[200px] border-2">
      <div >
        <HiBars3 />
      </div>
      <div className="">
        <ul>
          <li>book</li>
          <li>book</li>
          <li>book</li>
          <li>book</li>
        </ul>
      </div>
    </div>
  );
}

export default NavMenu;
