
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosFunnel } from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import { IoFilter } from 'react-icons/io5';

const BestSellersPage = () => {
  const [products, setProducts] = useState([]);
  const [openSections, setOpenSections] = useState({});
  const [filters, setFilters] = useState({
    Product: [],
    Availbaility: [],
    category: [],
    Product_Type: [],
    Size: [],
    Color: [],
    Price: [],
  });

  const [selectedFilters, setSelectedFilters] = useState({
    Product: [],
    Availbaility: [],
    category: [],
    Product_Type: [],
    Size: [],
    Color: [],
    Price: [],
  });

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const toggleMobileFilter = () => setMobileFilterOpen(!mobileFilterOpen);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  useEffect(() => {
    axios.get("https://htbrands-server.onrender.com/BestSeller")
      .then((res) => {
        setProducts(res.data);

        const newFilters = {
          Availbaility: [...new Set(res.data.map(item => item.Availbaility))],
          category: [...new Set(res.data.map(item => item.category))],
          Product_Type: [...new Set(res.data.map(item => item.Product_Type))],
          Size: [...new Set(res.data.map(item => item.Size))],
          Color: [...new Set(res.data.map(item => item.Color))],
          Price: ['Under 500', '500 - 999', '1000+'],
        };

        setFilters(newFilters);

        const defaultOpen = {};
        Object.keys(newFilters).forEach(key => {
          defaultOpen[key] = true;
        });
        setOpenSections(defaultOpen);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prev) => {
      const updated = prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value];

        if(window.innerWidth < 768){
          setMobileFilterOpen(false)
        }
      return { ...prev, [type]: updated };
    });
  };

  const applyFilters = (product) => {
    const price = product.Offer ? parseInt(product.Offer.replace(/\D/g, '')) : 0;

    return (
      (selectedFilters.Product.length === 0 || selectedFilters.Product.includes(product.Product)) &&
      (selectedFilters.Availbaility.length === 0 || selectedFilters.Availbaility.includes(product.Availbaility)) &&
      (selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category)) &&
      (selectedFilters.Product_Type.length === 0 || selectedFilters.Product_Type.includes(product.Product_Type)) &&
      (selectedFilters.Size.length === 0 || selectedFilters.Size.includes(product.Size)) &&
      (selectedFilters.Color.length === 0 || selectedFilters.Color.includes(product.Color)) &&
      (selectedFilters.Price.length === 0 ||
        selectedFilters.Price.some((range) => {
          if (range === 'Under 500') return price < 500;
          if (range === '500 - 999') return price >= 500 && price <= 999;
          if (range === '1000+') return price > 1000;
          return false;
        }))
    );
  };

  const filteredProducts = products.filter(applyFilters);

  const getFilteredCount = (type, value) => {
    const tempFilters = { ...selectedFilters };
    tempFilters[type] = [];

    return products.filter((product) => {
      const price = product.Offer ? parseInt(product.Offer.replace(/\D/g, '')) : 0;

      const match =
        (tempFilters.Product.length === 0 || tempFilters.Product.includes(product.Product)) &&
        (tempFilters.Availbaility.length === 0 || tempFilters.Availbaility.includes(product.Availbaility)) &&
        (tempFilters.category.length === 0 || tempFilters.category.includes(product.category)) &&
        (tempFilters.Product_Type.length === 0 || tempFilters.Product_Type.includes(product.Product_Type)) &&
        (tempFilters.Size.length === 0 || tempFilters.Size.includes(product.Size)) &&
        (tempFilters.Color.length === 0 || tempFilters.Color.includes(product.Color)) &&
        (tempFilters.Price.length === 0 ||
          tempFilters.Price.some((range) => {
            if (range === 'Under 500') return price < 500;
            if (range === '500 - 999') return price >= 500 && price <= 999;
            if (range === '1000+') return price > 1000;
            return false;
          }));

      if (!match) return false;

      switch (type) {
        case 'Availbaility': return product.Availbaility === value;
        case 'category': return product.category === value;
        case 'Product_Type': return product.Product_Type === value;
        case 'Size': return product.Size === value;
        case 'Color': return product.Color === value;
        case 'Price':
          if (value === 'Under 500') return price < 500;
          if (value === '500 - 999') return price >= 500 && price <= 999;
          if (value === '1000+') return price > 1000;
          return false;
        default:
          return false;
      }
    }).length;
  };

  return (
    <div className="container-fluid p-4 mt-4">
      {/* Mobile Filter Button */}
      <div className="d-md-none mb-3">
        <button className="btn btn-outline-secondary d-flex align-items-center" onClick={toggleMobileFilter}>
          <IoFilter className="me-2" /> Filter
        </button>
      </div>

      <div className="row">
        {/* Filter Sidebar */}
        <div className={`col-lg-3 mb-4 ${mobileFilterOpen ? '' : 'd-none d-lg-block'}`} style={{ fontSize: "14px" }}>
          <div style={{
            position: "sticky",
            top: "100px",
            background: "#fff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(180, 20, 20, 0.05)",
            border: "1px solid #eee",
            zIndex: 1000,
          }}>
            {Object.entries(filters).map(([filterType, values]) => (
              <div key={filterType} className="mb-3">
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleSection(filterType)}
                >
                  <h6 className="text-capitalize mb-0" style={{ fontSize: "14px" }}>
                    {filterType.replace(/_/g, " ")}
                  </h6>
                  <span style={{
                    display: 'inline-block',
                    transform: openSections[filterType] ? 'rotate(90deg)' : 'rotate(0deg)',
                    transition: '0.3s ease'
                  }}>
                    <IoIosArrowForward />
                  </span>
                </div>

                <div style={{
                  color: "GrayText",
                  maxHeight: openSections[filterType] ? "500px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.4s ease-in-out",
                }}>
                  <div className="mt-3">
                    {filterType === "Availbaility" ? (
                      values.map((value, index) => (
                        <div className="form-check form-switch" key={index}>
                          <input
                            className="form-check-input"
                            style={{ height: 20, width: 37 }}
                            type="checkbox"
                            role="switch"
                            id={`${filterType}-switch-${index}`}
                            checked={selectedFilters[filterType]?.includes(value)}
                            onChange={() => handleFilterChange(filterType, value)}
                          />
                          <label className="form-check-label p-2" htmlFor={`${filterType}-switch-${index}`}>
                            {value} <span style={{ fontSize: "13px", fontWeight: 290, padding: "6px" }}>({getFilteredCount(filterType, value)})</span>
                          </label>
                        </div>
                      ))
                    ) : (
                      values.map((value, index) => (
                        <div className="form-check" key={index}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`${filterType}-${index}`}
                            checked={selectedFilters[filterType]?.includes(value)}
                            onChange={() => handleFilterChange(filterType, value)}
                          />
                          <label className="form-check-label" htmlFor={`${filterType}-${index}`}>
                            {value} <span style={{ fontSize: "13px", fontWeight: 290, padding: "6px" }}>({getFilteredCount(filterType, value)})</span>
                          </label>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Cards */}
        <div className="col-lg-9">
          <div className="row">
            {filteredProducts.map((product, index) => (
              <div className="col-6 col-md-4 col-lg-4 mb-4" key={product._id || index}>
                <Link to={`/BestSellers/${product._id}`} className="text-decoration-none text-dark">
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-img-container">
                      <img
                        src={product.Album?.[0]}
                        alt={product.Title}
                        className="card-img-top"
                        onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
                      />
                      {product.Album?.[1] && (
                        <img
                          src={product.Album[1]}
                          alt="Hover"
                          className="hover-img"
                          onError={(e) => (e.target.style.display = 'none')}
                        />
                      )}
                      <button className="quick-view-btn">Quick View</button>
                    </div>
                    <div className="card-body p-2">
                      <h6 className="mb-1" style={{ fontWeight: '500', fontSize: '12px' }}>{product.Title}</h6>
                      <div className="mb-1">
                        <span className="text-danger fw-semibold">{product.Offer}</span>
                      </div>
                      <div className="d-flex align-items-center gap-1" style={{ fontSize: '13px', color: '#e65c00' }}>
                        <span className="dot" style={{ height: '8px', width: '8px', backgroundColor: '#e65c00', borderRadius: '50%', display: 'inline-block' }}></span>
                        <span>{product.in_Stock} in stock</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}

            {filteredProducts.length === 0 && (
              <div className="col-12 text-center">
                <p className="text-muted">No products match your filter.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellersPage