import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

function UserModelingDonutChart() {
  const desktopData = [
    { name: "DCIM-65UK", events: 44 },
    { name: "TKUIOQ-23H", events: 55 },
    { name: "KTE12U-921YTK", events: 25 },
    { name: "Web-IM65UK", events: 84 },
    { name: "DDIOQS-981VT", events: 10 },
    { name: "QUB-15VT", events: 20 },
  ];

  const seriesData = desktopData.map((desktop) => desktop.events);

  const [state, setState] = useState(null); // Initially set state to null
  const [isMounted, setIsMounted] = useState(false); // To track if the component is ready to render

  useEffect(() => {
    // Set a 2-second delay before rendering the chart
    const timer = setTimeout(() => {
      setState({
        series: seriesData,
        options: {
          chart: {
            width: 280,
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
            custom: function ({ seriesIndex }) {
              const desktop = desktopData[seriesIndex];
              return `<div style="background-color: #451952; color: white; padding: 8px; border-radius: 5px; text-align: left;">${desktop.name}</div>`;
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
        },
      });

      // Set mounted flag to true after state is set
      setIsMounted(true);
    }, 2000); // 2-second delay

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Only render the chart after the 2-second delay and when state is set */}
      {isMounted && state && (
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="donut"
          width={160}
          height={250}
        />
      )}
    </div>
  );
}

export default UserModelingDonutChart;
