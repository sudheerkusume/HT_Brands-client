import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useSearch } from './SearchContext'; // ✅ Import Search context
import { useNavigate } from 'react-router-dom'; // for navigation (optional)

const SearchDrawer = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { setSearchTerm } = useSearch(); // ✅ Access setSearchTerm
  const navigate = useNavigate(); // optional if redirecting

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(query); // ✅ Set global search term
    onClose(); // close the drawer

    // Optionally redirect to a search results or necktshirt page
    navigate('/Necktshirt'); // ✅ or navigate('/search') if you have a page
  };

  return (
    <div className={`search-drawer ${isOpen ? 'open' : ''}`}>
      <div className="search-header d-flex justify-content-between align-items-center">
        <IoArrowBack size={24} style={{ cursor: 'pointer' }} onClick={onClose} />
        <h6 className="mb-0">Search</h6>
        <span style={{ width: '24px' }}></span>
      </div>
      <hr />
      <form className="mt-4" onSubmit={handleSearch}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Search for clothes, styles, accessories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark w-100" type="submit">View all results</button>
      </form>
    </div>
  );
};

export default SearchDrawer;
