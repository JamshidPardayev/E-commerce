import React from "react";
import { NavLink } from "react-router-dom";
import {
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import logo from "@/assets/vite.svg";
const Header = () => {
  return (
    <header>
      <h2>
        <img src={logo} alt="logoImg" />
        <p>FURNIRO</p>
      </h2>
      <ul>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/shop"}>Shop</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </ul>
      <div>
        <UserOutlined />
        <SearchOutlined />
        <HeartOutlined />
        <ShoppingCartOutlined />
        <MenuOutlined />
      </div>
    </header>
  );
};

export default React.memo(Header);
