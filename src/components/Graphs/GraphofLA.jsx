"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import ClipLoader from 'react-spinners/ClipLoader'; 

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export function GraphofLA({ data: chartData2 }) {
  // Check if data is provided and is an array
  if (!chartData2 || chartData2.length === 0) {
    return (
      <Card className="bg-transparent text-white border-none linear_g_1 rounded-2xl px-5">
        <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
          <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-5 sm:py-6">
            <CardTitle className="font-normal">Logs Viewer</CardTitle>
            <CardDescription>No data available</CardDescription>
          </div>
        </CardHeader>
      </Card>
    );
  }
  
  // Extracting the total values for Y-axis configuration
  const totalValues = chartData2.map((data) => data.total);
  const minTotal = Math.min(...totalValues);
  const maxTotal = Math.max(...totalValues);

  const chartConfig = {
    views: {
      label: "Logs",
    },
    total: {
      label: "Total",
      color: "hsl(var(--chart-1))",
    },
  };

  return (
    <Card className="bg-transparent text-white border-none linear_g_1 rounded-2xl px-5">
      <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-5 sm:py-6">
          <CardTitle className="font-normal">Logs Viewer</CardTitle>
          <CardDescription>{new Date().toLocaleString()}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="h-[10rem] w-full">
          <BarChart
            accessibilityLayer
            data={chartData2}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorMobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1A8299" />
                <stop offset="100%" stopColor="#2CD9FF" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="2 5" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              minTickGap={32}
              tickCount={11}
              tickFormatter={(value, index) => {
                const date = new Date(value);
                
                // For the first tick, display date and time
                if (index === 0) {
                  return date.toLocaleString("en-US", {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                  });
                }
              
                // For all other ticks, display only the time
                return date.toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true
                });
              }}
            />
            <YAxis
              dataKey="total"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              domain={[minTotal, maxTotal]}
              ticks={[0, 50, 100, 150, 200, 250]}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="tooltip-content w-[150px] bg-slate-700 text-white"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return value;
                  }}
                />
              }
            />
            <Bar
              dataKey={"total"}
              fill="url(#colorMobile)"
              radius={6}
              barSize={30}
              className="hover:bg-transparent"
              onMouseOver={(e) => {
                e.target.style.fill = "rgba(255, 255, 255, 0.5)"; // Adjust the alpha value for transparency
              }}
              onMouseOut={(e) => {
                e.target.style.fill = "url(#colorMobile)";
              }}
            />

          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
