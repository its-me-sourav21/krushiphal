import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./AIPrediction.css";

const DISTRICTS = {
  Durg: ["Durg APMC"],
};

const VEGETABLES = [
  "Tomato",
  "Potato",
  "Onion",
  "Brinjal",
  "Bhindi",
  "Bottle Gourd",
];

function AIPrediction() {
  const [district, setDistrict] = useState("");
  const [mandi, setMandi] = useState("");
  const [vegetable, setVegetable] = useState("");

  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState("");
  const [error, setError] = useState("");
  const [prediction, setPrediction] = useState(null);

  const mandiOptions = useMemo(() => {
    return district ? DISTRICTS[district] || [] : [];
  }, [district]);

  async function handlePrediction() {
    setError("");
    setPrediction(null);

    if (!district) {
      setError("Please select a valid district.");
      return;
    }

    if (!mandi) {
      setError("Please select a mandi.");
      return;
    }

    if (!vegetable) {
      setError("Please select a vegetable.");
      return;
    }

    try {
      setLoading(true);

      setLoadingStep("Analyzing market data...");

      await new Promise((resolve) => setTimeout(resolve, 600));

      setLoadingStep("Checking expected weather conditions...");

      await new Promise((resolve) => setTimeout(resolve, 600));

      setLoadingStep("Generating 7-day price prediction...");

      const apiBaseUrl = import.meta.env.VITE_AI_API_URL || "";

      const response = await fetch(
        `${apiBaseUrl}/future-price-prediction`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            district,
            mandi,
            vegetable,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Prediction service is temporarily unavailable.");
      }

      const data = await response.json();

      setLoadingStep("Prediction ready.");

      await new Promise((resolve) => setTimeout(resolve, 300));

      setPrediction({
        district,
        mandi,
        vegetable,
        data,
      });
    } catch (err) {
      setError(
        err.message ||
          "Prediction service is temporarily unavailable. Please try again."
      );
    } finally {
      setLoading(false);
      setLoadingStep("");
    }
  }

  return (
    <div className="ai-prediction-layout">

      {/* SIDEBAR */}
      <aside className="ai-prediction-sidebar">
        <div>
          <Link to="/dashboard" className="ai-prediction-brand">
            <div className="ai-prediction-brand-logo">🌾</div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </Link>

          <nav className="ai-prediction-nav">

            <Link to="/dashboard" className="ai-prediction-nav-link">
              <span>⌂</span>
              Dashboard
            </Link>

            <Link to="/farm-setup" className="ai-prediction-nav-link">
              <span>🏡</span>
              My Farm
            </Link>

            <Link to="/my-crops" className="ai-prediction-nav-link">
              <span>🌱</span>
              My Crops
            </Link>

            <Link to="/add-produce" className="ai-prediction-nav-link">
              <span>➕</span>
              Add Produce
            </Link>

            <Link to="/marketplace" className="ai-prediction-nav-link">
              <span>🥬</span>
              Marketplace
            </Link>

            <Link
              to="/ai-prediction"
              className="ai-prediction-nav-link active"
            >
              <span>🤖</span>
              AI Prediction
            </Link>

            <Link to="/reports" className="ai-prediction-nav-link">
              <span>📊</span>
              Reports
            </Link>

            <Link to="/advisory" className="ai-prediction-nav-link">
              <span>💡</span>
              Advisory
            </Link>

            <Link to="/my-profile" className="ai-prediction-nav-link">
              <span>♙</span>
              My Profile
            </Link>

          </nav>
        </div>

        <Link to="/login" className="ai-prediction-logout">
          <span>↪</span>
          Logout
        </Link>
      </aside>

      {/* MAIN */}
      <main className="ai-prediction-main">

        {/* HEADER */}
        <header className="ai-prediction-header">
          <div>
            <p className="ai-prediction-label">
              KRUSHPHAL AI
            </p>

            <h1>AI Prediction</h1>

            <p>
              AI-powered future vegetable price predictions for farmers.
            </p>
          </div>

          <Link
            to="/ai-prediction-history"
            className="prediction-history-button"
          >
            Prediction History
          </Link>
        </header>

        {/* HERO */}
        <section className="ai-prediction-hero">

          <div className="ai-hero-content">
            <span>SMART FARMING INSIGHT</span>

            <h2>
              Know Tomorrow’s Vegetable Price Today
            </h2>

            <p>
              Select your mandi and vegetable to see
              AI-predicted prices for the next 7 days.
            </p>

            <div className="ai-hero-points">
              <span>🤖 AI Prediction</span>
              <span>📈 Market Data</span>
              <span>🌦️ Weather Forecast</span>
            </div>
          </div>

          <div className="ai-hero-visual">
            <div className="ai-hero-circle">
              <span>🍅</span>
              <span>🥔</span>
              <span>🧅</span>
              <span>📈</span>
            </div>
          </div>

        </section>

        {/* PREDICTION INPUT */}
        <section className="ai-prediction-card">

          <div className="ai-section-heading">
            <div>
              <span>VEGETABLE PRICE PREDICTION</span>
              <h2>Select Market Location</h2>
            </div>
          </div>

          <div className="ai-form-grid">

            <div className="ai-form-group">
              <label>District</label>

              <select
                value={district}
                onChange={(e) => {
                  setDistrict(e.target.value);
                  setMandi("");
                  setPrediction(null);
                  setError("");
                }}
              >
                <option value="">Select District</option>

                {Object.keys(DISTRICTS).map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="ai-form-group">
              <label>Mandi</label>

              <select
                value={mandi}
                onChange={(e) => {
                  setMandi(e.target.value);
                  setPrediction(null);
                  setError("");
                }}
                disabled={!district}
              >
                <option value="">Select Mandi</option>

                {mandiOptions.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="ai-form-group">
              <label>Vegetable</label>

              <select
                value={vegetable}
                onChange={(e) => {
                  setVegetable(e.target.value);
                  setPrediction(null);
                  setError("");
                }}
              >
                <option value="">Select Vegetable</option>

                {VEGETABLES.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {error && (
            <div className="ai-error-message">
              <span>⚠️</span>
              <p>{error}</p>
            </div>
          )}

          <button
            className="ai-predict-button"
            onClick={handlePrediction}
            disabled={loading}
          >
            {loading ? "Generating Prediction..." : "Predict 7 Days"}
          </button>

          {loading && (
            <div className="ai-loading-box">
              <div className="ai-loader"></div>

              <div>
                <strong>{loadingStep}</strong>
                <p>
                  AI is analyzing market and weather data…
                </p>
              </div>
            </div>
          )}

        </section>

        {/* RESULT */}
        {prediction && (
          <PredictionResult
            prediction={prediction}
          />
        )}

        {/* FARMER INSIGHT */}
        <section className="ai-farmer-insight">

          <div className="ai-insight-icon">
            🌱
          </div>

          <div>
            <span>FARMER INSIGHT</span>

            <h2>Plan with better information.</h2>

            <p>
              Use the AI-generated forecast as an estimate
              for planning your selling decision.
            </p>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="ai-prediction-footer">
          🌿 Smart farming. Better planning. Better future.
        </footer>

      </main>
    </div>
  );
}

function PredictionResult({ prediction }) {
  const data = prediction.data || {};

  const forecast =
    data.predictions ||
    data.forecast ||
    data.price_predictions ||
    [];

  const weather =
    data.weather ||
    data.weather_forecast ||
    [];

  const tomorrow =
    data.tomorrow ||
    data.tomorrow_prediction ||
    forecast[0] ||
    {};

  const tomorrowPrice =
    tomorrow.price_per_kg ??
    tomorrow.price ??
    tomorrow.predicted_price ??
    null;

  const tomorrowQuintal =
    tomorrow.price_per_quintal ??
    tomorrow.quintal_price ??
    null;

  return (
    <section className="ai-results">

      {/* RESULT HEADER */}
      <div className="ai-result-header">

        <div>
          <span>PREDICTION RESULT</span>

          <h2>Vegetable Price Prediction</h2>

          <p>
            {prediction.district} → {prediction.mandi}
          </p>
        </div>

        <div className="ai-period-badge">
          Next 7 Days
        </div>

      </div>

      {/* TOMORROW PRICE */}
      <div className="ai-tomorrow-card">

        <div>
          <span>AI PREDICTED</span>

          <h3>Tomorrow’s Expected Price</h3>

          <strong>
            {tomorrowPrice !== null
              ? `₹${tomorrowPrice}`
              : "—"}
          </strong>

          <p>
            / kg
          </p>
        </div>

        <div className="ai-tomorrow-side">
          <span>Vegetable</span>
          <strong>{prediction.vegetable}</strong>

          <span>Per Quintal</span>
          <strong>
            {tomorrowQuintal !== null
              ? `₹${tomorrowQuintal}`
              : "—"}
          </strong>
        </div>

      </div>

      {/* 7 DAY FORECAST */}
      <div className="ai-result-card">

        <div className="ai-section-heading">
          <div>
            <span>FORECAST</span>
            <h2>7-Day Price Forecast</h2>
          </div>
        </div>

        {forecast.length > 0 ? (
          <div className="ai-forecast-grid">

            {forecast.slice(0, 7).map((item, index) => (
              <div
                className="ai-forecast-item"
                key={`${item.date || index}`}
              >
                <span>
                  {item.day ||
                    item.weekday ||
                    item.date ||
                    `Day ${index + 1}`}
                </span>

                <strong>
                  {item.price_per_kg ??
                  item.price ??
                  item.predicted_price
                    ? `₹${
                        item.price_per_kg ??
                        item.price ??
                        item.predicted_price
                      }`
                    : "—"}
                </strong>

                <small>
                  {item.price_per_quintal ??
                  item.quintal_price
                    ? `₹${
                        item.price_per_quintal ??
                        item.quintal_price
                      } / quintal`
                    : "—"}
                </small>
              </div>
            ))}

          </div>
        ) : (
          <div className="ai-empty-result">
            Prediction data is not available in the returned response.
          </div>
        )}

      </div>

      {/* CHART */}
      <div className="ai-result-card">

        <div className="ai-section-heading">
          <div>
            <span>PRICE TREND</span>
            <h2>7-Day Price Trend</h2>
          </div>
        </div>

        <div className="ai-chart-placeholder">
          <div className="ai-chart-grid"></div>

          <div className="ai-chart-message">
            📈
            <strong>Prediction trend data</strong>
            <span>
              Connect your API response fields to render
              the 7-day price line here.
            </span>
          </div>
        </div>

      </div>

      {/* WEATHER */}
      <div className="ai-result-card">

        <div className="ai-section-heading">
          <div>
            <span>SUPPORTING INFORMATION</span>
            <h2>Expected Weather Conditions</h2>
          </div>
        </div>

        {weather.length > 0 ? (
          <div className="ai-weather-grid">

            {weather.slice(0, 7).map((item, index) => (
              <div
                className="ai-weather-item"
                key={`${item.date || index}`}
              >
                <strong>
                  {item.day ||
                    item.weekday ||
                    item.date ||
                    `Day ${index + 1}`}
                </strong>

                <span>
                  🌡️ {item.temperature ?? "—"}°C
                </span>

                <span>
                  🌧️ {item.rainfall ?? item.precipitation ?? "—"} mm
                </span>

                <span>
                  ☁️ {item.condition ?? "—"}
                </span>

                <span>
                  💨 {item.wind_speed ?? item.windSpeed ?? "—"}
                </span>
              </div>
            ))}

          </div>
        ) : (
          <div className="ai-empty-result">
            Weather forecast is temporarily unavailable.
            Prediction may be affected.
          </div>
        )}

      </div>

      {/* WEATHER IMPACT */}
      <div className="ai-impact-card">

        <div>
          <span>WEATHER IMPACT</span>
          <h2>How Weather May Affect Price</h2>
        </div>

        <div className="ai-impact-grid">

          <div>
            <strong>🌧️ Rainfall</strong>
            <p>
              Higher rainfall may affect market arrivals
              and can influence vegetable prices.
            </p>
          </div>

          <div>
            <strong>🌡️ Temperature</strong>
            <p>
              Changes in temperature can affect vegetable
              supply and quality.
            </p>
          </div>

        </div>

      </div>

      {/* SUMMARY */}
      <div className="ai-summary-card">

        <div className="ai-section-heading">
          <div>
            <span>SUMMARY</span>
            <h2>Prediction Summary</h2>
          </div>
        </div>

        <div className="ai-summary-grid">

          <div>
            <span>Vegetable</span>
            <strong>{prediction.vegetable}</strong>
          </div>

          <div>
            <span>Mandi</span>
            <strong>{prediction.mandi}</strong>
          </div>

          <div>
            <span>District</span>
            <strong>{prediction.district}</strong>
          </div>

          <div>
            <span>Tomorrow</span>
            <strong>
              {tomorrowPrice !== null
                ? `₹${tomorrowPrice}/kg`
                : "—"}
            </strong>
          </div>

          <div>
            <span>7-Day Average</span>
            <strong>
              {data.average_price ??
              data.seven_day_average ??
              "—"}
            </strong>
          </div>

          <div>
            <span>Highest</span>
            <strong>
              {data.highest_price ?? "—"}
            </strong>
          </div>

          <div>
            <span>Lowest</span>
            <strong>
              {data.lowest_price ?? "—"}
            </strong>
          </div>

          <div>
            <span>Trend</span>
            <strong>
              {data.trend ||
                "Price is expected to fluctuate over the next 7 days."}
            </strong>
          </div>

        </div>

      </div>

    </section>
  );
}

export default AIPrediction;