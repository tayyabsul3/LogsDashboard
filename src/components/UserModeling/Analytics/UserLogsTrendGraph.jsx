import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";

const UserLogsTrendChart = (props) => {
  // Calculate min and max timestamps for the x-axis based on the logs data
  const timestamps = props.logsTrend.map(item => item[0]);
  const minTime = Math.min(...timestamps);
  const maxTime = Math.max(...timestamps);

  const [options, setOptions] = useState({
    series: [
      {
        data: props.logsTrend
      },
    ],
    chart: {
      id: "area-datetime",
      type: "area",
      height: 350,
      zoom: {
        autoScaleYaxis: true,
        autoScaleXaxis: true,
      },
    },
    annotations: {
      yaxis: [
        {
          y: 30,
          borderColor: "#999",
          label: {
            show: true,
            style: {
              color: "white",
              background: "#00E396",
            },
          },
        },
      ],
      xaxis: [
        {
          x: minTime,
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            text: "Start",
            style: {
              color: "white",
              background: "#775DD0",
            },
          },
        },
        {
          x: maxTime,
          borderColor: "#999",
          yAxisIndex: 0,
          label: {
            show: true,
            text: "End",
            style: {
              color: "white",
              background: "#FF4560",
            },
          },
        },
      ],
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
      style: "hollow",
    },
    xaxis: {
      type: "datetime",
      min: minTime,
      max: maxTime,
      tickAmount: 6,
      labels: {
        style: {
          colors: "white", // Change the color of x-axis labels
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "white", // Change the color of y-axis labels
        },
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return (
          '<div class="arrow_box" style="background-color: #3498db; color: white; padding: 10px; border-radius: 5px;">' +
          "<span>" +
          "Events: " +
          series[seriesIndex][dataPointIndex] +
          "</span>" +
          "</div>"
        );
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 100],
      },
    },
  });

  const handleZoom = (start, end) => {
    setOptions({
      ...options,
      xaxis: {
        ...options.xaxis,
        min: new Date(start).getTime(),
        max: new Date(end).getTime(),
      },
    });
  };

  return (
    <div className="d-flex flex-column">
      <ApexCharts
        options={options}
        series={options.series}
        type="area"
        height={230}
      />
    </div>
  );
};

export default UserLogsTrendChart;
