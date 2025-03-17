import React from "react";
import ReactApexChart from "react-apexcharts";

const UserBehaviorRadialChart = () => {
  const options = {
    chart: {
      type: "radialBar",
      height: 350,
      width: 380,
    },
    plotOptions: {
      radialBar: {
        inverseOrder: true,
        hollow: {
          margin: 5,
          size: "48%", // Hollow size in the center
          background: "transparent",
        },
        track: {
          show: false, // Hide the track for a cleaner look
        },
        startAngle: -180,
        endAngle: 180,
        dataLabels: {
          name: {
            fontSize: "12px",
            color: "#ffffff",
            offsetY: -5,
          },
          value: {
            fontSize: "12px",
            color: "#ffffff",
            offsetY: -5,
          },
        },
      },
    },
    fill: {
      type: "gradient", // Enable gradient colors
      gradient: {
        shade: "dark",
        type: "vertical",
        gradientToColors: ["#004aad","#66a6ff", "#007aff", ], // Gradient blue colors
        stops: [0, 50, 100],
      },
    },
    stroke: {
      lineCap: "round", // Rounded end caps for the radial bars
    },
    series: [80, 65, 75], // Example data reflecting user behavior metrics
    labels: ["Login Attempts", "Privilege Escalations", "Suspicious Activities"],
    legend: {
      show: true,
      floating: true,
      position: "right",
      offsetX: -30,
      offsetY: 200,
      labels: {
        colors: "#ffffff", // White color for legend text
      },
      markers: {
        width: 10,
        height: 10,
        radius: 12, // Smaller markers for legend
      },
    },
  };

  return (
    <div id="radialBarBottom" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80%", width: "100%" }}>
      <ReactApexChart options={options} series={options.series} type="radialBar" height={300} />
    </div>
  );
};

export default UserBehaviorRadialChart;
