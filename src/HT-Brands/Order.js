import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { loginStatus } from "../App";
import { useCart } from "./context/CartContext";

const Order = () => {
  const [token] = useContext(loginStatus);
  const navigate = useNavigate();

  const location = useLocation();
const { cartItems, user } = useCart(); // ✅ Grab from context

const [addressData, setAddressData] = useState({
  name: user?.name || "",
  phone: user?.phone || "",
  address: "",
});

const totalPrice = cartItems.reduce((acc, item) => {
    const numericPrice = Number(item.price.toString().replace(/[^0-9.-]+/g, ""));
    return acc + numericPrice * (item.quantity || 1);
  }, 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert address object into a single string
      const addressString = `${addressData.name}, ${addressData.phone}, ${addressData.address}`;

      const orderPayload = {
        items: cartItems,
        address: addressString, // ✅ now it's a string, not an object
        paymentMode: "Cash on Delivery",
        total: totalPrice,
      };

      await axios.post("https://htbrands-server.onrender.com/order", orderPayload, {
        headers: { "x-token": token },
      });

      toast.success("Order placed successfully! Redirecting...");

      setAddressData({ name: "", phone: "", address: "" });

      // Close Bootstrap modal manually
      const modal = document.getElementById("addressModal");
      if (window.bootstrap && window.bootstrap.Modal && modal) {
        const modalInstance = window.bootstrap.Modal.getInstance(modal);
        if (modalInstance) {
          modalInstance.hide();
        }
      }

      document.body.classList.remove("modal-open")
      document.body.style.overflow = "";
      const backdrop =document.querySelector(".modal-backdrop");
      if(backdrop) backdrop.remove();
      setTimeout(() => {
        navigate("/");
      },1500 );
    } catch (err) {
      toast.error("Failed to place order");
      console.error(err);
    }
  };

  return (
    <div className="container py-4">
      <Toaster position="top-right" />
      <h2 className="mb-4 text-center">Secure Checkout</h2>

      <div className="row">
        <div className="col-md-8">
          <div className="mb-4">
            <h5>Items</h5>
            {cartItems.map((item,index) => (
              <div key={item._id || item.id || index} className="d-flex border-bottom py-2">
                <img src={item.image} alt={item.title} width="80" height="80" className="me-3" />
                <div>
                  <h6>{item.title}</h6>
                  <p className="mb-1 text-muted">Qty: {item.quantity || 1}</p>
                  <p className="mb-0 fw-bold">₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-4">
            <h6 style={{ fontWeight: 620, fontSize: 18 }}>
              Delivering to: {addressData.name || "Your name"}
            </h6>
            <p className="border p-3">
              {addressData.address || "No address added"}
              <br />
              {addressData.phone && `Phone: ${addressData.phone}`}
            </p>

            <p
              className="text-primary"
              data-bs-toggle="modal"
              data-bs-target="#addressModal"
              style={{ cursor: "pointer" }}
            >
              Add / Edit delivery instructions
            </p>
          </div>

          <div className="mb-4">
            <h5>Payment Method</h5>
            <div className="form-check">
              <input className="form-check-input" type="radio" checked readOnly id="cash" />
              <label className="form-check-label" htmlFor="cash">
                Cash on Delivery (COD)
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5 className="mb-3">Order Summary</h5>
            <p>Total Items: {cartItems.length}</p>
            <h4 className="text-success">Order Total: ₹{totalPrice.toLocaleString()}</h4>

            <button
              className="btn btn-warning w-100 mt-3"
              data-bs-toggle="modal"
              data-bs-target="#addressModal"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* Address Modal */}
      <div
        className="modal fade"
        id="addressModal"
        tabIndex="-1"
        aria-labelledby="addressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className="modal-header">
                <h5 className="modal-title" id="addressModalLabel">Enter Delivery Address</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Full Name"
                  value={addressData.name}
                  onChange={(e) => setAddressData({ ...addressData, name: e.target.value })}
                  required
                />
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Phone Number"
                  value={addressData.phone}
                  onChange={(e) => setAddressData({ ...addressData, phone: e.target.value })}
                  required
                />
                <textarea
                  className="form-control mb-3"
                  placeholder="Full Address"
                  rows="3"
                  value={addressData.address}
                  onChange={(e) => setAddressData({ ...addressData, address: e.target.value })}
                  required
                ></textarea>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-success w-100">
                  Confirm Order (₹{totalPrice.toLocaleString()})
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
