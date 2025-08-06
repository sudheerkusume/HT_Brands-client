import React, { useEffect, useState } from 'react';
import axios from 'axios';

const categories = ["Necktshirt", "Shirts", "Chains", "Cargo", "BestSeller"];

const ViewProduct = () => {
  const [category, setCategory] = useState("Necktshirt");
  const [products, setProducts] = useState([]);
  const [selected, setSelected] = useState({
    Title: "", Offer: "", Size: "", Features: "", Features1: "", Features2: "",
    category: "", image: "", hoverImage: ""
  });

  const fetchProducts = async () => {
    try {
      const res = await axios.get(`https://htbrands-server.onrender.com/${category}`);
      const data = res.data;

      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.warn("Unexpected response:", data);
        setProducts([]);
      }
    } catch (err) {
      alert("Failed to load products");
      setProducts([]);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://htbrands-server.onrender.com/${category}/${id}`);
      alert("Deleted");
      fetchProducts();
    } catch (err) {
      alert("Delete failed");
    }
  };

  const getOneProduct = (id) => {
    const prod = products.find((p) => p.id === id || p._id === id);
    if (prod) {
      setSelected({
        _id: prod._id,
        Title: prod.Title || "",  // ✅ Ensure correct key
        Offer: prod.Offer || "",
        Size: prod.Size || "",
        Features: prod.Features || "",
        Features1: prod.Features1 || "",
        Features2: prod.Features2 || "",
        category: prod.category || "",
        image: prod.image || "",
        hoverImage: prod.hoverImage || ""
      });
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();
    const productId = selected._id;
    try {
      await axios.put(`https://htbrands-server.onrender.com/${category}/${productId}`, selected);
      alert("Updated successfully");
      fetchProducts();
    } catch (err) {
      alert("Update failed");
    }
  };

  const handleChange = (e) => {
    setSelected({ ...selected, [e.target.name]: e.target.value });
  };

  return (
    <div className='container p-3'>
      <h4 className='display-6 fw-bold mb-3'>Manage HT Brand Products</h4>

      <select
        onChange={(e) => setCategory(e.target.value)}
        className='form-select mb-4'
        value={category}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <div style={{
        maxWidth: "1000px",
        margin: "auto",
        height: "70vh",
        overflowY: "auto",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#fff"
      }}>
        <table className='table table-bordered align-middle'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Offer</th>
              <th>Size</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>{p.Title || p.title || "No Title"}</td> {/* ✅ Use capital Title */}
                <td>{p.Offer}</td>
                <td>{p.Size}</td>
                <td>{p.category}</td>
                <td>
                  <button
                    className='btn btn-outline-primary btn-sm me-2'
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                    onClick={() => getOneProduct(p._id)}
                  >
                    Edit
                  </button>
                  <button
                    className='btn btn-outline-danger btn-sm'
                    onClick={() => deleteProduct(p._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      <div className="modal fade" id="editModal">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={updateProduct}>
            <div className="modal-header">
              <h5 className="modal-title">Edit Product</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <input name="Title" value={selected.Title} onChange={handleChange} className='form-control mb-2' placeholder='Title' />
              <input name="Offer" value={selected.Offer} onChange={handleChange} className='form-control mb-2' placeholder='Offer' />
              <input name="Size" value={selected.Size} onChange={handleChange} className='form-control mb-2' placeholder='Size' />
              <input name="Features" value={selected.Features} onChange={handleChange} className='form-control mb-2' placeholder='Feature 1' />
              <input name="Features1" value={selected.Features1} onChange={handleChange} className='form-control mb-2' placeholder='Feature 2' />
              <input name="Features2" value={selected.Features2} onChange={handleChange} className='form-control mb-2' placeholder='Feature 3' />
              <input name="category" value={selected.category} onChange={handleChange} className='form-control mb-2' placeholder='Category' />
              <input name="image" value={selected.image} onChange={handleChange} className='form-control mb-2' placeholder='Main Image URL' />
              <input name="hoverImage" value={selected.hoverImage} onChange={handleChange} className='form-control mb-2' placeholder='Hover Image URL' />
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-success">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
