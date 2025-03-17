import React, { useEffect, useState } from "react";
import "../UserModelingDashboard/UserModelingDashboard.css";
import UserModelingHighlights from "../Analytics/UserModelingHighlights";
import UserLogsTrendChart from "../Analytics/UserLogsTrendGraph";
import UserRiskScoreBubbleChart from "../Analytics/UserModelingBubbleChart";
import UserModelingSuspiciousUser from "../Analytics/UserModelingSuspiciousUserBarChart";
import { UserModelingActivityOverTimeChart } from "../Analytics/UserModelingUserActivityChart";
import UserModelingMapOverview from "../Analytics/UserModelingMapOverview";
import UserModelingOverviewRiskScoreChart from "../Analytics/UserModelingRiskScore";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { CgClose } from "react-icons/cg";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DonutPieLabel } from "@/components/Graphs/Dontpielabel";
import { Check } from "lucide-react";
import { TImelinechart } from "@/components/Graphs/TImelineChart";
import { FaComputer } from "react-icons/fa6";
import Network from "./Network";
import Application from "./Application";
import System from "./System";
const UserModelingOverviewPanel = ({ sideScreen, setsideScreen }) => {
  const [overviewData, setOverviewData] = useState({});
  const [loading, setLoading] = useState(true);
  // console.log(
  //   "overview: ",
  //   overviewData.user_activity_over_time_separate.activityConfig
  // );

  // const fetchUserModelingOverviewData = () => {
  //   console.log("Fetching Overview Data");
  //   setLoading(true);
  //   axios
  //     .get("http://20.244.86.188:5000/users/data")
  //     .then((response) => {
  //       console.log("response:", response.data);
  //       setOverviewData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error!", error);
  //       setLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   console.log("fetching fn!");
  //   fetchUserModelingOverviewData();
  //   console.log("Done fetch");
  // }, []);
  return (
    <div className="h-[90vh] overflow-y-scroll">
      {sideScreen === "network" ? (
        <Network />
      ) : sideScreen === "application" ? (
        <Application />
      ) : sideScreen === "system" ? (
        <System />
      ) : (
        <div>
          <UserModelingHighlights
            totalEvents={overviewData.total_events}
            totalUsers={overviewData.total_users}
            totalLoginSuccess={overviewData.total_login_success}
            totalLoginFailure={overviewData.total_login_failure}
          />
          <div className="grid gap-2 sm:grid-cols-12 px-2">
            <div className="userModelingLogTrend sm:col-span-8 min-h-[100px] p-2 rounded-lg">
              <h6 className="text-white my-2 mx-2 text-start">Logs Trend</h6>
              {loading ? (
                <div className="flex justify-center items-center">
                  <ClipLoader color="#3B82F6" size={50} />
                </div>
              ) : (
                <UserLogsTrendChart
                  logsTrend={overviewData.user_activity_over_time_combined}
                />
              )}
            </div>
            <div className=" userModelingLogTrend sm:col-span-4 min-h-[100px] rounded-lg">
              <h6 className="text-white mx-3 mt-2 text-start">Risk Score</h6>
              <UserModelingOverviewRiskScoreChart />
            </div>
          </div>
          {/* bubble chart */}
          <div className="px-2 mt-2">
            <div className="userModelingLogTrend sm:col-span-8 min-h-[100px] p-2 rounded-lg">
              <h6 className="text-white my-2 mx-2 text-start">
                Users Risk Score Distribution
              </h6>
              <UserRiskScoreBubbleChart />
            </div>
          </div>
          {/* Line and bar chart */}
          <div className="grid gap-2 sm:grid-cols-12 px-2 mt-2">
            <div className="userModelingLogTrend sm:col-span-6 min-h-[100px] p-2 rounded-lg">
              <h6 className="text-white my-2 mx-2 text-start">
                Top 5 Suspicious Users
              </h6>
              <UserModelingSuspiciousUser />
            </div>
            <div className=" sm:col-span-6 min-h-[100px] ">
              {loading ? (
                <div className="flex justify-center items-center">
                  <ClipLoader color="#3B82F6" size={50} />
                </div>
              ) : (
                <UserModelingActivityOverTimeChart
                  activityConfigData={
                    overviewData.user_activity_over_time_separate.activityConfig
                  }
                  activityData={
                    overviewData.user_activity_over_time_separate.activityData
                  }
                />
              )}
            </div>
          </div>
          {/* Location Map */}
          <div className="userModelingLogTrend px-2 min-h-[100px] mt-2 rounded-lg mx-2 pb-2 pt-2">
            <h6 className="text-white my-2 mx-2 text-start">
              Users Risk Score Distribution
            </h6>
            {loading ? (
              <div className="flex justify-center items-center">
                <ClipLoader color="#3B82F6" size={50} />
              </div>
            ) : (
              <UserModelingMapOverview
                userTrafficMap={overviewData.users_location_map}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserModelingOverviewPanel;
