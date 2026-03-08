import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://glitchtrend.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "40px", maxWidth: "1200px", margin: "auto" }}>
      <h1 style={{ marginBottom: "30px" }}>GlitchTrend Store</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              background: "#fff",
              transition: "transform 0.2s",
            }}
          >
            <img
              src={product.image || "https://via.placeholder.com/400"}
              alt={product.name}
              style={{
                width: "100%",
                height: "250px",
                objectFit: "cover",
              }}
            />

            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "0 0 10px 0" }}>{product.name}</h3>

              <p style={{ color: "#555" }}>{product.description}</p>

              <h2 style={{ margin: "10px 0" }}>₹{product.price}</h2>

              <button
                style={{
                  width: "100%",
                  padding: "10px",
                  border: "none",
                  background: "black",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;