import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <h1 className="text-heading text-xl font-semibold">Cartzilla</h1>
    </Link>
  );
}

export default Logo;
