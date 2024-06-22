import React from "react";
import name from "../assets/img/name.png";

function Header() {
  return (
    <div>
      <div className=" fixed flex text-[rgb(83,83,83)] w-full  items-center justify-between h-16 px-10 py-5 ">
        <div className="flex justify-center w-1/3 h-full">
          <img src={name} className="h-full" alt="name" />
        </div>
        <div className="flex items-center justify-around w-1/3">
          <h1 className="text-xs uppercase">services</h1>
          <h1 className="text-xs uppercase">projects</h1>
          <h1 className="text-xs uppercase">experience</h1>
        </div>
        <div className="flex justify-center w-1/3 ">
          <h1 className="text-xs">(+94) 71 370 4691</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
