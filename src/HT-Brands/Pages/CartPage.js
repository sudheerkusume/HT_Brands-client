// import React from "react";
// import { useCart } from "../context/CartContext";
// import { FaTrash } from "react-icons/fa";

// const CartPage = () => {
//   const { cartItems, removeFromCart } = useCart();

//   const total = cartItems.reduce(
//     (sum, item) => sum + (item.price * (item.quantity || 1)),
//     0
//   );

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4">🛒 Your Cart</h2>

//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="row">
//           {/* Left Side - Cart Items */}
//           <div className="col-md-9">
//             <div className="row">
//               {cartItems.map((item) => (
//                 <div
//                   key={`${item.title}-${item.size || ""}-${item._id || Math.random()}`}
//                   className="col-md-6 mb-4"
//                 >
//                   <div className="card h-100 d-flex flex-row">
//                     <img
//                       src={item.image}
//                       alt={item.title}
//                       className="img-fluid"
//                       style={{ width: "150px", objectFit: "cover" }}
//                     />
//                     <div className="card-body">
//                       <h5 className="card-title">{item.title}</h5>
//                       <p className="card-text">₹{item.price}</p>
//                       <p className="card-text">
//                         Quantity: {item.quantity || 1}
//                       </p>
//                       <button
//                         className="btn btn-danger btn-sm"
//                         onClick={() => removeFromCart(item)}
//                       >
//                         <FaTrash /> Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Side - Total */}
//           <div className="col-md-3">
//             <div className="card p-3">
//               <h5>Total: ₹{total}</h5>
//               <button className="btn btn-success mt-2 w-100">Checkout</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;

import React, { useEffect, useMemo } from "react";
import { useCart } from "../context/CartContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  // DEBUG: log cartItems from context
  useEffect(() => {
    console.log("📦 Fetched Cart Items from context:", cartItems);
  }, [cartItems]);

  // Calculate total price
  const total = useMemo(() => {
    let calculatedTotal = 0;

    cartItems.forEach((item, index) => {
      const rawPrice = item.price || "0";
      const quantity = item.quantity || 1;

      // Clean the price string (remove ₹, commas etc)
      const numericPrice = parseFloat(
        rawPrice.toString().replace(/[₹,]/g, "")
      );

      if (!isNaN(numericPrice)) {
        calculatedTotal += numericPrice * quantity;
      }

      // DEBUG: log each item calculation
      console.log(
        `🧾 Item ${index + 1}: title=${item.title}, price=${numericPrice}, qty=${quantity}, total=${numericPrice * quantity}`
      );
    });

    console.log("✅ Final Total:", calculatedTotal);
    return calculatedTotal;
  }, [cartItems]);

  return (
    <div className="container py-4">
      <h2 className="mb-4">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <div className="row">
          {/* LEFT SIDE: Cart items */}
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div
                key={`${item._id}-${item.size || "default"}-${index}`}
                className="d-flex gap-3 border rounded p-3 mb-4 shadow-sm bg-white"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "150px", height: "150px", objectFit: "cover" }}
                  className="rounded"
                />

                <div className="flex-grow-1">
                  <h5>{item.title}</h5>
                  <p className="mb-1">Size: {item.size || "Free Size"}</p>
                  <p className="mb-1">Price: ₹{item.price}</p>
                  <p className="mb-1">Quantity: {item.quantity || 1}</p>
                </div>

                <button
                  className="btn btn-outline-danger align-self-start"
                  onClick={() => removeFromCart(item)}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: Cart summary */}
          <div className="col-md-4">
            <div
              className="p-4 border rounded bg-light sticky-top"
              style={{ top: "80px" }}
            >
              <h4 className="mb-3">Cart Summary</h4>
              <p>Total Items: {cartItems.length}</p>
              <h5>Total Price: ₹{total.toFixed(2)}</h5>
              <button
                className="btn btn-success w-100 mt-3"
                onClick={() => navigate("/order")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
