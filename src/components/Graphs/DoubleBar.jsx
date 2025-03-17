"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", desktop: 800, mobile: 100 },
  { month: "February", desktop: 100, mobile: 800 },
  { month: "March", desktop: 700, mobile: 150 },
  { month: "April", desktop: 150, mobile: 700 },
  { month: "May", desktop: 600, mobile: 200 },
  { month: "June", desktop: 200, mobile: 600 },
  { month: "July", desktop: 500, mobile: 250 },
  { month: "August", desktop: 250, mobile: 500 },
  { month: "September", desktop: 400, mobile: 300 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "rgba(92, 102, 108, 0.53)",
  },
  mobile: {
    label: "Mobile",
    color: "url(#colorMobile)",
  },
};

export function DoubleBar() {
  return (
    <Card className="bg-transparent outline-none border-none rounded-2xl p-5">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            width={300}
            height={400}
            barSize={20} // Adjust the width of the bars
            barCategoryGap="20%"
          >
            <defs>
              <linearGradient id="colorMobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#B60885" />
                <stop offset="100%" stopColor="#FD73D6" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey="desktop"
              type="number"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              stroke="#ffffff"
              label={{
                style: {
                  colors: "#fffff",
                },
              }}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar
              dataKey="desktop"
              fill=" rgba(92, 102, 108, 0.53)"
              radius={4}
            />
            <Bar dataKey="mobile" fill="url(#colorMobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
