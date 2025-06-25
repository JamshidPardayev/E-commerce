import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import logo from "@/assets/vite.svg";
import "./style.css";
import { Badge } from "antd";
import { useSelector } from "react-redux";


const Header = () => {
  const wishlist = useSelector((state) => state.wishlist.value)
  const cart = useSelector((state) => state.cart.value)

  return (
    <header className="max-w-[1200px] min-h-[100px] flex items-center justify-between mx-auto px-3">
      <h2 className="flex items-center">
        <img src={logo} alt="logoImg" />
        <p className="text-[30px] font-bold max-sm:text-[26px]">FURNIRO</p>
      </h2>
      <ul className="flex gap-6 max-md:gap-4 text-black font-medium max-sm:hidden">
        <NavLink
          className={
            "navActive relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F]"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={
            "navActive relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F]"
          }
          to={"/shop"}
        >
          Shop
        </NavLink>
        <NavLink
          className={
            "navActive relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F]"
          }
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={
            "navActive relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F]"
          }
          to={"/contact"}
        >
          Contact
        </NavLink>
      </ul>
      <div className="flex items-center gap-6  max-md:gap-5 text-[18px]">
        <div className="hover:text-[#B88E2F] duration-300 cursor-pointer max-sm:hidden">
          <UserOutlined />
        </div>
        <div className="hover:text-[#B88E2F] duration-300 cursor-pointer max-sm:hidden">
          <SearchOutlined />
        </div>

        <Link to={"/wishlist"}>
          <Badge count={wishlist.length} showZero>
            <div className="hover:text-[#B88E2F] text-[18px] duration-300 cursor-pointer ">
              <HeartOutlined />
            </div>
          </Badge>
        </Link>
        <Link to={"/cart"}>
          <Badge count={cart.length} showZero>
            <div className="hover:text-[#B88E2F] text-[20px] duration-300 cursor-pointer ">
              <ShoppingCartOutlined />
            </div>
          </Badge>
        </Link>

        <div className="text-[25px] hover:text-[#B88E2F] duration-300 cursor-pointer hidden max-sm:block">
          <MenuOutlined />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
