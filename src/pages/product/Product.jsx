import { useProduct } from "@/api/hooks/useProduct";
import Products from "@/components/products/Products";
import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const { getProduct } = useProduct();
  const { data, isPending } = getProduct({ limit: 8 });
  
  return (
    <div className="max-w-[1200px] mx-auto px-3">
      <h1 className="text-[35px] text-[#3A3A3A] w-[240px] mx-auto font-bold relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[240px] before:mx-auto before:duration-300 before:h-[2px] before:bg-[#3A3A3A]">
        Our Products
      </h1>

      <Products data={data?.data?.products} loading={isPending} count={8}/>


      <Link to={"/shop"}>
        <button className="w-[220px] h-[50px] border text-[#B88E2F] font-semibold rounded-[5px] flex items-center justify-center my-[50px] mx-auto cursor-pointer hover:text-amber-600">
          Show More
        </button>
      </Link>
    </div>
  );
};

export default React.memo(Product);
