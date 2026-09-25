import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FarmSetup.css";

function FarmSetup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    farmName: "",
    farmArea: "",
    areaUnit: "Acres",
    soilType: "",
    irrigation: "",
    mainCrop: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend only for now
    navigate("/dashboard");
  };

  return (
    <div className="farm-setup-page">
      <div className="farm-setup-card">

        {/* Header */}
        <div className="farm-header">
          <div className="farm-icon">🌱</div>

          <div>
            <h1>Set Up Your Farm</h1>
            <p>Tell us about your farm to get personalized insights.</p>
          </div>
        </div>

        {/* Progress */}
        <div className="farm-progress">
          <div className="progress-step completed">
            <span>✓</span>
            <p>Account</p>
          </div>

          <div className="progress-line active-line"></div>

          <div className="progress-step active">
            <span>2</span>
            <p>Farm Setup</p>
          </div>

          <div className="progress-line"></div>

          <div className="progress-step">
            <span>3</span>
            <p>Dashboard</p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Farm Information */}
          <div className="farm-section">
            <h2>🚜 Farm Information</h2>
            <p>Enter the basic details of your farm.</p>
          </div>

          <div className="farm-grid">

            <div className="farm-group full-width">
              <label>Farm Name *</label>

              <input
                type="text"
                name="farmName"
                placeholder="e.g. Green Valley Farm"
                value={formData.farmName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="farm-group">
              <label>Farm Area *</label>

              <input
                type="number"
                name="farmArea"
                placeholder="e.g. 5"
                min="0"
                step="0.1"
                value={formData.farmArea}
                onChange={handleChange}
                required
              />
            </div>

            <div className="farm-group">
              <label>Area Unit *</label>

              <select
                name="areaUnit"
                value={formData.areaUnit}
                onChange={handleChange}
              >
                <option value="Acres">Acres</option>
                <option value="Hectares">Hectares</option>
                <option value="Bigha">Bigha</option>
              </select>
            </div>

          </div>

          {/* Farming Details */}
          <div className="farm-section">
            <h2>🌾 Farming Details</h2>
            <p>Help us understand your farming conditions.</p>
          </div>

          <div className="farm-grid">

            <div className="farm-group">
              <label>Soil Type *</label>

              <select
                name="soilType"
                value={formData.soilType}
                onChange={handleChange}
                required
              >
                <option value="">Select Soil Type</option>
                <option value="Black Soil">Black Soil</option>
                <option value="Red Soil">Red Soil</option>
                <option value="Alluvial Soil">Alluvial Soil</option>
                <option value="Loamy Soil">Loamy Soil</option>
                <option value="Sandy Soil">Sandy Soil</option>
                <option value="Clay Soil">Clay Soil</option>
              </select>
            </div>

            <div className="farm-group">
              <label>Irrigation Type *</label>

              <select
                name="irrigation"
                value={formData.irrigation}
                onChange={handleChange}
                required
              >
                <option value="">Select Irrigation</option>
                <option value="Rainfed">Rainfed</option>
                <option value="Borewell">Borewell</option>
                <option value="Canal">Canal</option>
                <option value="Drip Irrigation">Drip Irrigation</option>
                <option value="Sprinkler">Sprinkler</option>
              </select>
            </div>

            <div className="farm-group full-width">
              <label>Main Crop *</label>

              <select
                name="mainCrop"
                value={formData.mainCrop}
                onChange={handleChange}
                required
              >
                <option value="">Select Main Crop</option>
                <option value="Rice">Rice</option>
                <option value="Wheat">Wheat</option>
                <option value="Maize">Maize</option>
                <option value="Cotton">Cotton</option>
                <option value="Soybean">Soybean</option>
                <option value="Sugarcane">Sugarcane</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Other">Other</option>
              </select>
            </div>

          </div>

          {/* Info */}
          <div className="farm-info">
            <span>💡</span>
            <p>
              These details will help Krushiphal provide personalized
              crop recommendations, weather insights and farming advice.
            </p>
          </div>

          {/* Button */}
          <button type="submit" className="farm-btn">
            Save Farm & Continue
            <span>→</span>
          </button>

        </form>
      </div>
    </div>
  );
}

export default FarmSetup;