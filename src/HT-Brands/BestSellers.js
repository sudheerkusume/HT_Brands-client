
// export default BestSellers;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import './Necktshirt.css'; // ✅ Import CSS file

const BestSellers = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://htbrands-server.onrender.com/BestSeller")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
 <div className="container p-4">
      <div className="d-flex justify-content-between align-items-center mb-3 px-2">
        <h4 className="text-dark  mt-5" style={{fontWeight:300}}>Best Sellers</h4>
        <p
          className="text-primary mt-5 d-flex align-items-center"
          style={{ cursor: "pointer", fontWeight: 500 }}
          onClick={() => navigate("/Bestsellers")}
        >
          Shop Best Sellers <IoIosArrowForward size={18} className="ms-1" />
        </p>
      </div>

      <div className="row gx-2">
        {products.slice(0, 4).map((product, index) => (
          <div className="col-6 col-md-3 mb-4" key={product._id || index}>
            <div className="necktshirt-card">
              <div className="card-img-container">
                <Link to={`/BestSellers/${product._id}`}>
                  <img
                    src={product.Album?.[0]}
                    alt={product.Title}
                    className="main-img"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/300")
                    }
                  />
                  {product.Album?.[1] && (
                    <img
                      src={product.Album[1]}
                      alt={product.Title}
                      className="hover-img"
                      onError={(e) =>
                        (e.target.src = "https://via.placeholder.com/300")
                      }
                    />
                  )}
                </Link>
                <button className="quick-view-btn">Quick View</button>
              </div>

              <div className="card-body p-2">
                <h6 className="product-title text-truncate mb-1">
                  {product.Title}
                </h6>
                <div className="price-section mb-1">
                  <span className="old-price me-2">₹{product.Tariff}</span>
                  <span className="offer-price">
                    ₹{product.Offer}
                  </span>
                </div>
                <div className="stock-indicator small text-muted">
                  <span className="stock-dot me-1"></span>
                  {product.in_Stock} in stock
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
      );
};

export default BestSellers;
