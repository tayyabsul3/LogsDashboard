import { BarApplication } from "@/components/Graphs/BarApplication";
import { DonutPieLabel } from "@/components/Graphs/Dontpielabel";
import { LineApp2 } from "@/components/Graphs/extraDropdownCharts/LineApp2";
import { LineApplication } from "@/components/Graphs/extraDropdownCharts/LineAppication";
import { TimelineApplication } from "@/components/Graphs/TimelineApplication";
import { TImelinechart } from "@/components/Graphs/TImelineChart";
import "@yworks/react-yfiles-supply-chain/dist/index.css";
import {
  TableCell,
  Table,
  TableRow,
  TableHeader,
  TableHead,
  TableBody,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { ArrowLeftRight, Check, Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaComputer } from "react-icons/fa6";
import { GoKebabHorizontal } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
// import SpChain from "@/components/Graphs/SupplyChain";

const Application = () => {
  const options = ["chart 1 ", "chart 2"];
  const [activeChart, setactiveChart] = useState("chart 1");
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 200);
  }, [activeChart]);
  const [showDialog, setshowDialog] = useState(false);

  return (
    <div
      className={`icon
       w-[100%] z-50 text-white    flex flex-col p-2 gap-5   transition-all duration-300  `}
    >
      {/* userModelingLogTrend */}

      <div className="flex gap-5">
        <div className="userModelingLogTrend text-black flex gap-5 justify-center items-center flex-col  rounded-2xl w-full flex-[0.7]">
          <TimelineApplication />
        </div>

        <div className="userModelingLogTrend flex gap-5 justify-center items-center flex-col p-5 rounded-2xl w-full flex-[0.3]">
          <div className="border p-2 text-center rounded-md w-full">
            <h1>Vscode</h1>
          </div>
          <div className="border p-2 text-center rounded-md w-full">
            <h1>Soc Host</h1>
          </div>
          <div className="border p-2 text-center rounded-md w-full">
            <h1>abc</h1>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="userModelingLogTrend flex gap-5 justify-center items-center flex-col  rounded-2xl w-full flex-[0.7]">
          <div className="flex justify-between items-center w-full p-5">
            <h1 className="uppercase font-bold text-lg">{activeChart}</h1>
            <Popover>
              <PopoverTrigger>
                <div className="border items-center flex gap-1 p-2 px-5 rounded-md text-xs">
                  <h1>{activeChart}</h1>
                  <IoIosArrowDown />
                </div>
              </PopoverTrigger>
              <PopoverContent className="bg-white p-2 z-20 transition-all duration-300 min-w-40 rounded-md text-black">
                <div className="flex flex-col gap-2">
                  {options.map((item, index) => (
                    <PopoverClose className="w-full">
                      <button
                        key={index}
                        onClick={() => {
                          setactiveChart(item);
                        }}
                        className="hover:bg-gray-100 p-1 w-full rounded-sm "
                      >
                        {item}
                      </button>
                    </PopoverClose>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
          {loading ? (
            <div>
              <Loader />
            </div>
          ) : activeChart === "chart 1" ? (
            <LineApplication />
          ) : (
            <LineApp2 />
          )}
        </div>

        <div className="userModelingLogTrend flex gap-5 justify-center items-center flex-col p-5 rounded-2xl w-full flex-[0.3]">
          <h1 className=" text-xl text-left w-full">Bar chart example</h1>
          <BarApplication />
        </div>
      </div>
      <div className="flex-1 rounded-2xl userModelingLogTrend text-white p-5 overflow-auto min-h-fit  max-h-[60vh] w-full">
        <Table className="text-white">
          <TableHeader>
            <TableRow className="bg-transparent hover:bg-transparent cursor-pointer border-b border-white ">
              <TableHead>Time </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Path </TableHead>
              <TableHead>Point Level </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow
              className="cursor-pointer"
              onClick={() => {
                setshowDialog(true);
              }}
            >
              <TableCell>10:00</TableCell>
              <TableCell>User1</TableCell>
              <TableCell>File1.txt</TableCell>
              <TableCell>High</TableCell>
            </TableRow>
            <TableRow
              className="cursor-pointer"
              onClick={() => {
                setshowDialog(true);
              }}
            >
              <TableCell>11:00</TableCell>
              <TableCell>User2</TableCell>
              <TableCell>File2.txt</TableCell>
              <TableCell>Medium</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      {showDialog && (
        <div className="modal flex justify-center items-center absolute top-0 left-0 bg-black/40 w-full h-full">
          <div className="modal text-black bg-white p-10 pt-5 rounded-md shadow-lg min-w-[50%]">
            <div className="top flex justify-between font-medium text-lg mb-5 text-black">
              <h1></h1>
              <button
                className="cursor-pointer"
                onClick={() => {
                  setshowDialog(false);
                }}
              >
                <CgClose />
              </button>
            </div>
            {/* <SpChain /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Application;
