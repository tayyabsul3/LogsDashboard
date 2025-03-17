import { LockIcon } from "lucide-react";
import React from "react";
import { PiGreaterThan } from "react-icons/pi";
const EnviCard = () => {
  return (
    <div className="card text-gray-300 rounded-2xl p-5 flex flex-col 2xl:gap-5 w-full bg-blue-950">
      <div className="top flex  items-center justify-between ">
        <div className="flex items-center gap-5 ">
          <div className="icon bg-indigo-400 h-fit rounded-xl p-2 ">
            <LockIcon size={15} />
          </div>
          <h1 className="text-white text-[16px]">Hight-risk events</h1>
        </div>
        <PiGreaterThan className=" font-bold" />
      </div>
      <p className="text-sm  text-wrap py-2">
        Activate Email notifications for risky events to be informed
      </p>
      <a href="#" className="underline">
        Read more
      </a>
    </div>
  );
};

export default EnviCard;
