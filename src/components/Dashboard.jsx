import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DasCards from "./Reusables/DasCards";
import { Graph } from "./Graphs/Graph";
import { LockIcon } from "lucide-react";
import { BChart } from "./Graphs/Barchart";
import EnviCard from "./Reusables/EnviCard";
import { GoKebabHorizontal } from "react-icons/go";
import { PiNotepadLight } from "react-icons/pi";
import { HiOutlineUsers } from "react-icons/hi2";
import { MdDevices } from "react-icons/md";

const Dashboard = () => {
  const dasCards = [
    {
      name: "High-risk events",
      icon: <LockIcon size={20} />,
      total: 29,
      outOf: 38,
      radialColor: "#045EC9",
      percentage: Math.round((29 / 38) * 100),
      gradient: "linear-gradient(110.33deg, #0051B1 0%, #74B4FF 78.17%)",
    },
    {
      name: "Risky activities",
      icon: <PiNotepadLight size={20} />,
      total: 14,
      outOf: 20,
      radialColor: "rgba(124, 142, 239, 1)",
      percentage: Math.round((14 / 20) * 100),
      gradient: "linear-gradient(110.33deg, #7801AF 0%, #CD5FFF 63.17%)",
    },
    {
      name: "High-risk users",
      icon: <HiOutlineUsers size={20} />,
      total: 6,
      outOf: 9,
      radialColor: "rgba(124, 142, 239, 1)",
      percentage: Math.round((6 / 9) * 100),
      gradient: "linear-gradient(110.33deg, #0098B9 36.67%, #46DEFF 100%)",
    },
    {
      name: "Devices with issues",
      icon: <MdDevices size={20} />,
      total: 6,
      outOf: 9,
      radialColor: "rgba(124, 142, 239, 1)",
      percentage: Math.round((6 / 9) * 100),
      gradient: "linear-gradient(110.33deg, #6202C2 0%, #B162FF 86.17%)",
    },
  ];
  return (
    <div className="transition-all duration-300 ease-in-out body p-5   lg:pl-16 flex flex-col gap-5 h-[85vh] overflow-y-auto">
      <h1 className="text-white text-3xl  tracking-wide lg:mt-5">Dashboard</h1>
      <div className="flex flex-col gap-5">
        {/* cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3  gap-5 xl:grid-cols-4 w-full ">
          {dasCards.map((cardProps) => (
            <DasCards dasCard={cardProps} key={cardProps.name} />
          ))}
        </div>
        {/* graphs */}
        <div className="flex gap-5 flex-col xl:flex-row w-full">
          <div className="flex flex-col gap-5 flex-[0.8] ">
            <div className=" p-0">
              <Graph />
            </div>
            <div className="sidegraphs   flex gap-5 flex-col lg:flex-row w-full  ">
              <div className="flex-1">
                <Accordion
                  type="single"
                  collapsible
                  className="text-white p-5 w-full h-full text-wrap text-left   flex flex-col gap-3  rounded-2xl text-[0.8rem] border-none linear_g_1 "
                >
                  <div className="flex justify-between text-2xl mb-2 ">
                    <h1 className="text-xl">Learn to Use</h1>
                    <GoKebabHorizontal style={{ transform: "rotate(90deg)" }} />
                  </div>

                  <AccordionItem
                    value="item-9"
                    style={{ borderBottom: "none" }}
                    className=" rounded-2xl m-0  text-left px-4  text-wrap   mb-1 bg-blue-950"
                  >
                    <AccordionTrigger className="hover:no-underline text-left text-left">
                      What are quick Safetica NXT improvement?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    style={{ borderBottom: "none" }}
                    className=" rounded-2xl text-left m-0 px-4 mb-1 bg-blue-950"
                  >
                    <AccordionTrigger className="hover:no-underline text-left">
                      Optimize Safetica NXT?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    style={{ borderBottom: "none" }}
                    className=" rounded-2xl text-left m-0 px-4 mb-1 bg-blue-950"
                  >
                    <AccordionTrigger className="hover:no-underline text-left">
                      Maintaining company dynamism?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    style={{ borderBottom: "none" }}
                    className=" rounded-2xl text-left m-0 px-4 mb-1 bg-blue-950"
                  >
                    <AccordionTrigger className="hover:no-underline text-left text-left">
                      Sustaining company dynamism?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div className="text-white flex-1 px-5 flex flex-col gap-1 linear_g_1   py-5 rounded-2xl text-[12px] ">
                <div className="flex justify-between flex-col gap-1 text-2xl mb-2">
                  <div className=" flex justify-between items-center">
                    <h1 className="text-xl">Get One-time Report</h1>
                    <GoKebabHorizontal
                      style={{ transform: "rotate(90deg)" }}
                    />{" "}
                  </div>
                  <p className="text-[0.7rem]">1 June 2024 - 30 June 2024</p>
                </div>
                <div className="flex-1">
                  <BChart />
                </div>
              </div>
            </div>
          </div>

          <div className="w-fit h-full rounded-2xl p-5 flex-[0.2] linear_g_1">
            <div className=" flex justify-between w-full items-center px-5 mb-5 text-white text-xl">
              <h1 className="text-xl">Enviromental Settings</h1>
              <GoKebabHorizontal style={{ transform: "rotate(90deg)" }} />
            </div>
            <div className="cards flex flex-row  flex-wrap xl:flex-col gap-5">
              <EnviCard />
              <EnviCard />
              <EnviCard />
              <EnviCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
