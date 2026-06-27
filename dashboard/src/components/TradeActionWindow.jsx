import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import AuthContext from "./AuthContext";

import "./BuyActionWindow.css";

const TradeActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [message, setMessage] = useState(null);

  const generalContext = useContext(GeneralContext);
  const { token } = useContext(AuthContext);

  const handleTradeClick = async () => {
    const qty = Number(stockQuantity);
    const price = Number(stockPrice);

    if (!qty || qty < 1) {
      setMessage({ type: "error", text: "Quantity must be at least 1." });
      return;
    }
    if (!price || price <= 0) {
      setMessage({ type: "error", text: "Enter a valid price." });
      return;
    }

    try {
      await axios.post("/api/newOrder", {
        name: uid,
        qty: qty,
        price: price,
        mode: mode,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessage({ type: "success", text: `${mode} order placed: ${qty} x ${uid} @ \u20B9${price.toFixed(2)}` });
      setStockQuantity(1);
      setStockPrice(0.0);
    } catch (error) {
      setMessage({ type: "error", text: "Order failed. Please try again." });
    }
  };

  const handleCancelClick = () => {
    generalContext.closeTradeWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              min="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      {message && (
        <div className={`message ${message.type}`}>
          {message.text}
        </div>
      )}

      <div className="buttons">
        <span>Margin required \u20B9{(stockQuantity * stockPrice).toFixed(2)}</span>

        <div>
          <Link
            to="#"
            className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}
            onClick={handleTradeClick}
          >
            {mode === "BUY" ? "Buy" : "Sell"}
          </Link>

          <Link
            to="#"
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TradeActionWindow;
