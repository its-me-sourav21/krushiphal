import { Link } from "react-router-dom";
import "./PaymentSuccess.css";

function PaymentSuccess() {
  return (
    <div className="payment-success-page">
      <div className="success-card">

        {/* ================= SUCCESS ICON ================= */}
        <div className="success-icon">
          ✓
        </div>

        {/* ================= HEADER ================= */}
        <p className="success-label">
          KRUSHPHAL MARKET
        </p>

        <h1>
          Payment Successful!
        </h1>

        <p className="success-message">
          Your payment has been completed successfully.
          Your order has been placed.
        </p>

        {/* ================= ORDER DETAILS ================= */}
        <div className="order-box">

          <div className="order-row">
            <span>
              Order ID
            </span>

            <strong>
              #KRU-2026-00125
            </strong>
          </div>

          <div className="order-row">
            <span>
              Payment Status
            </span>

            <strong className="paid-status">
              Paid
            </strong>
          </div>

          <div className="order-row">
            <span>
              Total Amount
            </span>

            <strong>
              ₹185
            </strong>
          </div>

          <div className="order-row">
            <span>
              Delivery
            </span>

            <strong>
              Free
            </strong>
          </div>

        </div>

        {/* ================= DELIVERY STATUS ================= */}
        <div className="delivery-box">

          <div className="delivery-icon">
            🚚
          </div>

          <div>
            <h3>
              Order Confirmed
            </h3>

            <p>
              Your fresh vegetables will be delivered
              to your selected location.
            </p>
          </div>

        </div>

        {/* ================= ACTION BUTTONS ================= */}
        <div className="success-actions">

          <Link
            to="/dashboard"
            className="success-primary-btn"
          >
            Go to Dashboard
          </Link>

          <Link
            to="/marketplace"
            className="success-secondary-btn"
          >
            Continue Shopping
          </Link>

        </div>

        {/* ================= FOOTER ================= */}
        <p className="thank-you-text">
          Thank you for choosing Krushiphal 🌱
        </p>

      </div>
    </div>
  );
}

export default PaymentSuccess;