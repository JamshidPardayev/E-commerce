import React from "react";
import Services from "../services/Services";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import contactHero from "@/assets/hero.png";
import logo from "@/assets/vite.svg";
import location from "@/assets/location.svg";
import clock from "@/assets/clock.svg";
import phone from "@/assets/phone.svg";

const Contact = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center flex-col  h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${contactHero})` }}
      >
        <img src={logo} alt="logo" />
        <h2 className="text-[48px] font-medium px-3">Contact</h2>
        <div className="flex gap-2 text-[1]">
          <Link to={"/"} className="font-semibold">
            Home
          </Link>
          <RightOutlined />
          <p>Shop</p>
        </div>
      </div>
      <div>
        <h2 className="text-[32px] font-semibold mt-14 text-center ">
          Get In Touch With Us
        </h2>
        <p className="text-[#9F9F9F] max-w-[650px] mx-auto mt-2 px-2 text-center">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      <div className="flex max-w-[1200px] mx-auto px-3 mt-20 max-sm:flex-col" >
        <div className="w-[40%] max-sm:w-[100%]">
          <div className="flex gap-x-3 max-sm:justify-center">
            <div>
              <img src={location} alt="vector" />
            </div>
            <div>
              <h3 className="text-[24px] font-medium mb-2">Address</h3>
              <p className="max-w-[210px] text-[15px] text-gray-700">236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex gap-x-2 mt-6 max-sm:justify-center">
            <div>
              <img src={phone} alt="vector" />
            </div>
            <div>
              <h3 className="text-[24px] font-medium mb-2">Phone</h3>
              <p className="max-w-[210px] text-[15px] text-gray-700">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex gap-3 mt-6 max-sm:justify-center">
            <div>
              <img src={clock} alt="vector" />
            </div>
            <div>
              <h3 className="text-[24px] font-medium mb-2">Working Time</h3>
              <p className="max-w-[210px] text-[15px] text-gray-700">Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <form action="" className="flex flex-col max-w-[1200px] mx-auto px-3 w-[60%] max-sm:w-[100%]">
          <label className="mt-5" htmlFor="name">Your name</label>
          <input type="text" id="name" placeholder="Enter Your Name" className="border h-[50px] px-2 rounded-[10px] border-gray-400 mt-2 outline-none"/>

          <label className="mt-5" htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter Your Email" className="border h-[50px] px-2 rounded-[10px] border-gray-400 mt-2 outline-none"/>

          <label className="mt-5" htmlFor="subject">Subject</label>
          <input type="text" id="subject" placeholder="This is an optional" className="border h-[50px] px-2 rounded-[10px] border-gray-400 mt-2 outline-none"/>
          <label className="mt-5" htmlFor="message">Message</label>
          <textarea
            name=""
            id="message"
            className="border min-h-[100px] p-2 rounded-[10px] border-gray-400 mt-2 outline-none"
            placeholder="Hi! i’d like to ask about"
          ></textarea>
          <button className="bg-[#B88E2F] mt-4 py-2 rounded-[10px] text-white hover:bg-amber-700 duration-300 cursor-pointer" >Submit</button>
        </form>
      </div>

      <Services />
    </div>
  );
};

export default React.memo(Contact);
