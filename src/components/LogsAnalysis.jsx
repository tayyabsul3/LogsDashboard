import React, { useEffect, useState } from "react";
import axios from "axios";
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
  // const [levelOPen, setlevelOPen] = useState(true);
  // const [isNodeNameOpen, setIsNodeNameOpen] = useState(false);
  // const [isIpAddressOpen, setIsIpAddressOpen] = useState(false);
  // const [isMachineTypeOpen, setIsMachineTypeOpen] = useState(false);
  // const [isVendorOpen, setIsVendorOpen] = useState(false);

  const [logs, setLogs] = useState([
    {
      message:
        "Process accessed:\nRuleName: technique_id=T1036,technique_name=Masquerading\nUtcTime: 2024-09-02 12:24:56.224\nSourceProcessGUID: {ba9fb914-5f64-66d5-b203-00000000aa00}\nSourceProcessId: 11840\nSourceThreadId: 11828\nSourceImage: C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nTargetProcessGUID: {ba9fb914-5f60-66d5-a303-00000000aa00}\nTargetProcessId: 3560\nTargetImage: C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nGrantedAccess: 0x1401\nCallTrace: C:\\WINDOWS\\SYSTEM32\\ntdll.dll+9da24|C:\\WINDOWS\\System32\\KERNELBASE.dll+338ae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+27c26bc|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+26b1473|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9f044|UNKNOWN(00007FF67E460BEC)|UNKNOWN(00007FF67E4503FC)|UNKNOWN(00007FF67E17C9EF)|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a59c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a19b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+376941c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+372acf1|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+201cf53|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2055c7b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2052804|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204c20a|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204d312|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1ffd00|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1fbbae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+43bb942|C:\\WINDOWS\\System32\\KERNEL32.DLL+17374|C:\\WINDOWS\\SYSTEM32\\ntdll.dll+4cc91\nSourceUser: DESKTOP-0CI5G2M\\Almadina Computers\nTargetUser: DESKTOP-0CI5G2M\\Almadina Computers",
      timestamp: "2024-09-02T12:24:56.224Z",
      winlog: {
        api: "wineventlog",
        channel: "Microsoft-Windows-Sysmon/Operational",
        computer_name: "DESKTOP-0CI5G2M",
        event_data: {
          CallTrace:
            "C:\\WINDOWS\\SYSTEM32\\ntdll.dll+9da24|C:\\WINDOWS\\System32\\KERNELBASE.dll+338ae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+27c26bc|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+26b1473|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9f044|UNKNOWN(00007FF67E460BEC)|UNKNOWN(00007FF67E4503FC)|UNKNOWN(00007FF67E17C9EF)|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a59c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a19b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+376941c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+372acf1|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+201cf53|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2055c7b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2052804|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204c20a|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204d312|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1ffd00|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1fbbae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+43bb942|C:\\WINDOWS\\System32\\KERNEL32.DLL+17374|C:\\WINDOWS\\SYSTEM32\\ntdll.dll+4cc91",
          GrantedAccess: "0x1401",
          SourceUser: "DESKTOP-0CI5G2M\\Almadina Computers",
          TargetImage:
            "C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
          TargetProcessGUID: "{ba9fb914-5f60-66d5-a303-00000000aa00}",
          TargetProcessId: "3560",
          TargetUser: "DESKTOP-0CI5G2M\\Almadina Computers",
        },
        event_id: "10",
        opcode: "Info",
        process: {
          pid: 4988,
          thread: {
            id: 6368,
          },
        },
        provider_guid: "{5770385f-c22a-43e0-bf4c-06f5698ffbd9}",
        provider_name: "Microsoft-Windows-Sysmon",
        record_id: "721069",
        task: "Process accessed (rule: ProcessAccess)",
        user: {
          domain: "NT AUTHORITY",
          identifier: "S-1-5-18",
          name: "SYSTEM",
          type: "User",
        },
        version: 3,
      },
    },
    {
      message:
        "Process accessed:\nRuleName: technique_id=T1036,technique_name=Masquerading\nUtcTime: 2024-09-02 12:24:57.619\nSourceProcessGUID: {ba9fb914-5f6c-66d5-dd03-00000000aa00}\nSourceProcessId: 6340\nSourceThreadId: 8976\nSourceImage: C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nTargetProcessGUID: {ba9fb914-5f60-66d5-a303-00000000aa00}\nTargetProcessId: 3560\nTargetImage: C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe\nGrantedAccess: 0x1401\nCallTrace: C:\\WINDOWS\\SYSTEM32\\ntdll.dll+9da24|C:\\WINDOWS\\System32\\KERNELBASE.dll+338ae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+27c26bc|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+26b1473|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9f044|UNKNOWN(00007FF67E11B8A3)|UNKNOWN(00007FF67E09525F)|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a59c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a19b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+376941c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+372acf1|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+201cf53|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2055c7b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2052804|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204c20a|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204d312|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1ffd00|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1fbbae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+43bb942|C:\\WINDOWS\\System32\\KERNEL32.DLL+17374|C:\\WINDOWS\\SYSTEM32\\ntdll.dll+4cc91\nSourceUser: DESKTOP-0CI5G2M\\Almadina Computers\nTargetUser: DESKTOP-0CI5G2M\\Almadina Computers",
      timestamp: "2024-09-02T12:24:57.619Z",
      winlog: {
        api: "wineventlog",
        channel: "Microsoft-Windows-Sysmon/Operational",
        computer_name: "DESKTOP-0CI5G2M",
        event_data: {
          CallTrace:
            "C:\\WINDOWS\\SYSTEM32\\ntdll.dll+9da24|C:\\WINDOWS\\System32\\KERNELBASE.dll+338ae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+27c26bc|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+26b1473|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9f044|UNKNOWN(00007FF67E11B8A3)|UNKNOWN(00007FF67E09525F)|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a59c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+3c9a19b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+376941c|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+372acf1|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+201cf53|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2055c7b|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+2052804|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204c20a|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+204d312|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1ffd00|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+1fbbae|C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe+43bb942|C:\\WINDOWS\\System32\\KERNEL32.DLL+17374|C:\\WINDOWS\\SYSTEM32\\ntdll.dll+4cc91",
          GrantedAccess: "0x1401",
          SourceUser: "DESKTOP-0CI5G2M\\Almadina Computers",
          TargetImage:
            "C:\\Users\\Almadina Computers\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe",
          TargetProcessGUID: "{ba9fb914-5f60-66d5-a303-00000000aa00}",
          TargetProcessId: "3560",
          TargetUser: "DESKTOP-0CI5G2M\\Almadina Computers",
        },
        event_id: "10",
        opcode: "Info",
        process: {
          pid: 4988,
          thread: {
            id: 6368,
          },
        },
        provider_guid: "{5770385f-c22a-43e0-bf4c-06f5698ffbd9}",
        provider_name: "Microsoft-Windows-Sysmon",
        record_id: "721070",
        task: "Process accessed (rule: ProcessAccess)",
        user: {
          domain: "NT AUTHORITY",
          identifier: "S-1-5-18",
          name: "SYSTEM",
          type: "User",
        },
        version: 3,
      },
    },
  ]);

  const [Data, setData] = useState([]);
  const [alerts, setalerts] = useState([]);
  const [timeRange, setTimeRange] = useState("1h");
  const [expandedLogs, setExpandedLogs] = useState({});
  const [filteredLogs, setFilteredLogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const fetchLogs = () => {
    console.log("Fetching logs...");
    setLoading(true);
    axios
      .get("http://20.244.86.188:5000/api/logs?time_range=32m")
      .then((response) => {
        console.log("Data Fetched..");
        console.log(response.data);
        setData(response.data[1]);
        setLogs(response.data[0]);
        setFilteredLogs(response.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        setLoading(false);
      });

    //RUles Endpoint Request
  };
  function checkRules() {
    console.log("Checking rules...");
    axios
      .get("http://20.244.86.188:5000/rule_check", {
        headers: {
          "ngrok-skip-browser-warning": "69420",
        },
      })
      .then((response) => {
        console.log("Alerts Fetched..");
        console.log(response.data);
      })
      .catch((error) => console.error("There was an error!", error));
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
    if (logs.length === 2 || logs.length < 2) {
      fetchLogs();
      checkRules();
    }
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
