import axios from "axios";

function Checkout() {

  const handlePayment = async () => {

    // 1️⃣ Create order from backend
    const { data } = await axios.post(
      "http://localhost:5000/api/payment/create-order",
      { amount: 500 }
    );

    const options = {
      key: "rzp_test_SNs40J2fH7RXxr",
      amount: data.amount,
      currency: data.currency,
      name: "GlitchTrend",
      description: "Test Transaction",
      order_id: data.id,

      handler: function (response) {
        alert("Payment Successful 🎉");
        console.log(response);
      },

      prefill: {
        name: "Customer",
        email: "customer@email.com",
        contact: "9999999999",
      },

      theme: {
        color: "#000000",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Checkout</h2>
      <button onClick={handlePayment}>
        Pay ₹500
      </button>
    </div>
  );
}

export default Checkout;