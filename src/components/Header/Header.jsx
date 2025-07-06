import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full">
      <TopHeader />
      <MainHeader />
    </header>
  );
}

export default Header;
