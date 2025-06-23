import React from "react";
import guarantee from "@/assets/guarantee.svg";
import support from "@/assets/support.svg";
import trophy from "@/assets/trophy.svg";
import shipping from "@/assets/shipping.svg";

const Services = () => {
  return (
    <div className="min-h-[250px] bg-[#FAF3EA] my-[50px]">
      <div className="max-w-[1200px] mx-auto px-3 overflow-x-auto">
        <div className="flex items-center min-h-[240px] flex-nowrap gap-6 md:min-w-full">
          <div className="flex items-center gap-x-2 min-w-[250px]">
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

          <div className="flex items-center gap-x-2 min-w-[250px]">
            <img src={guarantee} alt="guarantee" />
            <div>
              <h3 className="text-[#242424] text-[18px] font-semibold">
                Warranty Protection
              </h3>
              <p className="text-[#898989] text-[15px] mt-1">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-x-2 min-w-[250px]">
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

          <div className="flex items-center gap-x-2 min-w-[250px]">
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

export default React.memo(Services);
