import React from "react";
import Securitycard from "./Reusables/Securitycard";
import { DoubleBar } from "./Graphs/DoubleBar";
import { TiltedBar } from "./Graphs/TiltedBar";
import { Menu } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GoKebabHorizontal } from "react-icons/go";

const data = [
  {
    riskLevel: "High",
    user: "Alex Noman",
    destination: "USB",
    source: "Google Drive",
    time: "20 April 2023 - 29 April 2023",
  },
  {
    riskLevel: "High",
    user: "Darrell Steward",
    destination: "USB",
    source: "Google Drive",
    time: "20 April 2023 - 29 April 2023",
  },
  {
    riskLevel: "High",
    user: "Floyd Miles",
    destination: "USB",
    source: "Google Drive",
    time: "20 April 2023 - 29 April 2023",
  },
  {
    riskLevel: "High",
    user: "Annette Black",
    destination: "USB",
    source: "Google Drive",
    time: "20 April 2023 - 29 April 2023",
  },
  {
    riskLevel: "High",
    user: "Floyd Miles",
    destination: "USB",
    source: "Google Drive",
    time: "20 April 2023 - 29 April 2023",
  },
];
const DataSecurity = () => {
  return (
    <div className="transition-all duration-300 ease-in-out  py-5 px-16 flex flex-col gap-5 h-[85vh] overflow-y-auto">
      <h1 className="text-white text-3xl mt-5">Data Security</h1>
      <div className="flex flex-col gap-5">
        {/* cards */}
        <div className="flex items-center gap-5">
          <Securitycard />
          <Securitycard />
          <Securitycard />
          <Securitycard />
          <Securitycard />
        </div>
        {/* graphs */}
        <div className="flex gap-5 w-full flex-col">
          <div className="flex gap-5 w-full">
            <div className="graph1 linear_g_1 flex-[0.5] h-[500px] outline-none border-none rounded-2xl">
              <div className="top flex justify-between items-center text-white text-2xl my-6 px-10">
                <h1>Files in time</h1>
                <div className="colors flex gap-4 items-center">
                  <div className="high flex gap-1 items-center">
                    <div className="h-4 bg-pink-400 w-4 rounded-xl" />
                    <p className="text-sm text-gray-400 ">High</p>
                  </div>
                  <div className="medium flex gap-1 items-center">
                    <div className="h-4 bg-gray-600 w-4 rounded-xl" />
                    <p className="text-sm text-gray-400 ">Medium</p>
                  </div>
                </div>
                <div className="dropdownofMonths">
                  <select
                    name="months"
                    id="months"
                    className="bg-slate-600 text-gray-300 text-lg p-2  rounded-sm outline-none"
                  >
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March" selected>
                      March
                    </option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
              </div>
              <DoubleBar />
            </div>
            <div className="graph1 linear_g_1 flex-[0.5] h-[500px] outline-none border-none rounded-2xl">
              <div className="top flex justify-between items-center text-white text-2xl my-7 px-10">
                <h1>Files in time</h1>
                <div className="colors flex gap-4 items-center pl-28">
                  <div className="high flex gap-1 items-center">
                    <div className="h-4 bg-purple-400 w-4 rounded-xl" />
                    <p className="text-sm text-gray-400 ">Safe</p>
                  </div>
                  <div className="medium flex gap-1 items-center">
                    <div className="h-4 bg-gray-600 w-4 rounded-xl" />
                    <p className="text-sm text-gray-400 ">Untrusted</p>
                  </div>
                </div>
                <GoKebabHorizontal style={{ transform: "rotate(90deg)" }} />
              </div>
              <TiltedBar />
            </div>
          </div>
          <div>
            <div className="flex gap-5 w-full">
              <div className="table1 linear_g_1 flex-[0.3] h-full text-white p-8  outline-none border-none rounded-2xl">
                <div className="top flex justify-between mb-5">
                  <h1 className="text-xl mb-2">Events per user</h1>
                  <GoKebabHorizontal
                    style={{ transform: "rotate(90deg)" }}
                  />{" "}
                </div>
                <div className="tables flex flex-col gap-3">
                  <div className="row flex justify-between items-center border-b-2 border-b-gray-600 pb-2">
                    <img src="./Avatar.png" alt="profile" width={"50px"} />
                    <p className="text-xl text-gray-100">From Alex Manda</p>
                    <div className="status flex gap-2">
                      <p
                        style={{ backgroundColor: "rgba(111, 105, 148, 0.34)" }}
                        className=" p-3 py-2 text-gray-100 rounded-2xl"
                      >
                        200
                      </p>
                      <p
                        style={{ backgroundColor: "rgba(231, 94, 94, 0.34)" }}
                        className=" p-2 text-red-400 rounded-2xl w-12 text-center"
                      >
                        05
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-between items-center border-b-2 border-b-gray-600 pb-2">
                    <img src="./Avatar.png" alt="profile" width={"50px"} />
                    <p className="text-xl text-gray-100">From Alex Manda</p>
                    <div className="status flex gap-2">
                      <p
                        style={{ backgroundColor: "rgba(111, 105, 148, 0.34)" }}
                        className=" p-3 py-2 text-gray-100 rounded-2xl"
                      >
                        200
                      </p>
                      <p
                        style={{ backgroundColor: "rgba(231, 94, 94, 0.34)" }}
                        className=" p-2 text-red-400 rounded-2xl w-12 text-center"
                      >
                        05
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-between items-center border-b-2 border-b-gray-600 pb-2">
                    <img src="./Avatar.png" alt="profile" width={"50px"} />
                    <p className="text-xl text-gray-100">From Alex Manda</p>
                    <div className="status flex gap-2">
                      <p
                        style={{ backgroundColor: "rgba(111, 105, 148, 0.34)" }}
                        className=" p-3 py-2 text-gray-100 rounded-2xl"
                      >
                        200
                      </p>
                      <p
                        style={{ backgroundColor: "rgba(231, 94, 94, 0.34)" }}
                        className=" p-2 text-red-400 rounded-2xl w-12 text-center"
                      >
                        05
                      </p>
                    </div>
                  </div>
                  <div className="row flex justify-between items-center  border-b-2 border-b-gray-600 pb-2">
                    <img src="./Avatar.png" alt="profile" width={"50px"} />
                    <p className="text-xl text-gray-100">From Alex Manda</p>
                    <div className="status flex gap-2">
                      <p
                        style={{ backgroundColor: "rgba(111, 105, 148, 0.34)" }}
                        className=" p-3 py-2 text-gray-100 rounded-2xl"
                      >
                        200
                      </p>
                      <p
                        style={{ backgroundColor: "rgba(231, 94, 94, 0.34)" }}
                        className=" p-2 text-red-400 rounded-2xl w-12 text-center"
                      >
                        05
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table2 linear_g_1 flex-[0.7] p-8  outline-none border-none rounded-2xl">
                <Table className="text-white">
                  <TableHeader>
                    <TableRow className=" hover:bg-transparent">
                      {" "}
                      <TableHead className="text-gray-400">
                        Risk Level
                      </TableHead>
                      <TableHead className="text-gray-400">User</TableHead>
                      <TableHead className="text-gray-400">
                        Destination
                      </TableHead>
                      <TableHead className="text-gray-400">Source</TableHead>
                      <TableHead className="text-gray-400">Time</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {data.map((item, index) => (
                      <TableRow key={index} className="border-b-gray-400">
                        <TableCell>{item.riskLevel}</TableCell>
                        <TableCell>{item.user}</TableCell>
                        <TableCell>{item.destination}</TableCell>
                        <TableCell>{item.source}</TableCell>
                        <TableCell>{item.time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Graph /> */}
    </div>
  );
};

export default DataSecurity;
