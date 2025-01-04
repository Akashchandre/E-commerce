import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array of cart items
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a product to the cart
    addToCart: (state, action) => {
      const product = action.payload;
      const itemExists = state.items.find(item => item.id === product.id);
      if (itemExists) {
        itemExists.quantity += 1; // Increment quantity if item exists
      } else {
        state.items.push({ ...product, quantity: 1 }); // Add new item with quantity 1
      }
    },

    // Remove a product from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    // Increment quantity of a product in the cart
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrement quantity of a product in the cart
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== item.id); // Remove item if quantity is 0
        }
      }
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
