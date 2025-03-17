"use client";

import { Pie, PieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 90, fill: "var(--color-other)" },
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

export function PieChart2() {
  return (
    <Card className="flex flex-col bg-transparent border-none text-white">
      <h1 className="text-white  p-5 pb-0 text-lg ">Top 10 Processes</h1>

      <CardContent className="flex-1 pb-0   ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] "
        >
          <PieChart className="flex gap-5 relative -rotate-90   ">
            <Pie data={chartData} dataKey="visitors" className="" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="gap-0 rotate-90  flex flex-col "
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
