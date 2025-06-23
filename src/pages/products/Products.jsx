import { useProduct } from "@/api/hooks/useProduct";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  HeartOutlined,
  ShareAltOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import toast from "react-hot-toast";

const Products = () => {
  const { getProduct } = useProduct();
  const navigate = useNavigate();

  const [params] = useSearchParams();

  const page = params.get("page") || 1;
  const pageSize = params.get("pageSize") || 8;
  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleClick = () => {
    toast.success("Added To Wishlist!💖");
  };
  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <h1 className="text-[35px] text-[#3A3A3A] w-[240px] mx-auto font-bold relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[240px] before:mx-auto before:duration-300 before:h-[2px] before:bg-[#3A3A3A]">
        Our Products
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-x-3 gap-y-5 max-sm:grid-cols-1 mt-10">
        {data?.data?.products?.map((product) => (
          <div
            data-aos="flip-right"
            key={product.id}
            className="bg-[#F4F5F7] relative rounded-[3px] group max-sm:text-center cursor-pointer hover:opacity-[80%] hover:bg-[#1f1f1fb7]"
          >
            <div className="hidden absolute left-0 top-[40%] group-hover:block w-full text-center space-y-2 py-2">
              <button
                onClick={() => toast.success("Added To Cart!✅")}
                className="bg-white text-[#B88E2F] hover:text-amber-700 duration-300 px-8 py-2 text-[15px] font-semibold rounded"
              >
                Add to cart
              </button>
              <div className="flex justify-center gap-6 text-xl text-white duration-300">
                <div className="hover:text-amber-600 duration-300">
                  <ShareAltOutlined />
                </div>
                <div className="hover:text-amber-600 duration-300">
                  <SwapOutlined />
                </div>
                <div
                  onClick={() => handleClick()}
                  className="hover:text-amber-600 duration-300"
                >
                  <HeartOutlined />
                </div>
              </div>
            </div>

            <img
            onClick={() => navigate(`./product/${product?.id}`)}
            className="max-sm:mx-auto" src={product?.thumbnail} alt="" />

            <div className="p-4">
              <h3 className="text-[24px] text-[#3A3A3A] font-semibold line-clamp-1">
                {product?.title}
              </h3>
              <p className="text-[#898989] line-clamp-1 my-2">
                {product?.category}
              </p>
              <p className="text-[20px] text-[#3A3A3A] font-medium">
                $ {product?.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link to={"/shop"}>
        <button className="w-[220px] h-[50px] border text-[#B88E2F] font-semibold rounded-[5px] flex items-center justify-center my-[50px] mx-auto cursor-pointer hover:text-amber-600">
          Show More
        </button>
      </Link>
    </div>
  );
};

export default React.memo(Products);
