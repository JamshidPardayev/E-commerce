import Products from "@/components/products/Products";
import React from "react";
import { useSelector } from "react-redux";
import wishlistGif from "@/assets/wishlistGif.gif";
const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <h1 className="text-[35px] text-[#3A3A3A] w-[280px] mx-auto font-bold relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[280px] before:mx-auto before:duration-300 before:h-[2px] before:bg-[#3A3A3A]">
        My Wishlists💖
      </h1>
      {wishlist.length ? (
        <Products data={wishlist} />
      ) : (
        <div className="max-w-[400px] mx-auto">
          <img src={wishlistGif} alt="wishlist" className="w-full"/>
        </div>
      )}
    </div>
  );
};

export default React.memo(Wishlist);
