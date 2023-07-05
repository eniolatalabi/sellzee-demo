import React from "react";
import Newtrans from "../assets/Newtransaction.png";
import Checkmark from "../assets/checkmark.png"

const MainFirstContent = () => {
  return (
    <div className="w-screen grid grid-cols-2 pt-[120px]">
      <div>
        <img src={Newtrans} className="w-[450px]" alt="" />
      </div>
      <div>
        <h2 className="text-[#FF5A05] font-sans text-sm font-semibold">
          LOREM IPSUM DOLOR SIT AME
        </h2>
        <h1 className="text-bold text-[#05000B] font-sans font-bold text-3xl">
          Simple Solutions for <br /> Complex Connections
        </h1>
        <p className="text-[#05000B] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed donec
          <br /> gravida feugiat neque, ipsum faucibus. Pharetra vel suspendisse
          mi <br />
          odio a velit feugiat sapien.
        </p>
        <div>
          <div>
            <img src={Checkmark} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFirstContent;
