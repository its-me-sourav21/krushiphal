import { Link } from "react-router-dom";
import "./PasswordResetSuccess.css";

function PasswordResetSuccess() {
  return (
    <div className="password-success-page">
      <div className="password-success-card">

        <div className="success-icon">
          ✓
        </div>

        <div className="success-leaf">
          🌱
        </div>

        <h1>
          Password <span>Reset Successfully!</span>
        </h1>

        <p className="success-description">
          Your password has been updated successfully.
          <br />
          You can now login with your new password.
        </p>

        <div className="success-message">
          <span>🔐</span>
          <p>
            Your account is secure. Keep your new password
            private and don't share it with anyone.
          </p>
        </div>

        <Link
          to="/login"
          className="success-login-btn"
        >
          <span>→</span>
          Continue to Login
        </Link>

        <p className="success-footer">
          Welcome back to{" "}
          <strong>Krushiphal</strong>
        </p>

      </div>
    </div>
  );
}

export default PasswordResetSuccess;