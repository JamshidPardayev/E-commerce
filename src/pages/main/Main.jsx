import { Card, Image } from "antd";
import React from "react";
import dining from "@/assets/dining.png";
import living from "@/assets/living.png";
import bedroom from "@/assets/bedroom.png";
const Main = () => {
  return (
    <main className="max-w-[1200px] mx-auto px-3 my-[60px]">
      <h1 className="text-center text-[28px] font-bold">Browse The Range</h1>
      <p className="text-center text-[#666666] mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex justify-between gap-x-3 gap-y-10 mt-12 max-md:mt-6 max-sm:flex-col ">
        <div
          //  data-aos="flip-right"
          className="max-w-[350px] max-sm:mx-auto"
        >
          <Card hoverable cover={<Image src={dining} />}>
            <p className="text-center text-[22px] text-[#333333] font-semibold">
              Dining
            </p>
          </Card>
        </div>
        <div
          //  data-aos="flip-right"
          className="max-w-[350px] max-sm:mx-auto"
        >
          <Card
            hoverable
            cover={
              <div className="">
                <Image src={living} />
              </div>
            }
          >
            <p className="text-center text-[22px] text-[#333333] font-semibold">
              Living
            </p>
          </Card>
        </div>
        <div 
        // data-aos="flip-right" 
        className="max-w-[350px] max-sm:mx-auto">
          <Card hoverable cover={<Image src={bedroom} />}>
            <p className="text-center text-[22px] text-[#333333] font-semibold">
              Bedroom
            </p>
          </Card>
        </div>
      </div>
    </main>
  );
};

export default React.memo(Main);
