import "./App.css";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { BsBell, BsChat, BsFillCreditCardFill } from "react-icons/bs";
import { HiWrench } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoRocketSharp } from "react-icons/io5";
import { 
  FaArrowUpLong, 
  FaNoteSticky, 
  FaUser,
  FaChartPie,
  FaTerminal,
  FaUserShield,
  FaShieldHalved,
  FaBook,
  FaTriangleExclamation,
  FaChartLine
} from "react-icons/fa6";
import { SiClarifai } from "react-icons/si";

import {
  RiArrowDropDownLine,
  RiExpandLeftLine,
  RiExpandRightLine,
} from "react-icons/ri";
import Dashboard from "./components/Dashboard";
import Dashboards2 from "./components/Dashboards2";
import LogsAnalysis from "./components/LogsAnalysis";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Rules from "./components/Rules";
import Rules2 from "./components/Rules2";
import { useDispatch, useSelector } from "react-redux";
import { updateTab } from "./components/redux/States/TabSlice";
import Alerts from "./components/Alerts";
import UserModelOverview from "./components/UserModeling/UserModelingDashboard/UserModelingDashboard";
import { toast } from "./hooks/use-toast";
// import OverallRiskScoreChart from "./components/UserModeling/Analytics/testChart";
import { UserModelingActivityOverTimeChart } from "./components/UserModeling/Analytics/testChart";
function App2() {
  const [upperActiveTab, setUpperActiveTab] = useState(0); // State for upper buttons
  const [lowerActiveTab, setLowerActiveTab] = useState(null); // State for lower buttons
  const [expanded, setExpanded] = useState(false);

  // Array for upper buttons data
  const dispatch = useDispatch();
  const { tab } = useSelector((state) => state.tab);
  const upperButtons = [
    {
      text: "Main Dashboard",
      icon: <IoIosHome size={15} />,
      component: <Dashboard />,
    },
    {
      text: "Threat Analytics (DARC)",
      icon: <FaChartPie size={15} />,
      component: <Dashboards2 />,
    },
    {
      text: "Real Time Logs",
      icon: <FaTerminal size={15} />,
      component: <LogsAnalysis />,
    },
    {
      text: "User Behavior Analytics",
      icon: <FaUserShield size={15} />,
      component: <UserModelOverview />,
    },
    {
      text: "Correlation Rules",
      icon: <FaShieldHalved size={15} />,
      component: <Rules />,
    },
    {
      text: "Log Details",
      icon: <FaBook size={15} />,
      component: <Rules2 />,
    },
    {
      text: "Security Alerts",
      icon: <FaTriangleExclamation size={15} />,
      component: <Alerts />,
    },
    {
      text: "Activity Over Time",
      icon: <FaChartLine size={15} />,
      component: (
        <div className="p-10">
          <UserModelingActivityOverTimeChart />
        </div>
      ),
    },
  ];

  // Array for lower buttons data
  const lowerButtons = [
  ];

  function handleExpansion() {
    setExpanded(!expanded);
  }

  const getButtonClass = (isActive, expand) =>
    `flex items-center text-white text-[0.6rem] 2xl:text-xs py-2.5 px-3 rounded-xl w-full hover:bg-white/5 transition-all duration-200 ${
      isActive ? "nav_btn_bg font-semibold shadow-inner" : "bg-transparent"
    } ${expand ? "gap-0 justify-center" : "gap-3"}`;

  const getIconClass = (isActive) =>
    `p-2 rounded-xl flex items-center justify-center ${
      isActive ? "bg-blue-600 text-white" : "nav_btn_bg_2 text-blue-500 hover:text-blue-400"
    }`;

  const getTextClass = (expand) =>
    `transition-all duration-500 ease-in-out ${
      expand ? "w-0 opacity-0" : "w-full text-left opacity-full"
    }`;

  // GSAP Animation setup
  gsap.registerPlugin(useGSAP);

  useEffect(() => {
    // Set the lowerActiveTab based on the tab state
    if (tab < upperButtons.length) {
      setUpperActiveTab(tab);
      setLowerActiveTab(null);
    } else {
      setLowerActiveTab(tab - upperButtons.length);
    }
  }, [tab]);
  useGSAP(() => {
    gsap.from(".sidebar", { x: -360 }); // <-- automatically reverted
  });

  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I am your Tayyab Security Copilot. Ask me about 'active logs', 'suspicious users', 'rules', or 'alerts'!" },
  ]);

  const messagesEndRef = useRef(null);

  // Auto-scroll to the bottom of the chat on new messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const getBotResponse = (input) => {
    const query = input.toLowerCase();
    if (query.includes("log")) {
      return "I've analyzed the active Sysmon and Windows logs. We're observing typical ProcessAccess (Event ID 10) triggers from Microsoft VS Code (Code.exe) on DESKTOP-TAYYAB. No threat anomalies are active.";
    }
    if (query.includes("rule")) {
      return "The Correlation Rules Engine has loaded 3 rules from local storage. Filters are actively monitoring outbound connections. You can create custom alerts on the 'Correlation Rules' tab.";
    }
    if (query.includes("user") || query.includes("behavior") || query.includes("uba")) {
      return "Our User Behavior Analytics (UBA) module is profiling 4 accounts. Sam Wilson is currently flagged as SUSPICIOUS (Risk Score: 85) due to an anomalous privilege request on LSASS memory.";
    }
    if (query.includes("alert")) {
      return "We've registered 2 security alerts. The most urgent is LSASS Credential Access (T1003.001) triggered by malware.exe. You can inspect log details inside the 'Security Alerts' dashboard.";
    }
    return "I am your Tayyab Security Copilot. I can assist with queries regarding Sysmon event logs, active user risk scores, correlation rules, or active alerts. Try asking about 'active logs', 'suspicious users', or 'triggered rules'!";
  };

  // Function to handle message submission
  const handleSubmit = () => {
    if (userInput.trim()) {
      const userMsg = userInput;
      setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
      setUserInput("");

      // Simulate natural response thinking latency
      setTimeout(() => {
        const response = getBotResponse(userMsg);
        setMessages((prev) => [...prev, { sender: "bot", text: response }]);
      }, 450);
    }
  };

  const [chatbotpreview, setchatbotpreview] = useState(false);
  function togglechatbotpreview() {
    setchatbotpreview(!chatbotpreview);
  }

  return (
    <div className="flex transition-all text-sm whitespace-nowrap ease-in-out duration-300">
      <div
        onClick={togglechatbotpreview}
        className="icon absolute z-40 shadow-gray-600 bottom-10 right-10 text-white bg-blue-600 p-4 rounded-2xl shadow-2xl cursor-pointer hover:bg-blue-700 transition-colors"
      >
        <BsChat size={25} />
      </div>
      <div
        className={`icon fixed top-0 right-0 ${
          chatbotpreview ? "w-[28rem] sm:w-[32rem] p-6 opacity-100" : "w-[0%] p-0 opacity-0 pointer-events-none"
        } z-50 text-white flex flex-col justify-between backdrop-blur-2xl bg-[#091129]/95 border-l border-blue-900/40 transition-all duration-300 shadow-2xl h-full scrollbar-hide`}
      >
        {chatbotpreview && (
          <>
            {/* Copilot Header */}
            <div className="flex justify-between items-center border-b border-blue-950/60 pb-3 mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
                  <SiClarifai size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Security Copilot</h3>
                  <p className="text-[10px] text-slate-400">Tayyab Threat Intelligence Assistant</p>
                </div>
              </div>
              <button 
                onClick={() => setchatbotpreview(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <RiExpandRightLine size={20} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="chat max-w-5xl mx-auto text-wrap h-full overflow-scroll w-full flex flex-col gap-4 pb-10 scrollbar-hide">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${
                    msg.sender === "user"
                      ? "bg-blue-950/60 border border-blue-800/30 px-4 py-2 rounded-2xl w-fit self-end max-w-[80%]"
                      : "bg-transparent w-fit p-2 self-start flex max-w-[90%] items-start gap-2.5"
                  }`}
                >
                  {msg.sender !== "user" && (
                    <div className="flex justify-center items-center h-7 w-7 border border-blue-800/40 bg-blue-950/40 rounded-full p-1.5 text-blue-400">
                      <SiClarifai />
                    </div>
                  )}
                  <p className="pt-0.5 flex-1 text-xs leading-relaxed">{msg.text}</p>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message input */}
            <div className="inputs w-full py-1.5 px-3 rounded-xl mx-auto flex gap-2 border border-blue-900/40 bg-blue-950/20 items-center">
              <textarea
                value={userInput}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit();
                  }
                }}
                rows={1}
                placeholder="Ask Security Copilot..."
                className="bg-transparent resize-none h-fit py-1 text-xs outline-none flex-1 placeholder:text-slate-500"
              />
              <button
                onClick={handleSubmit}
                title={userInput.trim() === "" ? "Message is empty" : ""}
                className={
                  userInput.trim() === ""
                    ? "bg-blue-900/30 p-2 text-slate-500 transition-all rounded-lg cursor-not-allowed"
                    : "bg-blue-600 p-2 text-white rounded-lg transition-all hover:bg-blue-700 shadow-md"
                }
              >
                <FaArrowUpLong size={14} />
              </button>
            </div>
          </>
        )}
      </div>
      {/* SIDE BAR */}
      <div
        onClick={() => {
          setchatbotpreview(false);
        }}
        className={`group bg-blue-500  sidebar  
           scrollbar-hide hidden sm:block sideANDheaderbg ${
             expanded ? "w-fit" : "w-[16rem]"
           } h-screen flex flex-col px-6 `}
        style={{ position: "relative", transition: "width 0.2s ease-in-out" }}
      >
        {/* EXPAND ICON */}
        <div
          className="opacity-0 group-hover:opacity-[1] transition-all ease-in-out sidebar_expander bg-blue-600 hover:bg-blue-700 z-50 p-2 rounded-r-3xl text-white cursor-pointer"
          style={{ position: "absolute", right: "-30px", top: "50%" }}
          onClick={handleExpansion}
        >
          {expanded ? <RiExpandRightLine /> : <RiExpandLeftLine />}
        </div>

        {/* LOGO */}
        <div className="logo w-full mx-auto pt-5 pb-5 flex justify-center items-center">
          {!expanded ? (
            <img
              src="./DASSOFT.png"
              alt="Logo"
              className="mx-auto mt-4 w-[80px]"
            />
          ) : (
            <div className="py-5"></div>
          )}
        </div>
        {!expanded && (
          <div className="h-px mb-7 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        )}
        <div className="nav flex flex-col justify-items-start">
          {/* Render upper buttons */}
          {upperButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => {
                dispatch(updateTab({ tab: index }));
                setLowerActiveTab(null); // Reset lower tab when upper is clicked
              }}
              title={expanded ? button.text : ""}
              className={getButtonClass(upperActiveTab === index, expanded)}
            >
              <span className={getIconClass(upperActiveTab === index)}>
                {button.icon}
              </span>
              <span className={getTextClass(expanded)}>{button.text}</span>
            </button>
          ))}

          {/* Divider and Lower Buttons */}
          {/* {!expanded && (
            <p className="text-white text-[13px] my-3 pl-4">ACCOUNT PAGES</p>
          )} */}
          {lowerButtons.map((button, index) => (
            <button
              key={index}
              onClick={() => {
                toast({
                  variant: "",
                  description: "Lower button Clicked",
                });
                dispatch(updateTab({ tab: upperButtons.length + index }));
                setUpperActiveTab(null); // Reset upper tab when lower is clicked
              }}
              title={expanded ? button.text : ""}
              className={getButtonClass(lowerActiveTab === index)}
            >
              <span className={getIconClass(lowerActiveTab === index)}>
                {button.icon}
              </span>
              <span className={getTextClass(expanded)}>{button.text}</span>
            </button>
          ))}
        </div>
      </div>

      <div
        className="main h-screen w-full "
        onClick={() => {
          setchatbotpreview(false);
        }}
      >
        <div className="header w-full h-[3rem] sm:h-[4rem] text-indigo-300 flex justify-between">
          <p></p>
          <div className="flex items-center gap-14 px-5 sm:pr-20">
            <div className="icons flex gap-10 items-center">
              <CiSearch size={25} className="hover:cursor-pointer" />
              <BsBell
                size={20}
                className="hover:cursor-pointer"
                // onClick={() => {
                //   dispatch(
                //     updateTab({
                //       tab: 7,
                //     })
                //   );
                // }}
              />
            </div>
            <div className="profile flex items-center gap-3">
              <img
                src="/Avatar.png"
                className="w-[30px] sm:w-[40px] rounded-[15px] sm:rounded-3xl"
                alt="profile"
              />
              <div className="name text-sm hidden sm:block">
                Muhammad Tayyab
              </div>
              <div className="dropdown hidden sm:block">
                <RiArrowDropDownLine size={25} />
              </div>
            </div>
          </div>
        </div>

        {/* Conditional Rendering based on activeTab */}
        {upperActiveTab !== null && upperButtons[upperActiveTab].component}
        {lowerActiveTab !== null && lowerButtons[lowerActiveTab].component}
      </div>
    </div>
  );
}

export default App2;
