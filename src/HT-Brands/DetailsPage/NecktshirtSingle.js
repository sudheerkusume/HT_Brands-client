// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// import { FaHeart } from 'react-icons/fa';
// import FeaturesRow from '../FeaturesRow';
// import ShippingReturns from '../ShippingReturns';
// import { useCart } from '../context/CartContext';
// import { useWishlist } from '../context/WishlistContext';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const NecktshirtSingle = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);

//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/Necktshirt/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         setSelectedImage(res.data.Album?.[0]);
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [id]);

//   const handleAddToCart = () => {
//     if (!selectedSize) {
//       toast.error('Please select a size!');
//       return;
//     }

//     const cartItem = {
//       id: product._id,
//       title: product.Title,
//       image: selectedImage,
//       price: product.Offer,
//       size: selectedSize,
//       quantity: 1,
//     };

//     addToCart(cartItem, selectedSize);
//     toast.success('Product added to cart!');
//   };

//   if (!product) {
//     return (
//       <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
//         <div className="spinner-border text-primary" />
//       </div>
//     );
//   }

//   return (
//     <div className="container py-5">
//       <div className="row gx-5 gy-4">
//         {/* Left Side */}
//         <div className="col-lg-6">
//           <div className="position-sticky" style={{ top: '100px' }}>
//             <div className="d-flex">
//               {/* Thumbnails */}
//               <div className="d-flex flex-column gap-2 me-3">
//                 {product.Album?.map((img, idx) => (
//                   <img
//                     key={idx}
//                     src={img}
//                     alt={`thumb-${idx}`}
//                     onClick={() => setSelectedImage(img)}
//                     className={`img-thumbnail p-1 ${selectedImage === img ? 'border-primary' : ''}`}
//                     style={{ width: 70, height: 70, objectFit: 'cover', cursor: 'pointer' }}
//                   />
//                 ))}
//               </div>

//               {/* Main Image */}
//               <div className="flex-grow-1 d-flex justify-content-center align-items-center border rounded" style={{ minHeight: '500px' }}>
//                 <img
//                   src={selectedImage}
//                   alt={product.Title}
//                   className="img-fluid"
//                   style={{ maxHeight: '480px', objectFit: 'contain' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="col-lg-6">
//           <h3 className="fw-semibold">{product.Title}</h3>
//           <p className="text-muted">{product.Features2}</p>
//           <h4 className="text-danger mb-1">₹{product.Offer}</h4>
//           <span className="text-muted text-decoration-line-through">₹{product.Tariff}</span>

//           {/* Wishlist */}
//           <div className="mb-3 d-flex align-items-center">
//             <FaHeart
//               className="text-danger me-2"
//               style={{ cursor: 'pointer' }}
//               onClick={() => {
//                 const wishItem = { 
//                   id: product._id,
//                   title: product.Title,
//                   image: selectedImage,
//                   price: product.Offer,
//                 };
//                 addToWishlist(wishItem);
//                 toast.success('Added to wishlist!');
//               }}
//             />
//             <span>Add to Wishlist</span>
//           </div>

//           {/* Fit */}   
//           <div className="mb-3 d-flex align-items-center">
//             <span className="fw-bold me-2">Fit:</span> {product.Features}
//           </div>

//           {/* Fabric */}
//           <div className="mb-3 d-flex align-items-center">
//             <span className="fw-bold me-2">Fabric:</span> {product.Features1}
//           </div>

//           {/* Color */}
//           <div className="mb-3 d-flex align-items-center">
//             <span className="fw-bold me-2">Color:</span> {product.Color}
//           </div>

