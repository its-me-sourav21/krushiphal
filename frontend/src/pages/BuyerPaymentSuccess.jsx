import { Link } from "react-router-dom";
import "./BuyerPaymentSuccess.css";

function BuyerPaymentSuccess() {
  return (
    <div className="buyer-payment-success-layout">
      <main className="buyer-payment-success-main">
        <div className="success-card">
          <div className="success-icon">✓</div>

          <p className="success-label">PAYMENT SUCCESSFUL</p>

          <h1>Order Placed Successfully!</h1>

          <p className="success-message">
            Your payment has been received and your vegetable order has been
            placed successfully.
          </p>

          <div className="success-order-box">
            <div>
              <span>ORDER ID</span>
              <strong>#KP2049</strong>
            </div>

            <div>
              <span>TOTAL AMOUNT</span>
              <strong>₹280</strong>
            </div>

            <div>
              <span>PAYMENT STATUS</span>
              <strong>Paid</strong>
            </div>
          </div>

          <div className="success-delivery">
            <span>📦</span>
            <div>
              <strong>Delivery Expected</strong>
              <p>Your fresh vegetables will be delivered soon.</p>
            </div>
          </div>

          <div className="success-actions">
            <Link
              to="/buyer-order-tracking"
              className="track-order-btn"
            >
              Track Order →
            </Link>

            <Link
              to="/buyer-dashboard"
              className="back-dashboard-btn"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>

        <footer className="buyer-payment-success-footer">
          🌱 Fresh from farmers, delivered to your doorstep.
        </footer>
      </main>
    </div>
  );
}

export default BuyerPaymentSuccess;