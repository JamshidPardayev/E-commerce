import React from "react";

import cartHero from "@/assets/hero.png";
import logo from "@/assets/vite.svg";
import { RightOutlined, SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Services from "../services/Services";
import about1 from "@/assets/about1.png";
import about2 from "@/assets/about2.png";
import about3 from "@/assets/about3.png";
import post1 from "@/assets/post1.png";
import post2 from "@/assets/post2.png";
import post3 from "@/assets/post3.png";
import post4 from "@/assets/post4.png";
import post5 from "@/assets/post5.png";

const About = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center flex-col  h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cartHero})` }}
      >
        <div>
          <img src={logo} alt="logo" className="mx-auto" />
          <h2 className="text-[48px] font-medium px-3">About</h2>
        </div>
        <div className="flex gap-2">
          <Link to={"/"} className="font-semibold">
            Home
          </Link>
          <RightOutlined />
          <p>About</p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-3 mt-15 flex justify-between gap-10 max-md:flex-col">
        <div className="w-[70%] max-md:w-[100%] rounded-[15px] h-[500px] max-lg:h-[400px]">
          <img
            src={about1}
            alt="aboutImg"
            className="w-full h-full rounded-[15px]"
          />
        </div>
        <div className="w-[30%] max-md:hidden">
          <div className="h-[40px] w-full border-gray-600 border flex gap-2 justify-between items-center px-2 rounded-[6px]">
            <input type="text" className="px-2 py-1 outline-none w-full" />
            <SearchOutlined />
          </div>
          <h3 className="text-[24px] font-medium mt-4">Categories</h3>
          <div className="text-[#9F9F9F]">
            <div className="flex justify-between mt-4 items-center">
              <p>Crafts</p>
              <p>2</p>
            </div>

            <div className="flex justify-between mt-4 items-center">
              <p>Design</p>
              <p>8</p>
            </div>

            <div className="flex justify-between mt-4 items-center">
              <p>Handmade</p>
              <p>7</p>
            </div>

            <div className="flex justify-between mt-4 items-center">
              <p>Interior</p>
              <p>1</p>
            </div>

            <div className="flex justify-between mt-4 items-center">
              <p>Wood</p>
              <p>6</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between gap-10 max-w-[1200px] mx-auto px-3 mt-10">
        <div className="w-[70%] max-md:w-[100%]">
          <div className="">
            <h3 className="text-[24px] font-medium">
              Going all-in with millennial design
            </h3>
            <p className="text-[15px] text-[#9F9F9F] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="w-[150px] h-[40px] border text-[#B88E2F] rounded-[6px] cursor-pointer duration-300 hover:text-amber-700 mt-4">
              Read More
            </button>
          </div>
          <div>
            <div className="w-[100%] max-md:w-[100%] rounded-[15px] h-[500px] max-lg:h-[400px] mt-10">
              <img
                src={about2}
                alt="aboutImg"
                className="w-full h-full rounded-[15px]"
              />
            </div>
            <h3 className="text-[24px] font-medium mt-6">
              Going all-in with millennial design
            </h3>
            <p className="text-[15px] text-[#9F9F9F] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="w-[150px] h-[40px] border text-[#B88E2F] rounded-[6px] cursor-pointer duration-300 hover:text-amber-700 mt-4">
              Read More
            </button>
          </div>
          <div>
            <div className="w-[100%] max-md:w-[100%] rounded-[15px] h-[500px] max-lg:h-[400px] mt-10">
              <img
                src={about3}
                alt="aboutImg"
                className="w-full h-full rounded-[15px]"
              />
            </div>
            <h3 className="text-[24px] font-medium mt-6">
              Going all-in with millennial design
            </h3>
            <p className="text-[15px] text-[#9F9F9F] mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer malesuada nunc. In nulla
              posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis
              in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar
              mattis nunc sed blandit libero. Pellentesque elit ullamcorper
              dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean
              euismod elementum.
            </p>
            <button className="w-[150px] h-[40px] border text-[#B88E2F] rounded-[6px] cursor-pointer duration-300 hover:text-amber-700 mt-4">
              Read More
            </button>
          </div>
        </div>
        <div className="w-[30%] max-md:hidden">
          <h3 className="text-[24px] font-medium">Recent Posts</h3>
          <div className="flex gap-3 items-center mt-5">
            <img src={post1} alt="postImg" />
            <div>
              <p className="max-w-[200px] text-[14px]">
                Going all-in with millennial design
              </p>
              <p className="text-[12px] text-[#9F9F9F] mt-1">03 Aug 2022</p>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-5">
            <img src={post2} alt="postImg" />
            <div>
              <p className="max-w-[200px] text-[14px]">
                Exploring new ways of decorating
              </p>
              <p className="text-[12px] text-[#9F9F9F] mt-1">03 Aug 2022</p>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-5">
            <img src={post3} alt="postImg" />
            <div>
              <p className="max-w-[200px] text-[14px]">
                Handmade pieces that took time to make
              </p>
              <p className="text-[12px] text-[#9F9F9F] mt-1">03 Aug 2022</p>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-5">
            <img src={post4} alt="postImg" />
            <div>
              <p className="max-w-[200px] text-[14px]">Modern home in Milan</p>
              <p className="text-[12px] text-[#9F9F9F] mt-1">03 Aug 2022</p>
            </div>
          </div>

          <div className="flex gap-3 items-center mt-5">
            <img src={post5} alt="postImg" />
            <div>
              <p className="max-w-[200px] text-[14px]">
                Colorful office redesign
              </p>
              <p className="text-[12px] text-[#9F9F9F] mt-1">03 Aug 2022</p>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
};

export default React.memo(About);