//           {/* Size Selection */}
//           <div className="mb-4">
//             <label className="form-label fw-bold">Select Size:</label>
//             <div className="d-flex flex-wrap gap-2">
//               {product.Size?.split(',').map((size) => (
//                 <button
//                   key={size}
//                   className={`btn btn-outline-dark btn-sm ${selectedSize === size ? 'active' : ''}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size.trim()}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Style Tips */}
//           <div className="mb-4">
//             <h6 className="fw-bold">Style Tips:</h6>
//             <p className="text-muted mb-1">* {product.StyleTips}</p>
//             <p className="text-muted">* {product.StyleTips1}</p>
//             <p className="text-muted">* {product.StyleTips2}</p>
//           </div>

//           {/* Wash Care */}
//           <div className="mb-4">
//             <h6 className="fw-bold">Wash Care:</h6>
//             <ul className="text-muted ps-3 mb-0">
//               <li>{product.WashCare}</li>
//               <li>{product.WashCare2}</li>
//               <li>{product.WashCare3}</li>
//             </ul>
//           </div>

//           {/* Buttons */}
//           <div className="d-flex gap-3 mb-4">
//             <button className="btn btn-dark px-4" onClick={handleAddToCart}>
//               Add to Cart
//             </button>
//             <button className="btn btn-outline-primary px-4">Buy it Now</button>
//           </div>

//           {/* Features & Shipping */}
//           <div className="product-right-section pt-2">
//             <FeaturesRow />
//           </div>
//           <div className="pb-2">
//             <ShippingReturns />
//           </div>

//           <Link to="/Necktshirt" className="text-decoration-none text-secondary">
//             ← Back to Necktshirts
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NecktshirtSingle;

// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { IoIosArrowForward } from 'react-icons/io';
// import { IoFilter } from 'react-icons/io5';

// const NecktshirtPage = () => {
//   const [products, setProducts] = useState([]);
//   const [openSections, setOpenSections] = useState({});
//   const [filters, setFilters] = useState({
//     Availbaility: [],
//     category: [],
//     Product_Type: [],
//     Size: [],
//     Color: [],
//     Price: [],
//   });

//   const [selectedFilters, setSelectedFilters] = useState({
//     Availbaility: [],
//     category: [],
//     Product_Type: [],
//     Size: [],
//     Color: [],
//     Price: [],
//   });

//   const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
//   const toggleMobileFilter = () => setMobileFilterOpen(!mobileFilterOpen);

//   const toggleSection = (key) => {
//     setOpenSections((prev) => ({
//       ...prev,
//       [key]: !prev[key]
//     }));
//   };

//   useEffect(() => {
//     axios.get("http://localhost:5000/Necktshirt")
//       .then((res) => {
//         setProducts(res.data);

//         const newFilters = {
//           Availbaility: [...new Set(res.data.map(item => item.Availbaility))],
//           category: [...new Set(res.data.map(item => item.category))],
//           Product_Type: [...new Set(res.data.map(item => item.Product_Type))],
//           Size: [...new Set(res.data.map(item => item.Size))],
//           Color: [...new Set(res.data.map(item => item.Color))],
//           Price: ['Under 500', '500 - 999', '1000+'],
//         };

//         setFilters(newFilters);

//         const defaultOpen = {};
//         Object.keys(newFilters).forEach(key => {
//           defaultOpen[key] = true;
//         });
//         setOpenSections(defaultOpen);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleFilterChange = (type, value) => {
//     setSelectedFilters((prev) => {
//       const updated = prev[type].includes(value)
//         ? prev[type].filter((v) => v !== value)
//         : [...prev[type], value];

//       if (window.innerWidth < 768) {
//         setMobileFilterOpen(false);
//       }

//       return { ...prev, [type]: updated };
//     });
//   };

