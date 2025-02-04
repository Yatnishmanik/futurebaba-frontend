export const handlePayment = async (onSuccess) => {
  try {
    const response = await fetch("https://futurebaba.onrender.com/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: 1 }), // ₹1 = 100 paise
    });

    if (!response.ok) throw new Error("Failed to create order");

    const order = await response.json();
    if (!order.id) throw new Error("Order ID not received");

    if (!window.Razorpay) throw new Error("Razorpay SDK not loaded");

    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "FutureBaba",
      description: "Astrology Service Payment",
      order_id: order.id,
      handler: function (response) {
        // ✅ Call the next step (Prediction Form)
        if (onSuccess) {
          onSuccess();
        }
      },
      prefill: {
        name: "John Doe",
        email: "john.doe@example.com",
        contact: "9000090000",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  } catch (error) {
    console.error("Payment error:", error);
    alert("Payment failed! Please try again.");
  }
};
