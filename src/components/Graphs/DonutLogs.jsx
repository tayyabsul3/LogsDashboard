"use client";

import {
  RadialBar,
  RadialBarChart,
  PolarGrid,
  PolarRadiusAxis,
  Label,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { browser: "safari", visitors: 200, fill: "url(#colorGradient)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "gray",
  },
};

export function DonutofLogs() {
  return (
    <Card className="flex flex-col bg-transparent outline-none border-none w-fit">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-[150px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={300}
            innerRadius={50}
            outerRadius={100}
          >
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="21.33%" stopColor="#3592FF" />
                <stop offset="68.44%" stopColor="rgba(53, 146, 255, 0.27)" />
              </linearGradient>
            </defs>
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-blue-950 "
              polarRadius={[40, 60]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan className="fill-white text-2xl">80%</tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
