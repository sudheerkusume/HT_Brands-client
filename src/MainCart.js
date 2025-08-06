import React from "react";
import { useCart } from "./HT-Brands/context/CartContext";
import { useNavigate } from "react-router-dom";

const MainCart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <div className="">
      {/* Background Blur */}
      <div
        className={`cart-backdrop ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isOpen ? "show" : ""} p-5`}>
        <div className="offcanvas-header">
          <h5 className="offcanvas-title fw-bold">🛒 My Cart</h5>
          <button type="button" className="btn-close" onClick={onClose}></button>
        </div>

        <div className="offcanvas-body">
          {cartItems.length === 0 ? (
            <div className="text-center mt-5">
              <h6>Your cart is empty.</h6>
              <button
               style={{borderRadius:25, marginInlineEnd:5}}
                className="btn btn-primary mt-3"
                onClick={() => {
                  onClose();
                  navigate("/BestSellers");
                }}
              >
                Start Shopping
              </button>
              <button
                style={{borderRadius:25, marginInlineEnd:5}}
                className="btn btn-primary mt-3"
                onClick={() => {
                  onClose();
                  navigate("/CartPage");
                }}
              >
                View Cart
              </button>

            </div>
          ) : (
            <>
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center mb-3 border-bottom pb-2"
                >
                  <img
                    src={item.image}
                    alt={item.Product}
                    className="img-fluid rounded me-2"
                    style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.Product}</h6>
                    <p className="mb-1 text-muted">
                      ₹{item.price} × {item.quantity}
                    </p>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}

              <div className="border-top pt-3 mt-4">
                <div className="d-flex justify-content-between">
                  <span>Total:</span>
                  <strong>₹{totalPrice}</strong>
                </div>
<div className="cart-footer">
  <button
    style={{ borderRadius: 25 }}
    className="btn btn-dark w-100 mb-2"
    onClick={() => {
      onClose();
      navigate("/CartPage");
    }}
  >
    Proceed to Checkout
  </button>
  <button
    style={{ borderRadius: 25 }}
    className="btn btn-primary w-100"
    onClick={() => {
      onClose();
      navigate("/CartPage");
    }}
  >
    View Cart
  </button>
</div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCart;
