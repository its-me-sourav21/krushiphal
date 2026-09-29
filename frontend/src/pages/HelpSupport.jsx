import { Link } from "react-router-dom";
import { useState } from "react";
import "./HelpSupport.css";

function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: "How do I update my profile?",
      answer:
        "Go to My Profile and click Edit Profile. Update your details and click Save Changes.",
    },
    {
      question: "How do I manage my farm?",
      answer:
        "Open My Farm from the sidebar to view and manage your farm information.",
    },
    {
      question: "How can I check crop prices?",
      answer:
        "Open Marketplace to view available produce, prices and marketplace information.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "On the Login page, click Forgot Password and follow the OTP verification steps.",
    },
    {
      question: "How can I manage notifications?",
      answer:
        "Go to My Profile → Notifications to manage alerts and notification preferences.",
    },
  ];

  const handleFaqClick = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="help-page">

      {/* ================= SIDEBAR ================= */}

      <aside className="dashboard-sidebar">

        <div>

          <Link
            to="/dashboard"
            className="dashboard-brand"
          >
            <div className="dashboard-brand-logo">
              🌾
            </div>

            <div>
              <h2>Krushiphal</h2>
              <p>Smart Farming, Better Future</p>
            </div>
          </Link>


          <nav className="dashboard-sidebar-nav">

            <Link
              to="/dashboard"
              className="dashboard-nav-link"
            >
              <span>⌂</span>
              Dashboard
            </Link>

            <Link
              to="/my-farm"
              className="dashboard-nav-link"
            >
              <span>🌱</span>
              My Farm
            </Link>

            <Link
              to="/my-crops"
              className="dashboard-nav-link"
            >
              <span>🌿</span>
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
              to="/reports"
              className="dashboard-nav-link"
            >
              <span>📊</span>
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
              className="dashboard-nav-link active"
            >
              <span>👤</span>
              My Profile
            </Link>

          </nav>

        </div>


        <Link
          to="/login"
          className="dashboard-logout"
        >
          <span>↪</span>
          Logout
        </Link>

      </aside>


      {/* ================= MAIN ================= */}

      <main className="help-main">

        {/* HEADER */}

        <header className="help-header">

          <div>

            <p className="help-label">
              ACCOUNT SUPPORT
            </p>

            <h1>
              Help &amp; Support
            </h1>

            <p className="help-subtitle">
              Find answers, get support and learn how to use Krushiphal.
            </p>

          </div>


          <Link
            to="/my-profile"
            className="help-back-btn"
          >
            ← Back to Profile
          </Link>

        </header>


        {/* SUPPORT OPTIONS */}

        <section className="help-support-grid">

          <div className="help-support-card">

            <div className="help-support-icon">
              ❓
            </div>

            <div>
              <h2>
                Frequently Asked Questions
              </h2>

              <p>
                Find quick answers to common questions.
              </p>
            </div>

          </div>


          <div className="help-support-card">

            <div className="help-support-icon">
              💬
            </div>

            <div>
              <h2>
                Contact Support
              </h2>

              <p>
                Need help? Our support team is here for you.
              </p>
            </div>

          </div>


          <div className="help-support-card">

            <div className="help-support-icon">
              📖
            </div>

            <div>
              <h2>
                Farming Guide
              </h2>

              <p>
                Learn more about smart farming and crop management.
              </p>
            </div>

          </div>

        </section>


        {/* FAQ */}

        <section className="help-card">

          <div className="help-card-header">

            <div>
              <h2>
                Frequently Asked Questions
              </h2>

              <p>
                Quick answers to help you use Krushiphal.
              </p>
            </div>

            <span className="help-card-header-icon">
              ❓
            </span>

          </div>


          <div className="faq-list">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className={
                  openFaq === index
                    ? "faq-item open"
                    : "faq-item"
                }
              >

                <button
                  type="button"
                  className="faq-question"
                  onClick={() => handleFaqClick(index)}
                >

                  <span>
                    {faq.question}
                  </span>

                  <strong>
                    {openFaq === index ? "−" : "+"}
                  </strong>

                </button>


                {openFaq === index && (
                  <div className="faq-answer">
                    <p>
                      {faq.answer}
                    </p>
                  </div>
                )}

              </div>

            ))}

          </div>

        </section>


        {/* CONTACT SUPPORT */}

        <section className="help-card">

          <div className="help-card-header">

            <div>
              <h2>
                Contact Support
              </h2>

              <p>
                We're here to help you with your Krushiphal account.
              </p>
            </div>

          </div>


          <div className="help-contact-grid">

            <div className="help-contact-item">

              <div className="help-contact-icon">
                📧
              </div>

              <div>
                <span>Email Support</span>
                <strong>
                  support@krushiphal.com
                </strong>
              </div>

            </div>


            <div className="help-contact-item">

              <div className="help-contact-icon">
                📞
              </div>

              <div>
                <span>Helpline</span>
                <strong>
                  +91 1800 123 4567
                </strong>
              </div>

            </div>


            <div className="help-contact-item">

              <div className="help-contact-icon">
                🕐
              </div>

              <div>
                <span>Support Hours</span>
                <strong>
                  Mon - Sat, 9 AM - 6 PM
                </strong>
              </div>

            </div>

          </div>

        </section>


        {/* FOOTER MESSAGE */}

        <div className="help-footer-message">

          <span>
            🌱
          </span>

          <p>
            Growing better farms, together with Krushiphal.
          </p>

        </div>

      </main>

    </div>
  );
}

export default HelpSupport;