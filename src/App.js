import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "animate.css";
import "./App.css";
import '@iconscout/react-unicons';
import Header from './HT-Brands/Header';
import Footer from "./HT-Brands/Footer";
import Routing from "./HT-Brands/Routing";
import ScrollToTop from './HT-Brands/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useEffect, useState } from "react";
import ConceptPage from './HT-Brands/ConceptPage';
import { CartProvider } from "./HT-Brands/context/CartContext";
import { WishlistProvider } from "./HT-Brands/context/WishlistContext";
import { SearchProvider } from "./HT-Brands/SearchContext";

export const loginStatus = createContext()
function App() {
  const [token, setToken] = useState("");
   
  useEffect(() => {
    const storedToken = localStorage.getItem("usertoken");
    if(storedToken){
      setToken(storedToken);
    }
  }, [])
  return (
    <div className="App">
      <loginStatus.Provider value={[token, setToken]}>
        <SearchProvider>
      <WishlistProvider>
      <CartProvider>
        <ScrollToTop />
        <Header />
        <Routing />
        <ConceptPage />
        <Footer />
        <ToastContainer position="top-right" autoClose={2000} />
      </CartProvider>
      </WishlistProvider>
      </SearchProvider>
      </loginStatus.Provider>
    </div>
  );
}

export default App;
