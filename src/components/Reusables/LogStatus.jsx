import React from "react";

const LogStatus = ({ status, icon }) => {
  return (
    <button className="text-lg flex gap-2 items-center text-purple-500  border-[1px]  border-purple-500 py-1 px-6 rounded-xl">
      <span>{status}</span>
      {icon ? icon : ""}
    </button>
  );
};

export default LogStatus;
