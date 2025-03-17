import { DonutPieLabel } from "@/components/Graphs/Dontpielabel";
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
import { CgClose } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";

const Network = () => {
  return (
    <div
      className={`icon  
      w-[100%] z-50 text-white  rounded-2xl flex flex-col p-2 gap-5   transition-all duration-300 shadow-2xl `}
    >
      <div className="flex gap-5">
        <div className="userModelingLogTrend flex gap-5 justify-center items-center flex-col p-5 rounded-2xl w-full">
          <h1 className="uppercase font-medium text-lg">Local Ip </h1>
          <div className="flex text-gray-300 gap-5 items-center">
            <FaComputer size={30} />
            <p className="">10.16.2.1</p>
          </div>
        </div>
        <div className="userModelingLogTrend p-5 rounded-2xl w-full">
          <div className="img flex items-center justify-around">
            <img
              src="https://pngimg.com/uploads/vpn/vpn_PNG1.png"
              alt=""
              className="w-20"
            />
            <div className="flex justify-between gap-5 flex-col">
              <h1 className="uppercase font-medium text-lg">VPn Ip </h1>
              <p className="text-gray-300">10.16.2.1</p>
            </div>
          </div>
        </div>
        <div className="userModelingLogTrend flex gap-5 justify-center items-center flex-col p-5 rounded-2xl w-full">
          <h1 className="uppercase font-medium text-lg">Name </h1>
          <p className="text-gray-300">1/2</p>
        </div>
      </div>

      <div className="flex gap-5">
        <div className="flex-1 rounded-2xl userModelingLogTrend text-white p-5 overflow-auto min-h-fit  max-h-[60vh] w-full">
          <Table className="text-white">
            <TableHeader>
              <TableRow className="bg-transparent hover:bg-transparent cursor-pointer ">
                <TableHead>Port </TableHead>
                <TableHead>Open</TableHead>
                <TableHead>Ip</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>80</TableCell>
                <TableCell>Yes</TableCell>
                <TableCell>10.16.2.1</TableCell>
                <TableCell>Access Denied</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex-[0.3] userModelingLogTrend rounded-2xl h-full w-full   ">
          <DonutPieLabel />
        </div>
      </div>
      <div className="flex-1 rounded-2xl userModelingLogTrend text-white p-5 overflow-auto min-h-fit  max-h-[60vh] w-full">
        <Table className="text-white">
          <TableHeader>
            <TableRow className="bg-transparent hover:bg-transparent cursor-pointer border-b border-white ">
              <TableHead>Source Ip </TableHead>
              <TableHead>Post Ip</TableHead>
              <TableHead>Port </TableHead>
              <TableHead className="text-center">Outgoing Traffic</TableHead>
              <TableHead className="text-center">Outgoing Traffic</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="">
              <TableCell>10.16.2.1</TableCell>
              <TableCell>10.16.2.2</TableCell>
              <TableCell>80</TableCell>
              <TableCell className="text-center">
                <center>
                  <div className="tick p-1 bg-green-400 rounded-full flex justify-center w-fit">
                    <Check size={15} />
                  </div>
                </center>
              </TableCell>
              <TableCell className="flex justify-center">
                <div className="tick p-1 flex justify-center bg-red-400 rounded-full w-fit">
                  <CgClose size={15} />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>10.16.2.1</TableCell>
              <TableCell>10.16.2.2</TableCell>
              <TableCell>80</TableCell>

              <TableCell className="flex justify-center">
                <div className="tick p-1 flex justify-center bg-red-400 rounded-full w-fit">
                  <CgClose size={15} />
                </div>
              </TableCell>
              <TableCell className="text-center">
                <center>
                  <div className="tick p-1 bg-green-400 rounded-full flex justify-center w-fit">
                    <Check size={15} />
                  </div>
                </center>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className=" userModelingLogTrend rounded-2xl h-full w-full   ">
        <TImelinechart />
      </div>
    </div>
  );
};

export default Network;
