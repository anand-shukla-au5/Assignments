import React from 'react'
import Plot from 'react-plotly.js';
import { filterCaseWiseData } from '../Utils/filterFunctions'
function PieChartCasewise({ data }) {

    const caseWiseData = filterCaseWiseData(data);
    console.log('caseWise', caseWiseData);
    return (
        <div>
            <Plot
                data={[
                    {
                        values: [caseWiseData.cases, caseWiseData.recoveries, caseWiseData.deaths],
                        labels: ['Cases', 'Recoveries', 'Deaths'],
                        type: 'pie',
                        marker: {
                            colors: ['#a262a9', '#9999ff', '#182844'], // Blue, Green, Red colors for the pie chart slices
                        },
                    }
                ]}
                layout={{
                    title: 'Case-wise Data',
                    height: 400,
                    width: 500,
                }}
            />
        </div>
    )
}

export default PieChartCasewise