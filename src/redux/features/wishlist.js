import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  value: JSON.parse(localStorage.getItem("wishlist")) || [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const index = state.value.findIndex(
        (item) => item.id === action.payload.id
      );

      if (index < 0) {
        state.value.push(action.payload);
        toast.success("Added To Wishlist💖");
      } else {
        state.value = state.value.filter(
          (item) => item.id !== action.payload.id
        );
        toast.error("Remove From Wishlist💔");
      }
      localStorage.setItem("wishlist", JSON.stringify(state.value))
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
