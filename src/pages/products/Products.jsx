import { useProduct } from "@/api/hooks/useProduct";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const Products = () => {
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();

  const page = params.get("page") || 1;
  const pageSize = params.get("pageSize") || 8;
  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <h1 className="text-[35px] text-[#3A3A3A] w-[240px] mx-auto font-bold relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[240px] before:mx-auto before:duration-300 before:h-[2px] before:bg-[#3A3A3A]">
        Our Products
      </h1>
      <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-x-3 gap-y-5 max-sm:grid-cols-1">
        {data?.data?.products?.map((product) => (
          <div
            // data-aos="flip-right"
            key={product.id}
            className="bg-[#F4F5F7] rounded-[3px] max-sm:text-center"
          >
            <img
              className="max-sm:text-center max-sm:mx-auto"
              //   onClick={() => navigate(`/product/${product.id}`)}
              src={product?.thumbnail}
              alt=""
            />
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
