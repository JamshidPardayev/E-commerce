import React from "react";
import gallery1 from "@/assets/gallery1.png";
import gallery2 from "@/assets/gallery2.png";
import gallery3 from "@/assets/gallery3.png";
import gallery4 from "@/assets/gallery4.png";
import gallery5 from "@/assets/gallery5.png";
import gallery6 from "@/assets/gallery6.png";
import gallery7 from "@/assets/gallery7.png";
import gallery8 from "@/assets/gallery8.png";
import gallery9 from "@/assets/gallery9.png";
const Gallery = () => {
  return (
    <div className="my-[60px]">
      <p className="text-[#616161] font-semibold text-center px-3">
        Share your setup with
      </p>
      <h1 className="text-[#3A3A3A] font-bold text-center px-3 mt-2 text-[36px] max-sm:text-[30px]">
        #FuniroFurniture
      </h1>
      <div className="flex max-md:flex-wrap justify-center grid-cols-3 gap-3 items-center">
        <div>
          <div className="flex items-end gap-3">
            <div className="max-w-[80px] h-[380px]">
              <img data-aos="zoom-in" src={gallery1} alt="gallaryImg" className="w-full h-full" />
            </div>
            <div className="max-w-[450px] h-[310px]">
              <img data-aos="zoom-in" src={gallery2} alt="gallaryImg" className="w-full h-full" />
            </div>
          </div>
          <div className="flex gap-3 items-start mt-3">
            <div className="max-w-[180px] h-[320px]">
              <img data-aos="zoom-in" src={gallery3} alt="gallaryImg" className="w-full h-full" />
            </div>
            <div className="max-w-[340px] h-[240px]">
              <img data-aos="zoom-in" src={gallery4} alt="gallaryImg" className="w-full h-full" />
            </div>
          </div>
        </div>
        <div className="max-w-[290px] h-[390px]">
          <img data-aos="zoom-in" src={gallery5} alt="gallaryImg" className="w-full h-full" />
        </div>
        <div>
          <div className="flex items-end gap-3">
            <div className="max-w-[290px] h-[350px]">
              <img data-aos="zoom-in" src={gallery6} alt="gallaryImg" className="w-full h-full" />
            </div>
            <div className="max-w-[250px] h-[430px]">
              <img data-aos="zoom-in" src={gallery7} alt="gallaryImg" className="w-full h-full" />
            </div>
          </div>
          <div className="flex gap-3 items-start mt-3">
            <div className="max-w-[170px] h-[240px]">
              <img data-aos="zoom-in" src={gallery8} alt="gallaryImg" className="w-full h-full" />
            </div>
            <div className="max-w-[250px] h-[190px]">
              <img data-aos="zoom-in" src={gallery9} alt="gallaryImg" className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Gallery);
