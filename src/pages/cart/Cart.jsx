import React from "react";
import CartView from "../cartView/CartView";
import Services from "../services/Services";
import { Link } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import cartHero from "@/assets/hero.png";
import logo from "@/assets/vite.svg";

const Cart = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center flex-col  h-[300px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cartHero})` }}
      >
        <div> 
          <img src={logo} alt="logo" className="mx-auto"/>
          <h2 className="text-[48px] font-medium px-3">Carts</h2>
        </div>
        <div className="flex gap-2">
          <Link to={"/"} className="font-semibold">
            Home
          </Link>
          <RightOutlined />
          <p>Shop</p>
        </div>
      </div>
      <h1 className="text-[35px] mt-8 text-[#3A3A3A] w-[150px] mx-auto font-bold relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[150px] before:mx-auto before:duration-300 before:h-[2px] before:bg-[#3A3A3A]">
        Carts🛒
      </h1>
      <CartView />
      <Services />
    </div>
  );
};

export default React.memo(Cart);
