import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { loginStatus } from '../../App';
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [token] = useContext(loginStatus);

  // Fetch user and cart from backend
  useEffect(() => {
    const fetchCart = async () => {
      if (!token) return;

      try {
        const userRes = await axios.get("https://htbrands-server.onrender.com/getuser", {
          headers: { "x-token": token },
        });
        setUser(userRes.data);

        const cartRes = await axios.get("https://htbrands-server.onrender.com/cart", {
          headers: { "x-token": token },
        });

        setCartItems(cartRes.data?.items || []);
      } catch (error) {
        console.error("Error fetching cart or user:", error);
        toast.error("Failed to load cart data");
      }
    };

    fetchCart();
  }, [token]);

  // Add item to cart
  const addToCart = async (newItem) => {
    if (!token) return toast.error("Please login to add items");

    const existingIndex = cartItems.findIndex(
      (item) => item.title === newItem.title && item.size === newItem.size
    );

    let updatedCart = [...cartItems];

    if (existingIndex !== -1) {
      updatedCart[existingIndex].quantity += 1;
    } else {
      updatedCart.push({ ...newItem, quantity: 1 });
    }

    setCartItems(updatedCart);

    try {
      await axios.post(
        "https://htbrands-server.onrender.com/cart",
        {
          userId: user?._id || user?.id,
          items: updatedCart,
        },
        {
          headers: { "x-token": token },
        }
      );
      toast.success("Item added to cart");
    } catch (error) {
      console.error("Failed to sync cart:", error);
      toast.error("Failed to update cart");
    }
  };

  // Remove item from cart
  const removeFromCart = async (itemToRemove) => {
    const updatedCart = cartItems.filter(
      (item) =>
        !(item.title === itemToRemove.title && item.size === itemToRemove.size)
    );

    setCartItems(updatedCart);

    try {
      await axios.post(
        "https://htbrands-server.onrender.com/cart",
        {
          userId: user?._id || user?.id,
          items: updatedCart,
        },
        {
          headers: { "x-token": token },
        }
      );
    } catch (error) {
      console.error("Failed to sync cart after removal:", error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
