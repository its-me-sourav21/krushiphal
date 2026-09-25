import { useNavigate } from "react-router-dom";
import "./OTPVerification.css";

function OTPVerification() {
  const navigate = useNavigate();

  const handleVerify = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="otp-page">
      <div className="otp-card">
        <div className="otp-icon">🔐</div>

        <h1>Verify OTP</h1>

        <p className="otp-description">
          Enter the 6-digit OTP sent to your mobile number.
        </p>

        <form onSubmit={handleVerify}>
          <input
            className="otp-input"
            type="text"
            inputMode="numeric"
            maxLength="6"
            placeholder="Enter OTP"
            required
          />

          <button type="submit" className="verify-btn">
            Verify OTP
          </button>
        </form>

        <p className="resend-text">
          Didn't receive the OTP?{" "}
          <button type="button" className="resend-btn">
            Resend OTP
          </button>
        </p>
      </div>
    </div>
  );
}

export default OTPVerification;