import { useState } from "react";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const addProduct = async () => {
    try {
      const res = await fetch(
        "https://glitchtrend.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            description,
            image,
          }),
        }
      );

      const data = await res.json();

      alert("Product Added ✅");

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Add Product</h1>

      <input
        placeholder="Product Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Image URL"
        onChange={(e) => setImage(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default Admin;