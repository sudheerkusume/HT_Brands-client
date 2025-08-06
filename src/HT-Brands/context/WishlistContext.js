// src/HT-Brands/context/WishlistContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create context
const WishlistContext = createContext();

// Provide context
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem('wishlist');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (item) => {
    const exists = wishlist.some(w => w.id === item.id);
    if (!exists) setWishlist([...wishlist, item]);
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Hook to use context
export const useWishlist = () => useContext(WishlistContext);
