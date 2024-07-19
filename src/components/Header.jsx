import React from "react";
import name from "../assets/img/name.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className="">
      <div className=" fixed z-20 bg-white flex text-[rgb(83,83,83)] w-full  items-center justify-between h-16 px-5 lg:px-10  py-5 ">
        <a href="./#home">
          <div className="flex justify-start w-1/2 h-full lg:w-1/3">
            <img
              src={name}
              className="h-full cursor-pointer hover:scale-105 "
              alt="name"
            />
          </div>
        </a>
        <div className="items-center justify-around hidden w-1/3 lg:flex">
          <a href="#services">
            <h1 className="text-xs active uppercase transition duration-500 ease-in-out cursor-pointer border-b-[1px] border-transparent hover:border-black hover:border-b-[1px]">
              services
            </h1>
          </a>
          <h1 className="text-xs uppercase transition duration-500 ease-in-out cursor-pointer border-b-[1px] border-transparent hover:border-black hover:border-b-[1px]">
            works
          </h1>
          <h1 className="text-xs uppercase transition duration-500 ease-in-out cursor-pointer border-b-[1px] border-transparent hover:border-black hover:border-b-[1px]">
            experience
          </h1>
          <h1 className="text-xs uppercase transition duration-500 ease-in-out cursor-pointer border-b-[1px] border-transparent hover:border-black hover:border-b-[1px]">
            blogs
          </h1>
          <h1 className="text-xs uppercase transition duration-500 ease-in-out cursor-pointer border-b-[1px] border-transparent hover:border-black hover:border-b-[1px]">
            contact me
          </h1>
        </div>
        <div className="flex justify-end w-1/3 ">
          <h1 className="hidden text-xs cursor-pointer lg:block hover:scale-105">
            (+94) 71 370 4691
          </h1>
          <div className="lg:hidden">
            <MenuIcon className="scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
