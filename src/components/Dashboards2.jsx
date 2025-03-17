import React from "react";
import { RadialHalfBar } from "./Graphs/RadialChart";
import { Sources } from "./Graphs/Sources";
import { LoginChart } from "./Graphs/LoginChart";
import { PieChart2 } from "./Graphs/PieChart";
import { BChart } from "./Graphs/Barchart";
import { PieChartLabelandPer } from "./Graphs/PieChartLabelandPer";
import { ActiveUsers } from "./Graphs/ActiveUsers";
import { DonutPie } from "./Graphs/DonutPie";
import { DonutPieLabel } from "./Graphs/Dontpielabel";
const Dashboards2 = () => {
  return (
    <div className="transition-all duration-300 ease-in-out body  flex h-[85vh] overflow-y-auto  ">
      <div className="transition-all duration-300 ease-in-out body p-5 lg:py-5 lg:px-16 flex-[0.8] overflow-y-auto flex flex-col gap-5 h-[85vh]  lg:pr-5 ">
        <h1 className="text-white text-3xl  tracking-wide lg:mt-5">Overview</h1>
        <div className=" w-full ">
          <div className="flex flex-col gap-5 ">
            {/* cards */}
            <div className="flex gap-5 flex-col min-[1200px]:flex-row ">
              <div className="linear_g_1 rounded-xl flex-[0.3] ">
                <RadialHalfBar />
              </div>
              <div className="linear_g_1 flex-wrap  flex-[0.8] flex rounded-xl">
                <Sources />
                <Sources />
              </div>
            </div>
            {/* graphs */}
            <div className="flex gap-5 w-full   flex-col xl:flex-row ">
              <div className="L_success  linear_g_1 flex-1 rounded-2xl">
                <LoginChart />
              </div>
              <div className="l_failure linear_g_1 flex-1 rounded-2xl">
                <LoginChart />
              </div>
            </div>
            <div className="flex gap-5 w-full  flex-col xl:flex-row ">
              <div className="L_success  linear_g_1 flex-1 rounded-2xl">
                <PieChart2 />
              </div>
              <div className=" linear_g_1 flex-1 rounded-2xl">
                <h1 className="text-white  p-5 pb-0 ">Top Sources</h1>
                <BChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex p-2 flex-col  gap-5 flex-[0.4]  max-lg:flex-[0.3] 2xl:flex-[0.2] linear_g_1  min-h-[85vh] pb-5 h-full overflow-y-auto  ">
        <div className="linear_g_1 rounded-2xl w-full   ">
          <PieChartLabelandPer />
          {/* <PieChart2 /> */}
        </div>
        <div className="linear_g_1 rounded-2xl w-full   ">
          <ActiveUsers />
        </div>
        <div className="linear_g_1 rounded-2xl w-full   ">
          <DonutPie />
        </div>
        <div className="linear_g_1 rounded-2xl w-full   ">
          <DonutPieLabel />
        </div>
      </div>
    </div>
  );
};

export default Dashboards2;
