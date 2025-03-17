"use client";

import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { month: "01", value: 10 },
  { month: "02", value: 20 },
  { month: "03", value: 60 },
  { month: "04", value: 25 },
  { month: "05", value: 35 },
  { month: "06", value: 55 },
  { month: "07", value: 40 },
  { month: "08", value: 50 },
  { month: "09", value: 49 },
  { month: "10", value: 60 },
  { month: "11", value: 65 },
  { month: "12", value: 70 },
];

export function Graphlogs() {
  return (
    <Card className="linear_g_1 w-full border-none rounded-3xl bg-blue-900 text-white">
      <CardHeader>
        <CardTitle>Logs</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="62.18%" stopColor="rgba(187, 41, 255, 0.3)" />
                <stop offset="100%" stopColor="rgba(187, 41, 255, 0)" />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
            />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="rgba(187, 41, 255, 1)"
              fill="url(#colorValue)"
              fillOpacity={1}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
