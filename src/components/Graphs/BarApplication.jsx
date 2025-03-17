"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "01", desktop: 186 },
  { month: "02", desktop: 305 },
  { month: "03", desktop: 237 },
  { month: "04", desktop: 73 },
  { month: "05", desktop: 209 },
  { month: "06", desktop: 214 },
  { month: "01", desktop: 186 },
  { month: "02", desktop: 305 },
  { month: "03", desktop: 237 },
  { month: "04", desktop: 73 },
  { month: "05", desktop: 209 },
  { month: "06", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "cyan",
  },
  month: {
    label: "Month",
    color: "cyan",
  },
};

export function BarApplication() {
  return (
    <Card className="bg-transparent  outline-none text-white border-none pt-5 pr-0 pl-0  w-full mx-auto">
      <CardContent className=" h-full w-full px-0 ">
        <ChartContainer config={chartConfig} className=" h-full w-full  ">
          <BarChart
            accessibilityLayer
            data={chartData}
            className=" w-full"
            barSize={8} // Adjust the width of the bars
            barGap={5}
          >
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2CD9FF" />
                <stop offset="100%" stopColor="#1A8299" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={1}
              axisLine={false}
              tick={{ fill: "black" }}
              className="text-white"
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="url(#gradient)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
