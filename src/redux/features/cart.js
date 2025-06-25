import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  value: JSON.parse(localStorage.getItem("cart")) || [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) {
        state.value.push({ ...action.payload, quantity: 1 });
        toast.success("Cart Added!✅");
      } else {
        toast.success("Cart Added Yet!✅");
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    incrementCart: (state, action) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      toast.success("Product Increased!➕");
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    decrementCart: (state, action) => {
      state.value = state.value.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      toast.success("Product Decreased!➖");
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    removeCart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      toast.error("Cart Removed!❌");
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
    clearCart: (state) => {
      state.value = [];
      localStorage.setItem("cart", JSON.stringify(state.value));
      toast.error("Cart Cleared!🧹");
    },
  },
});

export const {
  addToCart,
  incrementCart,
  decrementCart,
  removeCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
