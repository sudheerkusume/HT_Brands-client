
import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './accets/ht logo1.PNG';
import { FaChevronDown, FaRegHeart } from 'react-icons/fa';
import { BsBasket, BsSearch } from 'react-icons/bs';
import MainCart from '../MainCart';
import SearchDrawer from './SearchDrawer';
import { useWishlist } from './context/WishlistContext'; // ✅ updated import
import { useCart } from './context/CartContext';
import Collapse from 'bootstrap/js/dist/collapse'
const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { wishlist } = useWishlist(); // ✅ updated hook usage
  const { cartItems } = useCart();

const closeNavbar = () => {
  const navbar = document.getElementById("navbarNavDropdown");
  if (navbar?.classList.contains("show")) {
    const collapse = new Collapse(navbar);
    collapse.hide();
  }
};

  return (
    <>
      {/* Top Scrolling Announcement Bar */}
      <div className="announcement-bar bg-danger text-white py-3">
        <div className="announcement-track">
          <div className="scroll-text">
            <span>
              EXTRA ₹250 OFF on orders above ₹2500 &nbsp;|&nbsp;
              EXTRA ₹500 OFF on orders above ₹3500 &nbsp;|&nbsp;
              Free Shipping on All Orders &nbsp;|&nbsp;
              No Coupon Needed &nbsp;|&nbsp;
              Shop Now & Save Big
            </span>
            <span>
              EXTRA ₹250 OFF on orders above ₹2500 &nbsp;|&nbsp;
              EXTRA ₹500 OFF on orders above ₹3500 &nbsp;|&nbsp;
              Free Shipping on All Orders &nbsp;|&nbsp;
              No Coupon Needed &nbsp;|&nbsp;
              Shop Now & Save Big
            </span>
          </div>
        </div>
      </div>

      <header className="container-fluid mb-2">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/" onClick={closeNavbar}>
              <img src={logo} alt="logo" style={{ width: '40px' }} />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
              <ul className="navbar-nav gap-3 align-items-center">
                <li className="nav-item dropdown">
                  <span className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button">
                    Shop by Collection <FaChevronDown size={9} />
                  </span>
                  <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/NecktshirtPage" onClick={closeNavbar}>Unisex T-Shirts</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Shirts" onClick={closeNavbar}>Shirts</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/SweatShirt" onClick={closeNavbar}>Sweatshirts</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/Bottomwear" onClick={closeNavbar}>Bottomwear</NavLink></li>
                  </ul>
                </li>
                <li className="nav-item"><NavLink className="nav-link" to="/" onClick={closeNavbar}>New Arrivals</NavLink></li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/BestSellers" onClick={closeNavbar}>
                    Best Sellers <span className="badge bg-danger">HOT!</span>
                  </NavLink>
                </li>
                <li className="nav-item"><NavLink className="nav-link" to="/Accessories" onClick={closeNavbar}>Accessories</NavLink></li>
                <li className="nav-item"><NavLink className="nav-link" to="/About" onClick={closeNavbar}>About Us</NavLink></li>
              </ul>

            </div>
          <ul className="navbar-nav ms-auto d-flex flex-row align-items-center">
                {/* Wishlist Icon */}
                <li className="nav-item position-relative mx-2">
                  <NavLink className="nav-link" to="/Wishlist">
                    <FaRegHeart style={{ color: 'red', fontSize: "22px" }} />
                    {wishlist?.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '10px' }}>
                        {wishlist.length}
                      </span>
                    )}
                  </NavLink>
                </li>

                {/* Search Icon */}
                <li className="nav-item mx-2">
                  <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setIsSearchOpen(true)}>
                    <BsSearch style={{ fontSize: "22px" }} onClick={closeNavbar}/>
                  </span>
                </li>
                {isSearchOpen && <div className="search-backdrop" onClick={() => setIsSearchOpen(false)} />}
                <SearchDrawer isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

                {/* Login */}
                <li className="nav-item mx-2">
                  <NavLink className="nav-link" to="/Login" onClick={closeNavbar}>
                    <i className="bi bi-person" style={{ fontSize: "24px" }}></i>
                  </NavLink>
                </li>

                {/* Cart Icon */}
                <li className="nav-item position-relative ">
                  <span className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setIsCartOpen(true)}>
                    <BsBasket style={{ fontSize: "22px" }} />
                    {cartItems?.length > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark" style={{ fontSize: '10px' }}>
                        {cartItems.length}
                      </span>
                    )}
                  </span>
                </li>
              </ul>

          </div>
        </nav>
      </header>
      <MainCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />

    </>
  );
};

export default Header;


// import React from 'react'
// import { NavLink } from 'react-router-dom'
// const Header = () => {
//   return (
//     <header className='container-fluid px-5'>
//       <div className='container'>
//         <NavLink className="navbar-brand" to ="/"></NavLink>
//       </div>
//       <div>
//         <ul className='text-dark'>
//           <li>
//             <NavLink className="nav-link active" to="/">New Arrivals</NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/Cart">Shirts</NavLink>
//           </li>
//           <li>
//             <NavLink className="nav-link" to="/About">About us</NavLink>
//           </li>
//           <li>
//             <NavLink className="Nav-link" to="/Accessories">Accessories</NavLink>
//           </li>

//         </ul>
//       </div>
//     </header>
//   )
// }

// export default Header