//   const applyFilters = (product) => {
//     const price = parseInt(product.Offer?.replace(/\D/g, '')) || 0;
//     return (
//       (selectedFilters.Availbaility.length === 0 || selectedFilters.Availbaility.includes(product.Availbaility)) &&
//       (selectedFilters.category.length === 0 || selectedFilters.category.includes(product.category)) &&
//       (selectedFilters.Product_Type.length === 0 || selectedFilters.Product_Type.includes(product.Product_Type)) &&
//       (selectedFilters.Size.length === 0 || selectedFilters.Size.includes(product.Size)) &&
//       (selectedFilters.Color.length === 0 || selectedFilters.Color.includes(product.Color)) &&
//       (selectedFilters.Price.length === 0 ||
//         selectedFilters.Price.some((range) => {
//           if (range === 'Under 500') return price < 500;
//           if (range === '500 - 999') return price >= 500 && price <= 999;
//           if (range === '1000+') return price > 1000;
//           return false;
//         }))
//     );
//   };

//   const filteredProducts = products.filter(applyFilters);

//   const getFilteredCount = (type, value) => {
//     const tempFilters = { ...selectedFilters, [type]: [] };

//     return products.filter((product) => {
//       const price = parseInt(product.Offer?.replace(/\D/g, '')) || 0;

//       const match =
//         (tempFilters.Availbaility.length === 0 || tempFilters.Availbaility.includes(product.Availbaility)) &&
//         (tempFilters.category.length === 0 || tempFilters.category.includes(product.category)) &&
//         (tempFilters.Product_Type.length === 0 || tempFilters.Product_Type.includes(product.Product_Type)) &&
//         (tempFilters.Size.length === 0 || tempFilters.Size.includes(product.Size)) &&
//         (tempFilters.Color.length === 0 || tempFilters.Color.includes(product.Color)) &&
//         (tempFilters.Price.length === 0 ||
//           tempFilters.Price.some((range) => {
//             if (range === 'Under 500') return price < 500;
//             if (range === '500 - 999') return price >= 500 && price <= 999;
//             if (range === '1000+') return price > 1000;
//             return false;
//           }));

//       if (!match) return false;

//       switch (type) {
//         case 'Availbaility': return product.Availbaility === value;
//         case 'category': return product.category === value;
//         case 'Product_Type': return product.Product_Type === value;
//         case 'Size': return product.Size === value;
//         case 'Color': return product.Color === value;
//         case 'Price':
//           if (value === 'Under 500') return price < 500;
//           if (value === '500 - 999') return price >= 500 && price <= 999;
//           if (value === '1000+') return price > 1000;
//           return false;
//         default:
//           return false;
//       }
//     }).length;
//   };

//   return (
//     <div className="container-fluid p-4 mt-4">
//       {/* Mobile Filter Button */}
//       <div className="d-md-none mb-3">
//         <button className="btn btn-outline-secondary d-flex align-items-center" onClick={toggleMobileFilter}>
//           <IoFilter className="me-2" /> Filter
//         </button>
//       </div>

//       <div className="row">
//         {/* Filter Sidebar */}
//         <div className="col-lg-3 mb-4" style={{ fontSize: "14px" }}>
//           <div style={{
//             position: "sticky",
//             top: "100px",
//             background: "#fff",
//             padding: "30px",
//             borderRadius: "8px",
//             boxShadow: "0 2px 10px rgba(180, 20, 20, 0.05)",
//             border: "1px solid #eee",
//           }}>
//             {Object.entries(filters).map(([filterType, values]) => (
//               <div key={filterType} className="mb-3">
//                 <div
//                   className="d-flex justify-content-between align-items-center"
//                   style={{ cursor: "pointer" }}
//                   onClick={() => toggleSection(filterType)}
//                 >
//                   <h6 className="text-capitalize mb-0" style={{ fontSize: "14px" }}>
//                     {filterType.replace(/_/g, " ")}
//                   </h6>
//                   <span style={{
//                     display: 'inline-block',
//                     transform: openSections[filterType] ? 'rotate(90deg)' : 'rotate(0deg)',
//                     transition: '0.3s ease'
//                   }}>
//                     <IoIosArrowForward />
//                   </span>
//                 </div>

