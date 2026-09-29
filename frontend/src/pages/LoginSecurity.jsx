import { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginSecurity.css";

function LoginSecurity() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      alert("New password must be at least 8 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    alert("Password changed successfully.");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="security-page">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <div>
          <Link to="/dashboard" className="dashboard-brand">
            <div className="dashboard-brand-logo">🌾</div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </Link>

          <nav className="dashboard-sidebar-nav">
            <Link to="/dashboard" className="dashboard-nav-link">
              <span>⌂</span>
              Dashboard
            </Link>

            <Link to="/my-farm" className="dashboard-nav-link">
              <span>🌱</span>
              My Farm
            </Link>

            <Link to="/my-crops" className="dashboard-nav-link">
              <span>🌿</span>
              My Crops
            </Link>

            <Link to="/marketplace" className="dashboard-nav-link">
              <span>🛒</span>
              Marketplace
            </Link>

            <Link to="/reports" className="dashboard-nav-link">
              <span>📊</span>
              Reports
            </Link>

            <Link to="/advisory" className="dashboard-nav-link">
              <span>💡</span>
              Advisory
            </Link>

            <Link to="/my-profile" className="dashboard-nav-link active">
              <span>👤</span>
              My Profile
            </Link>
          </nav>
        </div>

        <Link to="/login" className="dashboard-logout">
          <span>↪</span>
          Logout
        </Link>
      </aside>

      {/* Main Content */}
      <main className="security-main">

        <div className="security-header">
          <div>
            <h1>Login & Security</h1>
            <p>Manage your password and account security.</p>
          </div>

          <Link to="/my-profile" className="security-back-btn">
            ← Back to Profile
          </Link>
        </div>

        {/* Security Overview */}
        <section className="security-card security-overview">
          <div className="security-card-icon">
            🔐
          </div>

          <div className="security-card-content">
            <h2>Account Security</h2>
            <p>
              Keep your account secure by using a strong password
              and protecting your login information.
            </p>
          </div>

          <div className="security-status">
            <span>✓</span>
            Secure
          </div>
        </section>

        {/* Change Password */}
        <section className="security-card">
          <div className="security-section-title">
            <div>
              <h2>Change Password</h2>
              <p>Update your password regularly to keep your account safe.</p>
            </div>
          </div>

          <form
            className="security-password-form"
            onSubmit={handlePasswordChange}
          >
            <div className="security-form-group">
              <label htmlFor="currentPassword">
                Current Password
              </label>

              <div className="security-input-wrapper">
                <span>🔒</span>

                <input
                  id="currentPassword"
                  type={
                    showCurrentPassword
                      ? "text"
                      : "password"
                  }
                  value={currentPassword}
                  onChange={(e) =>
                    setCurrentPassword(e.target.value)
                  }
                  placeholder="Enter your current password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowCurrentPassword(
                      !showCurrentPassword
                    )
                  }
                >
                  {showCurrentPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="security-form-group">
              <label htmlFor="newPassword">
                New Password
              </label>

              <div className="security-input-wrapper">
                <span>🔒</span>

                <input
                  id="newPassword"
                  type={
                    showNewPassword
                      ? "text"
                      : "password"
                  }
                  value={newPassword}
                  onChange={(e) =>
                    setNewPassword(e.target.value)
                  }
                  placeholder="Enter your new password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowNewPassword(
                      !showNewPassword
                    )
                  }
                >
                  {showNewPassword ? "🙈" : "👁"}
                </button>
              </div>

              <span className="security-hint">
                Use at least 8 characters.
              </span>
            </div>

            <div className="security-form-group">
              <label htmlFor="confirmPassword">
                Confirm New Password
              </label>

              <div className="security-input-wrapper">
                <span>🔒</span>

                <input
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  placeholder="Re-enter your new password"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      !showConfirmPassword
                    )
                  }
                >
                  {showConfirmPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            <div className="security-password-rules">
              <div
                className={
                  newPassword.length >= 8
                    ? "security-rule valid"
                    : "security-rule"
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
                    ? "security-rule valid"
                    : "security-rule"
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
              className="security-change-btn"
            >
              🔐 Change Password
            </button>
          </form>
        </section>

        {/* Login Information */}
        <section className="security-card">
          <div className="security-section-title">
            <div>
              <h2>Login Information</h2>
              <p>Your registered account information.</p>
            </div>
          </div>

          <div className="security-info-grid">
            <div className="security-info-item">
              <span>📱</span>

              <div>
                <small>Mobile Number</small>
                <strong>+91 98765 43210</strong>
              </div>
            </div>

            <div className="security-info-item">
              <span>✉</span>

              <div>
                <small>Email Address</small>
                <strong>ramesh.kumar@example.com</strong>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

export default LoginSecurity;