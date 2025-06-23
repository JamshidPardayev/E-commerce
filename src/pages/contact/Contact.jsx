import React from "react";
import Services from "../services/Services";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import contactHero from "@/assets/hero.png";
import logo from "@/assets/vite.svg";
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
        <h2 className="text-[32px] font-semibold mt-14 text-center ">Get In Touch With Us</h2>
        <p className="text-[#9F9F9F] max-w-[650px] mx-auto mt-2 px-2 text-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>

      <Services />
    </div>
  );
};

export default React.memo(Contact);
