import React from 'react'
import { filterStateWiseData } from '../Utils/filterFunctions';
import Plot from 'react-plotly.js';

function OverallData({ data }) {

    const overalldata = filterStateWiseData(data);
    console.log("overall data", overalldata);
    return (
        <div>
            <Plot
                data={Object.keys(overalldata).map(el => {
                    return {
                        x: [el],
                        y: [overalldata[el].deaths + overalldata[el].cases + overalldata[el].recoveries],
                        type: 'bar',
                        name: 'Total reports',
                        marker: {
                            color: '#1f78b4', // Blue color for New Cases bar
                        },
                    }
                })}
                layout={{
                    title: 'Overall Data',
                    barmode: 'stack', // Stacked bar chart
                    height: 400,
                    width: 500,
                    xaxis: {
                        title: 'Metrics',
                    },
                    yaxis: {
                        title: 'Count',
                    },
                }}
            />

        </div>
    )
}

export default OverallData