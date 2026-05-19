import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { defaultAlerts } from "@/lib/mockData";

const Alerts = () => {
  const [alerts, setalerts] = useState([]);

  function getAllalerts() {
    const localAlerts = localStorage.getItem("dashboard_alerts");
    if (localAlerts) {
      setalerts(JSON.parse(localAlerts));
    } else {
      localStorage.setItem("dashboard_alerts", JSON.stringify(defaultAlerts));
      setalerts(defaultAlerts);
    }
  }

  function handleRuleDeletion() {
    console.log("Rule Deletion");
  }
  
  useEffect(() => {
    getAllalerts();
  }, []);

  return (
    <div className="body py-5 px-10 flex text-sm flex-col gap-5 h-[85vh] overflow-y-auto">
      <h1 className="text-white text-2xl  mt-5">Alerts</h1>

      <div className="flex-1 rounded-xl linear_g_1 text-white p-5 overflow-auto  max-h-[60vh]">
        <Table className="text-white">
          <TableHeader>
            <TableRow className="bg-transparent hover:bg-transparent cursor-pointer ">
              <TableHead>No</TableHead>
              <TableHead>Rule Name</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {alerts.map((rule, index) => (
              <TableRow
                key={index}
                className="bg-transparent hover:bg-neutral-700"
              >
                <TableCell>{index + 1}</TableCell>

                <TableCell>{rule.rule.RuleName || "N/A"}</TableCell>

                <TableCell>
                  <p className=" text-wrap">{rule.log.message || "N/A"}</p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Alerts;
