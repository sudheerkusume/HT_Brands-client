import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-dark bg-dark text-light py-5 px-3">
      <div className="container">
        <div className="row gy-4 text-start">
          {/* Get to Know Us */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3">Get to Know Us</h6>
            <ul className="list-unstyled small">
              <li className='mb-2'><Link to="/about" className="text-light text-decoration-none d-block mb-1">About Us</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none d-block mb-1">Contact Us</Link></li>
            </ul>
          </div>

          {/* Policies */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3">Policies</h6>
            <ul className="list-unstyled small" style={{fontSize:"13px", letterSpacing:"1px", color:"lightblue"}}>
              <li className='mb-2'><Link to="#" className="text-light text-decoration-none d-block mb-1">Exchange/Return Request</Link></li>
              <li className='mb-2'><Link to="#" className="text-light text-decoration-none d-block mb-1">Terms and Conditions</Link></li>
              <li className='mb-2'><Link to="#" className="text-light text-decoration-none d-block mb-1">Privacy Policy</Link></li>
              <li className='mb-2'><Link to="#" className="text-light text-decoration-none d-block mb-1">Return & Exchange Policy</Link></li>
              <li className='mb-2'><Link to="#" className="text-light text-decoration-none d-block mb-1">Shipping and Delivery Policy</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3">Follow Us</h6>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-light text-decoration-none small">
              <i className="bi bi-instagram me-2"></i> Instagram
            </a>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 col-sm-6">
            <h6 className="fw-bold mb-3">Get In Touch</h6>
            <form className="d-flex flex-column flex-sm-row">
              <input
                type="email"
                placeholder="Email"
                className="form-control me-sm-2 mb-2 mb-sm-0"
              />
              <button type="submit" className="btn btn-outline-light">→</button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-4 pt-3 border-top border-secondary small">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <p className="mb-1 mb-sm-0">
              © 2025 HT Brands. All rights reserved.
            </p>
            <p className="mb-0">Designed by <strong>SudheerXplore</strong></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
