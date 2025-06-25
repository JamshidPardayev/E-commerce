import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

import shopHero from "@/assets/hero.png";
import vector from "@/assets/vector.svg";
import dotted4 from "@/assets/dotted.svg";
import viewList from "@/assets/view-list.svg";
import Services from "../services/Services";
import Products from "../../components/products/Products";

const Shop = () => {
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();
  const page = params.get("page") || 1;
  const pageSize = params.get("pageSize") || 16;

  const { data, isPending } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    if (pageS !== pageSize) {
      params.set("pageSize", pageS);
      params.set("page", "1");
    } else {
      params.set("page", page);
    }
    setParams(params);
  };

  return (
    <div>
      <div
        className="flex justify-center items-center flex-col  h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${shopHero})` }}
      >
        <h2 className="text-[48px] font-medium px-3">SHOP</h2>
        <div className="flex gap-2">
          <Link to={"/"} className="font-semibold">
            Home
          </Link>
          <RightOutlined />
          <p>Shop</p>
        </div>
      </div>

      <div className="bg-[#F9F1E7] min-h-[100px] text-[14px]">
        <div className="max-w-[1200px] mx-auto px-3 flex flex-wrap gap-x-2 gap-y-6 items-center justify-between min-h-[100px] py-6">
          <div className="flex items-center gap-4">
            <img src={vector} alt="vector" />
            <p className="text-[16px]">Filter</p>
            <img src={dotted4} alt="vector" />
            <img src={viewList} alt="vector" />
            <span className="h-[30px] w-[1px] bg-gray-600"></span>
            <p className="text-[15px]">Showing 1–16 of 32 results</p>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-[16px]">
              Show{" "}
              <span className="px-3 py-2 bg-white ml-[10px] text-[#9F9F9F] rounded-[3px] ">
                16
              </span>
            </p>
            <p className="text-[16px]">
              Sort By{" "}
              <span className="px-3 py-2 bg-white ml-[10px] text-[#9F9F9F] rounded-[3px] ">
                Default
              </span>
            </p>
          </div>
        </div>
      </div>

      <Products data={data?.data?.products} loading={isPending} count={16} />
      <div className="flex justify-center px-3">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
      <Services />
    </div>
  );
};

export default React.memo(Shop);
