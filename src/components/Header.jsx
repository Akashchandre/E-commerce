import React, { useState } from 'react';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom'
const Header = ({ onSearch }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState(''); 

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setQuery(value); // Update local query state
    onSearch(value); // Update parent state in Dashboard
  };

  return (
    <header className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Shop-online</Link>
      <nav className="flex gap-4 items-center">
        {showSearch ? (
          <input
            type="text"
            className="border px-2 py-1 rounded"
            placeholder="Search products..."
            value={query} 
            onChange={handleSearchChange} 
          />
        ) : (
          <FaSearch onClick={handleSearchToggle} className="cursor-pointer" />
        )}
        <Link to="/wishlist">
          <FaHeart />
        </Link>
        <Link to="/cart">
          <FaShoppingCart />
        </Link>
        <Link to="/login">
          <FaUser />
 </Link>
      </nav>
    </header>
  );
};

export default Header;
