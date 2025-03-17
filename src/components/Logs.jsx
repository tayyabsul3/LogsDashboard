import React, { useState } from "react";
import { Graphlogs } from "./Graphs/GraphLogs";
import { DonutofLogs } from "./Graphs/DonutLogs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
const LogsComponent = () => {
  return (
    <div className="body py-5 px-16 flex flex-col gap-5 h-[85vh] overflow-y-auto">
      <h1 className="text-white text-3xl  mt-5">Logs</h1>
      <div className="linear_g_1 flex justify-between rounded-2xl py-5 text-white">
        <div className="total flex-[0.3] flex flex-col justify-center items-center">
          <h2 className="text-xl">Total</h2>
          <h1 className="text-2xl text-blue-400">2345678</h1>
        </div>
        <div className="level12 flex-[0.25] flex flex-col justify-center items-center border-l-2 border-l-gray-500">
          <h2 className="text-xl">Level 12 & above alerts</h2>
          <h1 className="text-2xl text-blue-400">49</h1>
        </div>
        <div className="authFailure  flex-[0.25] flex flex-col justify-center items-center border-l-2 border-l-gray-500">
          <h2 className="text-xl"> Authentication Failure</h2>
          <h1 className="text-2xl text-blue-400">3456</h1>
        </div>
        <div className="authSuccess  flex-[0.25] flex flex-col justify-center items-center  border-l-2 border-l-gray-500">
          <h2 className="text-xl">Authentication Success</h2>
          <h1 className="text-2xl text-blue-400">51</h1>
        </div>
      </div>
      <div className="graphs flex gap-5">
        <div className="flex-[0.7]">
          <Graphlogs />
        </div>
        <div className="linear_g_1 logs flex-[0.3] p-5 rounded-2xl text-white flex flex-col gap-5">
          <h1 className="text-3xl m-10 px-5">Average logs per hour</h1>
          <div className="bottom flex justify-around items-center px-10">
            <div className="left">
              <h1 className="text-3xl">10</h1>
              <p className="text-lg text-gray-300">log per hour</p>
            </div>
            <div className="right">
              <DonutofLogs />
            </div>
          </div>
        </div>
      </div>
      <div className="linear_g_1 table p-5 rounded-2xl ">
        <Table className="text-white">
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-400">Magnitude</TableHead>
              <TableHead className="text-gray-400">ID</TableHead>
              <TableHead className="text-gray-400">Description</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Type</TableHead>
              <TableHead className="text-gray-400">Offense Source</TableHead>
              <TableHead className="text-gray-400">Event Count</TableHead>
              <TableHead className="text-gray-400">Source IP</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-b-gray-600">
              <TableCell>3</TableCell>
              <TableCell>110</TableCell>
              <TableCell>Multiple Login</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Destination IP</TableCell>
              <TableCell>10.4.9.10</TableCell>
              <TableCell>146</TableCell>
              <TableCell>INT 172.18.4.132</TableCell>
            </TableRow>
            <TableRow className="border-b-gray-600">
              <TableCell>3</TableCell>
              <TableCell>110</TableCell>
              <TableCell>Multiple Login</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Destination IP</TableCell>
              <TableCell>10.4.9.10</TableCell>
              <TableCell>146</TableCell>
              <TableCell>INT 172.18.4.132</TableCell>
            </TableRow>
            <TableRow className="border-b-gray-600">
              <TableCell>3</TableCell>
              <TableCell>110</TableCell>
              <TableCell>Multiple Login</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Destination IP</TableCell>
              <TableCell>10.4.9.10</TableCell>
              <TableCell>146</TableCell>
              <TableCell>INT 172.18.4.132</TableCell>
            </TableRow>
            <TableRow className="border-b-gray-600">
              <TableCell>3</TableCell>
              <TableCell>110</TableCell>
              <TableCell>Multiple Login</TableCell>
              <TableCell>Open</TableCell>
              <TableCell>Destination IP</TableCell>
              <TableCell>10.4.9.10</TableCell>
              <TableCell>146</TableCell>
              <TableCell>INT 172.18.4.132</TableCell>
            </TableRow>
            {/* Add more rows as needed */}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LogsComponent;
