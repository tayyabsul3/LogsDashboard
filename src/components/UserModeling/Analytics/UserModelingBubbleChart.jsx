import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function UserRiskScoreBubbleChart() {
  // Static data for users with risk scores and other metrics
  const userData = [
    { name: "User1", logs: 120, alerts: 5, riskScore: 190 },
    { name: "User2", logs: 150, alerts: 3, riskScore: 60 },
    { name: "User3", logs: 90, alerts: 8, riskScore: 30 },
    { name: "User4", logs: 200, alerts: 10, riskScore: 80 },
    { name: "User5", logs: 110, alerts: 4, riskScore: 150 },
    { name: "User6", logs: 90, alerts: 18, riskScore: 50 },
    { name: "User7", logs: 200, alerts: 10, riskScore: 80 },
    { name: "User8", logs: 110, alerts: 14, riskScore: 190 },
  ];

  const [options, setOptions] = useState(null);
  const [series, setSeries] = useState(null);

  useEffect(() => {
    // Format the user data for the bubble chart
    const formattedData = [
      {
        name: "Users",
        data: userData.map((user) => [user.logs, user.alerts, user.riskScore]), // [X-axis (logs), Y-axis (alerts), bubble size (riskScore)]
      },
    ];

    // Set the chart options and series
    setOptions({
      chart: {
        height: 350,
        type: "bubble",
      },
      
      xaxis: {
        title: {
          text: "Number of Logs",
          style: {
            color: "white", // Set X-axis title color to white
          },
        },
        labels: {
          style: {
            colors: "white", // Set X-axis labels color to white
          },
        },
        tickAmount: 12,
        
      },
      yaxis: {
        title: {
          text: "Severity of Alerts",
          style: {
            color: "white", // Set Y-axis title color to white
          },
        },
        labels: {
          style: {
            colors: "white", // Set Y-axis labels color to white
          },
        },
        max: 15, // Set a reasonable maximum based on your data
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return value + " alerts";
          },
        },
        x: {
          formatter: function (value) {
            return value + " logs";
          },
        },
        z: {
          formatter: function (value) {
            return "Risk Score: " + value;
          },
        },
      },
    });

    // Set the formatted series data
    setSeries(formattedData);
  }, []);

  return (
    <div id="chart">
      {/* Render the chart only after the data and options are ready */}
      {options && series && (
        <ReactApexChart options={options} series={series} type="bubble" height={300} />
      )}
    </div>
  );
}

export default UserRiskScoreBubbleChart;
