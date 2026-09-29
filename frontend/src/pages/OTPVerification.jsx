import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./OTPVerification.css";

function OTPVerification() {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      return;
    }

    // Frontend demo flow:
    // OTP verify hone ke baad new password page par jayega.
    navigate("/reset-password");
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setOtp(value.slice(0, 6));
  };

  return (
    <div className="otp-page">
      <div className="otp-card">

        <Link to="/forgot-password" className="otp-back-link">
          ← Back
        </Link>

        <div className="otp-icon">🔐</div>

        <h1>Verify OTP</h1>

        <p className="otp-description">
          Enter the 6-digit OTP sent to your registered mobile number
          or email address.
        </p>

        <form onSubmit={handleVerify}>

          <label htmlFor="otp">
            Enter OTP
          </label>

          <input
            id="otp"
            className="otp-input"
            type="text"
            inputMode="numeric"
            value={otp}
            onChange={handleOtpChange}
            maxLength="6"
            placeholder="Enter 6-digit OTP"
            autoComplete="one-time-code"
            required
          />

          <button
            type="submit"
            className="verify-btn"
            disabled={otp.length !== 6}
          >
            Verify OTP
          </button>

        </form>

        <p className="resend-text">
          Didn't receive the OTP?{" "}
          <button
            type="button"
            className="resend-btn"
            onClick={() => setOtp("")}
          >
            Resend OTP
          </button>
        </p>

      </div>
    </div>
  );
}

export default OTPVerification;