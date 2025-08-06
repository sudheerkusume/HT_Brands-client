// import React, { useState } from 'react';
// import axios from 'axios';

// const categories = [
//   "Necktshirt",
//   "Bottomwear",
//   "Shirts",
//   "Accessories",
// ];

// const AddProduct = () => {
//   const [category, setCategory] = useState("Necktshirt");

//   const [product, setProduct] = useState({
//     title: "",
//     Product: "",
//     Price: "",
//     Offer: "",
//     Size: "",
//     Color: "",
//     Features: "",
//     Highlights: "",
//     Gender: "",
//     Category: category,
//     Album: [""],
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleImageChange = (index, value) => {
//     const updatedAlbum = [...product.Album];
//     updatedAlbum[index] = value;
//     setProduct({ ...product, Album: updatedAlbum });
//   };

//   const addImageField = () => {
//     setProduct({ ...product, Album: [...product.Album, ""] });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!product.Product || !product.title) {
//       alert("Please fill required fields: Product and title");
//       return;
//     }

//     try {
//       await axios.post(`https://htbrands-server.onrender.com/${category}`, product); // ✅ changed to port 5000
//       alert("Product added successfully");
//       setProduct({
//         title: "",
//         Product: "",
//         Price: "",
//         Offer: "",
//         Size: "",
//         Color: "",
//         Features: "",
//         Highlights: "",
//         Gender: "",
//         Category: category,
//         Album: [""],
//       });
//     } catch (err) {
//       alert("Error adding product");
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{
//       maxWidth: "700px",
//       margin: "auto",
//       height: "78vh",
//       overflowY: "auto",
//       padding: "20px",
//       border: "1px solid #ccc",
//       borderRadius: "8px",
//       backgroundColor: "#fff"
//     }}>
//       <h2>Add Product (HT Brand)</h2>

//       <label>Category:</label>
//       <select
//         value={category}
//         onChange={(e) => {
//           setCategory(e.target.value);
//           setProduct((prev) => ({ ...prev, Category: e.target.value }));
//         }}
//         style={{ width: "100%", marginBottom: "20px", padding: "8px" }}
//       >
//         {categories.map((cat) => (
//           <option key={cat} value={cat}>{cat}</option>
//         ))}
//       </select>

//       <form onSubmit={handleSubmit}>
//         {/* Input Fields (excluding id/_id) */}
//         <input
//           type="text"
//           name="title"
//           value={product.title}
//           onChange={handleChange}
//           placeholder="Title"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Product"
//           value={product.Product}
//           onChange={handleChange}
//           placeholder="Product Name"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Price"
//           value={product.Price}
//           onChange={handleChange}
//           placeholder="Price"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Offer"
//           value={product.Offer}
//           onChange={handleChange}
//           placeholder="Offer"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Size"
//           value={product.Size}
//           onChange={handleChange}
//           placeholder="Size"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Color"
//           value={product.Color}
//           onChange={handleChange}
//           placeholder="Color"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Features"
//           value={product.Features}
//           onChange={handleChange}
//           placeholder="Features"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Highlights"
//           value={product.Highlights}
//           onChange={handleChange}
//           placeholder="Highlights"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />
//         <input
//           type="text"
//           name="Gender"
//           value={product.Gender}
//           onChange={handleChange}
//           placeholder="Gender"
//           style={{ width: "100%", marginBottom: "10px" }}
//         />

//         {/* Album Images */}
//         <label>Image URLs</label>
//         {product.Album.map((url, idx) => (
//           <input
//             key={idx}
//             type="text"
//             value={url}
//             onChange={(e) => handleImageChange(idx, e.target.value)}
//             placeholder={`Image URL ${idx + 1}`}
//             style={{ width: "100%", marginBottom: "10px" }}
//           />
//         ))}
//         <button type="button" onClick={addImageField}>Add Another Image</button>

//         <br /><br />
//         <button type="submit" className="btn btn-success">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AddProduct;

import React, { useState } from 'react';
import axios from 'axios';

const categories = [
  "Necktshirt",
  "Bottomwear",
  "Shirts",
  "Accessories",
  "BestSeller"
];

// ✅ Map frontend category to backend route
const categoryEndpoints = {
  Necktshirt: "Necktshirt",
  Bottomwear: "Cargo",
  Shirts: "Shirts",
  Accessories: "Chains",
  BestSeller: "BestSeller",
};

const AddProduct = () => {
  const [category, setCategory] = useState("Necktshirt");

  const [product, setProduct] = useState({
    Title: "", // ✅ Changed from title -> Title
    Product: "",
    Price: "",
    Offer: "",
    Size: "",
    Color: "",
    Features: "",
    Highlights: "",
    Gender: "",
    Category: category,
    Album: [""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (index, value) => {
    const updatedAlbum = [...product.Album];
    updatedAlbum[index] = value;
    setProduct({ ...product, Album: updatedAlbum });
  };

  const addImageField = () => {
    setProduct({ ...product, Album: [...product.Album, ""] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.Product || !product.Title) {
      alert("Please fill required fields: Product and Title");
      return;
    }

    const endpoint = categoryEndpoints[category];

    try {
      await axios.post(`https://htbrands-server.onrender.com/${endpoint}`, product);
      alert("Product added successfully");

      setProduct({
        Title: "",
        Product: "",
        Price: "",
        Offer: "",
        Size: "",
        Color: "",
        Features: "",
        Highlights: "",
        Gender: "",
        Category: category,
        Album: [""],
      });
    } catch (err) {
      alert("Error adding product");
      console.error(err);
    }
  };

  return (
    <div style={{
      maxWidth: "700px",
      margin: "auto",
      height: "78vh",
      overflowY: "auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#fff"
    }}>
      <h2>Add Product (HT Brand)</h2>

      <label>Category:</label>
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          setProduct((prev) => ({ ...prev, Category: e.target.value }));
        }}
        style={{ width: "100%", marginBottom: "20px", padding: "8px" }}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="Title" // ✅ Changed
          value={product.Title}
          onChange={handleChange}
          placeholder="Title"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Product"
          value={product.Product}
          onChange={handleChange}
          placeholder="Product Name"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Price"
          value={product.Price}
          onChange={handleChange}
          placeholder="Price"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Offer"
          value={product.Offer}
          onChange={handleChange}
          placeholder="Offer"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Size"
          value={product.Size}
          onChange={handleChange}
          placeholder="Size"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Color"
          value={product.Color}
          onChange={handleChange}
          placeholder="Color"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Features"
          value={product.Features}
          onChange={handleChange}
          placeholder="Features"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Highlights"
          value={product.Highlights}
          onChange={handleChange}
          placeholder="Highlights"
          style={{ width: "100%", marginBottom: "10px" }}
        />
        <input
          type="text"
          name="Gender"
          value={product.Gender}
          onChange={handleChange}
          placeholder="Gender"
          style={{ width: "100%", marginBottom: "10px" }}
        />

        {/* Album Images */}
        <label>Image URLs</label>
        {product.Album.map((url, idx) => (
          <input
            key={idx}
            type="text"
            value={url}
            onChange={(e) => handleImageChange(idx, e.target.value)}
            placeholder={`Image URL ${idx + 1}`}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        ))}
        <button type="button" onClick={addImageField}>Add Another Image</button>

        <br /><br />
        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
