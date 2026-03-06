import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/orders/myorders", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div style={{ padding: "60px" }}>
      <h1 style={{ marginBottom: "40px" }}>My Orders</h1>

      {orders.length === 0 && <p>No orders yet</p>}

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            marginBottom: "30px",
            padding: "20px",
            borderRadius: "10px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <h3>Order ID: {order._id}</h3>
          <p>Total: ₹{order.totalPrice}</p>
          <p>Status: {order.isPaid ? "Paid ✅" : "Pending"}</p>

          <h4>Items:</h4>

          {order.orderItems.map((item, i) => (
            <p key={i}>
              {item.name} × {item.qty}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Orders;