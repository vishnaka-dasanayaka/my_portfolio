import React from "react";
import name from "../assets/img/name.png";

function Header() {
  return (
    <div>
      <div className=" fixed z-10 flex text-[rgb(83,83,83)] w-full  items-center justify-between h-16 px-10 py-5 ">
        <div className="flex justify-start w-1/3 h-full">
          <img src={name} className="h-full" alt="name" />
        </div>
        <div className="flex items-center justify-around w-1/3">
          <h1 className="text-xs uppercase transition duration-700 ease-in-out cursor-pointer hover:bg-red-500 hover:underline">
            services
          </h1>
          <h1 className="text-xs uppercase transition duration-700 ease-in-out cursor-pointer hover:underline">
            projects
          </h1>
          <h1 className="text-xs uppercase transition duration-700 ease-in-out cursor-pointer hover:underline">
            experience
          </h1>
          <h1 className="text-xs uppercase transition duration-700 ease-in-out cursor-pointer hover:underline">
            blogs
          </h1>
          <h1 className="text-xs uppercase transition duration-700 ease-in-out cursor-pointer hover:underline">
            contact me
          </h1>
        </div>
        <div className="flex justify-end w-1/3 ">
          <h1 className="text-xs">(+94) 71 370 4691</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
