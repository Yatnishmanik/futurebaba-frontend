import React from "react";

const Spinner = () => {
  return (
    <div className="spinner" style={{ display: "block", margin: "20px auto" }}>
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid #f3f3f3",
          borderTop: "4px solid #86948d",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      ></div>
    </div>
  );
};

export default Spinner;
