import React from "react";
import roomImg from "@/assets/roomImg.png";
import roomImg1 from "@/assets/roomImg1.png";
import roomImg2 from "@/assets/roomImg2.png";
import roomImg3 from "@/assets/roomImg3.png";
import roomImg4 from "@/assets/roomImg4.png";
import { Tabs } from "antd";
const Rooms = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: (
        <p className="w-[35px] h-[35px] text-center content-center text-[20px] text-[#B88E2F] border cursor-pointer shadow-[0px_0px_5px_1px_#B88E2F]">
          1
        </p>
      ),
      children: (
        <div className="text-center">
          <img src={roomImg1} alt="room" className="w-full h-[400px]" />
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <p className="w-[35px] h-[35px] text-center content-center text-[20px] text-[#B88E2F] border cursor-pointer shadow-[0px_0px_5px_1px_#B88E2F]">
          2
        </p>
      ),
      children: (
        <div className="text-center">
          <img src={roomImg2} alt="room" className="w-full h-[400px]" />
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <p className="w-[35px] h-[35px] text-center content-center text-[20px] text-[#B88E2F] border cursor-pointer shadow-[0px_0px_5px_1px_#B88E2F]">
          3
        </p>
      ),
      children: (
        <div className="text-center">
          <img src={roomImg3} alt="room" className="w-full h-[400px]" />
        </div>
      ),
    },
    {
      key: "4",
      label: (
        <p className="w-[35px] h-[35px] text-center content-center text-[20px] text-[#B88E2F] border cursor-pointer shadow-[0px_0px_5px_1px_#B88E2F]">
          4
        </p>
      ),
      children: (
        <div className="text-center">
          <img src={roomImg} alt="room" className="w-full h-[400px]" />
        </div>
      ),
    },
    {
      key: "5",
      label: (
        <p className="w-[35px] h-[35px] text-center content-center text-[20px] text-[#B88E2F] border cursor-pointer shadow-[0px_0px_5px_1px_#B88E2F]">
          5
        </p>
      ),
      children: (
        <div className="text-center">
          <img src={roomImg4} alt="room" className="w-full h-[400px]" />
        </div>
      ),
    },
  ];
  return (
    <div className="min-h-[600px] bg-[#FCF8F3] py-[50px] ">
      <div className="max-w-[1200px] mx-auto px-3 flex justify-between  gap-x-5 gap-y-6 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-col justify-center items-start max-sm:items-center max-sm:text-center">
          <h2 className="max-w-[400px] text-[36px] font-bold max-sm:text-[34px]">
            50+ Beautiful rooms inspiration
          </h2>
          <p className="max-w-[400px] text-[#616161] text-[16px] mt-2">
            Our designer already made a lot of beautiful prototipe of rooms that
            inspire you
          </p>
          <button className="w-[200px] h-[45px] bg-[#B88E2F] text-white mt-5 rounded-[5px] hover:bg-amber-600 duration-300 cursor-pointer">
            Explore More
          </button>
        </div>
        <div className="max-md:hidden">
          <img
            // data-aos="flip-right"
            src={roomImg}
            alt="roomImg"
            className="h-[475px]"
          />
        </div>
        <div className="sm:w-[382px] max-w-[500px] w-full">
          <Tabs
            // data-aos="flip-right"
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Rooms);
