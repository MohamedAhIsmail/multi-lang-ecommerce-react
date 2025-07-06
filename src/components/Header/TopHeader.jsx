import { Link } from "react-router-dom";

function TopHeader() {
  return (
    <div className="bg-second-background p-3 text-text-main">
      <div className="container flex justify-between items-center">
        <p>
          Contact us 24/7{" "}
          <span className="font-semibold">+1 50 537 53 082</span>
        </p>
        <p className="hidden md:block">🔥 The Biggest Sale Ever 50% Off</p>
        <div className="flex gap-3">
          <Link to="/">Wishlist</Link>
          <Link to="/">Account</Link>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
