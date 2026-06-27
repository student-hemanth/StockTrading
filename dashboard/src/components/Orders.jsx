import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { token } = useContext(AuthContext);

  const fetchOrders = () => {
    axios.get("/api/allOrders", {
      headers: { Authorization: `Bearer ${token}` },
    }).then((res) => {
      setAllOrders(res.data);
    }).catch((err) => {
      console.error("Failed to fetch orders:", err);
    });
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  const handleCancel = async (orderId) => {
    try {
      await axios.put(`/api/orders/${orderId}/cancel`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchOrders();
    } catch (err) {
      console.error("Cancel failed:", err);
    }
  };

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{(order.price || 0).toFixed(2)}</td>
                  <td>{order.mode}</td>
                  <td>
                    <span className={order.status === "Cancelled" ? "text-danger" : "text-success"}>
                      {order.status}
                    </span>
                    {order.status === "Pending" && (
                      <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => handleCancel(order._id)}>
                        Cancel
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;