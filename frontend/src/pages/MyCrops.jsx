import { Link } from "react-router-dom";
import "./MyCrops.css";

function MyCrops() {
  const crops = [
    {
      name: "Tomato",
      variety: "Fresh Tomato",
      area: "2.0 Acres",
      status: "Healthy",
      progress: 72,
      planted: "15 Aug 2026",
      expected: "20 Nov 2026",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Potato",
      variety: "Fresh Potato",
      area: "1.5 Acres",
      status: "Healthy",
      progress: 65,
      planted: "20 Aug 2026",
      expected: "10 Dec 2026",
      image:
        "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Onion",
      variety: "Red Onion",
      area: "1.2 Acres",
      status: "Moderate",
      progress: 52,
      planted: "10 Aug 2026",
      expected: "25 Nov 2026",
      image:
        "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=700&q=85",
    },
    {
      name: "Maize",
      variety: "Sweet Maize",
      area: "0.5 Acres",
      status: "Good",
      progress: 70,
      planted: "05 Aug 2026",
      expected: "15 Nov 2026",
      image:
        "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=700&q=85",
    },
  ];

  return (
    <div className="my-crops-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="my-crops-sidebar">

        <div>

          <div className="my-crops-brand">

            <div className="my-crops-brand-logo">
              🌿
            </div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>

          </div>


          <nav className="my-crops-sidebar-nav">

            <Link
              to="/dashboard"
              className="my-crops-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>


            <Link
              to="/farm-setup"
              className="my-crops-nav-link"
            >
              <span>🚜</span>
              My Farm
            </Link>


            <Link
              to="/my-crops"
              className="my-crops-nav-link active"
            >
              <span>🌱</span>
              My Crops
            </Link>


            <Link
              to="/marketplace"
              className="my-crops-nav-link"
            >
              <span>🛒</span>
              Marketplace
            </Link>


            <Link
              to="/ai-prediction"
              className="my-crops-nav-link"
            >
              <span>🤖</span>
              AI Prediction
            </Link>


            <Link
              to="/reports"
              className="my-crops-nav-link"
            >
              <span>▥</span>
              Reports
            </Link>


            <Link
              to="/advisory"
              className="my-crops-nav-link"
            >
              <span>💡</span>
              Advisory
            </Link>


            <Link
              to="/my-profile"
              className="my-crops-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>

        </div>


        <Link
          to="/"
          className="my-crops-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="my-crops-main">

        {/* HEADER */}

        <header className="my-crops-header">

          <div>

            <p className="my-crops-label">
              FARM MANAGEMENT
            </p>

            <h1>
              My Crops
            </h1>

            <p className="my-crops-subtitle">
              Track and manage all your vegetable crops.
            </p>

          </div>


          <Link
            to="/add-produce"
            className="add-crop-btn"
          >
            + Add Produce
          </Link>

        </header>


        {/* ================= SUMMARY ================= */}

        <section className="my-crops-summary">

          <div className="crop-summary-card">

            <div className="crop-summary-icon">
              🌱
            </div>

            <div>
              <span>Total Crops</span>
              <strong>4</strong>
            </div>

          </div>


          <div className="crop-summary-card">

            <div className="crop-summary-icon">
              🚜
            </div>

            <div>
              <span>Total Area</span>
              <strong>5.2 Acres</strong>
            </div>

          </div>


          <div className="crop-summary-card">

            <div className="crop-summary-icon">
              ✅
            </div>

            <div>
              <span>Healthy Crops</span>
              <strong>3</strong>
            </div>

          </div>


          <div className="crop-summary-card">

            <div className="crop-summary-icon">
              ⚠️
            </div>

            <div>
              <span>Needs Monitoring</span>
              <strong>1</strong>
            </div>

          </div>

        </section>


        {/* ================= CROP GRID ================= */}

        <section className="my-crops-card">

          <div className="my-crops-card-header">

            <div>
              <span className="my-crops-section-label">
                🌱 ACTIVE VEGETABLES
              </span>

              <h2>
                Crop Overview
              </h2>

              <p>
                Current progress and crop information.
              </p>
            </div>

          </div>


          <div className="my-crops-grid">

            {crops.map((crop) => (

              <div
                className="my-crop-card"
                key={crop.name}
              >

                {/* IMAGE */}

                <div className="my-crop-image">

                  <img
                    src={crop.image}
                    alt={crop.name}
                  />

                  <span
                    className={`my-crop-status ${
                      crop.status === "Moderate"
                        ? "moderate"
                        : "healthy"
                    }`}
                  >
                    ✓ {crop.status}
                  </span>

                </div>


                {/* CONTENT */}

                <div className="my-crop-content">

                  <div className="my-crop-title">

                    <div>
                      <h3>
                        {crop.name}
                      </h3>

                      <p>
                        {crop.variety}
                      </p>
                    </div>

                    <strong>
                      {crop.area}
                    </strong>

                  </div>


                  <div className="my-crop-progress">

                    <div className="my-crop-progress-top">

                      <span>
                        Crop Progress
                      </span>

                      <strong>
                        {crop.progress}%
                      </strong>

                    </div>


                    <div className="my-crop-progress-bar">

                      <span
                        style={{
                          width: `${crop.progress}%`,
                        }}
                      ></span>

                    </div>

                  </div>


                  <div className="my-crop-details">

                    <div>
                      <span>Planted</span>
                      <strong>{crop.planted}</strong>
                    </div>

                    <div>
                      <span>Expected Harvest</span>
                      <strong>{crop.expected}</strong>
                    </div>

                  </div>


                  <button
                    type="button"
                    className="view-crop-btn"
                  >
                    View Crop Details →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ================= FARM TIP ================= */}

        <section className="my-crops-tip">

          <div className="my-crops-tip-icon">
            🌿
          </div>

          <div>

            <span>
              CROP MANAGEMENT TIP
            </span>

            <h2>
              Regular crop monitoring helps maintain healthy vegetables.
            </h2>

            <p>
              Keep checking soil moisture, leaves, pests, and overall crop growth.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyCrops;