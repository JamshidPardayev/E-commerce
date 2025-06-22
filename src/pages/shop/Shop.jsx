import { useProduct } from "@/api/hooks/useProduct";
import { Pagination } from "antd";
import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";

import shopHero from "@/assets/shopHero.png";
import guarantee from "@/assets/guarantee.svg";
import support from "@/assets/support.svg";
import trophy from "@/assets/trophy.svg";
import shipping from "@/assets/shipping.svg";
import vector from "@/assets/vector.svg";
import dotted4 from "@/assets/dotted.svg";
import viewList from "@/assets/view-list.svg";

const Shop = () => {
  const navigate = useNavigate();
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
            <p className="text-[16px]">Show <span className="px-3 py-2 bg-white ml-[10px] text-[#9F9F9F] rounded-[3px] ">16</span></p>
            <p className="text-[16px]">Sort By <span className="px-3 py-2 bg-white ml-[10px] text-[#9F9F9F] rounded-[3px] ">Default</span></p>
          </div>
        </div>
      </div>

      {/* <Products data={data?.data?.products}/> */}
      <div className="max-w-[1200px] mx-auto px-3  grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-x-3 gap-y-5 max-sm:grid-cols-1 my-[50px]">
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
      <div className="flex justify-center px-3">
        <Pagination
          current={page}
          onChange={handleChangePage}
          total={data?.data?.total}
          pageSize={pageSize}
        />
      </div>
      <div className="min-h-[250px] bg-[#FAF3EA] content-center my-[50px]">
        <div className="max-w-[1200px] mx-auto px-3 flex flex-wrap  justify-between gap-x-3 gap-y-6 py-[30px]">
          <div className="flex items-center gap-x-2">
            <img src={trophy} alt="trophy" />
            <div>
              <h3 className="text-[#242424] text-[18px] font-semibold">
                High Quality
              </h3>
              <p className="text-[#898989] text-[15px] mt-1">
                crafted from top materials
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <img src={guarantee} alt="guarantee" />
            <div>
              <h3 className="text-[#242424] text-[18px] font-semibold">
                Warranty Protection
              </h3>
              <p className="text-[#898989] text-[15px] mt-1">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <img src={shipping} alt="shipping" />
            <div>
              <h3 className="text-[#242424] text-[18px] font-semibold">
                Free Shipping
              </h3>
              <p className="text-[#898989] text-[15px] mt-1">
                Order over 150 $
              </p>
            </div>
          </div>

          <div className="flex items-center gap-x-2">
            <img src={support} alt="support" />
            <div>
              <h3 className="text-[#242424] text-[18px] font-semibold">
                24 / 7 Support
              </h3>
              <p className="text-[#898989] text-[15px] mt-1">
                Dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Shop);
