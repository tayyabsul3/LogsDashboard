import { DonutPieLabel } from "@/components/Graphs/Dontpielabel";
import { LineSys1 } from "@/components/Graphs/LineSys1";
import { LineSys2 } from "@/components/Graphs/LineSys2";
import { StackedBar } from "@/components/Graphs/StackedBar";
import { TImelinechart } from "@/components/Graphs/TImelineChart";
import {
  TableCell,
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import { Check } from "lucide-react";
import React from "react";
import { BiUsb } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";

const System = () => {
  return (
    <div
      className={`icon  
      w-[100%] z-50 text-white  rounded-2xl flex flex-col p-2 gap-5   transition-all duration-300 shadow-2xl `}
    >
      <div className="flex gap-5">
        <div className="userModelingLogTrend flex gap-5 justify-center items-center flex-col p-5 rounded-2xl w-full">
          <h1 className="uppercase font-medium text-lg">Usb Connected </h1>
          <div className="flex text-gray-300 gap-5 items-center">
            <BiUsb size={30} />
          </div>
        </div>
        <div className="userModelingLogTrend flex gap-5 justify-center items-center flex-col p-5 rounded-2xl w-full">
          <h1 className="uppercase font-medium text-lg">Logon Time </h1>
          <div className="flex text-gray-300 gap-5 items-center">
            <p>08:30 AM</p>
          </div>
        </div>
        <div className="userModelingLogTrend flex gap-2 justify-center items-start flex-col p-5 rounded-2xl w-full">
          <p className="program">
            <span className="text-base ">Process :</span> VsCode
          </p>
          <p>
            <span className="text-base ">Path :</span> c:/disktop/user/error
          </p>
          <p>
            <span className="text-base ">Privalage :</span> Admin
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex-auto userModelingLogTrend rounded-2xl h-full w-full   ">
          <LineSys1 />{" "}
        </div>
        <div className="flex-auto userModelingLogTrend rounded-2xl h-full w-full   ">
          <LineSys2 />{" "}
        </div>
      </div>
      <div className="flex-1 rounded-2xl userModelingLogTrend text-white p-5 overflow-auto min-h-fit  max-h-[60vh] w-full">
        <StackedBar />
      </div>
    </div>
  );
};

export default System;
