import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { getProducts } from "../api";

function Home() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "60px" }}>
      <h1 style={{ marginBottom: "40px" }}>Products</h1>

      {products.length === 0 && <p>No products found</p>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "30px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              padding: "20px",
              borderRadius: "15px",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <h3>{product.name}</h3>

            <p style={{ fontWeight: "600" }}>
              ₹{product.price}
            </p>

            <p>{product.description}</p>

            <button
              onClick={() => addToCart(product)}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                borderRadius: "20px",
                border: "none",
                background: "linear-gradient(90deg,#ff00cc,#3333ff)",
                color: "white",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;