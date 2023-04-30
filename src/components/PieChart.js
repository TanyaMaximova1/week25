import React from 'react'
import {Pie} from 'react-chartjs-2';

const PieChart = () => {
    return <div>
        <Pie
                type="pie"
                width={130}
                height={50}
                options={{
                title: {
                    display: true,
                    text: "COVID-19 Cases of Last 3 Months",
                    fontSize: 15
                },
                legend: {
                  display: true, //Is the legend shown?
                  position: "top" //Position of the legend.
                }
                }}
                data={pieChartData}
        />
    </div>
    }

    export default PieChart;