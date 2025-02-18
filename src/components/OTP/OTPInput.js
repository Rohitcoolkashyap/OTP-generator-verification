import React, { useRef, useState } from 'react';

function OTPInput({ onOTPChange }) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = [useRef(), useRef(), useRef(), useRef()];

  const handleChange = (index, value) => {
    if (isNaN(value)) return;
    
    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);
    onOTPChange(newOTP.join(''));

    // Move to next input if value is entered
    if (value !== '' && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace if current input is empty
    if (e.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <div className="otp-input-container">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          ref={inputRefs[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className="otp-input"
        />
      ))}
    </div>
  );
}

export default OTPInput; 