//                 <div style={{
//                   color: "GrayText",
//                   maxHeight: openSections[filterType] ? "500px" : "0",
//                   overflow: "hidden",
//                   transition: "max-height 0.4s ease-in-out",
//                 }}>
//                   <div className="mt-3">
//                     {filterType === "Availbaility" ? (
//                       values.map((value, index) => (
//                         <div className="form-check form-switch" key={index}>
//                           <input
//                             className="form-check-input"
//                             style={{ height: 20, width: 37 }}
//                             type="checkbox"
//                             role="switch"
//                             id={`${filterType}-switch-${index}`}
//                             checked={selectedFilters[filterType]?.includes(value)}
//                             onChange={() => handleFilterChange(filterType, value)}
//                           />
//                           <label className="form-check-label p-2" htmlFor={`${filterType}-switch-${index}`}>
//                             {value} <span style={{ fontSize: "13px", fontWeight: 290 }}>({getFilteredCount(filterType, value)})</span>
//                           </label>
//                         </div>
//                       ))
//                     ) : (
//                       values.map((value, index) => (
//                         <div className="form-check" key={index}>
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id={`${filterType}-${index}`}
//                             checked={selectedFilters[filterType]?.includes(value)}
//                             onChange={() => handleFilterChange(filterType, value)}
//                           />
//                           <label className="form-check-label" htmlFor={`${filterType}-${index}`}>
//                             {value} <span style={{ fontSize: "13px", fontWeight: 290 }}>({getFilteredCount(filterType, value)})</span>
//                           </label>
//                         </div>
//                       ))
//                     )}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Product Grid */}
//         <div className="col-lg-9">
//           <div className="row">
//             {filteredProducts.map((product, index) => (
//               <div className="col-6 col-md-4 mb-4" key={product._id || index}>
//                 <Link to={`/Necktshirt/${product._id}`} className="text-decoration-none text-dark">
//                   <div className="card h-100 border-0 shadow-sm">
//                     <div className="position-relative">
//                       <img
//                         src={product.Album?.[0]}
//                         alt={product.Title}
//                         className="card-img-top"
//                         onError={(e) => (e.target.src = 'https://via.placeholder.com/300')}
//                       />
//                       {product.Album?.[1] && (
//                         <img
//                           src={product.Album[1]}
//                           alt="Hover"
//                           className="hover-img position-absolute top-0 start-0 w-100 h-100"
//                           style={{ opacity: 0, transition: 'opacity 0.3s ease-in-out' }}
//                           onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
//                           onMouseOut={(e) => (e.currentTarget.style.opacity = 0)}
//                         />
//                       )}
//                       <button className="quick-view-btn position-absolute bottom-0 start-0 w-100 btn btn-sm btn-outline-dark">
//                         Quick View
//                       </button>
//                     </div>
//                     <div className="card-body p-2">
//                       <h6 className="mb-1" style={{ fontSize: '13px' }}>{product.Title}</h6>
//                       <div className="mb-1">
//                         <span className="text-danger fw-semibold">{product.Offer}</span>
//                       </div>
//                       <div className="d-flex align-items-center gap-1 text-muted" style={{ fontSize: '12px' }}>
//                         <span
//                           className="dot"
//                           style={{
//                             height: '8px',
//                             width: '8px',
//                             backgroundColor: '#e65c00',
//                             borderRadius: '50%',
//                             display: 'inline-block',
//                           }}
//                         ></span>
//                         <span>{product.in_Stock} in stock</span>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             ))}
//             {filteredProducts.length === 0 && (
//               <div className="col-12 text-center">
//                 <p className="text-muted">No products match your filter.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NecktshirtPage;

import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import FeaturesRow from '../FeaturesRow';
import ShippingReturns from '../ShippingReturns';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { toast } from 'react-toastify';
import { loginStatus } from '../../App';
import 'react-toastify/dist/ReactToastify.css';

