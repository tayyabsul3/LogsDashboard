import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function UserModelingSuspiciousUser() {
  // Static data for the top 5 suspicious users
  const suspiciousUserData = [
    { name: "User1", alerts: 95 },
    { name: "User2", alerts: 85 },
    { name: "User3", alerts: 75 },
    { name: "User4", alerts: 65 },
    { name: "User5", alerts: 55 },
  ];

  const [options, setOptions] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    // Set up series data based on suspiciousUserData
    setSeries([{ data: suspiciousUserData.map((user) => user.alerts) }]); // Number of alerts

    setOptions({
      chart: {
        type: "bar",
        height: 250,
        events: {
          // Placeholder click event for each bar
          dataPointSelection: function (event, chartContext, config) {
            const selectedUser = suspiciousUserData[config.dataPointIndex];
            alert(`Drill down into details for ${selectedUser.name}`);
          },
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ffffff"], // End color of the gradient
          inverseColors: false,
          opacityFrom: 0.9,
          opacityTo: 0.4,
          stops: [0, 100],
          colorStops: [
            {
              offset: 0,
              color: "#C285FF",
              opacity: 1,
            },
            {
              offset: 100,
              color: "#ffffff",
              opacity: 0.8,
            },
          ],
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: suspiciousUserData.map((user) => user.name), // User names as categories
        title: {
          text: "Number of Alerts",
          style: {
            color: "white", // Set text color to white
          },
        },
        labels: {
          style: {
            colors: "white", // Set label color to white
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "white", // Set Y-axis label color to white
          },
        },
      },
      
      tooltip: {
        y: {
          formatter: function (value) {
            return value + " alerts"; // Display number of alerts in tooltip
          },
        },
      },
    });
  }, []); // Run only once after mounting

  return (
    <div id="chart">
      {/* Render the chart only after options and series are set */}
      {options && series && (
        <ReactApexChart options={options} series={series} type="bar" height={250}/>
      )}
    </div>
  );
}

export default UserModelingSuspiciousUser;
