
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cartSlice.js';
import wishlistReducer from './features/wishlistSlice.js';
import authReducer from './features/authSlice.js';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
  },
});

export default store;
