import { useState } from "react";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const addProduct = async () => {
    if (!name || !price || !image || !description) {
      alert("Please fill all fields");
      return;
    }

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
            price: Number(price),
            description,
            image,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Product Added ✅");

        // clear form
        setName("");
        setPrice("");
        setDescription("");
        setImage("");
      } else {
        alert("Failed to add product");
      }

      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Server error");
    }
  };

  return (
    <div style={{ padding: "50px" }}>
      <h1>Add Product</h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}

export default Admin;