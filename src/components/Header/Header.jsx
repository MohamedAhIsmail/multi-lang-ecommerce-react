import MainHeader from "./MainHeader";
import TopHeader from "./TopHeader";

function Header() {
  return (
    <header className="relative z-50">
      <TopHeader />
      <MainHeader />
    </header>
  );
}

export default Header;
