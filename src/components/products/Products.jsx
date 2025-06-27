import React from "react";
import ProductItem from "./ProductItem";

const Skeleton = ({ count }) => {
  return (
    <>
      {Array(count)
        .fill()
        .map((_, inx) => (
          <div key={inx} className="p-1 animate-pulse bg-[#F4F5F7] rounded">
            <div className="h-[250px] bg-gray-200 rounded"></div>
            <div className="p-3">
              <div className="w-10/12 h-6 bg-gray-200 rounded"></div>
              <div className="w-8/12 h-6 bg-gray-200 mt-2 rounded "></div>
              <div className="w-6/12 h-6 bg-gray-200 mt-2 rounded"></div>
              <div className="w-full h-7 bg-gray-200 mt-2 rounded"></div>
            </div>
          </div>
        ))}
    </>
  );
};

const Products = ({ data, loading, count }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px] mx-auto p-3 gap-6  my-[40px]">
        {loading ? (
          <Skeleton count={count} />
        ) : (
          data?.map((product) => <ProductItem key={product?.id} {...product} />)
        )}
      </div>
    </div>
  );
};

export default React.memo(Products);
