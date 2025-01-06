import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import ProductDetails from './pages/ProductDetails';
import Login from './pages/Login';

const App = () => {
  return (
    

    <Router>
      
     <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
      
    </Router>
  );
};

export default App;
