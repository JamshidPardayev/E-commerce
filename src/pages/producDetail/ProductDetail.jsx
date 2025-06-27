import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Products from "@/components/products/Products";
import { useProduct } from "@/api/hooks/useProduct";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { decrementCart, incrementCart } from "@/redux/features/cart";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;
  const { getProduct } = useProduct();
  const { data, isLoading } = getProduct({ limit: 4 });
  const [value, setValue] = useState(5);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.value);
  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart?.quantity || 1;
  if (!product) {
    return (
      <div className="text-[30px] text-center py-20 ">Product Not Have❌</div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-[#F9F1E7] py-5 pl-10 text-gray-700">
        <div className="flex items-center gap-2 text-sm">
          <p
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/")}
          >
            Home
          </p>
          <span>&gt;</span>
          <p
            className="cursor-pointer hover:underline"
            onClick={() => navigate("/shop")}
          >
            Shop
          </p>
          <span>&gt;</span>
          <p className="font-semibold">{product.title}</p>
        </div>
      </div>
      <main className="flex-grow py-12 px-6 lg:px-0 container mx-auto space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-[#F9F1E7] p-6 rounded-lg flex justify-center items-center min-h-[400px]">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="object-contain max-h-[450px] w-full"
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-[36px] line-clamp-1 font-bold text-gray-900">
              {product.title}
            </h1>
            <div className="flex gap-y-3 gap-x-6 items-center">
              <p className="text-[#9F9F9F] uppercase text-[24px] font-semibold">
                {product.brand}
              </p>
              <p className="text-[24px] font-semibold text-[#B88E2F]">
                ${product.price}
              </p>
            </div>
            <p>
              <Rate onChange={setValue} value={value} />
            </p>
            <p className="text-gray-600 leading-relaxed">
              {product.description ||
                "Bu mahsulot haqida batafsil ma'lumot mavjud emas."}
            </p>
            <div>
              <p className="text=[24px] font-semibold mb-3">Size</p>
              <div className="flex gap-3">
                <button className="w-[30px] h-[30px] bg-[#B88E2F] text-white rounded-[2px] cursor-pointer">
                  L
                </button>
                <button className="w-[30px] h-[30px] bg-[#F9F1E7] text-black rounded-[2px] cursor-pointer">
                  XL
                </button>
                <button className="w-[30px] h-[30px] bg-[#F9F1E7] text-black rounded-[2px] cursor-pointer">
                  XS
                </button>
              </div>
            </div>
            <div className=" flex gap-3 items-center max-md:flex-wrap">
              <div className="border text-[#B88E2F] p-1 px-3 flex items-center gap-2">
                <button
                  disabled={quantity <= 1}
                  onClick={() => dispatch(decrementCart(product))}
                  className="disabled:opacity-50 text-[20px] font-medium cursor-pointer"
                >
                  -
                </button>
                <span className="text-[18px]">{quantity}</span>
                <button
                  onClick={() => dispatch(incrementCart(product))}
                  className="text-[20px] font-medium cursor-pointer"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => navigate("/cart")}
                className="px-6 py-2 text-[#B88E2F] border rounded hover:text-amber-700 duration-300  cursor-pointer"
              >
                Add To Cart
              </button>
              <button className="px-6 py-2 text-[#B88E2F] border rounded hover:text-amber-700 duration-300  cursor-pointer">
                + Compare
              </button>
            </div>

            <div className="text-[#9F9F9F]">
              <p>
                <span className="text-[18px] font-medium">SKU</span>:{" "}
                {product?.sku}
              </p>
              <p>
                <span className="text-[18px] font-medium">Category</span>:{" "}
                {product?.sku}
              </p>
              <p>
                <span className="text-[18px] font-medium">Tags</span>:
                {product?.tags?.map((tag, index) => (
                  <span key={index} className="ml-1">
                    {tag}
                  </span>
                ))}
              </p>
              <p className="flex gap-x-3">
                <span className="text-[18px] font-medium">Share</span>:
                <div className="flex gap-x-2 text-black">
                  <FacebookFilled />
                  <LinkedinFilled />
                  <TwitterSquareFilled />
                </div>{" "}
              </p>
            </div>
          </div>
        </div>
        {/* <ProductTabs /> */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Related Products</h2>
          <Products data={data?.data?.products} loading={isLoading} count={4} />
          <div className="text-center mt-6">
            <button
              onClick={() => navigate("/shop")}
              className="px-8 py-3 border-2 border-[#B88E2F] text-[#B88E2F] font-semibold rounded hover:bg-[#B88E2F] hover:text-white transition"
            >
              Show More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default React.memo(ProductDetails);
