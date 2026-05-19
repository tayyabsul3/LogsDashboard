import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { defaultRules } from "@/lib/mockData";

const Rules = () => {
  const [rules, setrules] = useState([]);
  const [formData, setFormData] = useState({
    DPort: "",
    SIP: "",
    Description: "",
    SPort: "",
    ruleName: "",
    DIP: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const initialFields = [
    { key: "ruleName", placeholder: "Rules Name" },
    { key: "SIP", placeholder: "Source IP" },
    { key: "SPort", placeholder: "Source Port" },
    { key: "DIP", placeholder: " Destination IP" },
    { key: "DPort", placeholder: " Destination Port" },
    { key: "Description", placeholder: "Description" },
  ];

  function sendRules() {
    if (!formData.ruleName) {
      alert("Rule Name is required!");
      return;
    }

    const newRule = {
      RuleName: formData.ruleName,
      source_ip: formData.SIP || "Any",
      source_port: formData.SPort || "Any",
      destination_ip: formData.DIP || "Any",
      destination_port: formData.DPort || "Any",
      protocol: "tcp",
      Description: formData.Description || "Custom defined rule."
    };

    const updatedRules = [...rules, newRule];
    setrules(updatedRules);
    localStorage.setItem("dashboard_rules", JSON.stringify(updatedRules));

    // Reset Form Data
    setFormData({
      DPort: "",
      SIP: "",
      Description: "",
      SPort: "",
      ruleName: "",
      DIP: "",
    });

    alert("Rule Added Successfully!");
  }

  function getAllRules() {
    const localRules = localStorage.getItem("dashboard_rules");
    if (localRules) {
      setrules(JSON.parse(localRules));
    } else {
      localStorage.setItem("dashboard_rules", JSON.stringify(defaultRules));
      setrules(defaultRules);
    }
  }

  function handleRuleDeletion(ruleToDelete) {
    const updatedRules = rules.filter(r => r.RuleName !== ruleToDelete.RuleName);
    setrules(updatedRules);
    localStorage.setItem("dashboard_rules", JSON.stringify(updatedRules));
    alert(`Rule "${ruleToDelete.RuleName}" deleted successfully.`);
  }

  useEffect(() => {
    getAllRules();
  }, []);

  return (
    <div className="body py-5 px-10 flex text-sm flex-col gap-5 h-[85vh] overflow-y-auto">
      <h1 className="text-white text-2xl  mt-5">Rules</h1>
      <div className="linear_g_1 py-5 shadow-lg px-5 text-white flex  justify-between rounded-2xl gap-5">
        <div className="inputFIelds flex flex-wrap gap-5">
          {initialFields.map(({ key, placeholder }) => (
            <div key={key}>
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-[300px] text-left pl-5 p-2.5 whitespace-nowrap border backdrop-blur-3xl rounded-xl"
                style={{
                  backgroundColor: "rgba(27, 37, 75, 1)",
                  backdropFilter: "blur()",
                  border: "1px solid rgba(48, 50, 102, 1)",
                }}
              />
            </div>
          ))}
        </div>
        <button
          onClick={sendRules}
          style={{ backgroundColor: "rgba(231, 94, 94, 0.34)" }}
          className="w-fit h-fit text-red-600 rounded-xl p-2.5 px-16"
        >
          Add
        </button>
      </div>
      <div className="flex-1 rounded-xl linear_g_1 text-white p-5 overflow-auto  max-h-[60vh]">
        <Table className="text-white">
          <TableHeader>
            <TableRow className="bg-transparent hover:bg-transparent cursor-pointer ">
              <TableHead>No</TableHead>
              <TableHead>Rule Name</TableHead>
              <TableHead>Source IP</TableHead>
              <TableHead>Source Port</TableHead>
              <TableHead>Destination IP</TableHead>
              <TableHead>Destination Port</TableHead>
              <TableHead>Protocol</TableHead>
              <TableHead>Description</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rules.map((rule, index) => (
              <TableRow
                key={index}
                className="bg-transparent hover:bg-neutral-700"
              >
                <TableCell>{index + 1}</TableCell>

                <TableCell>{rule.RuleName || "N/A"}</TableCell>
                <TableCell>{rule.source_ip || "N/A"}</TableCell>
                <TableCell>{rule.source_port || "N/A"}</TableCell>
                <TableCell>{rule.destination_ip || "N/A"}</TableCell>
                <TableCell>{rule.destination_port || "N/A"}</TableCell>
                <TableCell>{rule.protocol || "N/A"}</TableCell>

                <TableCell>
                  <p className="w-60 text-wrap">{rule.Description || "N/A"}</p>
                </TableCell>

                <TableCell>
                  <button
                    onClick={() => {
                      handleRuleDeletion(rule);
                    }}
                    className="border-red-400 border-2 w-fit h-fit text-red-500 rounded-xl  p-2  "
                  >
                    Details
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Rules;
