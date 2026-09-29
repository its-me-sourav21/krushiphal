import { Link } from "react-router-dom";
import "./Advisory.css";

function Advisory() {
  const recommendations = [
    {
      icon: "💧",
      title: "Irrigation Advice",
      text: "Maintain regular irrigation for your vegetables and avoid waterlogging.",
      tag: "Water Management",
    },
    {
      icon: "🌱",
      title: "Soil Care",
      text: "Monitor soil moisture and maintain healthy soil conditions for better growth.",
      tag: "Soil Health",
    },
    {
      icon: "🐛",
      title: "Pest Monitoring",
      text: "Check leaves regularly for signs of insects, spots, or unusual damage.",
      tag: "Crop Protection",
    },
  ];

  const cropAdvice = [
    {
      name: "Tomato",
      status: "Healthy",
      advice: "Monitor moisture and inspect leaves regularly.",
      emoji: "🍅",
    },
    {
      name: "Potato",
      status: "Healthy",
      advice: "Keep soil well-drained and maintain regular monitoring.",
      emoji: "🥔",
    },
    {
      name: "Onion",
      status: "Moderate",
      advice: "Pay extra attention to irrigation and crop health.",
      emoji: "🧅",
    },
    {
      name: "Maize",
      status: "Good",
      advice: "Continue regular field inspection and maintenance.",
      emoji: "🌽",
    },
  ];

  return (
    <div className="advisory-layout">

      {/* ================= SIDEBAR ================= */}

      <aside className="advisory-sidebar">

        <div>

          <div className="advisory-brand">

            <div className="advisory-brand-logo">
              🌿
            </div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>

          </div>


          <nav className="advisory-sidebar-nav">

            <Link
              to="/dashboard"
              className="advisory-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/farm-setup"
              className="advisory-nav-link"
            >
              <span>🚜</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="advisory-nav-link"
            >
              <span>🌱</span>
              My Crops
            </Link>

            <Link
              to="/marketplace"
              className="advisory-nav-link"
            >
              <span>🛒</span>
              Marketplace
            </Link>

            <Link
              to="/reports"
              className="advisory-nav-link"
            >
              <span>▥</span>
              Reports
            </Link>

            <Link
              to="/advisory"
              className="advisory-nav-link active"
            >
              <span>💡</span>
              Advisory
            </Link>

            <Link
              to="/my-profile"
              className="advisory-nav-link"
            >
              <span>♙</span>
              My Profile
            </Link>

          </nav>

        </div>


        <Link
          to="/"
          className="advisory-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="advisory-main">

        {/* HEADER */}

        <header className="advisory-header">

          <div>

            <p className="advisory-label">
              SMART FARMING
            </p>

            <h1>
              Advisory
            </h1>

            <p className="advisory-subtitle">
              Get practical recommendations for your vegetable farm.
            </p>

          </div>

        </header>


        {/* ================= FARM STATUS ================= */}

        <section className="advisory-status-card">

          <div className="advisory-status-icon">
            💡
          </div>

          <div>

            <span>
              TODAY'S FARM ADVISORY
            </span>

            <h2>
              Your vegetables need regular monitoring.
            </h2>

            <p>
              Keep checking soil moisture, crop health, and field conditions.
            </p>

          </div>

        </section>


        {/* ================= RECOMMENDATIONS ================= */}

        <section className="advisory-card">

          <div className="advisory-card-header">

            <div>

              <span className="advisory-section-label">
                🌱 FARM RECOMMENDATIONS
              </span>

              <h2>
                Recommended Actions
              </h2>

              <p>
                Simple actions to help maintain healthy vegetables.
              </p>

            </div>

          </div>


          <div className="recommendation-grid">

            {recommendations.map((item) => (

              <div
                className="recommendation-card"
                key={item.title}
              >

                <div className="recommendation-icon">
                  {item.icon}
                </div>

                <span className="recommendation-tag">
                  {item.tag}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

                <button type="button">
                  View Advice →
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* ================= CROP ADVISORY ================= */}

        <section className="advisory-card">

          <div className="advisory-card-header">

            <div>

              <span className="advisory-section-label">
                🌾 CROP ADVISORY
              </span>

              <h2>
                Your Vegetable Health
              </h2>

              <p>
                Current advisory for your active vegetables.
              </p>

            </div>

          </div>


          <div className="crop-advisory-list">

            {cropAdvice.map((crop) => (

              <div
                className="crop-advisory-row"
                key={crop.name}
              >

                <div className="crop-advisory-icon">
                  {crop.emoji}
                </div>

                <div className="crop-advisory-name">

                  <strong>
                    {crop.name}
                  </strong>

                  <span>
                    {crop.advice}
                  </span>

                </div>

                <span
                  className={`crop-advisory-status ${
                    crop.status === "Moderate"
                      ? "moderate"
                      : "healthy"
                  }`}
                >
                  {crop.status}
                </span>

                <button type="button">
                  Advice →
                </button>

              </div>

            ))}

          </div>

        </section>


        {/* ================= FARM CONDITIONS ================= */}

        <section className="advisory-bottom-grid">


          <div className="advisory-card">

            <div className="advisory-card-header">

              <div>

                <span className="advisory-section-label">
                  🌤️ FARM CONDITIONS
                </span>

                <h2>
                  Current Conditions
                </h2>

              </div>

            </div>


            <div className="condition-grid">

              <div className="condition-box">
                <span>🌡️</span>
                <small>Temperature</small>
                <strong>28°C</strong>
              </div>

              <div className="condition-box">
                <span>💧</span>
                <small>Humidity</small>
                <strong>68%</strong>
              </div>

              <div className="condition-box">
                <span>🌱</span>
                <small>Soil</small>
                <strong>Black Soil</strong>
              </div>

            </div>

          </div>


          <div className="advisory-card">

            <div className="advisory-card-header">

              <div>

                <span className="advisory-section-label">
                  📅 FARM ROUTINE
                </span>

                <h2>
                  Daily Checklist
                </h2>

              </div>

            </div>


            <div className="checklist">

              <div>
                <span>✓</span>
                <p>Check soil moisture</p>
              </div>

              <div>
                <span>✓</span>
                <p>Inspect vegetable leaves</p>
              </div>

              <div>
                <span>✓</span>
                <p>Check for pests</p>
              </div>

              <div>
                <span>✓</span>
                <p>Monitor irrigation</p>
              </div>

            </div>

          </div>

        </section>


        {/* ================= FARMING TIP ================= */}

        <section className="advisory-tip">

          <div className="advisory-tip-icon">
            🌱
          </div>

          <div>

            <span>
              SMART FARMING TIP
            </span>

            <h2>
              Healthy Soil Supports Healthy Vegetables
            </h2>

            <p>
              Regularly monitor soil moisture and field conditions for better crop growth.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Advisory;