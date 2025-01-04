import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const product = action.payload;
      if (!product || !product.id) {
        alert('Invalid product data. Cannot add to wishlist.');
        return;
      }

      const itemExists = state.items.find(item => item.id === product.id);
      if (itemExists) {
        alert('Product already in the wishlist.');
        return;
      }

      state.items.push(product);
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
