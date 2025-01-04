import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../features/cartSlice';

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item.id} className="border p-4 mb-2 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  onClick={() => dispatch(decrementQuantity({ id: item.id }))}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  onClick={() => dispatch(incrementQuantity({ id: item.id }))}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={() => dispatch(removeFromCart({ id: item.id }))}
              >
                Remove
              </button>
            </div>
          ))}
          <h2 className="text-xl font-bold mt-4">Total: ${total.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
