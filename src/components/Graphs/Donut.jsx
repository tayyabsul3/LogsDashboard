"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

const chartData = [
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
];

export function Donut({ radialColor, percentage }) {
  const chartConfig = {
    visitors: {
      label: "Visitors",
    },
    safari: {
      label: "Safari",
      color: radialColor,
    },
  };
  return (
    <Card className="flex flex-col bg-transparent  border-none w-[10rem] text-white">
      <CardContent className=" pb-0  ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto  aspect-square max-h-[200px] fill-white"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={percentage * 3.6}
            innerRadius={35}
            outerRadius={65}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="fill-transparent"
            />
            <RadialBar dataKey="visitors" background cornerRadius={15} />
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
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-white text-xl bg-red-50"
                        >
                          {percentage}%
                        </tspan>
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
