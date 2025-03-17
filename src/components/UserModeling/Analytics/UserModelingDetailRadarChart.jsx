import React from "react";
import ReactApexChart from "react-apexcharts";

const UserDetailRadarChart = () => {
  var options = {
    series: [
      {
        name: "Series 1",
        data: [20, 100, 40, 30, 50, 80, 33],
      },
    ],
    chart: {
      height: 280,
      type: "radar",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 120,
        polygons: {
          strokeColors: "#e9e9e9",
          fill: {
            colors: ["#504099", "#504099"], // Set the fill colors for the radar chart
          },
        },
      },
    },
    // title: {
    //   text: "Anomalies Per Week",
    //   style: {
    //     color: "#FAF9FA",
    //     fontFamily: "tahoma",
   
    //   },
    // },
    colors: ["red"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColor: "#FF4560",
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val, i) {
          if (i % 2 === 0) {
            return val;
          } else {
            return "";
          }
        },
      },
    },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={options.series}
        type="radar"
        height={280}
      />
    </div>
  );
};

export default UserDetailRadarChart;
