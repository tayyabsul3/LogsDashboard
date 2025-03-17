import React from 'react';
import ReactApexChart from 'react-apexcharts';

const UserModelingOverviewRiskScoreChart = () => {
  const options = {
    chart: {
      type: 'radialBar',
      height: 266,
      offsetY: 20,
      zoom: {
        enabled: false,
      },
    },
    colors: ['#898121'], // Customize the color as needed, '#FF4560' is a strong red that suits risk representation
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            show: true, // Set to true if you want to show 'Risk Score' as the title inside the chart
            fontSize: '16px',
            color: '#FFFFFF',
            offsetY: -10
          },
          value: {
            offsetY: 0,
            fontSize: '22px',
            color: '#FFFFFF',
            formatter: (val) => `${val}%`, // Adds a '%' symbol to indicate a percentage score
          }
        },
        hollow: {
          size: '60%', // Adjust the hollow size as needed
        },
        track: {
          background: '#f0f0f0', // Track color for contrast with the risk score color
        },
      }
    },
    series: [35], // Example risk score; update dynamically based on actual score
    
    legend: {
      show: false, // No legend required as this is a single-metric chart
    },
  };

  return (
    <div id="riskScoreChart" >
      <ReactApexChart options={options} series={options.series} type="radialBar" height={266} />
    </div>
  );
};

export default UserModelingOverviewRiskScoreChart;
