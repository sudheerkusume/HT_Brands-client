// src/HT-Brands/Wishlist.js
import React from 'react';
import { useWishlist } from './context/WishlistContext'; // ✅ Correct hook import
import { useCart } from './context/CartContext'; // Optional: Only if you use cart context
import { Link } from 'react-router-dom';
import Empty from './accets/illustration-person-addicted-social-media.png';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // ✅ Using hook
  const { addToCart } = useCart(); // Optional

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '2rem' }}>Your Wishlist</h2>

      {wishlist.length === 0 ? (
        <div style={{ textAlign: 'center' }}>
          <img
            src={Empty}
            alt="Empty Wishlist"
            style={{ maxWidth: '180px', marginBottom: '20px' }}
          />
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Your wishlist is empty.</p>
          <Link
            to="/"
            style={{
              padding: '12px 24px',
              backgroundColor: '#000',
              color: '#fff',
              borderRadius: '8px',
              textDecoration: 'none'
            }}
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            style={{
              border: '1px solid #eee',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: '100%',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '15px'
              }}
            />
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', textAlign: 'center' }}>{item.title}</h3>
            <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: '1rem' }}>₹{item.Offer}</p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                gap: '10px',
                marginTop: '20px'
              }}
            >
              <button
                onClick={() => addToCart(item)}
                style={{
                  backgroundColor: '#111',
                  color: 'white',
                  padding: '10px',
                  borderRadius: '8px',
                  border: 'none',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Add to Cart
              </button>
              <button
                onClick={() => removeFromWishlist(item.id)}
                style={{
                  backgroundColor: '#fff',
                  color: 'red',
                  border: '1px solid red',
                  padding: '10px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;
