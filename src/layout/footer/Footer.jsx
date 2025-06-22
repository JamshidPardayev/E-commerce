import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-[1px] border-t-[#0000002B] mt-[50px] py-[50px]">
      <div className="max-w-[1200px] mx-auto px-3 flex justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-[24px] font-bold ">FUNIRO</h1>
          <p className="max-w-[250px] max-sm:max-w-[200px] text-[#9F9F9F] text-[16px] mt-10 max-sm:mt-6">
            400 University Drive Suite 200 Coral Gables, FL 33134 USA
          </p>
        </div>
        <div>
          <p className="text-[16px] text-[#9F9F9F] font-medium">Links</p>
          <ul className="flex flex-col">
            <Link
              to={"/"}
              className="hover:text-[#B88E2F] font-medium duration-300 relative before:absolute before:left-0 before:bottom-0 before:w-[0%] max-sm:mt-6 hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F] mt-10"
            >
              Home
            </Link>
            <Link
              to={"/shop"}
              className="hover:text-[#B88E2F] font-medium duration-300 relative before:absolute before:left-0 before:bottom-0 before:w-[0%] max-sm:mt-4 hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F] mt-7"
            >
              Shop
            </Link>
            <Link
              to={"/about"}
              className="hover:text-[#B88E2F] font-medium duration-300 relative before:absolute before:left-0 before:bottom-0 before:w-[0%] max-sm:mt-4 hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F] mt-7"
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="hover:text-[#B88E2F] font-medium duration-300 relative before:absolute before:left-0 before:bottom-0 before:w-[0%] max-sm:mt-4 hover:before:w-[100%] before:duration-300 before:h-[2px] before:bg-[#B88E2F] mt-7"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="max-sm:hidden">
          <p className="text-[16px] text-[#9F9F9F] font-medium">Help</p>
          <p className="text-[16px] mt-10 font-medium">Payment Options</p>
          <p className="text-[16px] mt-7 font-medium">Returns</p>
          <p className="text-[16px] mt-7 font-medium">Privacy Policies</p>
        </div>
        <div>
          <p className="text-[16px] text-[#9F9F9F] font-medium">Newsletter</p>
          <form action="" className="flex gap-1 mt-10 max-sm:mt-6">
            <input
              type="text"
              name=""
              id=""
              className="border-b-[1px] border-b-[#000000] px-1 py-2 outline-none text-[14px] max-w-[200px]"
              placeholder="Enter Your Email Address"
            />
            <button className="border-b-[1px] border-b-[#000000] h-[40px] hover:text-[#B88E2F] hover:border-b-[#B88E2F] duration-300 cursor-pointer text-[14px] font-medium">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
