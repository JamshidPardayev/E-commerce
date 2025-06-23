import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  HeartOutlined,
  RightOutlined,
  ShareAltOutlined,
  SwapOutlined,
} from "@ant-design/icons";

import shopHero from "@/assets/hero.png";
import vector from "@/assets/vector.svg";
import dotted4 from "@/assets/dotted.svg";
import viewList from "@/assets/view-list.svg";
import toast from "react-hot-toast";
import Services from "../services/Services";

const Shop = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    toast.success("Added To Wishlist!💖");
  };
  const { getProduct } = useProduct();

  const [params, setParams] = useSearchParams();
  // const [page, setPage] = useState(1);
  const page = params.get("page") || 1;
  const pageSize = params.get("pageSize") || 16;

  const { data } = getProduct({ limit: pageSize, skip: pageSize * (page - 1) });

  const handleChangePage = (page, pageS) => {
    // setPage(page);
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
        <div className="flex gap-2 text-[1]">
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

      {/* <Products data={data?.data?.products}/> */}
      <div className="max-w-[1200px] mx-auto px-3  grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-x-3 gap-y-5 max-sm:grid-cols-1 my-[50px]">
        {data?.data?.products?.map((product) => (
          <div
            data-aos="flip-right"
            key={product.id}
            className="bg-[#F4F5F7] rounded-[3px] max-sm:text-center relative group cursor-pointer hover:opacity-[80%] hover:bg-[#1f1f1fb7]"
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
              className="max-sm:text-center max-sm:mx-auto"
                onClick={() => navigate(`/product/${product.id}`)}
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
