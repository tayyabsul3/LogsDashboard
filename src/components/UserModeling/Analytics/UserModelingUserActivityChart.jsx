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

import {
  Card,
  CardContent,
} from "@/components/ui/card";

export function UserModelingActivityOverTimeChart(props) {
  // Sample data representing user activities over time
  const activityData = props.activityData

  const activityConfig = props.activityConfigData

  // Custom tooltip to show activity names and values
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ backgroundColor: "#1E293B", padding: "10px", borderRadius: "8px", color: "#fff" }}>
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
    <Card className="userModelingLogTrend w-full border-none linear_g_1 rounded-lg bg-blue-900 text-white">
      <h6 className="text-white py-3 mx-4 text-start">User Activity Over Time</h6>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart
            data={activityData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <defs>
              {Object.values(activityConfig).map(({ gradientId, color }) => (
                <linearGradient id={gradientId} key={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={color} />
                  <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" stroke="gray" />
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
            {Object.entries(activityConfig).map(([dataKey, { label, color, gradientId }]) => (
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
            ))}
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
