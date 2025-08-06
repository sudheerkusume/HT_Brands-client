import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Font Awesome icons

const WishlistButton = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const toggleWishlist = () => {
    setIsWishlisted((prev) => !prev);
    // Optional: trigger wishlist API logic here
  };

  return (
    <button
      onClick={toggleWishlist}
      style={{
        border: 'none',
        background: 'none',
        cursor: 'pointer',
        color: isWishlisted ? 'darkred' : '#a30000',
        fontSize: '16px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}
    >
      {isWishlisted ? <FaHeart /> : <FaRegHeart />}
      {isWishlisted ? 'Added to Wishlist' : 'Add to Wishlist'}
    </button>
  );
};

export default WishlistButton;
