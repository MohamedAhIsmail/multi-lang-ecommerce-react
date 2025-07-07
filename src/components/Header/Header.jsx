import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <TopHeader />
      <MainHeader />
    </header>
  );
}

export default Header;
