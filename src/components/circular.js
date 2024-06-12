import React from 'react';
import Chart from 'react-apexcharts';

const CourseProgress = ({ percentage }) => {
    const options = {
        chart: {
            type: 'radialBar',
            height: '350',
            sparkline: {
                enabled: true
            },
            animations: {
                enabled: true,
                speed: 4500, // Animation speed in milliseconds
                dynamicAnimation: {
                    enabled: true,
                    speed: 4000 // Dynamic animation speed in milliseconds
                }
            }
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%'
                },
                dataLabels: {
                    name: {
                        show: true
                    },
                    value: {
                        offsetY: 15,
                        fontSize: '22px',
                        color: '#FFFFFF',
                        formatter: function (val) {
                            return val + '%';
                        }
                    },
                    // Add padding to the label
                    padding: {
                        top: 20,
                        bottom: 20
                    }
                }
            }
        },
        colors: ['#FFA500'],
        labels: ['NxtWave Academy'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'vertical',
                shadeIntensity: 0.5,
                gradientToColors: ['#FFA500'],
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            lineCap: 'round'
        },
        series: [percentage]
    };

    return (
        <div>
            <Chart options={options} series={options.series} type="radialBar" height="350" />
        </div>
    );
};

export default CourseProgress;
