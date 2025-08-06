// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewOrders = () => {
//   const [orders, setOrders] = useState([]);
//   const [selectedOrder, setSelectedOrder] = useState(null);

//   // Fetch all orders on mount
//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const res = await axios.get('https://htbrands-server.onrender.com/order');
//       setOrders(res.data);
//     } catch (err) {
//       console.error("Failed to fetch orders:", err);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm('Are you sure you want to delete this order?')) return;

//     try {
//       await axios.delete(`https://htbrands-server.onrender.com/order/${id}`);
//       fetchOrders();
//       alert("Order deleted successfully.");
//     } catch (err) {
//       console.error("Error deleting order:", err);
//     }
//   };

//   const handleView = (order) => {
//     setSelectedOrder(order);
//   };

//   return (
//     <div className='container mt-5'>
//       <h4>View Orders</h4>

//       <table className='table table-bordered mt-4'>
//         <thead>
//           <tr>
//             <th>S.No</th>
//             <th>Items</th>
//             <th>Address</th>
//             <th>Total</th>
//             <th>Payment Mode</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(orders) && orders.length > 0 ? (
//             orders.map((order, index) => (
//               <tr key={order._id}>
//                 <td>{index + 1}</td>
//                 <td>
//                   <ul className="list-unstyled">
//                     {order.items.map((item, i) => (
//                       <li key={i}>
//                         {item.title} x {item.quantity || 1}
//                       </li>
//                     ))}
//                   </ul>
//                 </td>
//                 <td>{order.address}</td>
//                 <td>₹{order.total.toLocaleString()}</td>
//                 <td>{order.paymentMode}</td>
//                 <td>{new Date(order.date || order.createdAt).toLocaleDateString()}</td>
//                 <td>
//                   <button
//                     className='btn btn-outline-primary btn-sm me-2'
//                     onClick={() => handleView(order)}
//                     data-bs-toggle='modal'
//                     data-bs-target='#viewOrderModal'
//                   >
//                     View
//                   </button>
//                   <button
//                     className='btn btn-outline-danger btn-sm'
//                     onClick={() => handleDelete(order._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan='7' className='text-center'>No orders found</td>
//             </tr>
//           )}
//         </tbody>
//       </table>

//       {/* View Order Modal */}
//       <div className="modal fade" id="viewOrderModal" tabIndex="-1">
//         <div className="modal-dialog modal-lg">
//           <div className="modal-content">
//             <div className="modal-header">
//               <h5 className="modal-title">Order Details</h5>
//               <button
//                 type="button"
//                 className="btn-close"
//                 data-bs-dismiss="modal"
//               ></button>
//             </div>
//             <div className="modal-body">
//               {selectedOrder ? (
//                 <div>
//                   <h6>Address:</h6>
//                   <p>{selectedOrder.address}</p>

//                   <h6>Items:</h6>
//                   <ul>
//                     {selectedOrder.items.map((item, i) => (
//                       <li key={i}>
//                         {item.title} - {item.quantity || 1} x ₹{item.price}
//                       </li>
//                     ))}
//                   </ul>

//                   <h6>Total: ₹{selectedOrder.total.toLocaleString()}</h6>
//                   <h6>Payment Mode: {selectedOrder.paymentMode}</h6>
//                   <h6>Order Date: {new Date(selectedOrder.date || selectedOrder.createdAt).toLocaleString()}</h6>
//                 </div>
//               ) : (
//                 <p>No order selected</p>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ViewOrders;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewOrders = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Fetch all orders on mount
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get('https://htbrands-server.onrender.com/order');
      setOrders(res.data);
    } catch (err) {
      console.error("Failed to fetch orders:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this order?')) return;

    try {
      await axios.delete(`https://htbrands-server.onrender.com/order/${id}`);
      fetchOrders();
      alert("Order deleted successfully.");
    } catch (err) {
      console.error("Error deleting order:", err);
    }
  };

  const handleView = (order) => {
    setSelectedOrder(order);
  };

  return (
    <div className='container mt-5'>
      <h4>View Orders</h4>

      {/* 🧭 Add scroll for mobile */}
      <div className="table-responsive mt-4">
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Items</th>
              <th>Address</th>
              <th>Total</th>
              <th>Payment Mode</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orders) && orders.length > 0 ? (
              orders.map((order, index) => (
                <tr key={order._id}>
                  <td>{index + 1}</td>
                  <td style={{ wordBreak: 'break-word' }}>
                    <ul className="list-unstyled mb-0">
                      {order.items.map((item, i) => (
                        <li key={i}>
                          {item.title} x {item.quantity || 1}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ wordBreak: 'break-word' }}>{order.address}</td>
                  <td>₹{order.total.toLocaleString()}</td>
                  <td>{order.paymentMode}</td>
                  <td>{new Date(order.date || order.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      className='btn btn-outline-primary btn-sm me-2'
                      onClick={() => handleView(order)}
                      data-bs-toggle='modal'
                      data-bs-target='#viewOrderModal'
                    >
                      View
                    </button>
                    <button
                      className='btn btn-outline-danger btn-sm'
                      onClick={() => handleDelete(order._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='7' className='text-center'>No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* View Order Modal */}
      <div className="modal fade" id="viewOrderModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Order Details</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              {selectedOrder ? (
                <div>
                  <h6>Address:</h6>
                  <p>{selectedOrder.address}</p>

                  <h6>Items:</h6>
                  <ul>
                    {selectedOrder.items.map((item, i) => (
                      <li key={i}>
                        {item.title} - {item.quantity || 1} x ₹{item.price}
                      </li>
                    ))}
                  </ul>

                  <h6>Total: ₹{selectedOrder.total.toLocaleString()}</h6>
                  <h6>Payment Mode: {selectedOrder.paymentMode}</h6>
                  <h6>Order Date: {new Date(selectedOrder.date || selectedOrder.createdAt).toLocaleString()}</h6>
                </div>
              ) : (
                <p>No order selected</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrders;
