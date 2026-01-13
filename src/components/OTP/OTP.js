import React, { useState } from "react";
import "./OTP.css";
export default function OTP() {
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const generateOTP = () => {
    // Generate 6 digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOTP(otp.toString());
    setMessage("");
    setUserInput("");
  };

  const validateOTP = () => {
    if (userInput === generatedOTP) {
      setMessage("Valid OTP!");
    } else {
      setMessage("Invalid OTP! Try again.");
    }
  };
  return (
    <div className="container">
      <h1>OTP Generator & Validator</h1>

      <div className="otp-section">
        <button onClick={generateOTP}>Generate OTP</button>
        {generatedOTP && <p className="generated-otp">Generated OTP: {generatedOTP}</p>}
      </div>

      <div className="validator-section">
        <input
          type="text"
          placeholder="Enter OTP to validate"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          maxLength={6}
        />
        <button onClick={validateOTP}>Validate OTP</button>
      </div>

      {message && <p className={message.includes("Valid") ? "success" : "error"}>{message}</p>}
    </div>
  );
}
