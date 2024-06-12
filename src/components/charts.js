import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { Card } from 'antd';

const AcademicsChart = () => {
    const data = [
        { grade: '10th Grade (2017)', percentage: 97 },
        { grade: 'Intermediate (2017-19)', percentage: 75 },
        { grade: 'B.Tech (2019-23)', percentage: 85 },
    ];

    const [animationCount, setAnimationCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAnimationCount(animationCount + 1);
        }, 10000);

        // Add event listener to disable context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        return () => {
            
            document.removeEventListener('contextmenu', (e) => {
                e.preventDefault();
            });
        };
    }, [animationCount]);

    const chartOptions = {
        chart: {
            type: 'bar',
            animations: {
                enabled: true,
                easing: 'easeinout',
                speed: 3500,
                dynamicAnimation: {
                    enabled: true,
                    speed: 3500
                }
            },
            toolbar: {
                show: false // Hides the toolbar
            },
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
            },
        },
        xaxis: {
            categories: data.map(item => item.grade),
            labels: {
                style: {
                    colors: 'orange' // X-axis labels color
                }
            },
            axisBorder: {
                show: false // Removes the x-axis border line
            },
            axisTicks: {
                show: false // Removes the x-axis ticks
            }
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return value + "%";
                },
                style: {
                    colors: 'orange' // Y-axis labels color
                }
            },
            axisBorder: {
                show: true,
                color: "yellow" // Removes the y-axis border line
            },
            axisTicks: {
                show: true // Removes the y-axis ticks
            }
        },
        grid: {
            show: false // Removes the grid lines
        },
        colors: ['#f39c12', '#e74c3c', '#2ecc71'],
        dataLabels: {
            enabled: true,
            formatter: function (val) {
                return val + "%";
            },
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: function (val) {
                    return val + "%";
                },
            },
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    height: 300
                },
            },
        }],
    };

    const chartSeries = [{
        data: data.map(item => item.percentage),
    }];

    return (
        <div style={{ maxWidth: '100%', margin: '0 auto', padding: '20px' }}>
            <Card
                title="Academics"
                style={{
                    width: '100%',
                    borderRadius: '0px 10px opx 10px',
                    boxShadow: '0 0 10px rgba(0,0,0,0.9)',
                    backgroundColor: 'black',
                    color: 'orange',
                }}
                headStyle={{
                    textAlign: 'center',
                    fontSize: '24px',
                    fontFamily: 'Arial, sans-serif',
                    color: 'orange',
                    backgroundColor: 'black'
                }}
                bodyStyle={{ padding: '20px' }}
            >
                <Chart
                    options={chartOptions}
                    series={chartSeries}
                    type="bar"
                    height="350"
                // Key to force re-render and restart animation
                />
            </Card>
        </div>
    );
};

export default AcademicsChart;
