import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import FeaturesRow from '../FeaturesRow';
import ShippingReturns from '../ShippingReturns';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-toastify';
import { loginStatus } from '../../App';
import 'react-toastify/dist/ReactToastify.css';

const ShirtPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { token } = useContext(loginStatus);

  useEffect(() => {
    axios
      .get(`https://htbrands-server.onrender.com/Shirts/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.Album?.[0]);
      })
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size!');
      return;
    }

    const cartItem = {
      id: product._id,
      title: product.Title,
      image: selectedImage,
      price: parseFloat(product.Offer.toString().replace(/,/g, "")),
      size: selectedSize,
      quantity: 1,
    };

    addToCart(cartItem, token);
    toast.success('Added to cart!');
  };

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row gx-5 gy-4">
        {/* Left Section */}
        <div className="col-lg-6">
          <div className="position-sticky" style={{ top: '100px' }}>
            <div className="d-flex">
              {/* Thumbnails */}
              <div className="d-flex flex-column gap-2 me-3">
                {product.Album?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className={`img-thumbnail p-1 ${selectedImage === img ? 'border-primary' : ''}`}
                    style={{ width: 70, height: 70, objectFit: 'cover', cursor: 'pointer' }}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-grow-1 d-flex justify-content-center align-items-center border rounded" style={{ minHeight: '500px' }}>
                <img
                  src={selectedImage}
                  alt={product.Title}
                  className="img-fluid"
                  style={{ maxHeight: '480px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6">
          <h3 className="fw-semibold">{product.Title}</h3>
          <p className="text-muted">{product.Features2}</p>
          <h4 className="text-danger mb-1">₹{product.Offer}</h4>
          <span className="text-muted text-decoration-line-through">₹{product.Tariff}</span>

          {/* Wishlist */}
          <div className="mb-3 d-flex align-items-center">
            <FaHeart
              className="text-danger me-2"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                const wishItem = {
                  id: product._id,
                  title: product.Title,
                  image: selectedImage,
                  price: product.Offer,
                };
                addToWishlist(wishItem);
                toast.success('Added to wishlist!');
              }}
            />
            <span>Add to Wishlist</span>
          </div>

          <div className="mb-2">
            <strong>Fit:</strong> {product.Features}
          </div>
          <div className="mb-2">
            <strong>Fabric:</strong> {product.Features1}
          </div>
          <div className="mb-3">
            <strong>Color:</strong> {product.Color}
          </div>

          <div className="mb-4">
            <label className="form-label fw-bold">Select Size:</label>
            <div className="d-flex flex-wrap gap-2">
              {product.Size?.split(',').map((size) => (
                <button
                  key={size}
                  className={`btn btn-outline-dark btn-sm ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.trim()}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold">Style Tips:</h6>
            <p className="text-muted mb-1">* {product.StyleTips}</p>
            <p className="text-muted">* {product.StyleTips1}</p>
            <p className="text-muted">* {product.StyleTips2}</p>
          </div>

          <div className="mb-4">
            <h6 className="fw-bold">Wash Care:</h6>
            <ul className="text-muted ps-3 mb-0">
              <li>{product.WashCare}</li>
              <li>{product.WashCare2}</li>
              <li>{product.WashCare3}</li>
            </ul>
          </div>

          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-dark px-4" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-outline-primary px-4">Buy it Now</button>
          </div>

          <FeaturesRow />
          <ShippingReturns />

          <Link to="/Shirts" className="text-decoration-none text-secondary">
            ← Back to Shirts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShirtPage;
