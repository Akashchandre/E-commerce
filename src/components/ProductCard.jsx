import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { addToWishlist } from '../features/wishlistSlice';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check if the product is already in the cart or wishlist
  const isInCart = useSelector(state =>
    state.cart.items.some(item => item.id === product.id)
  );
  const isInWishlist = useSelector(state =>
    state.wishlist.items.some(item => item.id === product.id)
  );

  // Handle Add/Go to Cart button click
  const handleCartButtonClick = () => {
    if (isInCart) {
      navigate('/cart');
    } else {
      dispatch(addToCart(product));
    }
  };

  // Handle Add/View Wishlist button click
  const handleWishlistButtonClick = () => {
    if (isInWishlist) {
      navigate('/wishlist');
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="border p-4 hover:shadow-lg">
      <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-2" />
      <h2 className="font-semibold">{product.title}</h2>
      <p>${product.price}</p>

      {/* Add to Cart / Go to Cart Button */}
      <button
        className={`mt-4 px-4 py-2 rounded text-white ${
          isInCart ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
        }`}
        onClick={handleCartButtonClick}
      >
        {isInCart ? 'Go to Cart' : 'Add to Cart'}
      </button>

      {/* Add to Wishlist / View Wishlist Button */}
      <button
        className={`mt-4 ml-2 px-4 py-2 rounded text-white ${
          isInWishlist ? 'bg-purple-500 hover:bg-purple-600' : 'bg-gray-500 hover:bg-gray-600'
        }`}
        onClick={handleWishlistButtonClick}
      >
        {isInWishlist ? 'View Wishlist' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default ProductCard;
