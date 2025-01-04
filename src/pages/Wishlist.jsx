import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../features/wishlistSlice';

const Wishlist = () => {
  const items = useSelector(state => state.wishlist.items);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist({ id }));
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
      {items.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} className="border p-4 mb-2 flex gap-4 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>${item.price}</p>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
