import React from 'react';
import { Link } from 'react-router-dom';
import eror from '../HT-Brands/accets/image1.webp'; // Replace with real category images
import image2 from './accets/image3.webp';
import image4 from './accets/image4.webp';
import image5 from './accets/image5.webp'
const Categories = () => {
  return (
    <div className="container py-4">
      <h3 className="mb-4 text-start">Trending Categories</h3>
      <div className="row g-4 justify-content-center">

        {/* Repeat this block for each category */}
        <div className="col-6 col-md-3">
          <Link to="/NecktshirtPage" className="text-decoration-none">
            <div className="category-card position-relative overflow-hidden rounded-3 shadow-sm">
              <img src={eror} alt="T-Shirts" className="w-100 h-100 object-fit-cover" />
              <div className="category-overlay-text">T-SHIRTS</div>
            </div>
          </Link>
        </div>

        <div className="col-6 col-md-3">
          <Link to="/Shirts" className="text-decoration-none">
            <div className="category-card position-relative overflow-hidden rounded-3 shadow-sm">
              <img src={image2} alt="Shirts" className="w-100 h-100 object-fit-cover" />
              <div className="category-overlay-text">SHIRTS</div>
            </div>
          </Link>
        </div>

        <div className="col-6 col-md-3">
          <Link to="/Bottomwear" className="text-decoration-none">
            <div className="category-card position-relative overflow-hidden rounded-3 shadow-sm">
              <img src={image4} alt="Bottom Wear" className="w-100 h-100 object-fit-cover" />
              <div className="category-overlay-text">BOTTOM WEAR</div>
            </div>
          </Link>
        </div>

        <div className="col-6 col-md-3">
          <Link to="/Accessories" className="text-decoration-none">
            <div className="category-card position-relative overflow-hidden rounded-3 shadow-sm">
              <img src={image5} alt="Accessories" className="w-100 h-100 object-fit-cover" />
              <div className="category-overlay-text">ACCESSORIES</div>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Categories;