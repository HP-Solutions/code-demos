import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", fontWeight: "bold" }}>
          Home
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
