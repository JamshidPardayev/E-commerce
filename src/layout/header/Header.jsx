import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
import { useProduct } from "@/api/hooks/useProduct";
import useDebounce from "@/hooks/useDebounce";

const Header = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  const cart = useSelector((state) => state.cart.value);
  const searchRef = useRef();
  const [showSearch, setShowSearch] = useState(false);
  const [value, setValue] = useState("");
  const debounced = useDebounce(value, 500);
  const navigate = useNavigate();
  const { getSearchProduct } = useProduct();

  const { data, isLoading, isError } = getSearchProduct(
    { q: debounced },
    !!debounced
  );

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <header className="max-w-[1200px] min-h-[100px] flex items-center justify-between mx-auto px-3 relative">
      <Link to={"/"}>
        <h2 className="flex items-center">
          <img src={logo} alt="logoImg" />
          <p className="text-[30px] font-bold max-sm:text-[26px]">FURNIRO</p>
        </h2>
      </Link>

      <ul className="flex gap-6 max-md:gap-4 text-black font-medium max-sm:hidden">
        {["/", "/shop", "/about", "/contact"].map((path, i) => (
          <NavLink
            key={path}
            to={path}
            className="navActive relative before:absolute before:left-0 before:bottom-0 before:w-[0%] hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F]"
          >
            {["Home", "Shop", "About", "Contact"][i]}
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6 max-md:gap-5 text-[18px]">
        <div
          className="hover:text-[#B88E2F] duration-300 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        >
          <SearchOutlined />
        </div>

        <div className="hover:text-[#B88E2F] duration-300 cursor-pointer max-sm:hidden">
          <UserOutlined />
        </div>

        <Link to={"/wishlist"}>
          <Badge count={wishlist.length}>
            <div className="hover:text-[#B88E2F] text-[18px] duration-300 cursor-pointer">
              <HeartOutlined />
            </div>
          </Badge>
        </Link>

        <Link to={"/cart"}>
          <Badge count={cart.length}>
            <div className="hover:text-[#B88E2F] text-[20px] duration-300 cursor-pointer">
              <ShoppingCartOutlined />
            </div>
          </Badge>
        </Link>

        <div className="text-[25px] hover:text-[#B88E2F] duration-300 cursor-pointer hidden max-sm:block">
          <MenuOutlined />
        </div>
      </div>

      {showSearch && (
        <div
          ref={searchRef}
          className="absolute top-[92px] w-[600px] max-md:w-[500px] max-sm:w-[300px] left-1/2 -translate-x-1/2 p-2 z-50 rounded-[5px] bg-white"
        >
          <input
            type="text"
            placeholder="Search..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border border-gray-300 w-full px-4 py-2 rounded-[5px] shadow-md focus:outline-none focus:border-[#B88E2F] transition-all duration-300"
          />

          {isLoading ? (
            <p className="text-center mt-2 text-sm text-gray-500">Loading...</p>
          ) : isError ? (
            <p className="text-center mt-2 text-sm text-red-500">
              Error loading data.
            </p>
          ) : data?.data?.products?.length ? (
            <div className="w-full max-h-[400px] overflow-auto bg-white border mt-2 rounded-[5px] shadow-sm">
              {data.data.products.map((item) => (
                <div
                  onClick={() => {
                    setShowSearch(false);
                    navigate(`/product/${item.id}`, { state: { item } });
                  }}
                  key={item.id}
                  className="flex justify-between items-center h-[60px] px-2 border-b border-gray-200"
                >
                  <div className="flex items-center gap-2">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="h-[40px] w-[40px] object-cover rounded"
                    />
                    <h2 className="line-clamp-1">{item.title}</h2>
                  </div>
                  <p className="text-[#B88E2F]">${item.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-2 text-sm text-gray-500">Not found!</p>
          )}
        </div>
      )}
    </header>
  );
};

export default React.memo(Header);
