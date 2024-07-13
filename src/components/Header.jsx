import React from "react";
import name from "../assets/img/name.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="">
      <div className=" fixed z-20 bg-white flex text-[rgb(83,83,83)] w-full  items-center justify-between h-16 px-10 py-5 ">
        <a href="./#home">
          <div className="flex justify-start w-1/3 h-full">
            <img
              src={name}
              className="h-full cursor-pointer hover:scale-105 "
              alt="name"
            />
          </div>
        </a>
        <div className="flex items-center justify-around w-1/3">
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
          <h1 className="text-xs cursor-pointer hover:scale-105">
            (+94) 71 370 4691
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
