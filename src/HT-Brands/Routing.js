import React from 'react';
import { Route, Routes } from 'react-router-dom';

// General Pages
import About from './About';
import NoPages from './NoPages';
import Login from './Login';
import Contact from '../Contact';
import Wishlist from './Wishlist';
import LandingPage from './LandingPage';
import Logout from './Logout';
// Admin
import Checkin from './Admin/Checkin';
import Dashboard from './Admin/Dashboard';

// Category Pages
import TshirtsPage from './SinglesPage/TshirtsPage';
import ShirtsPage from './SinglesPage/ShirtsPage';
import BottomwearPage from './SinglesPage/BottomwearPage';
import NecktshirtPage from './SinglesPage/NecktshirtPage';

// Product Listings
import Necktshirt from './Necktshirt';

// Product Detail Pages
import NecktshirtSingle from './DetailsPage/NecktshirtSingle';
import ShirtSingle from './DetailsPage/ShirtSingle';
import BottomwearSingle from './DetailsPage/BottomWearSingle';
import AccessoriesPage from './SinglesPage/AccessoriesPage';
import AccessoriesSingle from './DetailsPage/AccessoriesSingle';
import SweatshirtPage from './SinglesPage/SweatshirtPage';
import SweatshirtSingle from './DetailsPage/SweatshirtSingle';
import BestSellersPage from './SinglesPage/BestSellersPage';
import BestsellersSingle from './DetailsPage/BestsellersSingle';
import CartPage from './Pages/CartPage';
import Signup from './Signup';
import AccountPage from './AccountPage';
import Order from './Order';

const Routing = () => {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Wishlist" element={<Wishlist />} />
      <Route path="/About" element={<About />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path='/Signup' element={<Signup/>}/>
      <Route path="/Checkin" element={<Checkin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path='/AccountPage' element={<AccountPage />} />
      <Route path='/CartPage' element={<CartPage />}/>
      <Route path='/Order' element={<Order />} />
      <Route path="*" element={<NoPages />} />

      {/* Category Pages */}
      <Route path="/tshirts" element={<TshirtsPage />} />
      <Route path="/Shirts" element={<ShirtsPage />} />
      <Route path="/Bottomwear" element={<BottomwearPage />} />
      <Route path="/NecktshirtPage" element={<NecktshirtPage />} />

      {/* Product Lists */}
      <Route path="/Necktshirt" element={<Necktshirt />} />

      {/* Product Details */}
      <Route path="/Necktshirt/:id" element={<NecktshirtSingle />} />
      <Route path="/Shirts/:id" element={<ShirtSingle />} />
      <Route path="/Bottomwear/:id" element={<BottomwearSingle />} />

      {/* Accessories */}
     <Route path="/Accessories" element={<AccessoriesPage />} />
     <Route path='/Accessories/:id' element= {< AccessoriesSingle/>}/>

      {/* SweatShirt */}
     <Route path="/SweatShirt" element={<SweatshirtPage />} />
     <Route path='/SweatShirt/:id' element= {< SweatshirtSingle/>}/>

      {/* BestSellers */}
     <Route path="/BestSellers" element={<BestSellersPage />} />
     <Route path='/BestSellers/:id' element= {< BestsellersSingle/>}/>

    </Routes>
  );
};

export default Routing;
