import React, { useState } from "react";
import "./OTP.css";
import OTPInput from "./OTPInput";

export default function OTP() {
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  const generateOTP = () => {
    const otp = Math.floor(1000 + Math.random() * 9000);
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
        <OTPInput onOTPChange={setUserInput} />
        <button onClick={validateOTP}>Validate OTP</button>
      </div>

      {message && <p className={message.includes("Valid") ? "success" : "error"}>{message}</p>}
    </div>
  );
}
