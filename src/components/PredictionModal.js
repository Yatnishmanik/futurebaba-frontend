import React, { useState } from "react";

const PredictionModal = ({ onClose, onSubmit }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [birthPlace, setBirthPlace] = useState("");

  const handleSubmit = () => {
    if (name && dob && birthPlace) {
      onSubmit({ name, dob, birthPlace });
    } else {
      alert("Please fill all fields before submitting.");
    }
  };

  return (
    <div className="modal" style={{ fontFamily: "Verdana, sans-serif" }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h5 style={{ color: "rgb(255, 68, 68)" }}>
          <strong>*</strong> Don't Refresh or Reload
        </h5>
        <h2>Enter Your Correct Details</h2>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label>Date of Birth:</label>
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Birth Place:</label>
          <input
            type="text"
            value={birthPlace}
            onChange={(e) => setBirthPlace(e.target.value)}
            placeholder="Enter your birth place"
          />
        </div>
        <div className="buttons">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default PredictionModal;
