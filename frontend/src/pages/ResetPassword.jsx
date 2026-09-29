import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ResetPassword.css";

function ResetPassword() {
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    // Frontend demo flow
    navigate("/password-reset-success");
  };

  return (
    <div className="reset-page">
      <div className="reset-card">

        {/* Left Section */}
        <section className="reset-left">
          <div className="reset-left-overlay">

            <Link to="/login" className="reset-brand">
              <div className="reset-brand-logo">🌾</div>

              <div>
                <h1>Krushiphal</h1>
                <p>Smart Farming, Better Future</p>
              </div>
            </Link>

            <div className="reset-left-content">
              <div className="reset-leaf-icon">🌱</div>

              <h2>
                Create a new
                <br />
                <span>secure password.</span>
              </h2>

              <p>
                Keep your Krushiphal account safe with
                <br />
                a strong and secure password.
              </p>
            </div>

            <div className="reset-security-box">
              <div className="security-icon">🛡️</div>

              <div>
                <strong>Your account is secure</strong>
                <p>
                  Choose a password that you don't use
                  anywhere else.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Right Section */}
        <section className="reset-right">

          <Link to="/otp" className="reset-back-link">
            <span>←</span>
            Back to OTP
          </Link>

          <div className="reset-form-area">

            <div className="reset-heading">
              <div className="reset-heading-icon">🔑</div>

              <h2>
                Reset <span>Password</span>
              </h2>

              <p>
                Create a new password for your
                <br />
                Krushiphal account.
              </p>
            </div>

            <form
              className="reset-form"
              onSubmit={handleSubmit}
            >

              <label htmlFor="newPassword">
                New Password
              </label>

              <div className="reset-input-wrapper">
                <span className="reset-input-icon">
                  🔒
                </span>

                <input
                  id="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter your new password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowNewPassword(!showNewPassword)
                  }
                  aria-label={
                    showNewPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showNewPassword ? "🙈" : "👁"}
                </button>
              </div>

              <div className="password-hint">
                Use at least 8 characters.
              </div>

              <label
                htmlFor="confirmPassword"
                className="confirm-password-label"
              >
                Confirm Password
              </label>

              <div className="reset-input-wrapper">
                <span className="reset-input-icon">
                  🔒
                </span>

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Re-enter your new password"
                  required
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>

              {error && (
                <div className="reset-error">
                  <span>⚠</span>
                  {error}
                </div>
              )}

              <div className="password-rules">

                <div
                  className={
                    newPassword.length >= 8
                      ? "rule valid"
                      : "rule"
                  }
                >
                  <span>
                    {newPassword.length >= 8 ? "✓" : "○"}
                  </span>
                  At least 8 characters
                </div>

                <div
                  className={
                    newPassword &&
                    confirmPassword &&
                    newPassword === confirmPassword
                      ? "rule valid"
                      : "rule"
                  }
                >
                  <span>
                    {newPassword &&
                    confirmPassword &&
                    newPassword === confirmPassword
                      ? "✓"
                      : "○"}
                  </span>
                  Passwords match
                </div>

              </div>

              <button
                type="submit"
                className="reset-password-btn"
              >
                <span>✓</span>
                Reset Password
              </button>

            </form>

            <div className="reset-login-link">
              Remember your password?
              <Link to="/login">
                Login here
              </Link>
            </div>

          </div>

          <div className="reset-bottom-leaves">
            🌿
          </div>

        </section>

      </div>
    </div>
  );
}

export default ResetPassword;