import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Dashboard = () => {
  const [products, setProducts] = useState([]); // Store all products
  const [searchQuery, setSearchQuery] = useState(''); 
  const [categories, setCategories] = useState([]); // Store categories
  const [selectedCategory, setSelectedCategory] = useState('All'); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        const allCategories = [...new Set(response.data.map(product => product.category))];
        setCategories(['All', ...allCategories]);
      })
      .catch(error => console.error(error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter products 
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);


  const searchedProducts = filteredProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto py-4">
      <Header onSearch={setSearchQuery} /> 

      <h1 className="text-2xl font-bold mb-4">Welcome to Shop-online</h1>

      {/* Category Filter */}
      <div className="mb-4">
        <select
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      
      <div className="grid grid-cols-4 gap-4">
        {searchedProducts.length > 0 ? (
          searchedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
