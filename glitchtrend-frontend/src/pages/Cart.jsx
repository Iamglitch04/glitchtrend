import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handlePayment = async () => {
    try {
      // 1️⃣ Create order from backend
      const response = await fetch(
        "http://localhost:5000/api/payment/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: total }),
        }
      );

      const order = await response.json();

      const options = {
        key: "rzp_test_SNs40J2fH7RXxr",
        amount: order.amount,
        currency: "INR",
        name: "GlitchTrend",
        description: "Purchase",
        order_id: order.id,

        handler: async function (paymentResponse) {
          // 2️⃣ Verify payment
          const verifyRes = await fetch(
            "http://localhost:5000/api/payment/verify",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(paymentResponse),
            }
          );

          const data = await verifyRes.json();

          if (data.success) {
            // 3️⃣ Save order to MongoDB
            await fetch("http://localhost:5000/api/orders", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
              body: JSON.stringify({
                orderItems: cart,
                totalPrice: total,
                paymentResult: paymentResponse,
              }),
            });

            // 4️⃣ Clear cart
            clearCart();

            alert("Payment Successful ✅ Order Saved!");

            // 5️⃣ Redirect user
            window.location.href = "/orders";
          } else {
            alert("Payment Failed ❌");
          }
        },

        theme: {
          color: "#9333ea",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div style={{ padding: "60px" }}>
      <h1 style={{ marginBottom: "40px" }}>Your Cart</h1>

      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.map((item) => (
        <div
          key={item._id}
          style={{
            marginBottom: "25px",
            padding: "20px",
            borderRadius: "15px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <div style={{ marginTop: "10px" }}>
            <button onClick={() => decreaseQty(item._id)}>-</button>
            <span style={{ margin: "0 15px" }}>{item.qty}</span>
            <button onClick={() => increaseQty(item._id)}>+</button>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            style={{
              marginTop: "15px",
              background: "red",
              color: "white",
              border: "none",
              padding: "5px 12px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2 style={{ marginTop: "40px" }}>Total: ₹{total}</h2>

          <button
            onClick={handlePayment}
            style={{
              marginTop: "30px",
              padding: "15px 30px",
              borderRadius: "30px",
              border: "none",
              background: "linear-gradient(90deg,#ff00cc,#3333ff)",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Pay Now
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;