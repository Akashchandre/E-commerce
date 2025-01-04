import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-blue-500 text-white px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">Shop-online</Link>
      <nav className="flex gap-4">
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
