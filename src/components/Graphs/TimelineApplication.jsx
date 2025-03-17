// import React from "react";
// import { Chart } from "react-google-charts";

import { useState } from "react";
import ReactApexChart from "react-apexcharts";

// export function TimelineApplication() {
//   const columns = [
//     { type: "string", id: "President" },
//     { type: "date", id: "Start" },
//     { type: "date", id: "End" },
//   ];

//   const rows = [
//     ["Washington", new Date(1789, 3, 30), new Date(1797, 2, 4)],
//     ["Adams", new Date(1797, 2, 4), new Date(1801, 2, 4)],
//     ["Jefferson", new Date(1801, 2, 4), new Date(1809, 2, 4)],
//   ];

//   const data = [columns, ...rows];

//   const options = {
//     timeline: {
//       colorByRowLabel: true, // Color bars by the row label (e.g., President's name)
//     },
//     chartArea: {
//       width: "80%", // Adjust the width of the chart's content area
//       height: "80%", // Adjust the height of the content area
//     },
//     fontName: "Roboto",

//     backgroundColor: {
//       fill: "#1e2852",
//     }, // Make the chart background transparent
//     hAxis: {
//       textStyle: {
//         color: "#fff", // Set horizontal axis text color
//       },
//     },
//     vAxis: {
//       textStyle: {
//         color: "#fff", // Set vertical axis text color
//       },
//     },
//     tooltip: {
//       trigger: "focus", // Tooltip trigger behavior
//     },

//     // Additional customization can be done based on your needs.
//   };

//   return (
//     <div className="flex w-full px-10 pt-5  justify-center items-center">
//       <Chart
//         chartType="Timeline"
//         data={data}
// style={{

// }}
//         options={options}
//         width="100%"
//         height="100%"
//         // If you're using tailwind CSS
//       />
//     </div>
//   );
// }

export function TimelineApplication() {
  const [state, setState] = useState({
    series: [
      {
        data: [
          {
            x: "Code",
            y: [
              new Date("2019-03-02").getTime(),
              new Date("2019-03-04").getTime(),
            ],
          },
          {
            x: "Test",
            y: [
              new Date("2019-03-04").getTime(),
              new Date("2019-03-08").getTime(),
            ],
          },
          {
            x: "Validation",
            y: [
              new Date("2019-03-08").getTime(),
              new Date("2019-03-12").getTime(),
            ],
          },
          {
            x: "Deployment",
            y: [
              new Date("2019-03-12").getTime(),
              new Date("2019-03-18").getTime(),
            ],
          },
        ],
      },
    ],
    options: {
      chart: {
        height: 250,
        width: "100%",

        type: "rangeBar",
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },
      },
      xaxis: {
        type: "datetime",
      },
    },
  });

  return (
    <div className=" w-full p-5 text-black">
      <div id="chart" className=" w-full">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="rangeBar"
          height={250}
          width={"100%"}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
