import React, { useState } from "react";

// Example object for generating suggestions
const exampleObject = {
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
};

export function CommandComp({ setSearchinput }) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // Function to extract all keys from a nested object
  const extractKeys = (obj) => {
    const keys = [];
    const recurse = (o) => {
      Object.keys(o).forEach((key) => {
        keys.push(key);
        if (typeof o[key] === "object" && o[key] !== null) {
          recurse(o[key]);
        }
      });
    };
    recurse(obj);
    return keys;
  };

  const keys = extractKeys(exampleObject);

  // Filter keys based on input value
  const filteredKeys = inputValue
    ? keys.filter((key) => key.toLowerCase().includes(inputValue.toLowerCase()))
    : keys;

  const handleItemClick = (item) => {
    console.log("Item clicked:", item); // Improved logging
    setInputValue(item);
    setSearchinput(item);
    setIsFocused(false); // Hide the dropdown immediately
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setIsFocused(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && filteredKeys.length > 0) {
      handleItemClick(filteredKeys[0]);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border-none outline-none rounded-md"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)} // Delay to allow click event
        onKeyDown={handleKeyDown}
      />

      <div
        className={`absolute top-full opacity-0 scale-0 ${
          isFocused ? "scale-100 opacity-100" : ""
        } left-0 max-h-[20vh] overflow-auto w-full mt-1 border border-gray-300 transition-all duration-75 bg-white rounded-md shadow-lg z-10`}
      >
        <div className="p-2">
          {filteredKeys.length === 0 ? (
            <div className="p-2 text-gray-500">Not found</div>
          ) : (
            filteredKeys.map((item, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  console.log("this item");
                  handleItemClick(item);
                }}
              >
                {item}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
