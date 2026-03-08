import { useState } from "react";
import "./products.css";

function Products() {

  const [products] = useState([
    {
      id: 1,
      name: "Glitch Hoodie",
      price: "$49",
      image: "https://images.unsplash.com/photo-1556821840-3a9fbcf9b5b9"
    },
    {
      id: 2,
      name: "Cyber Street Tee",
      price: "$29",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 3,
      name: "Urban Cap",
      price: "$19",
      image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"
    }
  ]);

  return (
    <div className="store">
      <h1>Products</h1>

      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;