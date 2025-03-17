"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
};

export function DonutPie() {
  return (
    <Card className="flex flex-col rounded-2xl bg-blue-950 p-5  border-none text-white">
      <h1 className="text-white  text-wrap  ">Logs Volume by Log level</h1>
      <CardContent className="flex-1 px-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square     max-h-[300px]"
        >
          <PieChart className="">
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              className="w-full  "
              innerRadius={30}
              strokeWidth={10}
            ></Pie>
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="flex flex-wrap p-0 m-0 gap-1  "
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
