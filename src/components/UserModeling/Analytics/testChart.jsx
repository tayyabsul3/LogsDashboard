import React from "react";
import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";

export function UserModelingActivityOverTimeChart() {
  // Sample data representing user activities over time
  const activityData = [
    {
      time: "00:00",
      logins: 10,
      failedLogins: 5,
      privilegeEscalations: 2,
      dataExfiltration: 0,
      configChanges: 1,
      remoteLogins: 3,
      fileModifications: 4,
      unusualProcesses: 1,
    },
    {
      time: "01:00",
      logins: 20,
      failedLogins: 7,
      privilegeEscalations: 3,
      dataExfiltration: 1,
      configChanges: 2,
      remoteLogins: 2,
      fileModifications: 3,
      unusualProcesses: 2,
    },
    {
      time: "02:00",
      logins: 15,
      failedLogins: 4,
      privilegeEscalations: 1,
      dataExfiltration: 0,
      configChanges: 0,
      remoteLogins: 5,
      fileModifications: 2,
      unusualProcesses: 1,
    },
    {
      time: "03:00",
      logins: 25,
      failedLogins: 6,
      privilegeEscalations: 2,
      dataExfiltration: 0,
      configChanges: 1,
      remoteLogins: 4,
      fileModifications: 3,
      unusualProcesses: 0,
    },
    {
      time: "04:00",
      logins: 12,
      failedLogins: 3,
      privilegeEscalations: 2,
      dataExfiltration: 1,
      configChanges: 2,
      remoteLogins: 1,
      fileModifications: 2,
      unusualProcesses: 3,
    },
    {
      time: "05:00",
      logins: 18,
      failedLogins: 8,
      privilegeEscalations: 4,
      dataExfiltration: 2,
      configChanges: 1,
      remoteLogins: 3,
      fileModifications: 1,
      unusualProcesses: 1,
    },
    {
      time: "06:00",
      logins: 20,
      failedLogins: 5,
      privilegeEscalations: 1,
      dataExfiltration: 1,
      configChanges: 3,
      remoteLogins: 6,
      fileModifications: 4,
      unusualProcesses: 2,
    },
    {
      time: "07:00",
      logins: 28,
      failedLogins: 9,
      privilegeEscalations: 3,
      dataExfiltration: 1,
      configChanges: 2,
      remoteLogins: 4,
      fileModifications: 3,
      unusualProcesses: 4,
    },
    {
      time: "08:00",
      logins: 35,
      failedLogins: 6,
      privilegeEscalations: 2,
      dataExfiltration: 0,
      configChanges: 1,
      remoteLogins: 7,
      fileModifications: 2,
      unusualProcesses: 3,
    },
  ];

  const activityConfig = {
    logins: {
      label: "Logins",
      color: "rgba(0, 117, 255, 1)", // Blue
      gradientId: "gradientLogins",
    },
    failedLogins: {
      label: "Failed Logins",
      color: "rgba(255, 69, 58, 1)", // Red
      gradientId: "gradientFailedLogins",
    },
    privilegeEscalations: {
      label: "Privilege Escalations",
      color: "rgba(250, 202, 21, 1)", // Yellow
      gradientId: "gradientPrivilegeEscalations",
    },
    dataExfiltration: {
      label: "Data Exfiltration",
      color: "rgba(255, 159, 64, 1)", // Orange
      gradientId: "gradientDataExfiltration",
    },
    configChanges: {
      label: "Config Changes",
      color: "rgba(52, 199, 89, 1)", // Green
      gradientId: "gradientConfigChanges",
    },
    remoteLogins: {
      label: "Remote Logins",
      color: "rgba(88, 86, 214, 1)", // Purple
      gradientId: "gradientRemoteLogins",
    },
    fileModifications: {
      label: "File Modifications",
      color: "rgba(255, 45, 85, 1)", // Pink
      gradientId: "gradientFileModifications",
    },
    unusualProcesses: {
      label: "Unusual Processes",
      color: "rgba(0, 255, 255, 1)", // Cyan
      gradientId: "gradientUnusualProcesses",
    },
  };

  // Custom tooltip to show activity names and values
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "#1E293B",
            padding: "10px",
            borderRadius: "8px",
            color: "#fff",
          }}
        >
          <p>{`Time: ${label}`}</p>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color }}>
              {`${activityConfig[entry.dataKey].label}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="userModelingLogTrend w-full border-none linear_g_1 h-[40vh] rounded-lg  text-white">
      <h6 className="text-white py-3 mx-4 text-start">
        User Activity Over Time
      </h6>
      <CardContent className=" h-[90%]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={activityData}
            margin={{
              left: -20,
              right: 12,
            }}
            className="h-full"
          >
            <defs>
              {Object.values(activityConfig).map(({ gradientId, color }) => (
                <linearGradient
                  id={gradientId}
                  key={gradientId}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={color} />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeDasharray="3 3"
              stroke="gray"
              className="h-full"
            />
            <XAxis
              dataKey="time"
              tickLine={false}
              tickMargin={8}
              tick={{ fill: "white" }}
              title="Time of Day"
            />
            <YAxis
              tickMargin={8}
              tickLine={false}
              tickCount={6}
              domain={[0, "auto"]}
              tick={{ fill: "white" }}
              title="Total Activities"
            />
            <Tooltip content={<CustomTooltip />} />
            {Object.entries(activityConfig).map(
              ([dataKey, { label, color, gradientId }]) => (
                <Line
                  key={dataKey}
                  type="monotone"
                  dataKey={dataKey}
                  name={label}
                  stroke={color}
                  fillOpacity={0.3}
                  fill={`url(#${gradientId})`}
                  strokeWidth={2}
                />
              )
            )}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
