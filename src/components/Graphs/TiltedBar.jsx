"use client";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Unknown", desktop: 186 },
  { month: "Images", desktop: 305 },
  { month: "System files", desktop: 237 },
  { month: "Presentaions", desktop: 73 },
  { month: "Video files", desktop: 209 },
  { month: "Unknown", desktop: 186 },
  { month: "Images", desktop: 305 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "url(#colorDesktop)",
  },
};

export function TiltedBar() {
  return (
    <Card className="bg-transparent outline-none border-none rounded-2xl p-5">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 40,
            }}
            barCategoryGap="20%" // Adjust the gap between bars
          >
            <defs>
              <linearGradient id="colorDesktop" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#8209FC" />
                <stop offset="100%" stopColor="#D0A0FF" />
              </linearGradient>
            </defs>
            <XAxis
              axisLine={false}
              type="number"
              dataKey="desktop"
              tickLine={false}
              tickCount={10}
            />
            <YAxis
              dataKey="month"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              fill="url(#colorDesktop)"
              radius={[2, 10, 10, 2]}
              barSize={20} // Adjust the width of the bars
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
