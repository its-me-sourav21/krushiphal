import { Link } from "react-router-dom";
import "./Reports.css";

function Reports() {
  const cropReports = [
    {
      name: "Tomato",
      area: "2.0 Acres",
      health: "Healthy",
      progress: 72,
      yield: "18.5 Quintal",
    },
    {
      name: "Potato",
      area: "1.5 Acres",
      health: "Healthy",
      progress: 65,
      yield: "14.2 Quintal",
    },
    {
      name: "Onion",
      area: "1.2 Acres",
      health: "Moderate",
      progress: 52,
      yield: "10.8 Quintal",
    },
    {
      name: "Maize",
      area: "0.5 Acres",
      health: "Good",
      progress: 70,
      yield: "5.4 Quintal",
    },
  ];

  return (
    <div className="reports-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <div>

          <div className="dashboard-brand">

            <div className="dashboard-brand-logo">
              🌿
            </div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>

          </div>


          <nav className="dashboard-sidebar-nav">

            <Link
              to="/dashboard"
              className="dashboard-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/farm-setup"
              className="dashboard-nav-link"
            >
              <span>🚜</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="dashboard-nav-link"
            >
              <span>🌱</span>
              My Crops
            </Link>

            <Link
              to="/marketplace"
              className="dashboard-nav-link"
            >
              <span>🛒</span>
              Marketplace
            </Link>

            <Link
              to="/ai-prediction"
              className="dashboard-nav-link"
            >
              <span>🤖</span>
              AI Prediction
            </Link>

            <Link
              to="/reports"
              className="dashboard-nav-link active"
            >
              <span>▥</span>
              Reports
            </Link>

            <Link
              to="/advisory"
              className="dashboard-nav-link"
            >
              <span>💡</span>
              Advisory
            </Link>

            <Link
              to="/my-profile"
              className="dashboard-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>

        </div>


        <Link
          to="/"
          className="dashboard-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="reports-main">

        {/* Header */}

        <header className="reports-header">

          <div>

            <p className="reports-label">
              FARM ANALYTICS
            </p>

            <h1>
              Reports
            </h1>

            <p className="reports-subtitle">
              Track your vegetable farm performance and crop progress.
            </p>

          </div>


          <button
            type="button"
            className="reports-download-btn"
          >
            ↓ Download Report
          </button>

        </header>


        {/* ================= SUMMARY CARDS ================= */}

        <section className="reports-summary-grid">

          <div className="report-summary-card">

            <div className="report-summary-icon">
              🚜
            </div>

            <div>
              <span>Total Farm Area</span>
              <strong>5.2 Acres</strong>
            </div>

          </div>


          <div className="report-summary-card">

            <div className="report-summary-icon">
              🌱
            </div>

            <div>
              <span>Active Vegetables</span>
              <strong>4</strong>
            </div>

          </div>


          <div className="report-summary-card">

            <div className="report-summary-icon">
              ✅
            </div>

            <div>
              <span>Healthy Crops</span>
              <strong>3</strong>
            </div>

          </div>


          <div className="report-summary-card">

            <div className="report-summary-icon">
              📦
            </div>

            <div>
              <span>Expected Yield</span>
              <strong>48.9 Qtl</strong>
            </div>

          </div>

        </section>


        {/* ================= CROP PERFORMANCE ================= */}

        <section className="reports-card">

          <div className="reports-card-header">

            <div>
              <span className="reports-section-label">
                🌱 CROP PERFORMANCE
              </span>

              <h2>
                Vegetable Crop Report
              </h2>

              <p>
                Current status of your active vegetables.
              </p>
            </div>

          </div>


          <div className="crop-report-list">

            {cropReports.map((crop) => (

              <div
                className="crop-report-row"
                key={crop.name}
              >

                <div className="crop-report-name">
                  <strong>{crop.name}</strong>
                  <span>{crop.area}</span>
                </div>


                <div className="crop-report-progress">

                  <div className="report-progress-bar">

                    <span
                      style={{
                        width: `${crop.progress}%`,
                      }}
                    ></span>

                  </div>

                  <small>
                    {crop.progress}%
                  </small>

                </div>


                <span
                  className={`crop-health ${
                    crop.health === "Moderate"
                      ? "moderate"
                      : "healthy"
                  }`}
                >
                  {crop.health}
                </span>


                <strong className="crop-yield">
                  {crop.yield}
                </strong>

              </div>

            ))}

          </div>

        </section>


        {/* ================= LOWER GRID ================= */}

        <section className="reports-bottom-grid">


          {/* Farm Summary */}

          <div className="reports-card">

            <div className="reports-card-header">

              <div>
                <span className="reports-section-label">
                  🚜 FARM SUMMARY
                </span>

                <h2>
                  Farm Overview
                </h2>
              </div>

            </div>


            <div className="farm-report-stats">

              <div>
                <span>Location</span>
                <strong>Raipur, Chhattisgarh</strong>
              </div>

              <div>
                <span>Farm Area</span>
                <strong>5.2 Acres</strong>
              </div>

              <div>
                <span>Soil Type</span>
                <strong>Black Soil</strong>
              </div>

              <div>
                <span>Irrigation</span>
                <strong>Drip Irrigation</strong>
              </div>

            </div>

          </div>


          {/* Market Summary */}

          <div className="reports-card">

            <div className="reports-card-header">

              <div>
                <span className="reports-section-label">
                  🛒 MARKET
                </span>

                <h2>
                  Vegetable Prices
                </h2>
              </div>

              <Link to="/marketplace">
                View Market →
              </Link>

            </div>


            <div className="market-report-list">

              <div>
                <span>Tomato</span>
                <strong>₹1,800</strong>
                <small>+3.2%</small>
              </div>

              <div>
                <span>Potato</span>
                <strong>₹1,650</strong>
                <small>+1.8%</small>
              </div>

              <div>
                <span>Onion</span>
                <strong>₹2,200</strong>
                <small>+2.4%</small>
              </div>

              <div>
                <span>Maize</span>
                <strong>₹2,050</strong>
                <small>-1.5%</small>
              </div>

            </div>

          </div>

        </section>


        {/* ================= REPORT NOTE ================= */}

        <section className="reports-tip">

          <div className="reports-tip-icon">
            💡
          </div>

          <div>

            <span>
              SMART REPORT INSIGHT
            </span>

            <h2>
              Keep monitoring your Onion crop.
            </h2>

            <p>
              Current health is moderate. Regular irrigation and crop monitoring can help maintain healthy growth.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Reports;