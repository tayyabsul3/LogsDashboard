import React from "react";
import { GoKebabHorizontal } from "react-icons/go";

const Securitycard = () => {
  return (
    <div className="flex-[0.2] h-[92px] text-white flex flex-col px-5 py-2 rounded-2xl justify-center linear_g_1">
      <div className="top flex justify-between   items-center">
        <h1 className="text-sm">Web</h1>
        <GoKebabHorizontal style={{ transform: "rotate(90deg)" }} />
      </div>
      <div className="progress  w-[90%] h-2 bg-white rounded-sm mt-4">
        <div className="bg-cyan-400 w-[40%] h-2 rounded-sm" />
      </div>
      <p className="text-cyan-400 mt-1 text-sm">60%</p>
    </div>
  );
};

export default Securitycard;
