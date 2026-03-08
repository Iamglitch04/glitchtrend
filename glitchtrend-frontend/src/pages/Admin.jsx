import { useEffect, useState } from "react";

function Admin() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await fetch("https://glitchtrend.onrender.com/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const deleteProduct = async (id) => {
    await fetch(`https://glitchtrend.onrender.com/api/products/${id}`, {
      method: "DELETE",
    });

    alert("Product Deleted");

    loadProducts();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Panel</h1>

      {products.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid #ddd",
            marginBottom: "15px",
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{p.name}</h3>
          <p>₹{p.price}</p>

          <button
            onClick={() => deleteProduct(p._id)}
            style={{
              background: "red",
              color: "white",
              border: "none",
              padding: "8px 12px",
              cursor: "pointer",
              borderRadius: "5px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;