"use client";

import { TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

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

// Updated chart data with dates and IPs
const chartData = [
  { date: "2024-01-05", ip: "192.168.1.1", mobile: 80 },
  { date: "2024-02-10", ip: "192.168.1.2", mobile: 200 },
  { date: "2024-03-15", ip: "192.168.1.3", mobile: 120 },
  { date: "2024-04-20", ip: "192.168.1.4", mobile: 190 },
  { date: "2024-05-25", ip: "192.168.1.5", mobile: 130 },
  { date: "2024-06-30", ip: "192.168.1.6", mobile: 140 },
];

const chartConfig = {
  ip: {
    label: "IP Address",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export function TImelinechart() {
  return (
    <Card className="bg-transparent text-white border-none">
      <CardHeader>
        <CardTitle>TimeLine</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="w-full max-h-[40vh]">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={true} horizontal={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(5)} // Display date in short format
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="mobile" // Display IP addresses on the line chart
              type="natural"
              stroke="var(--color-ip)" // Color corresponding to IPs
              strokeWidth={2}
              dot={{
                fill: "var(--color-ip)",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
