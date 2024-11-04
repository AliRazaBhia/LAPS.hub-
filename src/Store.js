import { configureStore } from '@reduxjs/toolkit'
import cartSlice  from './Redux/CartSlice'
import { setCartFromLocalStorage } from './Redux/CartSlice';
export const store = configureStore({
  reducer:{
      Cart: cartSlice,
  },
})

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  localStorage.setItem("localCart", JSON.stringify(state.Cart));
});

const loadCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem("localCart");
  if (storedCart) {
    const parsedCart = JSON.parse(storedCart);

    store.dispatch(setCartFromLocalStorage(parsedCart));
  }
};
loadCartFromLocalStorage();