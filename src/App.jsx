import "./App.css";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { BsBell, BsFillCreditCardFill } from "react-icons/bs";
import { HiWrench } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import {
  RiArrowDropDownLine,
  RiExpandLeftLine,
  RiExpandRightLine,
} from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import LogsComponent from "./components/Logs";
import Dashboard from "./components/Dashboard";
import DataSecurity from "./components/DataSecurity";
import { FaNoteSticky, FaUser } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import Auth from "./components/Auth/Auth";
import SignupPage from "./components/Auth/SignupPage";
import { useState } from "react";
import LogsAnalysis from "./components/LogsAnalysis";

function App() {
  const [dash, setDash] = useState(false);
  const [dash2, setDash2] = useState(false);
  const [logsAnalysis, setlogsAnalysis] = useState(false);
  const [security, setSecurity] = useState(false);
  const [log, setLog] = useState(false);
  const [rtl, setRtl] = useState(false);
  const [profile, setProfile] = useState(false);
  const [signIn, setSignIn] = useState(false);
  const [signup, setSignup] = useState(false);
  const [expanded, setExpanded] = useState(false);

  function handleExpansion() {
    setExpanded(!expanded);
  }

  const getButtonClass = (condition) =>
    `flex items-center text-white gap-4 text-[14px] py-3 rounded-2xl w-full px-2.5 ${
      condition ? "nav_btn_bg" : "bg-transparent py-3 rounded-3xl"
    }`;

  const getIconClass = (condition) =>
    `p-2 rounded-xl ${
      condition ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
    }`;

  const getTextClass = (expand) =>
    `transition-all duration-500 ease-in-out ${
      expand ? "w-0 opacity-0" : "w-full text-left opacity-full"
    }`;

  return (
    <div className="flex transition-all ease-in-out duration-300">
      {/* SIDE BAR */}

      <div
        className={`group sidebar hidden sm:block sideANDheaderbg ${
          expanded ? "w-[10rem]" : "w-[280px]"
        } h-screen flex flex-col px-6`}
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
          <button
            onClick={() => {
              setDash(true);
              setLog(false);
              setSecurity(false);
              setSignIn(false);
              setlogsAnalysis(false);
              setProfile(false);
              setSignup(false);
              setRtl(false);
            }}
            title={expanded ? "Dashboard" : ""}
            className={getButtonClass(dash)}
          >
            <span className={getIconClass(dash)}>
              <IoIosHome size={18} />
            </span>
            <span className={getTextClass(expanded)}>Dashboard</span>
          </button>
          <button
            onClick={() => {
              setDash2(true);
              setDash(false);

              setLog(false);
              setSecurity(false);
              setSignIn(false);
              setlogsAnalysis(false);
              setProfile(false);
              setSignup(false);
              setRtl(false);
            }}
            title={expanded ? "Dashboard" : ""}
            className={getButtonClass(dash)}
          >
            <span className={getIconClass(dash)}>
              <IoIosHome size={18} />
            </span>
            <span className={getTextClass(expanded)}>Dashboard 2</span>
          </button>
          <button
            onClick={() => {
              setDash(false);
              setLog(false);
              setSecurity(false);
              setSignIn(false);
              setlogsAnalysis(true);
              setProfile(false);
              setSignup(false);
              setRtl(false);
            }}
            title={expanded ? "Logs Analysis" : ""}
            className={getButtonClass(logsAnalysis)}
          >
            <span className={getIconClass(logsAnalysis)}>
              <IoIosHome size={18} />
            </span>
            <span className={getTextClass(expanded)}>Logs Analysis</span>
          </button>
          <button
            onClick={() => {
              setDash(false);
              setLog(false);
              setSecurity(true);
              setSignIn(false);
              setlogsAnalysis(false);
              setProfile(false);
              setSignup(false);
              setRtl(false);
            }}
            title={expanded ? "Data Security" : ""}
            className={getButtonClass(security)}
          >
            <span className={getIconClass(security)}>
              <BiSolidLockOpenAlt size={18} />
            </span>
            <span className={getTextClass(expanded)}>Data Security</span>
          </button>
          <button
            onClick={() => {
              setDash(false);
              setLog(true);
              setSecurity(false);
              setSignIn(false);
              setlogsAnalysis(false);
              setProfile(false);
              setSignup(false);
              setRtl(false);
            }}
            title={expanded ? "Logs" : ""}
            className={getButtonClass(log)}
          >
            <span className={getIconClass(log)}>
              <BsFillCreditCardFill size={18} />
            </span>
            <span className={getTextClass(expanded)}>Logs</span>
          </button>
          <button
            onClick={() => {
              setRtl(true);
              setDash(false);
              setLog(false);
              setSecurity(false);
              setSignIn(false);
              setlogsAnalysis(false);
              setProfile(false);
              setSignup(false);
            }}
            title={expanded ? "RTL" : ""}
            className={getButtonClass(rtl)}
          >
            <span className={getIconClass(rtl)}>
              <HiWrench size={18} />
            </span>
            <span className={getTextClass(expanded)}>RTL</span>
          </button>
          <div>
            {!expanded && (
              <p className="text-white text-[13px] my-3 pl-4">ACCOUNT PAGES</p>
            )}
            <div>
              <button
                onClick={() => {
                  setDash(false);
                  setLog(false);
                  setSecurity(false);
                  setSignIn(false);
                  setlogsAnalysis(false);
                  setProfile(true);
                  setSignup(false);
                  setRtl(false);
                }}
                title={expanded ? "Profile" : ""}
                className={getButtonClass(profile)}
              >
                <span className={getIconClass(profile)}>
                  <FaUser size={18} />
                </span>
                <span className={getTextClass(expanded)}>Profile</span>
              </button>
              <button
                onClick={() => {
                  setDash(false);
                  setLog(false);
                  setSecurity(false);
                  setSignIn(true);
                  setSignup(false);
                  setProfile(false);
                }}
                title={expanded ? "Sign In" : ""}
                className={getButtonClass(signIn)}
              >
                <span className={getIconClass(signIn)}>
                  <FaNoteSticky
                    size={18}
                    style={{ transform: "rotate(270deg)" }}
                  />
                </span>
                <span className={getTextClass(expanded)}>Sign in</span>
              </button>
              <button
                onClick={() => {
                  setDash(false);
                  setLog(false);
                  setSecurity(false);
                  setSignIn(false);
                  setSignup(true);
                  setProfile(false);
                }}
                title={expanded ? "Sign up" : ""}
                className={getButtonClass(signup)}
              >
                <span className={getIconClass(signup)}>
                  <IoRocketSharp size={18} />
                </span>
                <span className={getTextClass(expanded)}>Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main h-screen w-full">
        <div className="header w-full h-[4rem] sm:h-[5.5rem] text-indigo-300 flex justify-between">
          <p></p>
          <div className="flex items-center gap-14 px-5 sm:pr-20">
            <div className="icons flex gap-10">
              <CiSearch size={30} className="hover:cursor-pointer" />
              <CgMenuGridO size={30} className="hover:cursor-pointer" />
            </div>
            <div className="profile hidden lg:flex gap-12 items-center ">
              <button
                className="notification text-blue-600 flex gap-1 items-center rounded-xl p-4"
                style={{ position: "relative" }}
              >
                <span>
                  <BsBell size={20} />
                </span>
                <span
                  style={{ position: "absolute", right: "2px", top: "2px" }}
                >
                  <GoDotFill className="text-red-700" />
                </span>
              </button>
              <button className="flex gap-3 items-center text-lg">
                <img src="./profile.png" alt="profile" />
                <p className="flex items-center px-px gap-1">
                  <span>Pixel Warriorz</span>
                  <span>
                    <RiArrowDropDownLine size={30} />
                  </span>
                </p>
              </button>
            </div>
          </div>
        </div>
        {dash ? (
          <Dashboard />
        ) : log ? (
          <LogsComponent />
        ) : security ? (
          <DataSecurity />
        ) : signIn ? (
          <Auth />
        ) : logsAnalysis ? (
          <LogsAnalysis />
        ) : signup ? (
          <SignupPage />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
