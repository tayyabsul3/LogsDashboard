import React, { useEffect, useState } from "react";
import { mockLogs, mockGraphData } from "@/lib/mockData";
import { LuFilter } from "react-icons/lu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraphofLA } from "./Graphs/GraphofLA";
import { BsSearch } from "react-icons/bs";
import { CalendarRange } from "lucide-react";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { IoReload } from "react-icons/io5";
import { updateTab } from "./redux/States/TabSlice";
import { useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";

const LogsAnalysis = () => {
  const [selectedLast, setSelectedLast] = useState("last");
  const [selectedTime, setSelectedTime] = useState(15);
  const [selectedFormat, setSelectedFormat] = useState("minutes");
  const [isLogTypeOpen, setIsLogTypeOpen] = useState(false);

  const [logs, setLogs] = useState(mockLogs);
  const [Data, setData] = useState(mockGraphData);
  const [alerts, setalerts] = useState([]);
  const [timeRange, setTimeRange] = useState("1h");
  const [expandedLogs, setExpandedLogs] = useState({});
  const [filteredLogs, setFilteredLogs] = useState(mockLogs);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const fetchLogs = () => {
    console.log("Simulating logs fetch...");
    setLoading(true);
    setTimeout(() => {
      setData(mockGraphData);
      setLogs(mockLogs);
      // Re-apply filter if any search exists
      if (searchTerm) {
        const filtered = mockLogs.filter(
          (log) =>
            log.message.toLowerCase().includes(searchTerm) ||
            log.timestamp.toLowerCase().includes(searchTerm)
        );
        setFilteredLogs(filtered);
      } else {
        setFilteredLogs(mockLogs);
      }
      setLoading(false);
      console.log("Mock data set successfully.");
    }, 450);
  };

  function checkRules() {
    console.log("Local rules check triggered.");
    // Locally check for matching log rules
    const localRules = JSON.parse(localStorage.getItem("dashboard_rules") || "[]");
    const activeAlerts = JSON.parse(localStorage.getItem("dashboard_alerts") || "[]");
    
    let alertAdded = false;
    localRules.forEach(rule => {
      mockLogs.forEach(log => {
        // Simple heuristic: If log message contains the rule criteria or source IP
        const matchesIP = rule.source_ip === "Any" || log.message.includes(rule.source_ip);
        const matchesName = log.message.toLowerCase().includes(rule.ruleName?.toLowerCase() || "");
        
        if (matchesIP && matchesName) {
          const alreadyExists = activeAlerts.some(a => a.rule.RuleName === rule.ruleName && a.log.message === log.message);
          if (!alreadyExists) {
            activeAlerts.push({
              rule: { RuleName: rule.ruleName },
              log: { message: log.message }
            });
            alertAdded = true;
          }
        }
      });
    });

    if (alertAdded) {
      localStorage.setItem("dashboard_alerts", JSON.stringify(activeAlerts));
    }
  }

  // Handle search to filter logs based on the 'message' and 'timestamp' fields
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = logs.filter(
      (log) =>
        log.message.toLowerCase().includes(term) || // Search by 'message' field
        log.timestamp.toLowerCase().includes(term) // Search by 'timestamp' field
    );
    setFilteredLogs(filtered);
  };

  useEffect(() => {
    // Initial load and rules simulation
    checkRules();
  }, [timeRange]);

  const Timeline = ["Last", "Previous"];
  const TimeType = ["minutes", "hours", "days", "weeks", "months", "years"];

  const handleApply = () => {
    const message = `Selected Last: ${selectedLast}, Selected Time: ${selectedTime}, Selected Format: ${selectedFormat}`;
    alert(message);
  };

  const toggleTextExpansion = (id) => {
    setExpandedLogs((prevExpandedLogs) => ({
      ...prevExpandedLogs,
      [id]: !prevExpandedLogs[id],
    }));
  };

  // Function to highlight keys in the winlog object
  const highlightKeywords = (text) => {
    const keywords = [
      "api",
      "channel",
      "computer_name",
      "event_id",
      "opcode",
      "pid",
      "id",
      "provider_guid",
      "provider_name",
      "record_id",
      "task",
      "domain",
      "identifier",
      "name",
      "type",
      "version",
    ]; // Define keys to highlight

    const regex = new RegExp(`(${keywords.join("|")})`, "gi"); // Create a regex to match keys
    return text.split(regex).map((part, index) =>
      keywords.includes(part.trim()) ? (
        <span key={index} className="text-blue-500 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  const handlelogClick = (log) => {
    // Dispatch an action to update the tab with additional details
    dispatch(
      updateTab({
        tab: 5,
        logData: log,
      })
    );
  };

  return (
    <div className="body py-5 px-10 text-sm flex flex-col gap-5 h-[85vh] overflow-y-auto">
      <div className="linear_g_1 p-2 px-5 text-white flex items-center justify-center rounded-2xl gap-5">
        {/* Search Section */}
        <div className="search flex gap-2 justify-between w-full p-4 mb-2 border-blue-600 text-gray-500 border-2 rounded-xl items-center">
          <input
            type="search"
            className="bg-transparent px-2 flex-1 text-medium outline-none border-none text-xs"
            placeholder="Search by keyword"
            value={searchTerm}
            onChange={handleSearch}
          />
          <BsSearch size={20} />
        </div>
        <div className="flex items-center gap-5">
          <Popover>
            <PopoverTrigger>
              <button
                className="flex gap-2 justify-between py-3.5 mb-2 p-4 rounded-xl font-semibold text-white-500 active:bg-gray-200 px-5 border-2 border-blue-500"
                style={{ backgroundColor: "#2B3566" }}
              >
                <span>
                  <CalendarRange />
                </span>
                <span>Date</span>
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-fit">
              <div className="space-y-3">
                <h1>Quick Select</h1>
                <div className="range flex gap-5">
                  <div className="last">
                    <Select
                      onValueChange={(item) => {
                        setSelectedLast(item);
                      }}
                    >
                      <SelectTrigger className="px-5 w-32">
                        <SelectValue placeholder="Last" />
                      </SelectTrigger>
                      <SelectContent>
                        {Timeline.map((item, index) => (
                          <SelectItem key={index} value={item}>
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <input
                    type="number"
                    name="time"
                    id="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="px-5 w-20 border-2 rounded-md border-blue-500"
                  />
                  <div className="timeformat">
                    <div className="last">
                      <Select
                        onValueChange={(item) => {
                          setSelectedFormat(item);
                        }}
                      >
                        <SelectTrigger className="px-5 w-32">
                          <SelectValue placeholder="minutes" />
                        </SelectTrigger>
                        <SelectContent>
                          {TimeType.map((item) => (
                            <SelectItem key={item} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <button
                    onClick={handleApply}
                    className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white px-5 active:bg-sky-500"
                  >
                    Apply
                  </button>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          <button
            className="flex gap-2 justify-between px-4 py-3.5 mb-2 hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out active:bg-blue-700 active:scale-105 border-blue-500 text-blue-500 border-2 rounded-xl items-center"
            onClick={fetchLogs}
          >
            <span>
              <IoReload />
            </span>
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div className="graphs flex flex-col gap-5">
        <div className="flex-1">
          {loading ? (
            <Card className="bg-transparent text-white border-none linear_g_1 rounded-2xl px-5">
              <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
                <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-5 sm:py-6">
                  <CardTitle className="">
                    <p className="font-normal text-lg"> Logs Viewer</p>
                  </CardTitle>
                </div>
              </CardHeader>
              <div className="flex justify-center align-center py-6">
                <ClipLoader color="#3498db" size={50} />
              </div>
            </Card>
          ) : (
            <GraphofLA data={Data} />
          )}
        </div>
      </div>

      {/* Filters and Table */}
      <div className="flex gap-5 flex-col xl:flex-row ">
        {/* Main Filters */}
        <div className="flex-[0.2] flex flex-col gap-3 linear_g_1 text-white p-5 rounded-2xl">
          <div className="flex items-center gap-2">
            <LuFilter size={20} />
            <h1 className="text-lg">Filter</h1>
          </div>
          {/* Search Input */}
          <div className="search flex gap-2 w-full px-2 py-2 border-blue-950 text-gray-500 border-2 rounded-xl items-center">
            <input
              type="text"
              className="bg-transparent px-2 text-medium outline-none border-none"
              placeholder="Search"
            />
            <BsSearch size={20} />
          </div>

          {/* Filters List */}
          <div className="filters text-blue-100">
            <div className="w-64 p-4">
              {/* Log Type Filter */}
              <div className="mb-4">
                <h2
                  className="text-base flex items-center gap-5 cursor-pointer"
                  onClick={() => setIsLogTypeOpen(!isLogTypeOpen)}
                >
                  {isLogTypeOpen ? (
                    <IoMdArrowDropdown size={22} />
                  ) : (
                    <IoMdArrowDropright size={22} />
                  )}
                  Log Type (1)
                </h2>
                {isLogTypeOpen && (
                  <div className="mt-2 w-[60%] whitespace-nowrap mx-auto animate-accordion-down">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Alert</span>
                      <span className="ml-auto text-sm">12</span>
                    </label>
                    <label className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked
                      />
                      <span className="ml-2">Debug</span>
                      <span className="ml-auto text-sm">9</span>
                    </label>
                  </div>
                )}
              </div>
              {/* Additional filters like Level, Node Name, etc. */}
              {/* ... other filter code remains unchanged ... */}
            </div>
          </div>
        </div>

        {/* Logs Table */}
        <div className="flex-1  rounded-xl linear_g_1 text-white p-5 overflow-auto  w-full max-h-[50vh]">
          <Table>
            <TableHeader>
              <TableRow className="bg-transparent hover:bg-neutral-950">
                <TableHead>Date and Time</TableHead>
                <TableHead>Message</TableHead>
                <TableHead>View Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                // Show loading indicator when data is being fetched
                <TableRow>
                  <TableCell colSpan="3" className="text-center">
                    <div className="flex justify-center items-center">
                      <ClipLoader color="#3B82F6" size={50} />
                      <span className="ml-4">Loading logs...</span>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                // Render the logs once they are loaded
                filteredLogs.map((log, index) => (
                  <TableRow
                    key={index}
                    className="bg-transparent text-wrap hover:bg-neutral-700"
                  >
                    <TableCell>{log.timestamp}</TableCell>
                    <TableCell>
                      <p className="text-wrap">
                        {expandedLogs[index]
                          ? log.message
                          : `${log.message.slice(0, 400)}...`}
                        <button
                          onClick={() => toggleTextExpansion(index)}
                          className="text-blue-500 hover:underline ml-2"
                        >
                          {expandedLogs[index] ? "Show Less" : "Show More"}
                        </button>
                      </p>
                    </TableCell>
                    <TableCell>
                      <button
                        onClick={() => {
                          handlelogClick(log);
                        }}
                        className="border-green-400 border-2 w-fit h-fit text-green-500 rounded-xl p-2"
                      >
                        Details
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default LogsAnalysis;
