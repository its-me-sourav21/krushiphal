import { Link, useNavigate } from "react-router-dom";
import "./AddProduce.css";

function AddProduce() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Temporary frontend action
    alert("Produce added successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="add-produce-layout">
      {/* ================= SIDEBAR ================= */}
      <aside className="add-produce-sidebar">
        <div>
          <div className="add-produce-brand">
            <div className="add-produce-brand-logo">🌿</div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </div>

          <nav className="add-produce-sidebar-nav">
            <Link to="/dashboard" className="add-produce-nav-link">
              <span>⌂</span>
              Dashboard
            </Link>

            <Link to="/farm-setup" className="add-produce-nav-link">
              <span>🚜</span>
              My Farm
            </Link>

            <Link to="/my-crops" className="add-produce-nav-link active">
              <span>🌱</span>
              My Crops
            </Link>

            <Link to="/marketplace" className="add-produce-nav-link">
              <span>🛒</span>
              Marketplace
            </Link>

            <Link to="/reports" className="add-produce-nav-link">
              <span>▥</span>
              Reports
            </Link>

            <Link to="/advisory" className="add-produce-nav-link">
              <span>💡</span>
              Advisory
            </Link>

            <Link to="/my-profile" className="add-produce-nav-link">
              <span>♙</span>
              My Profile
            </Link>
          </nav>
        </div>

        <Link to="/" className="add-produce-logout">
          <span>↪</span>
          Logout
        </Link>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="add-produce-main">
        <header className="add-produce-topbar">
          <div className="add-produce-page-heading">
            <span>🌱 MY CROPS</span>
            <h1>Add Produce</h1>
            <p>Add a new vegetable to your farm.</p>
          </div>

          <Link to="/dashboard" className="add-produce-back-btn">
            ← Back to Dashboard
          </Link>
        </header>

        {/* ================= FORM CARD ================= */}
        <section className="add-produce-card">
          <div className="add-produce-card-header">
            <div className="produce-header-icon">🌾</div>

            <div>
              <h2>Produce Details</h2>
              <p>Enter the details of the vegetable you want to add.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="add-produce-form">
            <div className="form-group">
              <label htmlFor="produceName">Vegetable Name</label>

              <select id="produceName" required>
                <option value="">Select vegetable</option>
                <option value="Tomato">Tomato</option>
                <option value="Potato">Potato</option>
                <option value="Onion">Onion</option>
                <option value="Maize">Maize</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="quantity">Quantity</label>

                <input
                  id="quantity"
                  type="number"
                  min="1"
                  placeholder="Enter quantity"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="unit">Unit</label>

                <select id="unit" required>
                  <option value="">Select unit</option>
                  <option value="Kg">Kg</option>
                  <option value="Quintal">Quintal</option>
                  <option value="Ton">Ton</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="price">Expected Price</label>

                <div className="price-input">
                  <span>₹</span>

                  <input
                    id="price"
                    type="number"
                    min="1"
                    placeholder="Enter price"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="harvestDate">Harvest Date</label>

                <input
                  id="harvestDate"
                  type="date"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="location">Farm Location</label>

              <input
                id="location"
                type="text"
                placeholder="Enter farm location"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>

              <textarea
                id="description"
                rows="4"
                placeholder="Add details about your produce..."
              ></textarea>
            </div>

            <div className="add-produce-actions">
              <Link to="/dashboard" className="cancel-btn">
                Cancel
              </Link>

              <button type="submit" className="submit-produce-btn">
                🌱 Add Produce
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default AddProduce;