import { Link } from "react-router-dom";
import "./styles.css";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <h1>SOFTLINK</h1>
      </Link>
    </header>
  );
}

export default Header;
