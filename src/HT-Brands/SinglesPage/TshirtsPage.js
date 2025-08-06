import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TshirtsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://htbrands-server.onrender.com/Tshirts")
      .then(res => setProducts(res.data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="container-fluid py-4 px-3">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-6 col-md-4 col-lg-3 mb-4" key={product._id || index}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-img-container">
                <img
                  src={product.Album?.[0]}
                  alt={product.Title}
                  className="card-img-top"
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
                />
              </div>
              <div className="card-body p-2">
                <h6 className="mb-1" style={{ fontWeight: '500', fontSize: '13px' }}>
                  {product.Title}
                </h6>
                <div>
                  ₹<span className="text-danger fw-bold">{product.Offer}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {products.length === 0 && (
          <div className="col-12 text-center">
            <p className="text-muted">No products available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TshirtsPage;
