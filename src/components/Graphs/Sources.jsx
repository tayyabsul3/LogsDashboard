"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
  { month: "January", desktop: 350 },
  { month: "February", desktop: 340 },
  { month: "March", desktop: 335 },
  { month: "April", desktop: 330 },
  { month: "May", desktop: 310 },
  { month: "June", desktop: 300 },
  { month: "July", desktop: 250 },
  { month: "August", desktop: 200 },
  { month: "September", desktop: 150 },
  { month: "October", desktop: 100 },
  { month: "November", desktop: 50 },
  { month: "December", desktop: 40 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
};
const requests = [
  {
    method: "GET",
    resource: "index.html",
    protocol: "HTTP/1.1",
    ip: "192.168.1.25",
  },
  {
    method: "GET",
    resource: "index.html",
    protocol: "HTTP/1.1",
    ip: "192.168.1.25",
  },
  {
    method: "GET",
    resource: "index.html",
    protocol: "HTTP/1.1",
    ip: "192.168.1.25",
  },
  {
    method: "GET",
    resource: "index.html",
    protocol: "HTTP/1.1",
    ip: "192.168.1.25",
  },
  // Add more requests as needed
];

export function Sources() {
  return (
    <Card className="bg-transprent border-none    text-white  border-gray-700  ">
      <h1 className="text-white  p-5 pb-0 text-lg  ">Top Sources</h1>
      <CardContent className="w-full  flex pt-5   items-center max-h-[300px] ">
        <ChartContainer
          config={chartConfig}
          className="p-0 m-0 min-w-[150px] w-full max-h-[150px]"
        >
          <BarChart
            barCategoryGap={"0%"}
            accessibilityLayer
            data={chartData}
            layout="vertical"
            barGap={"0%"}
            className="min-w-[150px] w-full max-h-[300px] "
          >
            <XAxis type="number" dataKey="desktop" hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" barSize={4} />
          </BarChart>
        </ChartContainer>
        <div className="font-mono px-0 max-xl:text-wrap text-xs ">
          {requests.map((request, index) => (
            <div key={index} className=" flex flex-col">
              <p>{request.ip}</p>
              <p>
                {request.method} {request.resource} {request.protocol}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
