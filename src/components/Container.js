import React, { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PredictionModal from "./PredictionModal";
import Output from "./Output";
import Spinner from "./Spinner";
import { handlePayment } from "./Payment";

const Container = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [outputData, setOutputData] = useState(null);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handlePrediction = async (details) => {
    setLoading(true);
    setShowModal(false);
    try {
      const response = await fetch("https://futurebaba.onrender.com/predictions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dob: details.dob}),
      });

      const data = await response.json();
      if (response.ok) {
        // console.log(data);
        setTimeout(() => {
          setOutputData({ ...data[0], name: details.name, dateofbirth:details.dob,place:details.birthPlace });
          setLoading(false);
        }, 3000); // ⏳ Spinner lasts for 3 seconds
        
        
         // ✅ Show prediction after form submission
      } else {
        alert("No predictions found for this DOB.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Something went wrong. Try again.");
    }
  };

  const handlePaymentAndPrediction = () => {
    
    handlePayment(() => {
      // ✅ Open prediction form AFTER successful payment
      handleShowModal();
    });
  };

  return (
    <>
      <Header />
      <div
        className="container"
        style={{
          background: "#fff",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "768px",
        }}
      >
        <img
          src="https://thumbs.dreamstime.com/b/pixel-art-old-monk-meditate-isolated-background-335948055.jpg"
          alt="Profile"
          className="profile-image"
          style={{
            borderRadius: "50%",
            margin: "20px auto",
            display: "block",
            width: "80px",
            height: "80px",
          }}
        />
        <h2
          style={{
            fontFamily: "Verdana, sans-serif",
            color: "#325090",
            fontWeight: "bold",
            fontSize: "25px",
          }}
        >
          Welcome To FutureBaba.in
        </h2>
        <h3 style={{ fontFamily: "Verdana, sans-serif", fontSize: "18px" }}>
          Unlock Your Destiny!
        </h3>
        <p style={{ fontFamily: "Verdana", fontSize: "13px" }}>
          Your trusted destination for affordable, personalized astrology
          predictions at just <strong>(1Rs).</strong>
        </p>
        <h4 style={{fontFamily:"font-family: Verdana",font:"20px"}}> World-class predictions for just <strong>[₹1]</strong> 
      | Predictions crafted uniquely for you.</h4>
      <p style={{fontFamily:"font-family: Verdana"}}>
        We have opened up FutureBaba for popular consumption at
        <strong> AKTU</strong>.
      Ready to explore your future? <br /><h3 style={{color:"green"}}> To get started, click below to prediction.</h3></p>
        <div className="buttons">
          <button
            id="rzp-button1"
            onClick={handlePaymentAndPrediction}
            style={{ fontFamily: "Verdana",padding:"10px",font:"15px" }}
          >
            Prediction (1Rs)
          </button>
        </div>

        <div style={{padding: "10px",
            border: "1px solid #ddd",
            marginTop: "20px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            backgroundColor: " #f9f9f9",}}>
          {loading && <Spinner/>}
          {outputData && <Output data={outputData}  />}
        </div>

        {showModal && (<PredictionModal onSubmit={handlePrediction}onClose={handleCloseModal}/>)}
      </div>
      <Footer />
    </>
  );
};

export default Container;
