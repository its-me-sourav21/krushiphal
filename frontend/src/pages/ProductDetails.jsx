import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [toast, setToast] = useState("");

  const product = {
    id: 1,
    name: "Tomato",
    price: 40,
    quantity: "120 kg available",
    farmerName: "Amit Verma",
    location: "Bilaspur, Chhattisgarh",
    description:
      "Fresh quality tomatoes directly from a trusted local farmer. Carefully selected produce for your everyday cooking needs.",
  };

  useEffect(() => {
    if (!toast) return;

    const timer = setTimeout(() => {
      setToast("");
    }, 2200);

    return () => clearTimeout(timer);
  }, [toast]);

  const total = product.price * quantity;

  function addToCart() {
    const savedCart = JSON.parse(
      localStorage.getItem("krushiphal_cart") || "[]"
    );

    const existingIndex = savedCart.findIndex(
      (item) =>
        String(item.productId) === String(product.id)
    );

    if (existingIndex !== -1) {
      savedCart[existingIndex].quantity += quantity;
    } else {
      savedCart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        location: product.location,
        farmerName: product.farmerName,
        quantity: quantity,
      });
    }

    localStorage.setItem(
      "krushiphal_cart",
      JSON.stringify(savedCart)
    );

    window.dispatchEvent(
      new Event("krushiphal-cart-change")
    );

    setToast("Added to cart ✓");
  }

  function buyNow() {
    const item = {
      productId: product.id,
      name: product.name,
      price: product.price,
      location: product.location,
      farmerName: product.farmerName,
      quantity: quantity,
    };

    navigate("/payment", {
      state: {
        items: [item],
      },
    });
  }

  return (
    <div className="dashboard">

      {toast && (
        <div
          style={{
            position: "fixed",
            top: "25px",
            right: "25px",
            zIndex: 9999,
            background: "#151515",
            color: "#fff",
            border: "1px solid #6ee7f9",
            borderRadius: "10px",
            padding: "14px 20px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.35)",
            fontWeight: "600",
          }}
        >
          ✓ {toast}
        </div>
      )}

      <div className="dashboard-topbar">

        <div>
          <p className="tag">
            AGRILINK / PRODUCT
          </p>

          <h1>{product.name}</h1>

          <p className="logged-user">
            📍 {product.location}
          </p>
        </div>

        <button
          className="secondary-btn"
          onClick={() =>
            navigate("/marketplace")
          }
        >
          ← MARKETPLACE
        </button>

      </div>

      <div className="product-card">

        <span className="tag">
          FARM FRESH PRODUCE
        </span>

        <h2>{product.name}</h2>

        <h1>
          ₹{product.price}
          <span style={{ fontSize: "18px" }}>
            {" "}
            / KG
          </span>
        </h1>

        <p>
          Available quantity:{" "}
          <strong>{product.quantity}</strong>
        </p>

        <p>
          Farmer:{" "}
          <strong>
            {product.farmerName}
          </strong>
        </p>

        <p>
          📍 {product.location}
        </p>

        <p style={{ marginTop: "20px" }}>
          {product.description}
        </p>

        <div style={{ marginTop: "30px" }}>

          <h3>SELECT QUANTITY</h3>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              marginTop: "15px",
            }}
          >

            <button
              className="secondary-btn"
              onClick={() =>
                setQuantity(
                  Math.max(
                    1,
                    quantity - 1
                  )
                )
              }
            >
              −
            </button>

            <strong
              style={{
                fontSize: "24px",
              }}
            >
              {quantity}
            </strong>

            <button
              className="primary-btn"
              onClick={() =>
                setQuantity(
                  quantity + 1
                )
              }
            >
              +
            </button>

          </div>

        </div>

        <h2
          style={{
            marginTop: "30px",
          }}
        >
          TOTAL: ₹{total}
        </h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "25px",
          }}
        >

          <button
            className="secondary-btn"
            onClick={addToCart}
          >
            🛒 ADD TO CART
          </button>

          <button
            className="primary-btn"
            onClick={buyNow}
          >
            BUY NOW →
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;