const NecktshirtSingle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const { token } = useContext(loginStatus); // Get token from context

  useEffect(() => {
    axios
      .get(`https://htbrands-server.onrender.com/Necktshirt/${id}`)
      .then((res) => {
        setProduct(res.data);
        setSelectedImage(res.data.Album?.[0]);
      })
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size!');
      return;
    }

    const cartItem = {
      id: product._id,
      title: product.Title,
      image: selectedImage,
      price: parseFloat(product.Offer.toString().replace(/,/g, "")), 
      size: selectedSize,
      quantity: 1,
    };

    console.log("🛒 Sending product to addToCart:", cartItem);
    addToCart(cartItem, token); // Pass token for backend persistence
    toast.success('Added to cart!');
  };

  if (!product) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row gx-5 gy-4">
        {/* Left Section */}
        <div className="col-lg-6">
          <div className="position-sticky" style={{ top: '100px' }}>
            <div className="d-flex">
              {/* Thumbnails */}
              <div className="d-flex flex-column gap-2 me-3">
                {product.Album?.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`thumb-${idx}`}
                    onClick={() => setSelectedImage(img)}
                    className={`img-thumbnail p-1 ${selectedImage === img ? 'border-primary' : ''}`}
                    style={{ width: 70, height: 70, objectFit: 'cover', cursor: 'pointer' }}
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-grow-1 d-flex justify-content-center align-items-center border rounded" style={{ minHeight: '500px' }}>
                <img
                  src={selectedImage}
                  alt={product.Title}
                  className="img-fluid"
                  style={{ maxHeight: '480px', objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-lg-6">
          <h3 className="fw-semibold">{product.Title}</h3>
          <p className="text-muted">{product.Features2}</p>
          <h4 className="text-danger mb-1">₹{product.Offer}</h4>
          <span className="text-muted text-decoration-line-through">₹{product.Tariff}</span>

          {/* Wishlist */}
          <div className="mb-3 d-flex align-items-center">
            <FaHeart
              className="text-danger me-2"
              style={{ cursor: 'pointer' }}
              onClick={() => {
                const wishItem = {
                  id: product._id,
                  title: product.Title,
                  image: selectedImage,
                  price: product.Offer,
                };
                addToWishlist(wishItem);
                toast.success('Added to wishlist!');
              }}
            />
            <span>Add to Wishlist</span>
          </div>

          {/* Fit */}
          <div className="mb-2">
            <strong>Fit:</strong> {product.Features}
          </div>

          {/* Fabric */}
          <div className="mb-2">
            <strong>Fabric:</strong> {product.Features1}
          </div>

          {/* Color */}
          <div className="mb-3">
            <strong>Color:</strong> {product.Color}
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <label className="form-label fw-bold">Select Size:</label>
            <div className="d-flex flex-wrap gap-2">
              {product.Size?.split(',').map((size) => (
                <button
                  key={size}
                  className={`btn btn-outline-dark btn-sm ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.trim()}
                </button>
              ))}
            </div>
          </div>

          {/* Style Tips */}
          <div className="mb-4">
            <h6 className="fw-bold">Style Tips:</h6>
            <p className="text-muted mb-1">* {product.StyleTips}</p>
            <p className="text-muted">* {product.StyleTips1}</p>
            <p className="text-muted">* {product.StyleTips2}</p>
          </div>

          {/* Wash Care */}
          <div className="mb-4">
            <h6 className="fw-bold">Wash Care:</h6>
            <ul className="text-muted ps-3 mb-0">
              <li>{product.WashCare}</li>
              <li>{product.WashCare2}</li>
              <li>{product.WashCare3}</li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3 mb-4">
            <button className="btn btn-dark px-4" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-outline-primary px-4">Buy it Now</button>
          </div>

          <FeaturesRow />
          <ShippingReturns />

          <Link to="/Necktshirt" className="text-decoration-none text-secondary">
            ← Back to Best Sellers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NecktshirtSingle;
