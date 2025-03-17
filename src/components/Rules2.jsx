import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import NewTicketModal from "./ActionModal";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CommandComp } from "./Reusables/Command";

const Rules2 = () => {
  const [inputValues, setInputValues] = useState({});
  const [inputsReadonly, setInputsReadonly] = useState(true);
  const [extractedValues, setExtractedValues] = useState(null);
  const [searchResult, setSearchResult] = useState(null); // Fixed typo
  const [logMessage, setLogMessage] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const { logData } = useSelector((state) => state.tab);

  const logFields = [
    { label: "Timestamp", id: "timestamp" },
    { label: "Hostname", id: "hostname" },

    { label: "User name", id: "username" },
    { label: "Event ID", id: "eventId" },
    { label: "Log Source", id: "logSource" },
    { label: "Task Category", id: "taskCategory" },
    { label: "Source Port", id: "sourcePort" },
    { label: "Protocol", id: "protocol" },
    { label: "Severity", id: "severity" }, // Removed duplicate
    { label: "Source IP", id: "sourceIp" },
    { label: "Source Destination", id: "sourceDestination" },
    { label: "Dummy", id: "dummy" },
  ];

  const handleInputChange = (id, value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  const renderObject = (obj) => {
    if (obj && typeof obj === "object") {
      return (
        <pre className="text-wrap text-gray-300">
          {JSON.stringify(obj, null, 2)}
        </pre>
      );
    } else {
      return <p className="text-wrap">{obj || "n/A"}</p>;
    }
  };

  function extractRelevantData(event) {
    if (!event) return {}; // Return an empty object if event is null or undefined

    const {
      timestamp = "n/A",
      winlog: {
        computer_name: hostname = "n/A",
        user: { name: userName = "n/A" } = {},
        event_id: eventID = "n/A",
        task: taskCategory = "n/A",
        provider_name: logSource = "n/A",
        source_ip: sourceIP = "n/A",
        source_port: sourcePort = "n/A",
        protocol = "n/A",
      } = {},
    } = event;

    return {
      hostname,
      username: userName,
      Severity: "Info", // Assuming severity is not provided; adjust as needed
      sourceIp: sourceIP,
      sourceDestination: "n/A", // Not provided in the example
      eventId: eventID,
      taskCategory,
      sourcePort,
      protocol,
      logSource,
      timestamp,
      fullWinlog: event.winlog || {}, // Default to empty object if winlog is missing
      eventData: event.winlog?.event_data || {}, // Default to empty object if event_data is missing
    };
  }

  function searchNestedObject(obj, searchValue) {
    let results = [];

    function search(o) {
      for (const [key, value] of Object.entries(o)) {
        if (
          key.includes(searchValue) ||
          (typeof value === "string" && value.includes(searchValue))
        ) {
          results.push({ [key]: value });
        }
        if (typeof value === "object" && value !== null) {
          search(value);
        }
      }
    }

    search(obj);
    return results.length > 0 ? results : "No data found";
  }

  useEffect(() => {
    if (!logData) {
      // If logData is null or undefined, set default values
      setLogMessage(null);
      setExtractedValues({});
      const initialValues = logFields.reduce((acc, field) => {
        acc[field.id] = "n/A";
        return acc;
      }, {});
      setInputValues(initialValues);
      return;
    }

    setLogMessage(logData);

    const result = extractRelevantData(logData);
    setExtractedValues(result);
    const initialValues = logFields.reduce((acc, field) => {
      acc[field.id] = result[field.id] || "n/A";
      return acc;
    }, {});
    setInputValues(initialValues);
  }, [logData]);

  useEffect(() => {
    if (logMessage && searchInput) {
      const result = searchNestedObject(logMessage, searchInput);
      setSearchResult(result);
    } else {
      setSearchResult(null);
    }
  }, [searchInput, logMessage]);

  return (
    <div className="body py-5 px-10 text-sm flex flex-col gap-5 h-[85vh] overflow-y-auto">
      <div className="linear_g_1 p-5 px-10 flex-col shadow-lg text-white flex items-center justify-between rounded-2xl gap-5">
        <div className="top mb-5 flex justify-between w-full items-center">
          <h1 className="text-white text-2xl mt-5">Highlights</h1>
          <Dialog>
            <DialogTrigger
              style={{ backgroundColor: "rgba(231, 94, 94, 0.34)" }}
              className="w-fit text-red-600 rounded-xl p-2.5 px-16"
            >
              Action
            </DialogTrigger>
            <DialogContent className="w-fit px-0 border-none text-white bg-[rgba(11,20,55,1)]">
              <DialogTitle className="pl-5">New Ticket</DialogTitle>
              <div className="h-[2px] mt-2 bg-blue-950 w-full" />
              <NewTicketModal />
            </DialogContent>
          </Dialog>
        </div>
        <div className="bottom flex gap-7 flex-wrap justify-start items-start">
          {logFields.map((item, index) => (
            <div
              key={index}
              className="input text-gray-400 whitespace-nowrap flex-[0.33] text-sm flex flex-col justify-center items-center gap-2"
            >
              <h1>{item.label}</h1>
              <input
                type="text"
                className="text-left min-w-[300px] py-2 px-5 whitespace-nowrap border backdrop-blur-3xl rounded-xl text-xs"
                style={{
                  backgroundColor: "rgba(27, 37, 75, 1)",
                  backdropFilter: "blur()",
                  border: "1px solid rgba(48, 50, 102, 1)",
                }}
                value={inputValues[item.id] || "n/A"}
                readOnly={inputsReadonly}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex gap-10 text-xs rounded-xl max-h-[100vh] linear_g_1 text-white p-5  ">
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-lg">Event Data</h1>
          <div
            className="max-h-[350px] rounded-lg p-2 max-w-[450px] overflow-auto px-5 "
            style={{
              backgroundColor: "rgba(27, 37, 75, 1)",
              backdropFilter: "blur()",
              border: "1px solid rgba(48, 50, 102, 1)",
            }}
          >
            {renderObject(extractedValues?.eventData)}
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-lg">Log Message</h1>
          <div
            className="h-[350px]  space-y-2 rounded-lg p-2 max-w-[450px] "
            style={{
              backgroundColor: "rgba(27, 37, 75, 1)",
              backdropFilter: "blur()",
              border: "1px solid rgba(48, 50, 102, 1)",
            }}
          >
            <div className="search flex gap-2 w-full px-2 py-2  text-gray-500  rounded-xl items-center">
              <CommandComp setSearchinput={setSearchInput} />
            </div>
            <div className="w-full  h-[90%] overflow-auto">
              {/* {renderObject(logMessage)} */}

              {searchResult
                ? renderObject(searchResult[0])
                : renderObject(logMessage)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="text-lg">Winlog</h1>
          <div
            className="max-h-[350px] rounded-lg p-2 max-w-[450px] overflow-auto"
            style={{
              backgroundColor: "rgba(27, 37, 75, 1)",
              backdropFilter: "blur()",
              border: "1px solid rgba(48, 50, 102, 1)",
            }}
          >
            {renderObject(extractedValues?.fullWinlog)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules2;
