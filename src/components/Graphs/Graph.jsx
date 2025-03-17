import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

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
  { month: "January", desktop: 100, mobile: 500 },
  { month: "February", desktop: 300, mobile: 300 },
  { month: "March", desktop: 237, mobile: 150 },
  { month: "April", desktop: 403, mobile: 190 },
  { month: "May", desktop: 329, mobile: 150 },
  { month: "June", desktop: 214, mobile: 440 },
  { month: "July", desktop: 122, mobile: 170 },
  { month: "August", desktop: 185, mobile: 120 },
  { month: "September", desktop: 435, mobile: 140 },
  { month: "October", desktop: 560, mobile: 440 },
  { month: "November", desktop: 125, mobile: 420 },
  { month: "December", desktop: 135, mobile: 120 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "black",
  },
  mobile: {
    label: "Mobile",
    color: "white",
  },
};

export function Graph() {
  return (
    <Card className="w-full border-none  linear_g_1   rounded-3xl bg-blue-900 text-white">
      <CardHeader>
        <CardTitle className="text-lg font-normal">Files in time</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="w-full sm:w-full md:h-[250px] text-white"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="gradientMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0075FF" />
                <stop offset="100%" stopColor="rgba(0, 117, 255, 0)" />
              </linearGradient>
              <linearGradient id="gradientDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(4, 209, 255)" />
                <stop offset="100%" stopColor="rgba(44, 217, 255, 0)" />
              </linearGradient>
            </defs>
            <CartesianGrid
              vertical={false}
              horizontal={true}
              strokeDasharray="3 3" // Make the lines dotted
              stroke="gray"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={8}
              tick={{ fill: "white" }} // Change X-axis label color
              tickFormatter={(value) => value.slice(0, 3)}
              className=""
            />
            <YAxis
              tickMargin={8}
              tickLine={false}
              tickCount={6}
              domain={[0, 600]}
              tick={{ fill: "white" }} // Change Y-axis label color
            />
            <LabelList className="fill-white" />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#gradientMobile)"
              fillOpacity={0.4}
              stroke="rgba(0, 117, 255, 1)"
              strokeWidth={3}
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#gradientDesktop)"
              fillOpacity={0.3}
              stroke="rgba(44, 217, 255, 1)"
              strokeWidth={3}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
