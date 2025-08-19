import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <h1>Logo</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default NavBar;
