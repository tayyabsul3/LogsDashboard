import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

function UserDetailDonutChart() {
  const desktopData = [
    { name: "Desktop 1", events: 44 },
    { name: "Desktop 2", events: 55 },
    { name: "Desktop 3", events: 41 },
  ];

  const seriesData = desktopData.map((desktop) => desktop.events);

  const [state, setState] = useState({
    series: seriesData,
    options: {
      chart: {
        width: 300,
        type: "donut",
        foreColor: "#ccc",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          donut: {
            size: "60%",
          },
          // expandOnClick: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#255aee",
          shadeTo: "dark",
          shadeIntensity: 0.65,
        },
      },
      legend: {
        formatter: function (val, opts) {
          const desktop = desktopData[opts.seriesIndex];
          return `${desktop.name} - ${desktop.events}`;
        },
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (value) {
            return value + " events";
          },
        },
        marker: {
          show: false,
        },
        // Display desktop name in the tooltip
        custom: function ({ seriesIndex, dataPointIndex, w }) {
          const desktop = desktopData[seriesIndex];
          return `<div style="background-color: #451952; color: white; padding: 8px; border-radius: 5px; text-align: left;">${desktop.name}</div>`;
        },
      },
      // title: {
      //   text: "Alerts Categories",
      //   style: {
      //     fontSize: "22px",
      //     fontWeight: "500",
      //   },
      // },

      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        width={320}
        // height={290}
      />
    </div>
  );
}

export default UserDetailDonutChart;
