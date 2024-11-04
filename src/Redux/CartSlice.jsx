import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const cartSlice = createSlice({
name: 'Cart',
  initialState,
  reducers: {
    setCartFromLocalStorage:(state, action) =>{
      return[...state, ...action.payload]
    },
    addToCart: (state,action) => {
        return [...state, action.payload]
    },
    removeFromCart: (state, action) => {
      return state.filter ((shoe) => action.payload !== shoe.id)
    },
    increaseQty: (state, action) => {
      return state.map((shoe)=>
        shoe.id === action.payload? {...shoe, qty: shoe.qty + 1 } : shoe
      )
    },
    decreaseQty: (state, action) => {
        return state.map((shoe) => shoe.id === action.payload ? {...shoe, qty: shoe.qty - 1} : shoe)
    },
    checkOutCart: (state, action) => {
      return []
    },
  },
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty,checkOutCart, setCartFromLocalStorage } = cartSlice.actions

export default cartSlice.reducer