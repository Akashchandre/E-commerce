// __tests__/cartSlice.test.js
import cartReducer, { addToCart, removeFromCart, incrementQuantity } from '../features/cartSlice';

describe('Cart Slice Reducer', () => {
  const initialState = { items: [] };

  it('should handle initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it('should add a product to the cart', () => {
    const product = { id: 1, title: 'Product 1', price: 10 };
    const newState = cartReducer(initialState, addToCart(product));
    expect(newState.items).toHaveLength(1);
    expect(newState.items[0]).toEqual({ ...product, quantity: 1 });
  });

  it('should increment the quantity of an existing product', () => {
    const product = { id: 1, title: 'Product 1', price: 10 };
    const state = { items: [{ ...product, quantity: 1 }] };
    const newState = cartReducer(state, incrementQuantity({ id: 1 }));
    expect(newState.items[0].quantity).toBe(2);
  });

  it('should remove a product from the cart', () => {
    const product = { id: 1, title: 'Product 1', price: 10 };
    const state = { items: [{ ...product, quantity: 1 }] };
    const newState = cartReducer(state, removeFromCart({ id: 1 }));
    expect(newState.items).toHaveLength(0);
  });
});
