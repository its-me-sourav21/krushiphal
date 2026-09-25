import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/otp");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="logo-section">
          <div className="logo">🌾</div>
          <h1>Krushiphal</h1>
          <p>Smart Farming, Better Future</p>
        </div>

        <form onSubmit={handleLogin}>
          <label htmlFor="mobile">Mobile Number</label>

          <div className="mobile-input">
            <span>+91</span>
            <input
              id="mobile"
              type="tel"
              placeholder="Enter mobile number"
              maxLength="10"
              required
            />
          </div>

          <button type="submit" className="primary-btn">
            Send OTP
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <p className="account-text">
          Don't have an account?
        </p>

        <Link to="/profile" className="create-account-btn">
          Create Account
        </Link>
      </div>
    </div>
  );
}

export default Login;
