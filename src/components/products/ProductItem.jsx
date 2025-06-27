import React, { useState } from "react";
import {
  HeartOutlined,
  ShareAltOutlined,
  SwapOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "@/redux/features/wishlist";
import { addToCart } from "@/redux/features/cart";

const ProductItem = (product) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);
  const { title, category, price, thumbnail, id } = product;
  const [disabledIds, setDisabledIds] = useState([]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setDisabledIds((prev) => [...prev, product.id]);
  };

  const isDisabled = disabledIds.includes(product.id);
  return (
    <div
      // data-aos="flip-right"
      className="group bg-[#F4F5F7] p-[3px] rounded-[3px] max-sm:text-center relative cursor-pointer"
    >
      <div className="group-hover:flex hidden justify-end absolute top-0 right-0 z-10 text-white p-2 gap-2 text-xl duration-300">
        <div className="hover:text-amber-600 duration-300 h-[40px] w-[40px] text-black rounded-full text-center content-center">
          <ShareAltOutlined />
        </div>
        <div className="hover:text-amber-600 duration-300 h-[40px] w-[40px] text-black rounded-full text-center content-center">
          <SwapOutlined />
        </div>
        <div
          onClick={() => dispatch(toggleWishlist(product))}
          className="hover:text-amber-600 duration-300 h-[40px] w-[40px] text-black rounded-full text-center content-center"
        >
          {wishlist.some((item) => item.id === product.id) ? (
            <div className="hover:text-amber-600 duration-300 h-[40px] w-[40px] text-red-600 rounded-full text-center content-center">
              <HeartFilled />
            </div>
          ) : (
            <HeartOutlined />
          )}
        </div>
      </div>
      <div className="w-full h-[250px] overflow-hidden bg-white">
        <img
          className="w-full h-full object-cover hover:scale-105 duration-300"
          onClick={() => navigate(`/product/${id}`, { state: { product } })}
          src={thumbnail}
          alt={title}
        />
      </div>

      <div className="p-4">
        <div
          onClick={() => navigate(`/product/${id}`, { state: { product } })}
          className="text-[24px] text-[#3A3A3A] font-semibold line-clamp-1 hover:text-blue-600 duration-300 hover:underline"
        >
          {title}
        </div>
        <div className="text-[#898989] line-clamp-1 my-2">{category}</div>
        <strong className="text-[20px] text-[#3A3A3A] font-medium">
          ${price}
        </strong>
        <br />
        <button
          onClick={() => handleAddToCart(product)}
          disabled={isDisabled}
          className={`border w-full py-2 text-[15px] mt-2 font-semibold rounded duration-300 ${
            isDisabled
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "text-[#B88E2F] hover:text-amber-700 cursor-pointer"
          }`}
        >
          {isDisabled ? "Added ✅" : "Add to cart"}
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductItem);
