import { useNavigate } from "react-router-dom";
import "./FarmerProfile.css";

function FarmerProfile() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/farm-setup");
  };

  return (
    <div className="farmer-profile-page">
      <div className="farmer-profile-card">
        <div className="profile-header">
          <div className="profile-icon">👨‍🌾</div>

          <h1>Create Farmer Profile</h1>

          <p>Tell us a little about yourself to get started.</p>
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>

            <input
              id="mobile"
              type="tel"
              placeholder="Enter mobile number"
              maxLength="10"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="state">State</label>

              <input
                id="state"
                type="text"
                placeholder="Enter state"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="district">District</label>

              <input
                id="district"
                type="text"
                placeholder="Enter district"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="village">Village / City</label>

            <input
              id="village"
              type="text"
              placeholder="Enter village or city"
              required
            />
          </div>

          <button type="submit" className="profile-submit-btn">
            Continue to Farm Setup →
          </button>
        </form>
      </div>
    </div>
  );
}

export default FarmerProfile;