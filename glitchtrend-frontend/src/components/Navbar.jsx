import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {

  const { cart } = useCart();

  return (
    <nav
      style={{
        padding: "25px 80px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backdropFilter: "blur(10px)",
        background: "rgba(20,20,20,0.6)",
        borderBottom: "1px solid rgba(255,255,255,0.1)"
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: "26px",
          fontWeight: "700",
          background: "linear-gradient(90deg,#ff00cc,#3333ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textDecoration: "none"
        }}
      >
        GLITCHTREND
      </Link>

      <div>
        <Link
          to="/"
          style={{
            color: "#ccc",
            marginRight: "30px",
            textDecoration: "none"
          }}
        >
          Home
        </Link>

        <Link
          style={{
            color: "#ccc",
            marginRight: "30px",
            textDecoration: "none"
          }}
          to="/cart"
        >
          Cart ({cart.length})
        </Link>

        <Link
          to="/login"
          style={{
            padding: "10px 20px",
            background: "linear-gradient(90deg,#ff00cc,#3333ff)",
            borderRadius: "25px",
            textDecoration: "none",
            color: "white",
            fontWeight: "500"
          }}
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;