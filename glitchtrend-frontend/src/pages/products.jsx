import { useState } from "react";
import "./Products.css";

function Products() {
  const [products] = useState([
    {
      id: 1,
      name: "Glitch Hoodie",
      price: 49,
      image: "https://images.unsplash.com/photo-1520975928316-56d6c2d8e3c1"
    },
    {
      id: 2,
      name: "Cyber Street Tee",
      price: 29,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      id: 3,
      name: "Urban Cap",
      price: 19,
      image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059c"
    },
    {
      id: 4,
      name: "Street Jacket",
      price: 89,
      image: "https://images.unsplash.com/photo-1544441893-675973e31985"
    }
  ]);

  return (
    <div className="store">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>GLITCHTREND</h1>
        <p>Streetwear For The Future</p>
        <button>Shop Now</button>
      </div>

      {/* PRODUCTS */}
      <div className="products">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Products;