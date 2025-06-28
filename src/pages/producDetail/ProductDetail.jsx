import React, { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Products from "@/components/products/Products";
import { useProduct } from "@/api/hooks/useProduct";
import { Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { addToCart, decrementCart, incrementCart } from "@/redux/features/cart";
import ProductTabs from "../productTabs/ProductTabs";

const ProductDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const productFromState = state?.product;
  const { getOneProduct, getProduct } = useProduct();
  const { data: relatedData, isLoading: isRelatedLoading } = getProduct({
    limit: 4,
  });
  const { data: fetchedProduct, isLoading } = getOneProduct(id);
  const product = productFromState || fetchedProduct;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState(5);
  const cart = useSelector((state) => state.cart.value);
  const itemInCart = cart.find((item) => item.id === product?.id);
  const quantity = itemInCart?.quantity || 0;

  const handleAddToCart = () => {
    if (!itemInCart) {
      dispatch(addToCart(product));
    }
  };

  if (isLoading && !productFromState) {
    return <div className="text-[30px] text-center py-20">Loading...</div>;
  }

  if (!product) {
    return (
      <div className="text-[30px] text-center py-20">Product Not Found ❌</div>
    );
  }

  return (
    <div>
      <div className="bg-[#F9F1E7] py-5 px-3 text-gray-700">
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

      <main className="max-w-[1200px] py-12 px-3 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
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
            <Rate onChange={setValue} value={value} />
            <p className="text-gray-600 leading-relaxed">
              {product.description ||
                "Bu mahsulot haqida batafsil ma'lumot mavjud emas."}
            </p>

            <div className="flex gap-3 items-center max-md:flex-wrap">
              {quantity > 0 ? (
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
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-2 border text-[#B88E2F] rounded hover:text-amber-700 duration-300"
                >
                  Add to cart
                </button>
              )}
              <button className="px-6 py-2 text-[#B88E2F] border rounded hover:text-amber-700 duration-300">
                + Compare
              </button>
            </div>

            <div className="text-[#9F9F9F] mt-4 space-y-1">
              <p>
                <span className="font-medium">SKU:</span> {product.sku || "N/A"}
              </p>
              <p>
                <span className="font-medium">Category:</span>{" "}
                {product.category}
              </p>
              <p>
                <span className="font-medium">Tags:</span>
                {product.tags?.map((tag, i) => (
                  <span key={i} className="ml-1">
                    {tag}
                  </span>
                )) || " - "}
              </p>
              <p className="flex gap-x-3">
                <span className="font-medium">Share:</span>
                <div className="flex gap-x-2 text-black">
                  <FacebookFilled />
                  <LinkedinFilled />
                  <TwitterSquareFilled />
                </div>
              </p>
            </div>
          </div>
        </div>
        <ProductTabs />

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 text-center">
            Related Products
          </h2>
          <Products
            data={relatedData?.data?.products}
            loading={isRelatedLoading}
            count={4}
          />
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
