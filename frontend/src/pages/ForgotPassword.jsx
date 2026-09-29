import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPassword() {
  const navigate = useNavigate();

  const [method, setMethod] = useState("mobile");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo flow
    navigate("/otp");
  };

  return (
    <div className="forgot-page">
      <div className="forgot-card">

        {/* Left Section */}
        <section className="forgot-left">
          <div className="forgot-left-overlay">

            <Link to="/login" className="forgot-brand">
              <div className="forgot-brand-logo">🌾</div>

              <div>
                <h1>Krushiphal</h1>
                <p>Smart Farming, Better Future</p>
              </div>
            </Link>

            <div className="forgot-left-content">
              <div className="forgot-leaf-icon">🌱</div>

              <h2>
                Don't worry,
                <br />
                we've got you <span>covered.</span>
              </h2>

              <p>
                Reset your password securely and get
                <br />
                back to your farming journey.
              </p>
            </div>

            <div className="forgot-benefits">
              <div className="forgot-benefit">
                <span>🔐</span>
                <div>
                  <strong>Secure Recovery</strong>
                  <p>Your account stays protected.</p>
                </div>
              </div>

              <div className="forgot-benefit">
                <span>📱</span>
                <div>
                  <strong>Quick Verification</strong>
                  <p>Verify your identity with OTP.</p>
                </div>
              </div>

              <div className="forgot-benefit">
                <span>🌿</span>
                <div>
                  <strong>Back to Farming</strong>
                  <p>Continue your smart farming journey.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Right Section */}
        <section className="forgot-right">

          <Link to="/login" className="back-login">
            <span>←</span>
            Back to Login
          </Link>

          <div className="forgot-form-area">

            <div className="forgot-heading">
              <div className="forgot-heading-icon">🔑</div>

              <h2>
                Forgot <span>Password?</span>
              </h2>

              <p>
                Enter your registered mobile number or email
                <br />
                and we'll help you reset your password.
              </p>
            </div>

            <div className="recovery-tabs">

              <button
                type="button"
                className={
                  method === "mobile"
                    ? "recovery-tab active"
                    : "recovery-tab"
                }
                onClick={() => {
                  setMethod("mobile");
                  setValue("");
                }}
              >
                <span>📱</span>
                Mobile Number
              </button>

              <button
                type="button"
                className={
                  method === "email"
                    ? "recovery-tab active"
                    : "recovery-tab"
                }
                onClick={() => {
                  setMethod("email");
                  setValue("");
                }}
              >
                <span>✉</span>
                Email Address
              </button>

            </div>

            <form
              className="forgot-form"
              onSubmit={handleSubmit}
            >

              <label htmlFor="recoveryValue">
                {method === "mobile"
                  ? "Mobile Number"
                  : "Email Address"}
              </label>

              {method === "mobile" ? (
                <div className="recovery-input-wrapper">

                  <span className="country-code">+91</span>

                  <input
                    id="recoveryValue"
                    type="tel"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter your mobile number"
                    maxLength="10"
                    required
                  />

                </div>
              ) : (
                <div className="recovery-input-wrapper">

                  <span className="recovery-input-icon">
                    ✉
                  </span>

                  <input
                    id="recoveryValue"
                    type="email"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Enter your email address"
                    required
                  />

                </div>
              )}

              <div className="recovery-info">
                <span>ⓘ</span>

                <p>
                  We'll send a one-time password (OTP) to your
                  registered {method === "mobile" ? "mobile number" : "email address"}.
                </p>
              </div>

              <button
                type="submit"
                className="send-otp-btn"
              >
                <span>→</span>
                Send OTP
              </button>

            </form>

            <div className="remember-password">
              <span>Remember your password?</span>

              <Link to="/login">
                Login here
              </Link>
            </div>

          </div>

          <div className="forgot-bottom-leaves">
            🌿
          </div>

        </section>

      </div>
    </div>
  );
}

export default ForgotPassword;