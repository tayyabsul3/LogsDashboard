import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function UserPrivilegeEscalationsDonutChart() {
  // Static data for privilege changes (escalations and revocations)
  const privilegeData = {
    escalated: 55, // Users whose privileges were escalated
    revoked: 45,   // Users whose privileges were revoked
  };

  const [options, setOptions] = useState(null);
  const [series, setSeries] = useState(null);
  
  useEffect(() => {
    // Set the data and chart options after component mounts
    setSeries([privilegeData.escalated, privilegeData.revoked]); // Series data (escalated and revoked counts)

    setOptions({
      chart: {
        type: "donut",
      },
      labels: ["Privileges Escalated", "Privileges Revoked"], // Labels for the donut chart
      title: {
        text: "Top Privilege Escalations",
        style: {
          color: "white", // Set the title color to white (if needed for dark backgrounds)
        },
      },
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
      legend: {
        position: "right",
        labels: {
          colors: "white", // Change legend text to white (optional)
        },
      },
      dataLabels: {
        enabled: true, // Enable data labels to show percentages
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function (value) {
            return value + " users"; // Format tooltip with the number of users
          },
        },
      },
      fill: {
        type: "gradient",
      },
    });
  }, []); // Empty dependency array to run only once after mounting

  return (
    <div id="chart">
      {/* Render the chart only after options and series are set */}
      {options && series && (
        <ReactApexChart options={options} series={series} type="donut" height={350} />
      )}
    </div>
  );
}

export default UserPrivilegeEscalationsDonutChart;
