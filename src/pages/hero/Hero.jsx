import heroImg from "@/assets/heroImg.png";
import React from "react";

const Hero = () => {
  return (
    <div
      className="h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="flex justify-end items-center h-[600px] gap-6 max-w-[1200px] mx-auto px-3">
        <div className="w-[50%] max-lg:w-[65%] max-md:w-[80%] max-sm:w-[100%] max max-w-[550px] min-h-[400px] bg-[#FFFFFFB2] rounded-[10px] flex flex-col justify-center p-6 ">
          <p  className="text-[16px] font-semibold text-black tracking-[3px]">New Arrival</p>
          <h1  className="text-[52px] font-bold text-[#B88E2F] max-w-[450px] mt-1 leading-[65px] max-sm:text-[45px] max-sm:max-w-[400px] max-sm:leading-[55px]">Discover Our New Collection</h1>
          <p  className="text-[16px] font-medium text-[#333333] max-w-[480px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="text-[14px] font-semibold bg-[#B88E2F] text-white w-[200px] h-[50px] mt-8 rounded-[5px] hover:bg-amber-600 duration-300 cursor-pointer">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Hero);
