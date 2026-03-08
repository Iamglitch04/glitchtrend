import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://glitchtrend.onrender.com/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ marginBottom: "30px" }}>Products</h1>

      {products.length === 0 ? (
        <p>No products found</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {products.map((product) => (
            <div
              key={product._id}
              style={{
                background: "#111",
                borderRadius: "10px",
                padding: "15px",
                color: "white",
                textAlign: "center",
                transition: "0.2s",
              }}
            >
              <img
                src={product.image || "https://via.placeholder.com/300"}
                alt={product.name}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />

              <h3>{product.name}</h3>

              <p style={{ fontWeight: "bold", margin: "8px 0" }}>
                ₹{product.price}
              </p>

              <button
                style={{
                  background: "#ff00ff",
                  border: "none",
                  padding: "8px 14px",
                  color: "white",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;