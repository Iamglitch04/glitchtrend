function Products() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: "$120",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/air-max-270-shoes-KkLcGR.png"
    },
    {
      id: 2,
      name: "Nike Revolution",
      price: "$90",
      image: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/revolution-6-next-nature-road-running-shoes.png"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item) => (
          <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <img src={item.image} width="200" />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;