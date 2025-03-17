import "./App.css";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { BsBell, BsChat, BsFillCreditCardFill } from "react-icons/bs";
import { HiWrench } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { IoRocketSharp } from "react-icons/io5";
import { FaArrowUpLong } from "react-icons/fa6";
import { SiClarifai } from "react-icons/si";

import { FaNoteSticky, FaUser } from "react-icons/fa6";
import {
  RiArrowDropDownLine,
  RiExpandLeftLine,
  RiExpandRightLine,
} from "react-icons/ri";
import Dashboard from "./components/Dashboard";
import Dashboards2 from "./components/Dashboards2";
import LogsAnalysis from "./components/LogsAnalysis";
import DataSecurity from "./components/DataSecurity";
import LogsComponent from "./components/Logs";
import Auth from "./components/Auth/Auth";
import SignupPage from "./components/Auth/SignupPage";
import { useState, useRef, useEffect } from "react";
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
      icon: <IoIosHome size={18} />,
      component: <Dashboard />,
    },
    {
      text: "DARC",
      icon: <IoIosHome size={18} />,
      component: <Dashboards2 />,
    },
    {
      text: "Real Time Logs",
      icon: <IoIosHome size={18} />,
      component: <LogsAnalysis />,
    },
    {
      text: "Users Modeling",
      icon: <HiWrench size={18} />,
      component: <UserModelOverview />,
    },
    // {
    //   text: "Data Security",
    //   icon: <BiSolidLockOpenAlt size={18} />,
    //   component: <DataSecurity />,
    // },
    // {
    //   text: "Logs",
    //   icon: <BsFillCreditCardFill size={18} />,
    //   component: <LogsComponent />,
    // },
    {
      text: "Correlation Rules",
      icon: <IoIosHome size={18} />,
      component: <Rules />,
    },
    {
      text: "Log Detail ",
      icon: <IoIosHome size={18} />,
      component: <Rules2 />,
    },
    {
      text: "Alerts ",
      icon: <IoIosHome size={18} />,
      component: <Alerts />,
    },
    {
      text: "RTL",
      icon: <HiWrench size={18} />,
      component: (
        <div className="p-10 px-16">
          <UserModelingActivityOverTimeChart />
        </div>
      ),
    },
  ];

  // Array for lower buttons data
  const lowerButtons = [
    // {
    //   text: "Profile",
    //   icon: <FaUser size={18} />,
    //   component: <div>Profile Component</div>,
    // },
    // { text: "Sign In", icon: <FaNoteSticky size={18} />, component: <Auth /> },
    // {
    //   text: "Sign Up",
    //   icon: <IoRocketSharp size={18} />,
    //   component: <SignupPage />,
    // },
  ];

  function handleExpansion() {
    setExpanded(!expanded);
  }

  const getButtonClass = (isActive) =>
    `flex items-center text-white gap-4 text-[0.8rem] 2xl:text-sm  py-3 rounded-2xl w-full px-2.5 ${
      isActive ? "nav_btn_bg" : "bg-transparent py-3 rounded-3xl"
    }`;

  const getIconClass = (isActive) =>
    `p-2 rounded-xl ${isActive ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"}`;

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
    // Initial dummy message
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);

  // Function to handle input change
  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to handle message submission
  const handleSubmit = () => {
    if (userInput.trim()) {
      // Add user's message to the chat
      setMessages([...messages, { sender: "user", text: userInput }]);

      // Clear input field
      setUserInput("");

      // Add a dummy bot response
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: "bot",
          text: "dsasddasdhasdahfdgafdadas d sa das das dsa d sad as d asd as ds ad sa d ad a d ad ad as das d as das d asd as d sad sa d sad sa d sa dsa d sa d sad sa d as da sd as d as das d asd as d ads a d asd a da d a d da d a da da da da sda da d ad ad ad ad a d a da sd",
        },
      ]);
    }
  };
  const [chatbotpreview, setchatbotpreview] = useState(false);
  function togglechatbotpreview() {
    setchatbotpreview(!chatbotpreview);
  }

  return (
    <div className="flex transition-all whitespace-nowrap ease-in-out duration-300">
      <div
        onClick={togglechatbotpreview}
        className="icon absolute z-40 bottom-10 right-10 text-white bg-blue-600 p-4 rounded-2xl shadow-2xl cursor-pointer  "
      >
        <BsChat size={30} />
      </div>
      <div
        className={`icon fixed top-0 right-0 ${
          chatbotpreview ? "w-[50%] p-10" : "w-[0%] p-0 "
        } z-50 text-white  rounded-2xl flex flex-col justify-between sideANDheaderbg transition-all duration-300 shadow-2xl h-full  scrollbar-hide `}
      >
        <div className="chat max-w-5xl mx-auto text-wrap h-full overflow-scroll w-full flex flex-col gap-5 scroll-px-12 pb-10  scrollbar-hide ">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${
                msg.sender === "user"
                  ? "bg-blue-950/50 px-5 rounded-xl p-2 w-fit  self-end max-w-md "
                  : "bg-transparent w-fit p-2  self-start flex max-w-lg items-start gap-2           "
              }`}
            >
              {msg.sender !== "user" && (
                <div
                  className="flex justify-center items-center h-8  border rounded-full w-8 p-1 
                "
                >
                  <SiClarifai />
                </div>
              )}

              <p className="pt-1 flex-1">{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="inputs w-full max-w-5xl pr-5 py-2   rounded-lg mx-auto flex gap-2 border items-center">
          <textarea
            value={userInput}
            onChange={handleInputChange}
            rows={2}
            placeholder="Message..."
            className="bg-transparent resize-none h-fit p-2 outline-none  flex-1"
          />
          <button
            onClick={handleSubmit}
            title={userInput.trim() === "" ? "Message is empty" : ""}
            className={
              userInput.trim() === ""
                ? "bg-gray-400 p-3 text-gray-900 transition-all rounded-full shadow-2xl"
                : "bg-white p-3 text-black rounded-full transition-all shadow-2xl"
            }
          >
            <FaArrowUpLong size={20} />
          </button>
        </div>
      </div>
      {/* SIDE BAR */}
      <div
        onClick={() => {
          setchatbotpreview(false);
        }}
        className={`group bg-blue-500 sidebar  
           scrollbar-hide hidden sm:block sideANDheaderbg ${
             expanded ? "" : "w-[16rem]"
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
        <div className="logo w-full mx-auto pt-5 pb-8 flex justify-center items-center">
          {!expanded ? (
            <img
              src="./DASSOFT.png"
              alt="Logo"
              className="mx-auto mt-4 w-[90px]"
            />
          ) : (
            <div className="py-5"></div>
          )}
        </div>
        {!expanded && (
          <div className="h-px mb-5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
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
              className={getButtonClass(upperActiveTab === index)}
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
        <div className="header w-full h-[4rem] sm:h-[5.5rem] text-indigo-300 flex justify-between">
          <p></p>
          <div className="flex items-center gap-14 px-5 sm:pr-20">
            <div className="icons flex gap-10 items-center">
              <CiSearch size={30} className="hover:cursor-pointer" />
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
            <div className="profile flex items-center gap-5">
              <img
                src="/Avatar.png"
                className="w-[35px] sm:w-[50px] rounded-[15px] sm:rounded-3xl"
                alt="profile"
              />
              <div className="name hidden sm:block">Muhammad Tayyab</div>
              <div className="dropdown hidden sm:block">
                <RiArrowDropDownLine size={30} />
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
