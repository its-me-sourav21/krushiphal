import { Link, useNavigate } from "react-router-dom"; 
import { useState } from "react"; 
import "./Login.css"; 
 
function Login() { 
  const navigate = useNavigate(); 
 
  const [userType, setUserType] = useState("farmer"); 
  const [emailOrPhone, setEmailOrPhone] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [showPassword, setShowPassword] = useState(false); 
 
  const handleLogin = (e) => { 
    e.preventDefault(); 

    if (userType === "buyer") {
      navigate("/buyer-dashboard");
    } else {
      navigate("/dashboard");
    }
  }; 
 
  return ( 
    <div className="login-page"> 
      <div className="login-card"> 
 
        {/* ================= LEFT SIDE ================= */} 
 
        <section className="login-left"> 
          <div className="left-overlay"> 
 
            <div className="brand-section"> 
              <div className="brand-logo">🌾</div> 
 
              <div> 
                <h1>Krushiphal</h1> 
                <p>Smart Farming, Better Future</p> 
              </div> 
            </div> 
 
            <div className="hero-content"> 
              <h2> 
                Empowering Farmers 
                <br /> 
                with <span>Smart Technology</span> 
              </h2> 
 
              <p className="hero-description"> 
                Get real-time updates, expert advice, 
                <br /> 
                market insights and more — all in one place. 
              </p> 
            </div> 
 
            <div className="feature-grid"> 
 
              <div className="feature-item"> 
                <div className="feature-icon">🌿</div> 
                <span> 
                  Crop 
                  <br /> 
                  Monitoring 
                </span> 
              </div> 
 
              <div className="feature-item"> 
                <div className="feature-icon">☁️</div> 
                <span> 
                  Weather 
                  <br /> 
                  Updates 
                </span> 
              </div> 
 
              <div className="feature-item"> 
                <div className="feature-icon">📈</div> 
                <span> 
                  Market 
                  <br /> 
                  Prices 
                </span> 
              </div> 
 
              <div className="feature-item"> 
                <div className="feature-icon">👥</div> 
                <span> 
                  Expert 
                  <br /> 
                  Guidance 
                </span> 
              </div> 
 
            </div> 
 
            <div className="farmer-message"> 
              <span>Healthy Crops</span> 
              <br /> 
              <span>Happy Farmers</span> 
            </div> 
 
          </div> 
        </section> 
 
        {/* ================= RIGHT SIDE ================= */} 
 
        <section className="login-right"> 
 
          {/* Create Account */} 
 
          <div className="top-create-account"> 
            <span>New to Krushiphal?</span> 
 
            <Link to="/profile"> 
              Create Account 
              <strong>→</strong> 
            </Link> 
          </div> 
 
          {/* Heading */} 
 
          <div className="login-heading"> 
            <div className="heading-leaf">🌱</div> 
 
            <h2> 
              Welcome <span>Back</span> 
            </h2> 
 
            <p> 
              Login to your Krushiphal account and continue 
              <br /> 
              your farming journey. 
            </p> 
          </div> 
 
          {/* Farmer / Buyer */} 
 
          <div className="login-tabs"> 
 
            <button 
              type="button" 
              className={ 
                userType === "farmer" 
                  ? "login-tab active" 
                  : "login-tab" 
              } 
              onClick={() => setUserType("farmer")} 
            > 
              <span>✉</span> 
              Farmer 
            </button> 
 
            <button 
              type="button" 
              className={ 
                userType === "buyer" 
                  ? "login-tab active" 
                  : "login-tab" 
              } 
              onClick={() => setUserType("buyer")} 
            > 
              <span>▯</span> 
              Buyer 
            </button> 
 
          </div> 
 
          {/* ================= LOGIN FORM ================= */} 
 
          <form 
            className="login-form" 
            onSubmit={handleLogin} 
          > 
 
            {/* Email / Mobile Number */} 
 
            <label htmlFor="emailOrPhone"> 
              Email / Mobile Number 
            </label> 
 
            <div className="input-wrapper"> 
              <span className="input-icon">✉</span> 
 
              <input 
                id="emailOrPhone" 
                type="text" 
                value={emailOrPhone} 
                onChange={(e) => 
                  setEmailOrPhone(e.target.value) 
                } 
                placeholder="Enter your email or mobile number" 
                required 
              /> 
            </div> 
 
            {/* Password */} 
 
            <label 
              htmlFor="password" 
              className="password-label" 
            > 
              Password 
            </label> 
 
            <div className="input-wrapper"> 
              <span className="input-icon">🔒</span> 
 
              <input 
                id="password" 
                type={ 
                  showPassword ? "text" : "password" 
                } 
                value={password} 
                onChange={(e) => 
                  setPassword(e.target.value) 
                } 
                placeholder="Enter your password" 
                required 
              /> 
 
              <button 
                type="button" 
                className="password-toggle" 
                onClick={() => 
                  setShowPassword(!showPassword) 
                } 
              > 
                👁 
              </button> 
            </div> 
 
            {/* Forgot Password */} 
 
            <div className="forgot-password"> 
              <Link to="/forgot-password"> 
                Forgot Password? 
              </Link> 
            </div> 
 
            {/* Login Button */} 
 
            <button 
              type="submit" 
              className="login-btn" 
            > 
              <span>→</span> 
              Login 
            </button> 
 
          </form> 
 
          {/* Bottom Decoration */} 
 
          <div className="bottom-leaves"> 
            🌿 
          </div> 
 
        </section> 
 
      </div> 
    </div> 
  ); 
} 
 
export default Login;